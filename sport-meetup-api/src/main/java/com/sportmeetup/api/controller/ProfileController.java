package com.sportmeetup.api.controller;

import com.sportmeetup.api.model.User;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
public class ProfileController {

    @GetMapping("/profile")
    public User getUser() {
        User user = new User();
        user.setAvatar("https://dummyimage.com/240x240/f6f7f8/2f85ee&text=ME");
        user.setName("Alex Chen");
        user.setBio("运动爱好者 · 上海");

        User.Stats stats = new User.Stats();
        stats.setJoinedActivities(15);
        stats.setClubs(8);
        stats.setFriends(27);
        user.setStats(stats);

        List<User.FavoriteSport> favoriteSports = new ArrayList<>();
        User.FavoriteSport sport1 = new User.FavoriteSport();
        sport1.setName("羽毛球");
        sport1.setIcon("🏸");
        sport1.setCount(12);
        favoriteSports.add(sport1);
        user.setFavoriteSports(favoriteSports);

        List<User.OrganizedEvent> organizedEvents = new ArrayList<>();
        User.OrganizedEvent event1 = new User.OrganizedEvent();
        event1.setId("e1");
        event1.setTitle("滨江 5K 约跑");
        event1.setIcon("🏃");
        event1.setDate("12月12日");
        event1.setTime("19:00");
        organizedEvents.add(event1);
        user.setOrganizedEvents(organizedEvents);

        List<User.JoinedClub> joinedClubs = new ArrayList<>();
        User.JoinedClub club1 = new User.JoinedClub();
        club1.setId("c1");
        club1.setName("湾区足球团");
        club1.setIcon("⚽");
        club1.setMembers(124);
        joinedClubs.add(club1);
        user.setJoinedClubs(joinedClubs);

        return user;
    }
}
