Component({
  data: {
    selected: 0,
    pagePaths: [
      '/pages/events/index',
      '/pages/clubs/index',
      '/pages/create/index',
      '/pages/messages/index',
      '/pages/profile/index'
    ]
  },
  methods: {
    onTabTap(e) {
      const index = e.currentTarget.dataset.index
      this.setData({ selected: index })
      const path = this.data.pagePaths[index]
      wx.switchTab({ url: path })
    },
    setSelected(index) {
      this.setData({ selected: index })
    }
  }
})
