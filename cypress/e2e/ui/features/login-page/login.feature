Feature: Login Tests

    Login Test Cases

    Scenario: Login with valid credentials
        Given I am on login page
        When I type username and password
        And Click login
        And Select email for OTP
        And Click send OTP
        And Enter OTP
        And Click submit
        Then I should be logged in

    Scenario Outline: Login with invalid credentials
        Given I am on login page
        When I type invalid username as <username> and password as <password>
        And Click login
        Then I should see invalid cred error message "Not a Valid Username or Password"
        Examples:
            | username       | password |
            | abc@gmail.com  | abc      |
            | 123456@gam.com | abc#$%^& |

Scenario: Login with valid credentials and invalid OTP
    Given I am on login page
    When I type valid username and password
    And Click login
    And Select email for OTP
    And Click send OTP
    And Enter invalid OTP
    And Click submit
    Then I should see invalid OTP error message "The OTP you have entered is wrong. Please try again"
