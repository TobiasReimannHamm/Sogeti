Feature: Testcases3

  Scenario: Check Sogeti Webpages for different countrys
    Given I navigate to sogeti main webpage
    When I allow all the cookies
    And I click the Worldwide Dropdown link in Page Header
    Then All the country webpages shall respond 

