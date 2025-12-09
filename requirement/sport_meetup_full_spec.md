# Sport Meetup — WeChat Mini Program Functional Specification (Full Version)
**Version:** 2.0  
**Brand Name:** Sport Meetup  
**Platform:** WeChat Mini Program  
**Date:** 2025-12-09  

---

## 1. Overview

**Sport Meetup** is a community-driven WeChat Mini Program that helps users discover sports activities, join local clubs, organize events, and build friendships through shared exercise.  

The Mini Program focuses on these core flows:

- Browse and filter **sports events**
- Discover and join **clubs**
- **Create and manage** events
- **Chat** with clubs, participants, and friends
- View and manage **personal profile** and sports history

---

## 2. Product Goals

### 2.1 Primary Objectives

1. Allow users to **easily find and join nearby sports activities**.  
2. Provide a smooth experience for **creating and managing events**.  
3. Offer clubs a centralized space to **manage members and promote activities**.  
4. Encourage **social connections** through group participation in sports.

### 2.2 Design & UX Principles

- **Simplicity**: Minimal steps to view, join, or publish events.  
- **Clarity**: Clear event capacity, time, location, and status.  
- **Trust**: Accurate, up-to-date event information and notifications.  
- **Community**: Emphasize groups, repeat participation, and social interaction.  
- **Native UX**: Behave like a natural WeChat experience with familiar patterns.

---

## 3. User Roles & Permissions

### 3.1 Roles

1. **Visitor (Not Logged-In)**  
   - Can browse public events and clubs  
   - Cannot join or create events  
   - Cannot send messages  

2. **Registered User**  
   - Authenticated via WeChat  
   - Can join events  
   - Can create events  
   - Can join clubs  
   - Can send and receive messages  

3. **Organizer**  
   - Any registered user who creates an event becomes its organizer  
   - Can edit and cancel own events  
   - Can view participant list  
   - Can send event-wide announcements  

4. **Club Admin**  
   - Creator of a club or assigned admin role  
   - Can edit club info  
   - Can approve/deny club membership (if approval mode is used in future)  
   - Can publish club announcements

### 3.2 Permission Matrix

| Action                         | Visitor | Registered User | Organizer | Club Admin |
|--------------------------------|---------|-----------------|-----------|-----------|
| View events                    | ✔       | ✔               | ✔         | ✔         |
| Filter/search events           | ✔       | ✔               | ✔         | ✔         |
| Join event                     | ✘       | ✔               | ✔         | ✔         |
| Leave event                    | ✘       | ✔               | ✔         | ✔         |
| Create event                   | ✘       | ✔               | ✔         | ✔         |
| Edit/cancel own event          | ✘       | ✘               | ✔         | ✘         |
| View participant list          | ✘       | ✔ (limited)     | ✔ (full)  | ✔ (club events) |
| View clubs                     | ✔       | ✔               | ✔         | ✔         |
| Join club                      | ✘       | ✔               | ✔         | ✔         |
| Edit club info                 | ✘       | ✘               | ✘         | ✔         |
| Send private messages          | ✘       | ✔               | ✔         | ✔         |
| Receive system notifications   | ✘       | ✔               | ✔         | ✔         |

---

## 4. Application Structure & Navigation

### 4.1 Tab Bar Structure

The app uses a **5-tab bottom navigation**:

```text
Tab Bar
 ├── 活动 (Events)
 │     ├── Event Detail
 │     │      └── Organizer Tools (For event owner)
 │
 ├── 俱乐部 (Clubs)
 │     ├── Club Detail
 │     │      └── Club Chat (future/extended)
 │
 ├── 发布 (Create Event)
 │
 ├── 消息 (Messages)
 │     └── Message Thread
 │
 └── 我的 (Profile)
       ├── My Joined Events
       ├── My Created Events
       └── My Clubs
```

### 4.2 Page List

- `/pages/events/index` — Events Home  
- `/pages/events/detail` — Event Detail  
- `/pages/clubs/index` — Clubs List  
- `/pages/clubs/detail` — Club Detail  
- `/pages/create/index` — Create Event  
- `/pages/messages/index` — Messages List  
- `/pages/messages/thread` — Chat Thread  
- `/pages/profile/index` — Profile Overview  
- (Optional future pages: settings, help, etc.)

---

## 5. Functional Modules

### 5.1 活动（Events） Module

#### 5.1.1 Events Home Page

**Purpose:** Let users quickly browse and filter upcoming activities.

**Main Components:**
- Sport filter bar (horizontal, scrollable)
- Date filter bar (horizontal, scrollable)
- Event list (infinite scroll)
- Empty state message if no events

**Filters:**

1. **Sport Type Filter**
   - Tabs: `全部`, `羽毛球`, `跑步`, `骑行`, `登山`, `更多…`
   - “更多” opens a modal or separate page with a full list of sports.
   - The chosen sport type is stored in state and used in backend queries.

2. **Date Filter**
   - Tabs: `全部`, `周一`, `周二`, `周三`, `周四`, `周五`, `周六`, `周日`, `下周`  
   - For `下周`, backend should fetch the next 7 days of events.  
   - For specific days, filter events starting on that weekday.

**Event Card Fields:**

Each event card should display:

- Sport icon (based on `sportType`)  
- Event title (e.g., “周末羽毛球局”)  
- Club name (if any)  
- Date & time (e.g., “12月10日 19:30”)  
- Location (short)  
- Participant count + capacity (e.g., “8/12人”)  
- Status indicator (e.g., “已满”, “剩余4个名额”)  
- Organizer name  
- Call-to-action button:  
  - “参加” if user not yet joined  
  - “已参加” or “退出” if user already joined  
  - Disabled state if event is full or past

**Interactions:**

- Tap on event card → Navigate to **Event Detail** page.  
- Tap on “参加” button → Trigger join flow.  
- Pull down to refresh event lists.  
- Scroll to bottom → Load more events (pagination).


#### 5.1.2 Event Search (Optional Enhancement)

An optional search bar to allow:

- Search by event name  
- Search by location  
- Search by club name  


### 5.2 Event Detail Page

**Route:** `/pages/events/detail`

**Purpose:** Provide full event information and actions.

**Sections:**

1. **Header**
   - Event name
   - Sport icon
   - Optional tag (e.g., “俱乐部活动”, “公开活动”)

2. **Organizer Block**
   - Organizer avatar & name
   - “私信” button to open message thread

3. **Time & Date Block**
   - Formatted date and time (e.g., “2025年12月10日 (周六) 19:30–21:30”)

4. **Location Block**
   - Full address
   - Optional: “在地图中打开” link using WeChat map APIs

5. **Participants Block**
   - Display participant avatars
   - Show “X/Y 已参加”
   - Optional: “查看全部成员” page

6. **Description Block**
   - Multi-line text description
   - Optional rules or reminders

7. **Club Block (if event linked to a club)**
   - Club icon and name
   - “查看俱乐部” link

8. **Action Bar (Bottom)**
   - Join / Leave button
   - Share button (WeChat share)
   - Contact (message organizer)

**Join Flow:**

1. User taps “参加活动”  
2. Backend checks:
   - Event status (`active`, not `cancelled` or `completed`)
   - Participant count < maxParticipants  
3. If event is full → show error toast: “活动已满”。  
4. If not joined yet and space available → add user to participant list.  
5. Show success toast: “已成功加入活动”。  
6. Send system message to organizer and participant.  
7. Add event to user’s “Joined Activities”.  

**Leave Flow:**

1. User taps “退出活动”。  
2. Confirm modal: “确定要退出该活动吗？”  
3. On confirm:
   - Remove user from participant list  
   - Optionally notify organizer  

**Organizer Tools (Only visible to organizer):**

- “编辑活动” button → go to edit form (same as create but pre-filled)  
- “取消活动” button → confirm modal; set status to `cancelled`  
- “群发通知” → sends a message to all participants (through system messaging)

---

### 5.3 俱乐部（Clubs） Module

#### 5.3.1 Clubs List Page

**Purpose:** Let users explore clubs to join and participate in their events.

**Club Card Fields:**

- Club icon / avatar  
- Club name  
- Short description (1–2 lines)  
- Location (city/district)  
- Member count (e.g., “156名成员”)  
- Upcoming events count (e.g., “5个即将开始的活动”)  
- “加入俱乐部” or “已加入” button  

**Interactions:**

- Tap on club card → **Club Detail** page.  
- Tap “加入俱乐部” → join club flow.  


#### 5.3.2 Club Detail Page

**Route:** `/pages/clubs/detail`

**Sections:**

1. **Club Header**
   - Club banner (optional)
   - Club icon + name
   - Tagline / short intro

2. **Meta Info**
   - Location
   - Member count
   - Number of public events

3. **Description**
   - Multi-line description of club purpose, sports level, and requirements.

4. **Upcoming Events (Club-specific)**  
   - List of events organized by the club in the near future.

5. **Action Buttons**
   - Join / Leave club  
   - Message club admin (direct chat)  

**Join Club Flow:**

- If open club: immediate success → add to `User.clubs` and `Club.members`.  
- Show success toast: “已加入俱乐部”。  


---

### 5.4 发布（Create Event） Module

#### 5.4.1 Event Creation Page

**Route:** `/pages/create/index`

**Purpose:** Let users create a new event with minimal friction.

**Form Fields:**

1. 活动名称 (Required)  
   - Type: text  
   - Placeholder: “例如：周末羽毛球活动”  

2. 活动类型 (Required)  
   - Type: selector (predefined list)  
   - Options: 羽毛球, 跑步, 骑行, 登山, 足球, 篮球, etc.

3. 所属俱乐部 (Optional)  
   - Selector listing clubs where user is a member  
   - Option: “无俱乐部/个人活动”  

4. 日期 (Required)  
   - Date Picker  

5. 时间 (Required)  
   - Time Picker  

6. 地点 (Required)  
   - Text input  
   - Placeholder: “例如：世纪公园体育中心”  

7. 最多参加人数 (Required)  
   - Number input  
   - Validation: >= 2

8. 活动描述 (Optional)  
   - Textarea: rules, play level, bring-your-own-equipment, etc.

**Validation Rules:**

- Required fields not empty  
- Date/time not in the past  
- Max participants is a positive number  

**Publish Flow:**

1. User taps “发布活动”。  
2. Validate inputs; show inline errors or toast if invalid.  
3. On success, call backend `CreateEvent` API.  
4. Add event to:
   - Public events list (if visible to all)  
   - Organizer’s “Created Events”  
   - Club’s upcoming events (if club chosen)  
5. Redirect user to Event Detail page with a success toast.  

**Edit Event Flow:**

- Same form as create, but pre-filled with existing data.  
- Only visible to event organizer.  


---

### 5.5 消息（Messages） Module

#### 5.5.1 Messages List Page

**Route:** `/pages/messages/index`

**Types of Conversations:**

- One-to-one between users  
- User ↔ Club admin (for club announcements or questions)  
- System conversation (automated notifications)  

**List Item Fields:**

- Avatar (user/club/system)  
- Conversation name  
- Last message preview  
- Timestamp of last message  
- Unread count badge (if >0)

**Interactions:**

- Tap conversation → navigate to `/pages/messages/thread?conversationId=...`  
- Pull down to refresh list  


#### 5.5.2 Message Thread Page

**Route:** `/pages/messages/thread`

**Features:**

- Chat bubbles (left/right alignment)  
- Text messages  
- Image messages (optional)  
- System messages (e.g., “你已加入活动X”)  
- Event cards embedded (join/view actions)  
- Scroll to load previous messages  

**Sending Messages:**

- Input text area at bottom  
- Optional attachments (images)  
- Send button → create message and update thread  

---

### 5.6 我的（Profile） Module

#### 5.6.1 Profile Overview Page

**Route:** `/pages/profile/index`

**Sections:**

1. **Header**
   - Avatar  
   - Name (WeChat nickname by default, editable)  
   - Short bio / tagline: “运动爱好者”，“羽毛球&跑步”等  
   - Location: derived from user settings or city

2. **Statistics Row**
   - 参加活动: total count  
   - 俱乐部: joined clubs count  
   - 好友: friends count (if friend system exists)  

3. **Favorite Sports**
   - Computed by the number of events joined per sport type  
   - Display as tags like:  
     - “🏸 羽毛球 · 12次”  
     - “🏃 跑步 · 8次”  

4. **My Organized Events**
   - List of events where `organizerId == user.id`  
   - Each row: title, date, participants count  
   - Tap → Event Detail (with organizer controls)

5. **My Joined Events (Optional section)**
   - List of events user participated in

6. **My Clubs**
   - List of clubs user has joined  
   - Tap → Club Detail


---

## 6. Data Model

### 6.1 User Model

```ts
type User = {
  id: string
  openId: string           // WeChat openid
  unionId?: string
  name: string
  avatar: string
  bio?: string
  location?: string
  favoriteSports: string[]
  joinedEvents: string[]   // Event IDs
  createdEvents: string[]  // Event IDs
  clubs: string[]          // Club IDs
  friends: string[]        // User IDs (optional/future)
  createdAt: number
  updatedAt: number
}
```

### 6.2 Event Model

```ts
type Event = {
  id: string
  title: string
  sportType: string        // e.g., "badminton", "running"
  clubId?: string | null
  organizerId: string
  date: string             // ISO date or date string
  time: string             // time string
  location: string
  maxParticipants: number
  description?: string
  participants: string[]   // User IDs
  status: "active" | "cancelled" | "completed"
  createdAt: number
  updatedAt: number
}
```

### 6.3 Club Model

```ts
type Club = {
  id: string
  name: string
  icon: string
  description?: string
  location?: string
  members: string[]        // User IDs
  events: string[]         // Event IDs
  ownerId: string          // Club creator / admin
  createdAt: number
  updatedAt: number
}
```

### 6.4 Message & Conversation Model

```ts
type Conversation = {
  id: string
  type: "user" | "club" | "system"
  participantIds: string[]    // users / clubs
  lastMessageId?: string
  updatedAt: number
}

type Message = {
  id: string
  conversationId: string
  senderId: string            // user or system id
  contentType: "text" | "image" | "system"
  content: string
  createdAt: number
  // For each participant, track read/unread state in a separate structure or messages_read table
}
```

---

## 7. System Notifications

### 7.1 Notification Types

1. **Event Join Confirmation**
   - “你已成功加入活动《{title}》。”

2. **Event Reminder**
   - 1 day before event start  
   - 1 hour before event start  

3. **Event Cancelled**
   - “活动《{title}》已被组织者取消。”

4. **Club Announcement**
   - Message from club admin to all members

5. **Organizer Notifications**
   - New participant joined  
   - Participant left  

### 7.2 Delivery Channels

- In-app message threads (system conversation)  
- Optional: WeChat template messages (if configured)  

---

## 8. Non-Functional Requirements

### 8.1 Performance

- Initial Events page load < 300ms under typical conditions.  
- Lazy-loading and pagination for long lists.  
- Use client-side caching for recent events and profile data.

### 8.2 Reliability

- Graceful error handling (network errors, timeouts).  
- Show user-friendly messages on failure.  

### 8.3 Security

- Use WeChat login to identify users (`openid`).  
- Server-side checks for event permissions (edit, cancel, join).  
- Do not expose sensitive user data in clients.  

### 8.4 Scalability

- Backend should support increasing numbers of events, users, and messages.  
- Use pagination and index on frequently queried fields (e.g., `sportType`, `date`, `clubId`).  

---

## 9. Future Enhancements (Roadmap Ideas)

These are **not required for v1**, but can be planned later:

1. **AI-based matching**
   - Suggest events or partners based on user history and interests.

2. **Gamification**
   - Badges for number of events attended, variety of sports, etc.

3. **Friend system**
   - Add friends, see friend activities, invite friends to events.

4. **Check-in & Attendance Tracking**
   - QR code-based check-in at event location.

5. **Advanced Club Management**
   - Role-based permissions (admin, coach, member).  
   - Club event templates.

6. **Payment Integration**
   - Paid events and club fees (WeChat Pay integration).  

---

## 10. Appendix

- All functional specifications are based on the UI design and branding for **Sport Meetup**.  
- This document is intended for product managers, designers, and developers to implement the Sport Meetup WeChat Mini Program end-to-end.

---

**End of Document – Sport Meetup Functional Specification (Full Version)**
