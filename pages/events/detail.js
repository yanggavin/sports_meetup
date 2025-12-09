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
      participantAvatars: [],
      status: 'active',
      statusLabel: '',
      statusClass: '',
      disableJoin: false,
      clubName: '',
      clubId: ''
    }
  },
  onLoad(query) {
    const id = query.id || 'e1'
    this.loadEvent(id)
  },
  onBack() {
    wx.navigateBack()
  },
  onJoin() {
    const ev = this.data.event
    if (!ev.joined && (ev.disableJoin || ev.status !== 'active')) {
      wx.showToast({ title: ev.status !== 'active' ? '活动不可报名' : '活动已满', icon: 'none' })
      return
    }

    const joined = !ev.joined
    const participants = joined ? Math.min(ev.maxParticipants, ev.participants + 1) : Math.max(ev.participants - 1, 0)
    const updated = this.decorateEvent({ ...ev, joined, participants })
    this.setData({ event: updated })
    wx.showToast({ title: joined ? '已成功加入活动' : '已退出活动', icon: 'none' })
  },
  onShare() {
    wx.showShareMenu({ withShareTicket: false })
    wx.showToast({ title: '分享活动', icon: 'none' })
  },
  onMessageOrganizer() {
    wx.navigateTo({ url: '/pages/messages/thread?id=organizer' })
  },
  onOpenMap() {
    wx.showToast({ title: '即将打开地图', icon: 'none' })
  },
  onViewAllParticipants() {
    wx.showToast({ title: '查看全部参与者', icon: 'none' })
  },
  onViewClub() {
    if (this.data.event.clubId) {
      wx.navigateTo({ url: `/pages/clubs/detail?id=${this.data.event.clubId}` })
    }
  },
  onEditEvent() {
    wx.showToast({ title: '编辑活动', icon: 'none' })
  },
  onCancelEvent() {
    wx.showModal({
      title: '取消活动',
      content: '确认要取消该活动吗？',
      success: (res) => {
        if (res.confirm) {
          const event = this.decorateEvent({ ...this.data.event, status: 'cancelled' })
          this.setData({ event })
          wx.showToast({ title: '活动已取消', icon: 'none' })
        }
      }
    })
  },
  onBroadcast() {
    wx.showToast({ title: '已向参与者发送通知', icon: 'none' })
  },
  loadEvent(id) {
    const sample = {
      e1: {
        id: 'e1',
        title: '周末羽毛球友谊赛',
        clubName: '城市羽球社',
        clubId: 'c1',
        dateTime: '2025年12月10日 (周六) 19:30–21:30',
        location: '世纪公园羽毛球中心',
        address: '浦东新区花木路 888 号',
        participants: 12,
        maxParticipants: 16,
        organizer: '陈晨',
        organizerAvatar: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=200&h=200&fit=crop',
        sportIcon: '🏸',
        image: 'https://images.unsplash.com/photo-1517649763962-0c623066013b?w=1200',
        description: '友好对抗 + 分组练习，欢迎各水平的羽毛球爱好者。请自带球拍、换洗衣物，提前 10 分钟到场热身。',
        joined: false,
        isOrganizer: true,
        participantAvatars: [
          'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=100&h=100&fit=crop',
          'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?w=100&h=100&fit=crop',
          'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?w=100&h=100&fit=crop',
          'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop'
        ],
        status: 'active'
      },
      e2: {
        id: 'e2',
        title: '滨江夜跑局',
        clubName: '城市跑团',
        clubId: 'c2',
        dateTime: '2025年12月11日 (周日) 19:00–20:30',
        location: '滨江绿道集合点',
        address: '世纪大道 2000 号',
        participants: 40,
        maxParticipants: 40,
        organizer: '赵敏',
        organizerAvatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop',
        sportIcon: '🏃',
        image: 'https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=1200',
        description: '5 公里轻松跑，沿途有补给。请穿反光衣物，注意安全。',
        joined: true,
        isOrganizer: false,
        participantAvatars: [
          'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?w=100&h=100&fit=crop',
          'https://images.unsplash.com/photo-1502685104226-ee32379fefbe?w=100&h=100&fit=crop'
        ],
        status: 'active'
      },
      new: {
        id: 'new',
        title: '新建活动预览',
        clubName: '',
        clubId: '',
        dateTime: '请选择日期时间',
        location: '等待填写地点',
        address: '',
        participants: 1,
        maxParticipants: 10,
        organizer: '我',
        organizerAvatar: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=200&h=200&fit=crop',
        sportIcon: '🏃',
        image: 'https://dummyimage.com/1200x640/f6f7f8/2f85ee&text=Sport+Meetup',
        description: '发布后的活动详情会显示在这里。',
        joined: true,
        isOrganizer: true,
        participantAvatars: [
          'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=100&h=100&fit=crop'
        ],
        status: 'active'
      }
    }

    const event = sample[id] || sample.e1
    this.setData({ event: this.decorateEvent(event) })
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
  },
  onShareAppMessage() {
    const { title, id } = this.data.event
    return {
      title: `一起参加：${title}`,
      path: `/pages/events/detail?id=${id}`
    }
  }
})
