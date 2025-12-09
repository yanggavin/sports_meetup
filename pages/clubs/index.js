const { getClubs } = require('../../services/api');

Page({
  data: {
    clubs: [],
    loading: true
  },
  onLoad() {
    this.fetchClubs();
  },
  fetchClubs() {
    this.setData({ loading: true });
    getClubs().then(clubs => {
      this.setData({
        clubs,
        loading: false
      });
    });
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
