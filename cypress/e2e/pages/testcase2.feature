Feature: Testcases2

  Scenario: Fill and submit the contact form
    Given I navigate to sogeti webpage
    When I accept all the cookies
    And I hover over Services link and click on Automation link
    And I scroll down to the contact us form
    And I fill the contact form with random data
    And I check the I agree checkbox
    And I click the SUBMIT button
    Then I should see the Thank you message
