Page({
  data: {
    conversations: [
      {
        id: 'conv1',
        type: 'club',
        avatar: 'https://dummyimage.com/120x120/f6f7f8/2f85ee&text=Run',
        name: '城市跑团',
        lastMessage: '今天的配速刚刚好，周三再约？',
        timestamp: '10:45',
        unreadCount: 2
      },
      {
        id: 'conv2',
        type: 'user',
        avatar: 'https://dummyimage.com/120x120/f6f7f8/2f85ee&text=SL',
        name: '李青',
        lastMessage: '明天活动还可以报名吗？',
        timestamp: '5分钟前',
        unreadCount: 1
      },
      {
        id: 'conv3',
        type: 'event',
        avatar: 'https://dummyimage.com/120x120/f6f7f8/2f85ee&text=Hike',
        name: '周六晨间徒步',
        lastMessage: '别忘了带水和登山杖',
        timestamp: '昨天',
        unreadCount: 0
      },
      {
        id: 'conv4',
        type: 'system',
        avatar: 'https://dummyimage.com/120x120/f6f7f8/2f85ee&text=SYS',
        name: '系统通知',
        lastMessage: '你已成功加入“周末羽毛球友谊赛”。',
        timestamp: '周二',
        unreadCount: 0
      },
      {
        id: 'conv5',
        type: 'user',
        avatar: 'https://dummyimage.com/120x120/f6f7f8/2f85ee&text=AC',
        name: '陈立',
        lastMessage: '好的，活动见！',
        timestamp: '周一',
        unreadCount: 0
      },
      {
        id: 'conv6',
        type: 'club',
        avatar: 'https://dummyimage.com/120x120/f6f7f8/2f85ee&text=Ride',
        name: '周末骑行队',
        lastMessage: '你：老地方集合可以吗？',
        timestamp: '10/28',
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
    wx.showToast({ title: '新对话即将上线', icon: 'none' })
  }
})
