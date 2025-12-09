App({
  onLaunch() {
    // Placeholder for initialization logic
  },
  globalData: {
    brand: {
      colors: {
        primaryStart: '#2F80ED',
        primaryEnd: '#1366D6',
        text: '#333333',
        secondaryText: '#A9A9A9',
        background: '#F7F7F7',
        success: '#1BBF6B',
        warning: '#F2994A',
        danger: '#EB5757'
      }
    },
    tabBar: {
      "custom": true,
      "color": "#6c757d",
      "selectedColor": "#2f85ee",
      "borderStyle": "white",
      "backgroundColor": "#ffffff",
      "list": [
        { "pagePath": "pages/events/index", "text": "活动", "iconPath": "🏃", "selectedIconPath": "🏃" },
        { "pagePath": "pages/clubs/index", "text": "俱乐部", "iconPath": "👥", "selectedIconPath": "👥" },
        { "pagePath": "pages/create/index", "text": "发布", "iconPath": "+", "selectedIconPath": "+" },
        { "pagePath": "pages/messages/index", "text": "消息", "iconPath": "💬", "selectedIconPath": "💬" },
        { "pagePath": "pages/profile/index", "text": "我的", "iconPath": "👤", "selectedIconPath": "👤" }
      ]
    }
  }
})
