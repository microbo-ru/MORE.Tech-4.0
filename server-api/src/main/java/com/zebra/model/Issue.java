package com.zebra.model;

import javax.persistence.*;

@Entity
@Table(name = "issues", uniqueConstraints = {
        @UniqueConstraint(columnNames = "id")
})
public class Issue {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private long issueId;

    private String issueUrl;

    private String repositoryUrl;

    private String issueHtmlUrl;

    private Long number;

    private String userLogin;

    private String userId;

    private String userAvatarUrl;

    private String userHtmlUrl;

    private String issueState;

    private String issueAssignee;

    private String issueBody;

    private String issueTitle;

    private double zebraAmount;

    private String zebraCommentUrl;

    private String zebraCommentHtmlUrl;

    private String zebraCommentId;

    public double getZebraAmount() {
        return zebraAmount;
    }

    public void setZebraAmount(double zebraAmount) {
        this.zebraAmount = zebraAmount;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getIssueId() {
        return issueId;
    }

    public void setIssueId(Long issueId) {
        this.issueId = issueId;
    }

    public String getIssueUrl() {
        return issueUrl;
    }

    public void setIssueUrl(String issueUrl) {
        this.issueUrl = issueUrl;
    }

    public String getRepositoryUrl() {
        return repositoryUrl;
    }

    public void setRepositoryUrl(String repositoryUrl) {
        this.repositoryUrl = repositoryUrl;
    }

    public String getIssueHtmlUrl() {
        return issueHtmlUrl;
    }

    public void setIssueHtmlUrl(String issueHtmlUrl) {
        this.issueHtmlUrl = issueHtmlUrl;
    }

    public Long getNumber() {
        return number;
    }

    public void setNumber(Long number) {
        this.number = number;
    }

    public String getUserLogin() {
        return userLogin;
    }

    public void setUserLogin(String userLogin) {
        this.userLogin = userLogin;
    }

    public String getUserId() {
        return userId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    public String getUserAvatarUrl() {
        return userAvatarUrl;
    }

    public void setUserAvatarUrl(String userAvatarUrl) {
        this.userAvatarUrl = userAvatarUrl;
    }

    public String getUserHtmlUrl() {
        return userHtmlUrl;
    }

    public void setUserHtmlUrl(String userHtmlUrl) {
        this.userHtmlUrl = userHtmlUrl;
    }

    public String getIssueState() {
        return issueState;
    }

    public void setIssueState(String issueState) {
        this.issueState = issueState;
    }

    public String getIssueAssignee() {
        return issueAssignee;
    }

    public void setIssueAssignee(String issueAssignee) {
        this.issueAssignee = issueAssignee;
    }

    public String getIssueBody() {
        return issueBody;
    }

    public void setIssueBody(String issueBody) {
        this.issueBody = issueBody;
    }

    public String getIssueTitle() {return issueTitle;}

    public void setIssueTitle(String issueTitle) {
        this.issueTitle = issueTitle;
    }

    public String getZebraCommentUrl() {
        return zebraCommentUrl;
    }

    public void setZebraCommentUrl(String zebraCommentUrl) {
        this.zebraCommentUrl = zebraCommentUrl;
    }

    public String getZebraCommentHtmlUrl() {
        return zebraCommentHtmlUrl;
    }

    public void setZebraCommentHtmlUrl(String zebraCommentHtmlUrl) {
        this.zebraCommentHtmlUrl = zebraCommentHtmlUrl;
    }

    public String getZebraCommentId() {
        return zebraCommentId;
    }

    public void setZebraCommentId(String zebraCommentId) {
        this.zebraCommentId = zebraCommentId;
    }
}
