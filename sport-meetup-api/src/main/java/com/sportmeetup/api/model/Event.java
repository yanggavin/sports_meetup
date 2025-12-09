package com.sportmeetup.api.model;

import lombok.Data;

@Data
public class Event {
    private String id;
    private String title;
    private String clubName;
    private String dateTime;
    private String location;
    private int participants;
    private int maxParticipants;
    private String organizer;
    private String sportIcon;
    private boolean joined;
    private String status;
}
