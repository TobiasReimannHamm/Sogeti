Feature: API Tests for Zippopotam

  Scenario: Verify Zippopotam API response for Stuttgart
    Given I send a GET request to the URL http://api.zippopotam.us/de/bw/stuttgart
    Then the response status code should be 200
    And the response content type should be application json
    And the response time should be less than 1000ms
    And the response should contain country as Germany and state as Baden-Württemberg
    And the response should contain post code 70597 with Stuttgart Degerloch