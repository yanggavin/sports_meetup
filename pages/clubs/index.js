Page({
  data: {
    clubs: [
      {
        id: 'c1',
        name: 'Sunrise Runners Club',
        description: 'Morning runs for all skill levels.',
        location: 'Central Park, NYC',
        members: 85,
        events: 2,
        avatar: '/assets/club1.png',
        joined: false
      },
      {
        id: 'c2',
        name: 'Downtown Tennis Crew',
        description: 'Friendly matches and league play.',
        location: 'City Courts, SF',
        members: 120,
        events: 3,
        avatar: '/assets/club2.png',
        joined: true
      },
      {
        id: 'c3',
        name: 'Hoops Collective',
        description: 'Pickup basketball games for all.',
        location: 'Brooklyn Bridge Park',
        members: 45,
        events: 5,
        avatar: '/assets/club3.png',
        joined: false
      },
      {
        id: 'c4',
        name: 'City Cyclists',
        description: 'Weekend rides and coffee stops.',
        location: 'Golden Gate Bridge',
        members: 210,
        events: 1,
        avatar: '/assets/club4.png',
        joined: true
      }
    ]
  },
  onShow() {
    if (typeof this.getTabBar === 'function' && this.getTabBar()) {
      this.getTabBar().setSelected(1)
    }
  },
  onClubTap(e) {
    const id = e.currentTarget.dataset.id
    wx.navigateTo({ url: `/pages/clubs/detail?id=${id}` })
  },
  onJoinClub(e) {
    const id = e.currentTarget.dataset.id
    const clubs = this.data.clubs.map(club => {
      if (club.id === id) {
        return { ...club, joined: !club.joined, members: club.joined ? club.members - 1 : club.members + 1 }
      }
      return club
    })
    this.setData({ clubs })
    wx.showToast({ title: 'Success', icon: 'success' })
  }
})
