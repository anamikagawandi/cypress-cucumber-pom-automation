Feature: Verify add patient page

    Verify Add Patient Page

    Scenario: Verify add patient functionality
        Given I am on add patient page 
        When I select salutation
        And I input firstname
        And I input lastname
        And I input occupation
        And I select gender
        And I input DOB
        And I move to Contact Details tab
        And I input physical address
        And I input mobile number
        And I input personal email id
        And I move to Accounts Holder tab
        And click on submit button
        Then Patient details should be added and I should be redirected to Dashboard page