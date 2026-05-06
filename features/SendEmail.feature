Feature: Send Email successfully

  Scenario: Send Email successfully
    Given Login to DemoWepShop with valid credentials "MariamTester2@gmail.com" and "123456"
    Then Verify that user "MariamTester2@gmail.com" logged in successfully
    Then Click on topmenu "Apparel & Shoes" and select product "Blue Jeans"
    Then send an Email to a friend "Test10@gmail.com"
