Component({
  data: {
    selected: 0,
    list: []
  },
  lifetimes: {
    attached() {
      this.setData({
        list: getApp().globalData.tabBar.list
      })
    }
  },
  pageLifetimes: {
    show() {
      const pages = getCurrentPages();
      const currentPage = pages[pages.length - 1];
      const path = currentPage.route;
      const index = this.data.list.findIndex(item => item.pagePath === path);
      if (index !== -1) {
        this.setData({ selected: index });
      }
    }
  },
  methods: {
    onTabTap(e) {
      const index = e.currentTarget.dataset.index
      const path = this.data.list[index].pagePath
      wx.switchTab({ url: `/${path}` })
    }
  }
})
