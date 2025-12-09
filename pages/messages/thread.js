Page({
  data: {
    draft: '',
    messages: [
      { id: 'm1', sender: 'them', content: '你好，活动还有名额吗？', time: '19:20' },
      { id: 'm2', sender: 'me', content: '有的，欢迎参加！', time: '19:21' }
    ]
  },
  onInput(e) {
    this.setData({ draft: e.detail.value })
  },
  onSend() {
    if (!this.data.draft) return
    const msg = { id: 'm' + (this.data.messages.length + 1), sender: 'me', content: this.data.draft, time: '现在' }
    this.setData({ messages: this.data.messages.concat(msg), draft: '' })
  }
})
