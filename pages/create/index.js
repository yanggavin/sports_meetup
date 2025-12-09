Page({
  data: {
    sports: ['Basketball', 'Tennis', 'Running', 'Hiking', 'Soccer', 'Badminton', 'Cycling', 'Swimming'],
    sportIndex: 0,
    clubs: ['No Club (Personal Event)', 'Downtown Hoopers', 'Weekend Warriors', 'City Runners'],
    clubIndex: 0,
    formData: {
      title: '',
      sportType: 'Basketball',
      clubId: null,
      date: '',
      time: '',
      location: '',
      maxParticipants: '',
      description: ''
    }
  },
  onShow() {
    if (typeof this.getTabBar === 'function' && this.getTabBar()) {
      this.getTabBar().setSelected(2)
    }
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
      wx.showToast({ title: 'Please enter event name', icon: 'none' })
      return false
    }
    if (!date) {
      wx.showToast({ title: 'Please select a date', icon: 'none' })
      return false
    }
    if (!time) {
      wx.showToast({ title: 'Please select a time', icon: 'none' })
      return false
    }
    if (!location || !location.trim()) {
      wx.showToast({ title: 'Please enter location', icon: 'none' })
      return false
    }
    if (!maxParticipants || Number(maxParticipants) < 2) {
      wx.showToast({ title: 'Max participants must be at least 2', icon: 'none' })
      return false
    }
    
    // Validate date is not in the past
    const selectedDate = new Date(`${date} ${time}`)
    const now = new Date()
    if (selectedDate < now) {
      wx.showToast({ title: 'Event date cannot be in the past', icon: 'none' })
      return false
    }
    
    return true
  },
  onPublish() {
    if (!this.validateForm()) {
      return
    }
    
    wx.showLoading({ title: 'Publishing...' })
    
    // Simulate API call
    setTimeout(() => {
      wx.hideLoading()
      wx.showToast({
        title: 'Event published!',
        icon: 'success',
        duration: 2000
      })
      
      setTimeout(() => {
        wx.switchTab({ url: '/pages/events/index' })
      }, 2000)
    }, 1000)
  }
})
