package com.sportmeetup.api.controller;

import com.sportmeetup.api.model.Event;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
public class EventController {

    @GetMapping("/events")
    public List<Event> getEvents() {
        List<Event> events = new ArrayList<>();

        Event event1 = new Event();
        event1.setId("e1");
        event1.setTitle("周末羽毛球友谊赛");
        event1.setClubName("城市羽球社");
        event1.setDateTime("12月10日 19:30");
        event1.setLocation("世纪公园羽毛球中心");
        event1.setParticipants(8);
        event1.setMaxParticipants(12);
        event1.setOrganizer("陈晨");
        event1.setSportIcon("🏸");
        event1.setJoined(false);
        event1.setStatus("active");
        events.add(event1);

        Event event2 = new Event();
        event2.setId("e2");
        event2.setTitle("周日清晨城市慢跑");
        event2.setClubName("城市跑团");
        event2.setDateTime("12月11日 06:30");
        event2.setLocation("滨江绿道集合点");
        event2.setParticipants(40);
        event2.setMaxParticipants(40);
        event2.setOrganizer("赵敏");
        event2.setSportIcon("🏃");
        event2.setJoined(true);
        event2.setStatus("active");
        events.add(event2);

        return events;
    }
}
