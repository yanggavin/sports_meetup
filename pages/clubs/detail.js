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
        name: 'City Badminton Enthusiasts',
        tagline: 'Serve, Smash, Connect!',
        location: 'Shanghai, Xuhui',
        members: 150,
        upcomingEvents: 6,
        description: 'Welcome to the City Badminton Enthusiasts! We are a friendly and active club for players of all skill levels, from complete beginners to advanced competitors. Our mission is to create a fun, supportive environment where everyone can enjoy the game, improve their skills, and connect with fellow badminton lovers. We organize regular weekly social games, training sessions, and friendly tournaments.',
        images: [
          '/assets/badminton1.jpg',
          '/assets/badminton2.jpg',
          '/assets/badminton3.jpg',
          '/assets/badminton4.jpg'
        ],
        currentImageIndex: 0,
        avatar: '/assets/club-badminton.png',
        events: [
          {
            id: 'e1',
            title: 'Weekly Social Game',
            date: 'Sat, 20 Jul',
            time: '7:00 PM',
            location: 'Xuhui Sports Center'
          },
          {
            id: 'e2',
            title: 'Beginner\'s Training Session',
            date: 'Sun, 21 Jul',
            time: '10:00 AM',
            location: 'Jing\'an Gymnasium'
          },
          {
            id: 'e3',
            title: 'Doubles Mini-Tournament',
            date: 'Sat, 27 Jul',
            time: '2:00 PM',
            location: 'Luwan Badminton Hall'
          }
        ],
        joined: false
      },
      c2: {
        id: 'c2',
        name: 'Downtown Tennis Crew',
        tagline: 'Play Hard, Have Fun!',
        location: 'City Courts, SF',
        members: 120,
        upcomingEvents: 3,
        description: 'Join our vibrant tennis community! We welcome players of all levels for friendly matches and competitive league play.',
        images: ['/assets/tennis1.jpg', '/assets/tennis2.jpg'],
        currentImageIndex: 0,
        avatar: '/assets/club-tennis.png',
        events: [
          {
            id: 'e4',
            title: 'Sunday Doubles',
            date: 'Sun, 14 Jul',
            time: '9:00 AM',
            location: 'City Tennis Courts'
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
    wx.showToast({
      title: joined ? 'Successfully joined!' : 'Left the club',
      icon: 'none'
    })
  },
  onMessageAdmin() {
    wx.showToast({ title: 'Opening chat with admin...', icon: 'none' })
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
