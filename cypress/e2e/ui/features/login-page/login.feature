Feature: Login Tests

    Login Test Cases

    Scenario: Login with valid credentials
        Given I am on login page
        When I type valid username and password
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
        And Enter invalid OTP as "123456"
        And Click submit
        Then I should see invalid OTP error message "The OTP you have entered is wrong. Please try again"

    Scenario: Login with invalid email format
        Given I am on login page
        When I type invalid email format: "abc"
        Then I should see invalid email error message "Email enter valid email"

    Scenario: Login with blank email id
        Given I am on login page
        When I type blank email
        Then I should see required field email error message "Email required"

    Scenario: Login with blank password
        Given I am on login page
        When I type blank password
        Then I should see required field password error message "Password required"


    Scenario: Login with valid credentials and incorrect OTP format
        Given I am on login page
        When I type valid username and password
        And Click login
        And Select email for OTP
        And Click send OTP
        And Enter incorrect OTP format as "123"
        Then I should see incorrect OTP error message "OTP is not of minimum length, please enter more char"
