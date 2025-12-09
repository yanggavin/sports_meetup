const { getUser } = require('../../services/api');

Page({
  data: {
    user: null,
    loading: true
  },
  onLoad() {
    this.fetchUser();
  },
  fetchUser() {
    this.setData({ loading: true });
    getUser().then(user => {
      this.setData({
        user,
        loading: false
      });
    });
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
