Page({
  data: {
    conversations: [
      {
        id: 'conv1',
        type: 'club',
        avatar: '/assets/club-runners.png',
        name: 'Downtown Runners Club',
        lastMessage: 'Great run today everyone!',
        timestamp: '10:45 AM',
        unreadCount: 2
      },
      {
        id: 'conv2',
        type: 'user',
        avatar: '/assets/user2.png',
        name: 'Sarah Lee',
        lastMessage: 'Are we still on for tomorrow?',
        timestamp: '5m ago',
        unreadCount: 1
      },
      {
        id: 'conv3',
        type: 'event',
        avatar: '/assets/event-hiking.png',
        name: 'Saturday Morning Hike',
        lastMessage: 'Don\'t forget to bring water.',
        timestamp: 'Yesterday',
        unreadCount: 0
      },
      {
        id: 'conv4',
        type: 'system',
        avatar: '/assets/system.png',
        name: 'Sport Meetup Announcements',
        lastMessage: 'New features are now live! Check them out.',
        timestamp: 'Tue',
        unreadCount: 0
      },
      {
        id: 'conv5',
        type: 'user',
        avatar: '/assets/user3.png',
        name: 'Alex Chen',
        lastMessage: 'Awesome, thanks!',
        timestamp: 'Mon',
        unreadCount: 0
      },
      {
        id: 'conv6',
        type: 'club',
        avatar: '/assets/club-cycling.png',
        name: 'Weekend Cycling Club',
        lastMessage: 'You: Let\'s meet at the usual spot.',
        timestamp: '10/28/23',
        unreadCount: 0
      }
    ]
  },
  onShow() {
    if (typeof this.getTabBar === 'function' && this.getTabBar()) {
      this.getTabBar().setSelected(3)
    }
  },
  onConversationTap(e) {
    const id = e.currentTarget.dataset.id
    wx.navigateTo({ url: `/pages/messages/thread?id=${id}` })
  },
  onNewMessage() {
    wx.showToast({ title: 'New message', icon: 'none' })
  }
})
