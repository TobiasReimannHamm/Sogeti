Feature: API Data Driven Tests for Zippopotam

  Scenario Outline: Verify Zippopotam API response for different locations
    Given I send a GET request to the Zippopotam API with Country <Country> and Postal Code <PostalCode>
    Then the response status code should be 200 again
    And the response content type should be JSON
    And the response time should be less than 1000ms again
    And the response should contain Place Name "<PlaceName>"

    Examples:
      | Country | PostalCode | PlaceName       |
      | us      | 90210      | Beverly Hills   |
      | us      | 12345      | Schenectady     |
      | ca      | B2R        | Waverley        |
