const { getEvents } = require('../../services/api');

Page({
  data: {
    sportFilters: [
      { name: '全部', icon: '🏅', selected: true },
      { name: '羽毛球', icon: '🏸', selected: false },
      { name: '跑步', icon: '🏃', selected: false },
      { name: '骑行', icon: '🚴', selected: false },
      { name: '登山', icon: '🥾', selected: false },
      { name: '更多', icon: '➕', selected: false }
    ],
    dateFilters: [
      { name: '全部', selected: true },
      { name: '周一', selected: false },
      { name: '周二', selected: false },
      { name: '周三', selected: false },
      { name: '周四', selected: false },
      { name: '周五', selected: false },
      { name: '周六', selected: false },
      { name: '周日', selected: false },
      { name: '下周', selected: false }
    ],
    allEvents: [], // Store all events
    events: [], // Filtered events
    loading: true,
    selectedSportFilter: '全部',
    selectedDateFilter: '全部'
  },
  onLoad() {
    this.fetchEvents();
  },
  fetchEvents() {
    this.setData({ loading: true });
    getEvents().then(events => {
      const decoratedEvents = events.map(ev => this.decorateEvent(ev));
      this.setData({
        allEvents: decoratedEvents,
        events: decoratedEvents,
        loading: false
      });
    });
  },

  onSearchTap() {
    wx.showToast({ title: '搜索即将上线', icon: 'none' })
  },
  onSportSelect(e) {
    const i = e.currentTarget.dataset.index
    const sports = this.data.sportFilters.map((s, idx) => ({ ...s, selected: idx === i }))
    this.setData({ sportFilters: sports })
    const selected = sports[i].name
    
    if (selected === '更多') {
      wx.showToast({ title: '更多运动类型即将上线', icon: 'none' })
      return
    }
    
    this.setData({ selectedSportFilter: selected })
    this.applyFilters()
  },
  onDateSelect(e) {
    const i = e.currentTarget.dataset.index
    const dates = this.data.dateFilters.map((d, idx) => ({ ...d, selected: idx === i }))
    this.setData({ dateFilters: dates })
    const selected = dates[i].name
    
    this.setData({ selectedDateFilter: selected })
    this.applyFilters()
  },
  applyFilters() {
    const { allEvents, selectedSportFilter, selectedDateFilter } = this.data
    
    let filtered = allEvents
    
    // Apply sport filter
    if (selectedSportFilter !== '全部') {
      filtered = filtered.filter(event => event.sportType === selectedSportFilter)
    }
    
    // Apply date filter
    if (selectedDateFilter !== '全部' && selectedDateFilter !== '下周') {
      filtered = filtered.filter(event => event.dayOfWeek === selectedDateFilter)
    }
    
    this.setData({ events: filtered })
    
    const count = filtered.length
    const filterMsg = selectedSportFilter === '全部' && selectedDateFilter === '全部' 
      ? '显示所有活动'
      : `找到 ${count} 个活动`
    
    wx.showToast({ title: filterMsg, icon: 'none', duration: 1000 })
  },
  onJoinTap(e) {
    const id = e.currentTarget.dataset.id
    const target = this.data.events.find(ev => ev.id === id)
    if (!target) return
    if (!target.joined && (target.status !== 'active' || target.disableJoin)) {
      const toastText = target.status !== 'active' ? '活动不可报名' : '活动已满'
      wx.showToast({ title: toastText, icon: 'none' })
      return
    }

    const events = this.data.events.map(ev => {
      if (ev.id !== id) return ev
      const joined = !ev.joined
      const participants = joined ? Math.min(ev.maxParticipants, ev.participants + 1) : Math.max(ev.participants - 1, 0)
      return this.decorateEvent({ ...ev, joined, participants })
    })

    this.setData({ events })
    wx.showToast({ title: target.joined ? '已退出活动' : '已成功加入活动', icon: 'success' })
  },
  onViewDetail(e) {
    const id = e.currentTarget.dataset.id
    wx.navigateTo({ url: `/pages/events/detail?id=${id}` })
  },
  onPullDownRefresh() {
    setTimeout(() => {
      wx.stopPullDownRefresh()
      wx.showToast({ title: '已刷新', icon: 'none' })
    }, 600)
  },
  onReachBottom() {
    const more = {
      id: 'e' + (this.data.events.length + 1),
      title: '新活动预告',
      clubName: '运动达人社',
      dateTime: '12月18日 19:00',
      location: '市体育馆',
      participants: 0,
      maxParticipants: 10,
      organizer: '王五',
      joined: false,
      sportIcon: '🏀',
      status: 'active'
    }
    this.setData({ events: this.data.events.concat(this.decorateEvent(more)) })
  },
  decorateEvent(ev) {
    const remaining = ev.maxParticipants - ev.participants
    let statusLabel = ''
    let statusClass = 'status-open'
    let disableJoin = false

    if (ev.status === 'cancelled') {
      statusLabel = '已取消'
      statusClass = 'status-cancelled'
      disableJoin = true
    } else if (ev.status === 'completed') {
      statusLabel = '已结束'
      statusClass = 'status-cancelled'
      disableJoin = true
    } else if (remaining <= 0) {
      statusLabel = '已满'
      statusClass = 'status-full'
      disableJoin = true
    } else {
      statusLabel = `剩余${remaining}个名额`
      statusClass = 'status-open'
    }

    return { ...ev, statusLabel, statusClass, disableJoin }
  }
})
