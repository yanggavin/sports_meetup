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
    events: [
      {
        id: 'e1',
        title: '周末羽毛球友谊赛',
        clubName: '城市羽球社',
        dateTime: '12月10日 19:30',
        location: '世纪公园羽毛球中心',
        participants: 8,
        maxParticipants: 12,
        organizer: '陈晨',
        sportIcon: '🏸',
        joined: false,
        status: 'active'
      },
      {
        id: 'e2',
        title: '周日清晨城市慢跑',
        clubName: '城市跑团',
        dateTime: '12月11日 06:30',
        location: '滨江绿道集合点',
        participants: 40,
        maxParticipants: 40,
        organizer: '赵敏',
        sportIcon: '🏃',
        joined: true,
        status: 'active'
      },
      {
        id: 'e3',
        title: '周末城市夜骑',
        clubName: '夜骑联盟',
        dateTime: '12月12日 20:00',
        location: '市民广场喷泉旁',
        participants: 15,
        maxParticipants: 20,
        organizer: '李想',
        sportIcon: '🚴',
        joined: false,
        status: 'cancelled'
      },
      {
        id: 'e4',
        title: '冬季徒步体验营',
        clubName: '山野探索俱乐部',
        dateTime: '12月08日 09:00',
        location: '灵山登山口',
        participants: 24,
        maxParticipants: 24,
        organizer: '高远',
        sportIcon: '🥾',
        joined: false,
        status: 'completed'
      }
    ]
  },
  onLoad() {
    this.setData({ events: this.data.events.map(ev => this.decorateEvent(ev)) })
  },
  onShow() {
    if (typeof this.getTabBar === 'function' && this.getTabBar()) {
      this.getTabBar().setSelected(0)
    }
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
    } else {
      wx.showToast({ title: `筛选：${selected}`, icon: 'none' })
    }
  },
  onDateSelect(e) {
    const i = e.currentTarget.dataset.index
    const dates = this.data.dateFilters.map((d, idx) => ({ ...d, selected: idx === i }))
    this.setData({ dateFilters: dates })
    wx.showToast({ title: `日期：${dates[i].name}`, icon: 'none' })
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
