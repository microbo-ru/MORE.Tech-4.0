package com.zebra.controller;

import com.zebra.model.Issue;
import com.zebra.model.User;
import com.zebra.payload.StatsResponse;
import com.zebra.repository.IssueRepository;
import com.zebra.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.Stream;

@RestController
public class StatsController {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private IssueRepository issueRepository;

    @GetMapping("/stats")
    public StatsResponse getStatistics() {

        List<User> users = userRepository.findAll();
        int totalUsers = users.size();

        List<Issue> issues = issueRepository.findAll();
        int totalIssues = issues.size();

        long inProgress = issues
                .stream()
                .filter(i -> !i.getIssueState().equals("open"))
                .count();

        double amountTotal = issues
                .stream()
                .collect(Collectors.summingDouble(Issue::getZebraAmount));

        StatsResponse stat = new StatsResponse();
        stat.setIssuesNumber(totalIssues);
        stat.setTotalAmount(amountTotal);
        stat.setInProgress((int)inProgress);
        stat.setTeamMembers(totalUsers);

        return stat;
    }
}
