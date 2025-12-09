Page({
  data: {
    club: {
      id: '',
      name: '',
      tagline: '',
      location: '',
      members: 0,
      upcomingEvents: 0,
      description: '',
      images: [],
      currentImageIndex: 0,
      avatar: '',
      events: [],
      joined: false
    }
  },
  onLoad(query) {
    const id = query.id || 'c1'
    const sampleClubs = {
      c1: {
        id: 'c1',
        name: '城市羽球爱好者',
        tagline: 'Serve · Smash · Connect',
        location: '上海 · 徐汇',
        members: 150,
        upcomingEvents: 6,
        description: '友好的羽球社群，欢迎从入门到高手的每一位球友。我们每周都有社交球局、训练营和小型友谊赛，提供陪练与分组对抗，帮助大家提升球技、结交伙伴。',
        images: [
          'https://images.unsplash.com/photo-1508609349937-5ec4ae374ebf?w=1200',
          'https://images.unsplash.com/photo-1574629173115-1c0931a9b5ba?w=1200',
          'https://images.unsplash.com/photo-1500482176473-cc0bbfd06a1d?w=1200',
          'https://images.unsplash.com/photo-1521412644187-c49fa049e84d?w=1200'
        ],
        currentImageIndex: 0,
        avatar: 'https://dummyimage.com/300x300/f6f7f8/2f85ee&text=Badminton',
        events: [
          {
            id: 'e1',
            title: '周六社交球局',
            date: '12月14日',
            time: '19:00',
            location: '徐汇体育中心'
          },
          {
            id: 'e2',
            title: '入门训练营',
            date: '12月15日',
            time: '10:00',
            location: '静安体育馆'
          },
          {
            id: 'e3',
            title: '双打迷你赛',
            date: '12月21日',
            time: '14:00',
            location: '卢湾羽毛球馆'
          }
        ],
        joined: false
      },
      c2: {
        id: 'c2',
        name: '中心网球社',
        tagline: 'Play Hard · Have Fun',
        location: '城市体育公园',
        members: 120,
        upcomingEvents: 3,
        description: '欢迎所有水平的球友加入，每周固定双打练习与友谊赛。',
        images: [
          'https://images.unsplash.com/photo-1517467139951-f5a925c9f9de?w=1200',
          'https://images.unsplash.com/photo-1502904550040-7534597429ae?w=1200'
        ],
        currentImageIndex: 0,
        avatar: 'https://dummyimage.com/300x300/f6f7f8/2f85ee&text=Tennis',
        events: [
          {
            id: 'e4',
            title: '周日双打局',
            date: '12月22日',
            time: '09:00',
            location: '城市网球场'
          }
        ],
        joined: true
      }
    }
    this.setData({ club: sampleClubs[id] || sampleClubs.c1 })
  },
  onImageChange(e) {
    this.setData({
      'club.currentImageIndex': e.detail.current
    })
  },
  onJoinClub() {
    const club = this.data.club
    const joined = !club.joined
    const members = joined ? club.members + 1 : club.members - 1
    this.setData({
      'club.joined': joined,
      'club.members': members
    })
    wx.showToast({ title: joined ? '已加入俱乐部' : '已退出俱乐部', icon: 'none' })
  },
  onMessageAdmin() {
    wx.navigateTo({ url: '/pages/messages/thread?id=club-admin' })
  },
  onEventTap(e) {
    const eventId = e.currentTarget.dataset.id
    wx.navigateTo({ url: `/pages/events/detail?id=${eventId}` })
  },
  onBack() {
    wx.navigateBack()
  },
  onShare() {
    wx.showShareMenu({ withShareTicket: false })
    wx.showToast({ title: 'Share club', icon: 'none' })
  }
})
