Page({
  data: {
    clubs: [
      {
        id: 'c1',
        name: '日出跑团',
        description: '清晨 5 公里晨跑，适合所有水平。',
        location: '世纪公园',
        members: 85,
        events: 2,
        avatar: 'https://dummyimage.com/200x200/f6f7f8/2f85ee&text=Run',
        joined: false
      },
      {
        id: 'c2',
        name: '中心网球社',
        description: '周末双打 + 友谊赛，欢迎新手。',
        location: '城市体育公园',
        members: 120,
        events: 3,
        avatar: 'https://dummyimage.com/200x200/f6f7f8/2f85ee&text=Tennis',
        joined: true
      },
      {
        id: 'c3',
        name: '城市篮球联盟',
        description: '每周 5v5 野球，组队对抗。',
        location: '市民体育中心',
        members: 45,
        events: 5,
        avatar: 'https://dummyimage.com/200x200/f6f7f8/2f85ee&text=Hoops',
        joined: false
      },
      {
        id: 'c4',
        name: '周末骑行队',
        description: '城市环骑 + 咖啡打卡。',
        location: '滨江步道',
        members: 210,
        events: 1,
        avatar: 'https://dummyimage.com/200x200/f6f7f8/2f85ee&text=Ride',
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
    const joined = !this.data.clubs.find(c => c.id === id)?.joined
    wx.showToast({ title: joined ? '已加入俱乐部' : '已退出', icon: 'success' })
  }
})
