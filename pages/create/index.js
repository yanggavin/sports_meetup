Page({
  data: {
    sports: ['羽毛球', '跑步', '骑行', '登山', '足球', '篮球', '网球', '游泳'],
    sportIndex: 0,
    clubs: ['无俱乐部 / 个人活动', '城市羽球社', '城市跑团', '周末骑行队'],
    clubIndex: 0,
    formData: {
      title: '',
      sportType: '羽毛球',
      clubId: null,
      date: '',
      time: '',
      location: '',
      maxParticipants: '',
      description: ''
    }
  },

  onBack() {
    wx.navigateBack()
  },
  onSportChange(e) {
    const index = e.detail.value
    this.setData({
      sportIndex: index,
      'formData.sportType': this.data.sports[index]
    })
  },
  onClubChange(e) {
    const index = e.detail.value
    this.setData({
      clubIndex: index,
      'formData.clubId': index === 0 ? null : `club${index}`
    })
  },
  onDateChange(e) {
    this.setData({
      'formData.date': e.detail.value
    })
  },
  onTimeChange(e) {
    this.setData({
      'formData.time': e.detail.value
    })
  },
  onTitleInput(e) {
    this.setData({
      'formData.title': e.detail.value
    })
  },
  onLocationInput(e) {
    this.setData({
      'formData.location': e.detail.value
    })
  },
  onMaxParticipantsInput(e) {
    this.setData({
      'formData.maxParticipants': e.detail.value
    })
  },
  onDescriptionInput(e) {
    this.setData({
      'formData.description': e.detail.value
    })
  },
  validateForm() {
    const { title, date, time, location, maxParticipants } = this.data.formData
    
    if (!title || !title.trim()) {
      wx.showToast({ title: '请输入活动名称', icon: 'none' })
      return false
    }
    if (!date) {
      wx.showToast({ title: '请选择日期', icon: 'none' })
      return false
    }
    if (!time) {
      wx.showToast({ title: '请选择时间', icon: 'none' })
      return false
    }
    if (!location || !location.trim()) {
      wx.showToast({ title: '请输入地点', icon: 'none' })
      return false
    }
    if (!maxParticipants || Number(maxParticipants) < 2) {
      wx.showToast({ title: '人数需至少 2 人', icon: 'none' })
      return false
    }
    
    // Validate date is not in the past
    const selectedDate = new Date(`${date} ${time}`)
    const now = new Date()
    if (selectedDate < now) {
      wx.showToast({ title: '时间不能早于现在', icon: 'none' })
      return false
    }
    
    return true
  },
  onPublish() {
    if (!this.validateForm()) {
      return
    }
    
    wx.showLoading({ title: '发布中...' })
    
    // Simulate API call
    setTimeout(() => {
      wx.hideLoading()
      wx.showToast({
        title: '活动已发布',
        icon: 'success',
        duration: 2000
      })
      
      setTimeout(() => {
        wx.navigateTo({ url: '/pages/events/detail?id=new' })
      }, 2000)
    }, 1000)
  }
})
