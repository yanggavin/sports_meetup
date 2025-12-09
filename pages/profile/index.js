Page({
  data: {
    user: {
      name: '运动爱好者',
      bio: '羽毛球 & 跑步'
    },
    stats: {
      joined: 12,
      clubs: 3,
      friends: 20
    },
    favoriteSports: [
      { name: '羽毛球', count: 12 },
      { name: '跑步', count: 8 }
    ],
    organizedEvents: [
      { id: 'o1', title: '周末羽毛球局', date: '12月10日' },
      { id: 'o2', title: '夜跑活动', date: '12月15日' }
    ],
    clubs: [
      { id: 'c1', name: '羽你同乐俱乐部', location: '浦东新区' },
      { id: 'c2', name: '城市跑者', location: '黄浦区' }
    ]
  },
  onShow() {
    if (typeof this.getTabBar === 'function' && this.getTabBar()) {
      this.getTabBar().setSelected(4)
    }
  }
})
