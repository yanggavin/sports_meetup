Page({
  data: {
    event: {
      id: '',
      title: '',
      clubName: '',
      dateTime: '',
      location: '',
      address: '',
      participants: 0,
      maxParticipants: 0,
      organizer: '',
      organizerAvatar: '',
      sportIcon: '',
      image: '',
      description: '',
      joined: false,
      isOrganizer: false,
      participantAvatars: []
    }
  },
  onLoad(query) {
    const id = query.id || 'e1'
    const sample = {
      e1: {
        id: 'e1',
        title: 'Weekly 5v5 Basketball Pickup',
        clubName: 'Downtown Hoopers',
        dateTime: 'Wed, Dec 18, 7:00 PM - 9:00 PM',
        location: 'City Sports Complex - Court 3',
        address: '123 Sports Avenue, Metropark',
        participants: 12,
        maxParticipants: 20,
        organizer: 'Alex Morgan',
        organizerAvatar: '/assets/avatar1.png',
        sportIcon: '🏀',
        image: '/assets/basketball-court.jpg',
        description: 'Join us for a friendly but competitive 5v5 pickup basketball game. All skill levels are welcome! We\'ll play a series of short games to 11. Please bring a white and a dark shirt to help us form teams easily. See you on the court!',
        joined: false,
        isOrganizer: true,
        participantAvatars: ['/assets/avatar1.png', '/assets/avatar2.png', '/assets/avatar3.png', '/assets/avatar4.png']
      },
      e2: {
        id: 'e2',
        title: 'Morning Tennis Match',
        clubName: 'Weekend Warriors Club',
        dateTime: 'Sun, Oct 27 • 9:00 AM',
        location: 'Sunset Rec Center',
        address: '456 Tennis Road',
        participants: 4,
        maxParticipants: 4,
        organizer: 'Sarah K.',
        organizerAvatar: '/assets/avatar2.png',
        sportIcon: '🎾',
        image: '/assets/tennis-court.jpg',
        description: 'Friendly doubles tennis match. All levels welcome!',
        joined: true,
        isOrganizer: false,
        participantAvatars: ['/assets/avatar1.png', '/assets/avatar2.png']
      }
    }
    this.setData({ event: sample[id] || sample.e1 })
  },
  onBack() {
    wx.navigateBack()
  },
  onJoin() {
    const ev = this.data.event
    const joined = !ev.joined
    const participants = joined ? ev.participants + 1 : Math.max(ev.participants - 1, 0)
    this.setData({ event: { ...ev, joined, participants } })
    wx.showToast({ title: joined ? 'Successfully joined!' : 'Left the event', icon: 'none' })
  },
  onShare() {
    wx.showShareMenu({ withShareTicket: false })
    wx.showToast({ title: 'Share event', icon: 'none' })
  },
  onMessageOrganizer() {
    wx.showToast({ title: 'Opening chat...', icon: 'none' })
  },
  onOpenMap() {
    wx.showToast({ title: 'Opening map...', icon: 'none' })
  },
  onViewAllParticipants() {
    wx.showToast({ title: 'View all participants', icon: 'none' })
  },
  onEditEvent() {
    wx.showToast({ title: 'Edit event', icon: 'none' })
  },
  onCancelEvent() {
    wx.showModal({
      title: 'Cancel Event',
      content: 'Are you sure you want to cancel this event?',
      success: (res) => {
        if (res.confirm) {
          wx.showToast({ title: 'Event cancelled', icon: 'none' })
        }
      }
    })
  },
  onBroadcast() {
    wx.showToast({ title: 'Send notification to all participants', icon: 'none' })
  }
})
