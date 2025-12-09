Page({
  data: {
    sportFilters: [
      { name: 'All', icon: '🏅', selected: true },
      { name: 'Basketball', icon: '🏀', selected: false },
      { name: 'Tennis', icon: '🎾', selected: false },
      { name: 'Running', icon: '🏃', selected: false },
      { name: 'Hiking', icon: '🧗', selected: false }
    ],
    dateFilters: [
      { name: 'Today', selected: true },
      { name: 'Tomorrow', selected: false },
      { name: 'This Weekend', selected: false },
      { name: 'Select Date', selected: false }
    ],
    events: [
      {
        id: 'e1',
        title: 'Weekly 5v5 Basketball Pickup',
        clubName: 'Downtown Hoopers',
        dateTime: 'Sat, Oct 26 • 7:00 PM',
        location: 'City Park Courts',
        participants: 8,
        maxParticipants: 12,
        organizer: 'John D.',
        sportIcon: '🏀',
        joined: false,
        status: 'status-open',
        statusText: 'Open'
      },
      {
        id: 'e2',
        title: 'Morning Tennis Match',
        clubName: 'Weekend Warriors Club',
        dateTime: 'Sun, Oct 27 • 9:00 AM',
        location: 'Sunset Rec Center',
        participants: 4,
        maxParticipants: 4,
        organizer: 'Sarah K.',
        sportIcon: '🎾',
        joined: true,
        status: 'status-full',
        statusText: 'Full'
      },
      {
        id: 'e3',
        title: 'City Trail Run',
        clubName: 'Urban Runners',
        dateTime: 'Sun, Oct 27 • 6:00 PM',
        location: 'Greenway Entrance',
        participants: 15,
        maxParticipants: 20,
        organizer: 'Mike P.',
        sportIcon: '🏃',
        joined: false,
        status: 'status-cancelled',
        statusText: 'Canceled'
      }
    ]
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
    wx.showToast({ title: `筛选：${sports[i].name}`, icon: 'none' })
  },
  onDateSelect(e) {
    const i = e.currentTarget.dataset.index
    const dates = this.data.dateFilters.map((d, idx) => ({ ...d, selected: idx === i }))
    this.setData({ dateFilters: dates })
    wx.showToast({ title: `日期：${dates[i].name}`, icon: 'none' })
  },
  onJoinTap(e) {
    const id = e.currentTarget.dataset.id
    const events = this.data.events.map(ev => {
      if (ev.id === id) {
        const joined = !ev.joined
        const participants = joined ? ev.participants + 1 : Math.max(ev.participants - 1, 0)
        return { ...ev, joined, participants }
      }
      return ev
    })
    this.setData({ events })
    wx.showToast({ title: '操作成功', icon: 'success' })
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
      dateTime: '12月12日 19:00',
      location: '市体育馆',
      participants: 0,
      maxParticipants: 10,
      organizer: '王五',
      joined: false
    }
    this.setData({ events: this.data.events.concat(more) })
  }
})
