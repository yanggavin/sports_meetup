const { getConversations } = require('../../services/api');

Page({
  data: {
    conversations: [],
    loading: true
  },
  onLoad() {
    this.fetchConversations();
  },
  fetchConversations() {
    this.setData({ loading: true });
    getConversations().then(conversations => {
      this.setData({
        conversations,
        loading: false
      });
    });
  },

  onConversationTap(e) {
    const id = e.currentTarget.dataset.id
    wx.navigateTo({ url: `/pages/messages/thread?id=${id}` })
  },
  onNewMessage() {
    wx.showToast({ title: '新对话即将上线', icon: 'none' })
  }
})
