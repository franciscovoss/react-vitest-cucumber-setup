Feature: Counter
    Scenario: Should increment the counter on button click
        Given The user is on the main page
        When The user clicks on the counter button
        Then The counter should be incremented
        