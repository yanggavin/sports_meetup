package com.sportmeetup.api.controller;

import com.sportmeetup.api.model.Conversation;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
public class MessageController {

    @GetMapping("/messages")
    public List<Conversation> getConversations() {
        List<Conversation> conversations = new ArrayList<>();

        Conversation conv1 = new Conversation();
        conv1.setId("conv1");
        conv1.setType("club");
        conv1.setAvatar("https://dummyimage.com/120x120/f6f7f8/2f85ee&text=Run");
        conv1.setName("城市跑团");
        conv1.setLastMessage("今天的配速刚刚好，周三再约？");
        conv1.setTimestamp("10:45");
        conv1.setUnreadCount(2);
        conversations.add(conv1);

        Conversation conv2 = new Conversation();
        conv2.setId("conv2");
        conv2.setType("user");
        conv2.setAvatar("https://dummyimage.com/120x120/f6f7f8/2f85ee&text=SL");
        conv2.setName("李青");
        conv2.setLastMessage("明天活动还可以报名吗？");
        conv2.setTimestamp("5分钟前");
        conv2.setUnreadCount(1);
        conversations.add(conv2);

        return conversations;
    }
}
