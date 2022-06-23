Feature: Verify add patient page

    Verify Add Patient Page

    Scenario Outline: Verify add patient functionality
        Given I am on add patient page
        When I select salutation <salutation>
        And I input firstname <fname>
        And I input lastname <lname>
        And I input occupation <occupation>
        And I select gender <gender>
        And I input DOB <dob>
        And I move to Contact Details tab
        And I input physical address <address>
        And I input mobile number <mobile>
        And I input personal email id <email>
        And I move to Accounts Holder tab
        And click on submit button
        Then Patient details should be added and I should be redirected to Dashboard page
        Examples:
            | salutation | fname | lname    | occupation    | gender | dob        | address   | mobile    | email          |
            | Mr         | Steve | Thompson | IT Profession | Male   | 17/05/1986 | hyderabad | 0957910970 | test@gmail.com |