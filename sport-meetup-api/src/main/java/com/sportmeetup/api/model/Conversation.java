package com.sportmeetup.api.model;

import lombok.Data;

@Data
public class Conversation {
    private String id;
    private String type;
    private String avatar;
    private String name;
    private String lastMessage;
    private String timestamp;
    private int unreadCount;
}
