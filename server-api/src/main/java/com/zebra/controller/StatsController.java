package com.zebra.controller;

import com.zebra.payload.StatsResponse;
import com.zebra.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class StatsController {

    @Autowired
    private UserRepository userRepository;

    @GetMapping("/stats")
    public StatsResponse getStatistics() {

        StatsResponse stat = new StatsResponse();
        stat.setIssuesNumber(21);
        stat.setTotalAmount(3050.0);
        stat.setInProgress(5);
        stat.setTeamMembers(9);

        return stat;
    }
}
