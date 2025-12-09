const mockEvents = [
  {
    id: 'e1',
    title: '周末羽毛球友谊赛',
    clubName: '城市羽球社',
    dateTime: '12月10日 19:30',
    location: '世纪公园羽毛球中心',
    participants: 8,
    maxParticipants: 12,
    organizer: '陈晨',
    sportIcon: '🏸',
    joined: false,
    status: 'active'
  },
  {
    id: 'e2',
    title: '周日清晨城市慢跑',
    clubName: '城市跑团',
    dateTime: '12月11日 06:30',
    location: '滨江绿道集合点',
    participants: 40,
    maxParticipants: 40,
    organizer: '赵敏',
    sportIcon: '🏃',
    joined: true,
    status: 'active'
  },
  {
    id: 'e3',
    title: '周末城市夜骑',
    clubName: '夜骑联盟',
    dateTime: '12月12日 20:00',
    location: '市民广场喷泉旁',
    participants: 15,
    maxParticipants: 20,
    organizer: '李想',
    sportIcon: '🚴',
    joined: false,
    status: 'cancelled'
  },
  {
    id: 'e4',
    title: '冬季徒步体验营',
    clubName: '山野探索俱乐部',
    dateTime: '12月08日 09:00',
    location: '灵山登山口',
    participants: 24,
    maxParticipants: 24,
    organizer: '高远',
    sportIcon: '🥾',
    joined: false,
    status: 'completed'
  }
];

const getEvents = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(mockEvents);
    }, 500);
  });
};

const mockClubs = [
  {
    id: 'c1',
    name: '日出跑团',
    description: '清晨 5 公里晨跑，适合所有水平。',
    location: '世纪公园',
    members: 85,
    events: 2,
    avatar: 'https://dummyimage.com/200x200/f6f7f8/2f85ee&text=Run',
    joined: false
  },
  {
    id: 'c2',
    name: '中心网球社',
    description: '周末双打 + 友谊赛，欢迎新手。',
    location: '城市体育公园',
    members: 120,
    events: 3,
    avatar: 'https://dummyimage.com/200x200/f6f7f8/2f85ee&text=Tennis',
    joined: true
  },
  {
    id: 'c3',
    name: '城市篮球联盟',
    description: '每周 5v5 野球，组队对抗。',
    location: '市民体育中心',
    members: 45,
    events: 5,
    avatar: 'https://dummyimage.com/200x200/f6f7f8/2f85ee&text=Hoops',
    joined: false
  },
  {
    id: 'c4',
    name: '周末骑行队',
    description: '城市环骑 + 咖啡打卡。',
    location: '滨江步道',
    members: 210,
    events: 1,
    avatar: 'https://dummyimage.com/200x200/f6f7f8/2f85ee&text=Ride',
    joined: true
  }
];

const getClubs = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(mockClubs);
    }, 500);
  });
};

const mockConversations = [
      {
        id: 'conv1',
        type: 'club',
        avatar: 'https://dummyimage.com/120x120/f6f7f8/2f85ee&text=Run',
        name: '城市跑团',
        lastMessage: '今天的配速刚刚好，周三再约？',
        timestamp: '10:45',
        unreadCount: 2
      },
      {
        id: 'conv2',
        type: 'user',
        avatar: 'https://dummyimage.com/120x120/f6f7f8/2f85ee&text=SL',
        name: '李青',
        lastMessage: '明天活动还可以报名吗？',
        timestamp: '5分钟前',
        unreadCount: 1
      },
      {
        id: 'conv3',
        type: 'event',
        avatar: 'https://dummyimage.com/120x120/f6f7f8/2f85ee&text=Hike',
        name: '周六晨间徒步',
        lastMessage: '别忘了带水和登山杖',
        timestamp: '昨天',
        unreadCount: 0
      },
      {
        id: 'conv4',
        type: 'system',
        avatar: 'https://dummyimage.com/120x120/f6f7f8/2f85ee&text=SYS',
        name: '系统通知',
        lastMessage: '你已成功加入“周末羽毛球友谊赛”。',
        timestamp: '周二',
        unreadCount: 0
      },
      {
        id: 'conv5',
        type: 'user',
        avatar: 'https://dummyimage.com/120x120/f6f7f8/2f85ee&text=AC',
        name: '陈立',
        lastMessage: '好的，活动见！',
        timestamp: '周一',
        unreadCount: 0
      },
      {
        id: 'conv6',
        type: 'club',
        avatar: 'https://dummyimage.com/120x120/f6f7f8/2f85ee&text=Ride',
        name: '周末骑行队',
        lastMessage: '你：老地方集合可以吗？',
        timestamp: '10/28',
        unreadCount: 0
      }
    ];

const getConversations = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(mockConversations);
    }, 500);
  });
};

const mockUser = {
      avatar: 'https://dummyimage.com/240x240/f6f7f8/2f85ee&text=ME',
      name: 'Alex Chen',
      bio: '运动爱好者 · 上海',
      stats: {
        joinedActivities: 15,
        clubs: 8,
        friends: 27
      },
      favoriteSports: [
        { name: '羽毛球', icon: '🏸', count: 12 },
        { name: '足球', icon: '⚽', count: 8 },
        { name: '篮球', icon: '🏀', count: 5 },
        { name: '跑步', icon: '🏃', count: 3 }
      ],
      organizedEvents: [
        {
          id: 'e1',
          title: '滨江 5K 约跑',
          icon: '🏃',
          date: '12月12日',
          time: '19:00'
        },
        {
          id: 'e2',
          title: '周日晨光徒步',
          icon: '🥾',
          date: '12月15日',
          time: '06:00'
        }
      ],
      joinedClubs: [
        {
          id: 'c1',
          name: '湾区足球团',
          icon: '⚽',
          members: 124
        },
        {
          id: 'c2',
          name: '城市篮球联盟',
          icon: '🏀',
          members: 88
        },
        {
          id: 'c3',
          name: '半岛网球群',
          icon: '🎾',
          members: 56
        }
      ]
    };

const getUser = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(mockUser);
    }, 500);
  });
};

module.exports = {
  getEvents,
  getClubs,
  getConversations,
  getUser
};
