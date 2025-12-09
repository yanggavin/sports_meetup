package com.sportmeetup.api.model;

import lombok.Data;

import java.util.List;

@Data
public class User {
    private String avatar;
    private String name;
    private String bio;
    private Stats stats;
    private List<FavoriteSport> favoriteSports;
    private List<OrganizedEvent> organizedEvents;
    private List<JoinedClub> joinedClubs;

    @Data
    public static class Stats {
        private int joinedActivities;
        private int clubs;
        private int friends;
    }

    @Data
    public static class FavoriteSport {
        private String name;
        private String icon;
        private int count;
    }

    @Data
    public static class OrganizedEvent {
        private String id;
        private String title;
        private String icon;
        private String date;
        private String time;
    }

    @Data
    public static class JoinedClub {
        private String id;
        private String name;
        private String icon;
        private int members;
    }
}
