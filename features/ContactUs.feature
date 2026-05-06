Feature: Contact us successfully

  Scenario: Contact us successfully
    Given Login to DemoWepShop with valid credentials "MariamTester2@gmail.com" and "123456"
    Then Verify that user "MariamTester2@gmail.com" logged in successfully
    Then User can contact us by filling in "Mariam Test" and "This is for test" and send enquiry
