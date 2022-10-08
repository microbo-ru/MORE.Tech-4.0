package com.example.springsocial.controller;

import com.example.springsocial.exception.ResourceNotFoundException;
import com.example.springsocial.model.User;
import com.example.springsocial.payload.AuthResponse;
import com.example.springsocial.payload.StatsResponse;
import com.example.springsocial.repository.UserRepository;
import com.example.springsocial.security.CurrentUser;
import com.example.springsocial.security.UserPrincipal;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
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
