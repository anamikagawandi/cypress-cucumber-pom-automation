Feature: Verify dashboard page

    Verify Dashboard Page

    # Scenario: Verify dashboard page
    #     Given I have logged in
    #     Then I should be able to view dashboard

    Scenario: Verify that I can visit add patient page from dashboard page
        Given I have logged in
        When I click on search icon
        Then I click on add patient button
        # Then I will be routed to Add Patient page
