package com.sportmeetup.api.model;

import lombok.Data;

@Data
public class Club {
    private String id;
    private String name;
    private String description;
    private String location;
    private int members;
    private int events;
    private String avatar;
    private boolean joined;
}
