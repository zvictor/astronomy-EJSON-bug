Feature: Get Posts

  @focus
  Scenario: Get data from server
    When I request a post titled "hello world"
    Then I should see the content "lorem ipsum"
