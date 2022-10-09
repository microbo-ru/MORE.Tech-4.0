package com.zebra.controller;

import com.zebra.model.Issue;
import com.zebra.payload.ApiResponse;
import com.zebra.repository.IssueRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
import java.util.Optional;

@RestController
public class IssueController {

    @Autowired
    private IssueRepository issueRepository;

    @GetMapping("/issues")
    public List<Issue> getIssues() {
        return issueRepository.findAll();
    }

    @PostMapping("/issue")
    public ResponseEntity<?> postIssue(@Valid @RequestBody Issue issue) {

        issueRepository.save(issue);

        return ResponseEntity.ok(new ApiResponse(true, "Issue is saved." ));
    }

    @PutMapping("/issue")
    public ResponseEntity<?> updateIssue(@Valid @RequestBody Issue issue) {

        if (issueRepository.existsByIssueId(issue.getIssueId())) {

            Optional<Issue> result = issueRepository.findByIssueId(issue.getIssueId());
            if (result.isPresent()) {
                Issue ours = result.get();

                ours.setIssueState(issue.getIssueState());
                ours.setIssueAssignee(issue.getIssueAssignee());
                ours.setIssueBody(issue.getIssueBody());
                ours.setIssueTitle(issue.getIssueTitle());

                // there shouldn't be other changes
                // as they are Ids

                // save back changes
                issueRepository.save(ours);

                return ResponseEntity.ok(new ApiResponse(true, "Issue is saved." ));
            }

        }

        return ResponseEntity.ok(new ApiResponse(false, "Issue not found." ));
    }
}
