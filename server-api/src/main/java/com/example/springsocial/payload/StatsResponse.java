package com.example.springsocial.payload;

public class StatsResponse {

    private int issuesNumber;
    private double totalAmount;
    private int inProgress;
    private int teamMembers;

    public int getIssuesNumber() {
        return issuesNumber;
    }

    public void setIssuesNumber(int issuesNumber) {
        this.issuesNumber = issuesNumber;
    }

    public double getTotalAmount() {
        return totalAmount;
    }

    public void setTotalAmount(double totalAmount) {
        this.totalAmount = totalAmount;
    }

    public int getInProgress() {
        return inProgress;
    }

    public void setInProgress(int inProgress) {
        this.inProgress = inProgress;
    }

    public int getTeamMembers() {
        return teamMembers;
    }

    public void setTeamMembers(int teamMembers) {
        this.teamMembers = teamMembers;
    }

}
