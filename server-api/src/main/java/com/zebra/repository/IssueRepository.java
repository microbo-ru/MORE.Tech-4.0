package com.zebra.repository;

import com.zebra.model.Issue;
import com.zebra.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface IssueRepository extends JpaRepository<Issue, Long> {
    Optional<Issue> findByIssueId(Long issueId);
    Boolean existsByIssueId(Long issueId);
}
