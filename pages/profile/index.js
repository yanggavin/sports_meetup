Page({
  data: {
    user: {
      avatar: 'https://dummyimage.com/240x240/f6f7f8/2f85ee&text=ME',
      name: 'Alex Chen',
      bio: '运动爱好者 · 上海',
      stats: {
        joinedActivities: 15,
        clubs: 8,
        friends: 27
      },
      favoriteSports: [
        { name: '羽毛球', icon: '🏸', count: 12 },
        { name: '足球', icon: '⚽', count: 8 },
        { name: '篮球', icon: '🏀', count: 5 },
        { name: '跑步', icon: '🏃', count: 3 }
      ],
      organizedEvents: [
        {
          id: 'e1',
          title: '滨江 5K 约跑',
          icon: '🏃',
          date: '12月12日',
          time: '19:00'
        },
        {
          id: 'e2',
          title: '周日晨光徒步',
          icon: '🥾',
          date: '12月15日',
          time: '06:00'
        }
      ],
      joinedClubs: [
        {
          id: 'c1',
          name: '湾区足球团',
          icon: '⚽',
          members: 124
        },
        {
          id: 'c2',
          name: '城市篮球联盟',
          icon: '🏀',
          members: 88
        },
        {
          id: 'c3',
          name: '半岛网球群',
          icon: '🎾',
          members: 56
        }
      ]
    }
  },
  onShow() {
    if (typeof this.getTabBar === 'function' && this.getTabBar()) {
      this.getTabBar().setSelected(4)
    }
  },
  onEditProfile() {
    wx.showToast({ title: 'Edit profile', icon: 'none' })
  },
  onSettings() {
    wx.showToast({ title: 'Settings', icon: 'none' })
  },
  onEventTap(e) {
    const id = e.currentTarget.dataset.id
    wx.navigateTo({ url: `/pages/events/detail?id=${id}` })
  },
  onClubTap(e) {
    const id = e.currentTarget.dataset.id
    wx.navigateTo({ url: `/pages/clubs/detail?id=${id}` })
  },
  onViewAllEvents() {
    wx.showToast({ title: 'View all events', icon: 'none' })
  },
  onViewAllClubs() {
    wx.showToast({ title: 'View all clubs', icon: 'none' })
  }
})
