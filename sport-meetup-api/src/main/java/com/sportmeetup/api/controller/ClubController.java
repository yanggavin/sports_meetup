package com.sportmeetup.api.controller;

import com.sportmeetup.api.model.Club;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
public class ClubController {

    @GetMapping("/clubs")
    public List<Club> getClubs() {
        List<Club> clubs = new ArrayList<>();

        Club club1 = new Club();
        club1.setId("c1");
        club1.setName("日出跑团");
        club1.setDescription("清晨 5 公里晨跑，适合所有水平。");
        club1.setLocation("世纪公园");
        club1.setMembers(85);
        club1.setEvents(2);
        club1.setAvatar("https://dummyimage.com/200x200/f6f7f8/2f85ee&text=Run");
        club1.setJoined(false);
        clubs.add(club1);

        Club club2 = new Club();
        club2.setId("c2");
        club2.setName("中心网球社");
        club2.setDescription("周末双打 + 友谊赛，欢迎新手。");
        club2.setLocation("城市体育公园");
        club2.setMembers(120);
        club2.setEvents(3);
        club2.setAvatar("https://dummyimage.com/200x200/f6f7f8/2f85ee&text=Tennis");
        club2.setJoined(true);
        clubs.add(club2);

        return clubs;
    }
}
