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
    sportType: '羽毛球',
    dayOfWeek: '周二',
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
    sportType: '跑步',
    dayOfWeek: '周三',
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
    sportType: '骑行',
    dayOfWeek: '周四',
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
    sportType: '登山',
    dayOfWeek: '周日',
    joined: false,
    status: 'completed'
  },
  {
    id: 'e5',
    title: '周六羽毛球团体赛',
    clubName: '城市羽球社',
    dateTime: '12月14日 15:00',
    location: '徐汇体育中心',
    participants: 10,
    maxParticipants: 16,
    organizer: '王芳',
    sportIcon: '🏸',
    sportType: '羽毛球',
    dayOfWeek: '周六',
    joined: false,
    status: 'active'
  },
  {
    id: 'e6',
    title: '周一晨跑打卡',
    clubName: '城市跑团',
    dateTime: '12月16日 06:00',
    location: '滨江绿道',
    participants: 5,
    maxParticipants: 15,
    organizer: '赵敏',
    sportIcon: '🏃',
    sportType: '跑步',
    dayOfWeek: '周一',
    joined: false,
    status: 'active'
  },
  {
    id: 'e7',
    title: '周五夜骑环湖',
    clubName: '夜骑联盟',
    dateTime: '12月13日 19:30',
    location: '东湖公园',
    participants: 8,
    maxParticipants: 12,
    organizer: '李想',
    sportIcon: '🚴',
    sportType: '骑行',
    dayOfWeek: '周五',
    joined: false,
    status: 'active'
  },
  {
    id: 'e8',
    title: '周日登山活动',
    clubName: '山野探索俱乐部',
    dateTime: '12月15日 08:00',
    location: '云峰山',
    participants: 12,
    maxParticipants: 20,
    organizer: '高远',
    sportIcon: '🥾',
    sportType: '登山',
    dayOfWeek: '周日',
    joined: false,
    status: 'active'
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
    city: '上海',
    members: 85,
    events: 2,
    avatar: 'https://dummyimage.com/200x200/f6f7f8/2f85ee&text=Run',
    sportType: '跑步',
    sportIcon: '🏃',
    joined: false
  },
  {
    id: 'c2',
    name: '中心网球社',
    description: '周末双打 + 友谊赛，欢迎新手。',
    location: '城市体育公园',
    city: '上海',
    members: 120,
    events: 3,
    avatar: 'https://dummyimage.com/200x200/f6f7f8/2f85ee&text=Tennis',
    sportType: '网球',
    sportIcon: '🎾',
    joined: true
  },
  {
    id: 'c3',
    name: '城市篮球联盟',
    description: '每周 5v5 野球，组队对抗。',
    location: '市民体育中心',
    city: '北京',
    members: 45,
    events: 5,
    avatar: 'https://dummyimage.com/200x200/f6f7f8/2f85ee&text=Hoops',
    sportType: '篮球',
    sportIcon: '🏀',
    joined: false
  },
  {
    id: 'c4',
    name: '周末骑行队',
    description: '城市环骑 + 咖啡打卡。',
    location: '滨江步道',
    city: '上海',
    members: 210,
    events: 1,
    avatar: 'https://dummyimage.com/200x200/f6f7f8/2f85ee&text=Ride',
    sportType: '骑行',
    sportIcon: '🚴',
    joined: true
  },
  {
    id: 'c5',
    name: '城市羽球社',
    description: '从入门到高手，全面提升球技。',
    location: '徐汇体育中心',
    city: '上海',
    members: 150,
    events: 6,
    avatar: 'https://dummyimage.com/200x200/f6f7f8/2f85ee&text=Badminton',
    sportType: '羽毛球',
    sportIcon: '🏸',
    joined: false
  },
  {
    id: 'c6',
    name: '山野探索俱乐部',
    description: '周末登山、徒步，探索大自然。',
    location: '云峰山',
    city: '杭州',
    members: 95,
    events: 4,
    avatar: 'https://dummyimage.com/200x200/f6f7f8/2f85ee&text=Hike',
    sportType: '登山',
    sportIcon: '🥾',
    joined: false
  },
  {
    id: 'c7',
    name: '北京跑团',
    description: '京城跑者聚集地，每周三次团跑。',
    location: '奥林匹克公园',
    city: '北京',
    members: 180,
    events: 8,
    avatar: 'https://dummyimage.com/200x200/f6f7f8/2f85ee&text=Run',
    sportType: '跑步',
    sportIcon: '🏃',
    joined: false
  },
  {
    id: 'c8',
    name: '足球之友',
    description: '业余足球联赛，每周对抗赛。',
    location: '上体足球场',
    city: '上海',
    members: 68,
    events: 3,
    avatar: 'https://dummyimage.com/200x200/f6f7f8/2f85ee&text=Soccer',
    sportType: '足球',
    sportIcon: '⚽',
    joined: false
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
