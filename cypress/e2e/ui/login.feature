Feature: Login Tests

    Login Test Cases

    Scenario: Login with valid credentials
        Given Login to the application
        When I type username as "username"
        And I type password as "password"
        Then click Login
        And See the homepage
