# Sport Meetup - WeChat Mini Program

A community-driven WeChat Mini Program that helps users discover sports activities, join local clubs, organize events, and build friendships through shared exercise.

## 📱 Features

### Core Functionality
- **Browse Events** - Discover and filter upcoming sports activities by sport type and date
- **Join Clubs** - Explore and become a member of local sports clubs
- **Create Events** - Organize your own sports activities and manage participants
- **Messaging** - Chat with organizers, club admins, and other participants
- **Profile Management** - Track your sports history, joined clubs, and organized events

### Key Highlights
- Modern, intuitive UI design
- Real-time event updates
- Social connections through sports
- Multi-sport support (Basketball, Tennis, Running, Hiking, and more)
- Event capacity management
- Organizer tools for event management

## 🎨 Design System

### Color Palette
- **Primary**: `#2f85ee` (Blue)
- **Background Light**: `#f6f7f8`
- **Card/Surface**: `#ffffff`
- **Text Primary**: `#101822`
- **Text Secondary**: `#6c757d`
- **Success**: `#28a745`
- **Warning**: `#ffc107`
- **Danger**: `#dc3545`

### Typography
- Font Family: `-apple-system, BlinkMacSystemFont, 'Segoe UI', 'PingFang SC'`
- Font Weights: 400 (Regular), 500 (Medium), 600 (Semibold), 700 (Bold)
- Font Sizes: 20rpx - 48rpx scale

## 📂 Project Structure

```
sport_meetup/
├── pages/                      # Application pages
│   ├── events/                 # Events module
│   │   ├── index.*            # Events listing page
│   │   └── detail.*           # Event detail page
│   ├── clubs/                  # Clubs module
│   │   ├── index.*            # Clubs listing page
│   │   └── detail.*           # Club detail page
│   ├── create/                 # Event creation
│   │   └── index.*            # Create event form
│   ├── messages/               # Messaging module
│   │   ├── index.*            # Messages list
│   │   └── thread.*           # Message thread
│   └── profile/                # User profile
│       └── index.*            # Profile overview
├── custom-tab-bar/            # Custom tab bar component
│   ├── index.js
│   ├── index.wxml
│   └── index.wxss
├── requirement/               # Project documentation
│   └── sport_meetup_full_spec.md
├── ui/                        # UI design files
│   ├── mockup/               # Design mockups
│   └── branding_specification.md
├── app.js                     # Application entry point
├── app.json                   # App configuration
├── app.wxss                   # Global styles
└── project.config.json        # WeChat DevTools config
```

## 🚀 Getting Started

### Prerequisites
- [WeChat Developer Tools](https://developers.weixin.qq.com/miniprogram/dev/devtools/download.html)
- WeChat Mini Program AppID (apply at [WeChat Open Platform](https://mp.weixin.qq.com/))

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yanggavin/sports_meetup.git
   cd sports_meetup
   ```

2. **Open in WeChat Developer Tools**
   - Launch WeChat Developer Tools
   - Click "Import Project"
   - Select the project directory
   - Enter your AppID

3. **Configure the project**
   - Update `project.config.json` with your AppID
   - Configure backend API endpoints if needed

### Development

1. **Start development**
   - Open the project in WeChat Developer Tools
   - The simulator will automatically refresh on file changes
   - Use the debugging tools for testing

2. **File structure for each page**
   - `.js` - Page logic and data
   - `.wxml` - Page structure (similar to HTML)
   - `.wxss` - Page styles (similar to CSS)
   - `.json` - Page configuration

## 🎯 Page Overview

### 1. Events (活动)
- **Events List** (`/pages/events/index`)
  - Filter by sport type and date
  - View event cards with key information
  - Join/leave events directly from the list
  
- **Event Detail** (`/pages/events/detail`)
  - Complete event information
  - Organizer details and messaging
  - Participant list with avatars
  - Map integration for location
  - Organizer tools (edit, cancel, broadcast)

### 2. Clubs (俱乐部)
- **Clubs List** (`/pages/clubs/index`)
  - Search and filter clubs
  - View member count and upcoming events
  - Join clubs with one tap
  
- **Club Detail** (`/pages/clubs/detail`)
  - Image carousel
  - Club description and info
  - Upcoming events list
  - Member management

### 3. Create (发布)
- **Create Event** (`/pages/create/index`)
  - Event name and type selection
  - Date, time, and location input
  - Participant capacity settings
  - Optional club affiliation
  - Event description

### 4. Messages (消息)
- **Messages List** (`/pages/messages/index`)
  - Conversation list
  - Unread message badges
  - System notifications
  
- **Message Thread** (`/pages/messages/thread`)
  - One-on-one chat
  - Event announcements
  - System messages

### 5. Profile (我的)
- **Profile Overview** (`/pages/profile/index`)
  - User stats (events, clubs, friends)
  - Favorite sports tracking
  - Organized events list
  - Joined clubs list

## 🎨 UI Components

### Custom Tab Bar
- 5 tabs with emoji icons
- Special circular design for "Create" tab
- Blur backdrop effect
- Smooth active state transitions

### Reusable Components
- **Event Cards** - Display event information
- **Club Cards** - Show club details
- **Filter Chips** - Sport and date filtering
- **Info Cards** - Structured information display
- **Avatar Stack** - Participant previews

## 🔧 Technology Stack

- **Platform**: WeChat Mini Program
- **Language**: JavaScript (ES6+)
- **UI Framework**: WXML + WXSS (WeChat's markup and styling)
- **State Management**: Page-level data binding
- **Icons**: Emoji-based icon system

## 📝 Development Guidelines

### Code Style
- Use consistent indentation (2 spaces)
- Follow WeChat Mini Program naming conventions
- Keep page logic separated from UI
- Use meaningful variable and function names

### Component Naming
- Use descriptive class names (e.g., `.event-card`, `.club-avatar`)
- Follow BEM-like naming for complex components
- Maintain consistent spacing utilities (`.p-16`, `.gap-24`)

### Performance
- Lazy load images
- Implement pagination for lists
- Use data caching where appropriate
- Minimize WXSS file sizes

## 🌟 Key Features Implementation

### Event Management
- Real-time participant tracking
- Capacity validation
- Status indicators (Open, Full, Canceled)
- Organizer controls

### Social Features
- Direct messaging with organizers
- Club announcements
- Event sharing capabilities
- Friend system (roadmap)

### Search & Filter
- Multi-criteria event filtering
- Club search by name/sport/location
- Date-based event discovery

## 📱 Testing

1. **Simulator Testing**
   - Test all pages and navigation
   - Verify responsive layouts
   - Check data binding

2. **Real Device Testing**
   - Use WeChat Developer Tools preview feature
   - Test on different screen sizes
   - Verify touch interactions

3. **Feature Testing**
   - Join/leave events
   - Create new events
   - Club membership
   - Messaging functionality

## 🚧 Roadmap

### Version 1.0 (Current)
- ✅ Event browsing and joining
- ✅ Club discovery and membership
- ✅ Event creation
- ✅ Basic messaging
- ✅ User profiles

### Future Enhancements
- 🔄 AI-based event matching
- 🔄 Gamification (badges, achievements)
- 🔄 Friend system
- 🔄 Check-in with QR codes
- 🔄 Payment integration (WeChat Pay)
- 🔄 Advanced club management roles

## 📄 License

This project is developed for the Sport Meetup community platform.

## 👥 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📞 Support

For questions or support, please refer to the [WeChat Mini Program Documentation](https://developers.weixin.qq.com/miniprogram/dev/framework/).

## 🙏 Acknowledgments

- Design inspiration from modern sports community apps
- WeChat Mini Program development framework
- Open source community

---

**Built with ❤️ for the sports community**
