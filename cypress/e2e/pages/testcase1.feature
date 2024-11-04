Feature: Testcases1

Scenario: Automation page
    Given I navigate to the sogeti homepage
    When I accept all cookies
    And I hover over the Services link
    And I click the Automation link
    Then I should see the Automation screen
    And I should see the text Automation
    When I hover over the Services link again
    Then the Services and Automation links should be selected
