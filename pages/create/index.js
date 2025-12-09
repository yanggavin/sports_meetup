Page({
  data: {
    sports: ['羽毛球', '跑步', '骑行', '登山', '足球', '篮球'],
    sportTypeText: '未选择',
    dateText: '未选择',
    timeText: '未选择'
  },
  onShow() {
    if (typeof this.getTabBar === 'function' && this.getTabBar()) {
      this.getTabBar().setSelected(2)
    }
  },
  onSubmit(e) {
    const v = e.detail.value
    if (!v.title || !v.date || !v.time || !v.location || !v.max) {
      wx.showToast({ title: '请填写必填项', icon: 'none' })
      return
    }
    if (Number(v.max) < 2) {
      wx.showToast({ title: '人数至少为2', icon: 'none' })
      return
    }
    wx.showToast({ title: '发布成功', icon: 'success' })
    setTimeout(() => {
      wx.navigateTo({ url: '/pages/events/detail?id=new' })
    }, 600)
  }
})
