Feature: Login successfully

  Scenario: Login successfully
    Given Login to DemoWepShop with valid credentials "MariamTester2@gmail.com" and "123456"
    Then Verify that user "MariamTester2@gmail.com" logged in successfully
