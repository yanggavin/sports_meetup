Page({
  data: {
    user: {
      avatar: '/assets/user-avatar.png',
      name: 'Alex Johnson',
      bio: 'Lover of all things outdoors. San Francisco, CA.',
      stats: {
        joinedActivities: 15,
        clubs: 8,
        friends: 27
      },
      favoriteSports: [
        { name: 'Badminton', icon: '🏸', count: 12 },
        { name: 'Soccer', icon: '⚽', count: 8 },
        { name: 'Basketball', icon: '🏀', count: 5 },
        { name: 'Running', icon: '🏃', count: 3 }
      ],
      organizedEvents: [
        {
          id: 'e1',
          title: 'Golden Gate Park Run',
          icon: '🏃',
          date: 'Sat, Oct 28',
          time: '9:00 AM'
        },
        {
          id: 'e2',
          title: 'Mission Peak Sunrise Hike',
          icon: '🥾',
          date: 'Sun, Nov 5',
          time: '6:00 AM'
        }
      ],
      joinedClubs: [
        {
          id: 'c1',
          name: 'Bay Area Soccer Crew',
          icon: '⚽',
          members: 124
        },
        {
          id: 'c2',
          name: 'SF Hoops Collective',
          icon: '🏀',
          members: 88
        },
        {
          id: 'c3',
          name: 'Peninsula Tennis Group',
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
