const { getClubs } = require('../../services/api');

Page({
  data: {
    sportFilters: [
      { name: '全部', icon: '🎯', selected: true },
      { name: '跑步', icon: '🏃', selected: false },
      { name: '羽毛球', icon: '🏸', selected: false },
      { name: '网球', icon: '🎾', selected: false },
      { name: '篮球', icon: '🏀', selected: false },
      { name: '骑行', icon: '🚴', selected: false },
      { name: '足球', icon: '⚽', selected: false },
      { name: '登山', icon: '🥾', selected: false }
    ],
    cityFilters: [
      { name: '全部', selected: true },
      { name: '上海', selected: false },
      { name: '北京', selected: false },
      { name: '杭州', selected: false }
    ],
    allClubs: [], // Store all clubs
    clubs: [], // Filtered clubs
    loading: true,
    selectedSportFilter: '全部',
    selectedCityFilter: '全部'
  },
  onLoad() {
    this.fetchClubs();
  },
  fetchClubs() {
    this.setData({ loading: true });
    getClubs().then(clubs => {
      this.setData({
        allClubs: clubs,
        clubs: clubs,
        loading: false
      });
    });
  },

  onSportSelect(e) {
    const i = e.currentTarget.dataset.index
    const sports = this.data.sportFilters.map((s, idx) => ({ ...s, selected: idx === i }))
    this.setData({ sportFilters: sports })
    const selected = sports[i].name
    
    this.setData({ selectedSportFilter: selected })
    this.applyFilters()
  },
  onCitySelect(e) {
    const i = e.currentTarget.dataset.index
    const cities = this.data.cityFilters.map((c, idx) => ({ ...c, selected: idx === i }))
    this.setData({ cityFilters: cities })
    const selected = cities[i].name
    
    this.setData({ selectedCityFilter: selected })
    this.applyFilters()
  },
  applyFilters() {
    const { allClubs, selectedSportFilter, selectedCityFilter } = this.data
    
    let filtered = allClubs
    
    // Apply sport filter
    if (selectedSportFilter !== '全部') {
      filtered = filtered.filter(club => club.sportType === selectedSportFilter)
    }
    
    // Apply city filter
    if (selectedCityFilter !== '全部') {
      filtered = filtered.filter(club => club.city === selectedCityFilter)
    }
    
    this.setData({ clubs: filtered })
    
    const count = filtered.length
    const filterMsg = selectedSportFilter === '全部' && selectedCityFilter === '全部' 
      ? '显示所有俱乐部'
      : `找到 ${count} 个俱乐部`
    
    wx.showToast({ title: filterMsg, icon: 'none', duration: 1000 })
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
