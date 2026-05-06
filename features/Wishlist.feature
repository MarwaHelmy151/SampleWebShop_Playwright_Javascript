Feature: Add product to wishlist successfully

  Scenario: Add product to wishlist successfully
    Given Login to DemoWepShop with valid credentials "MariamTester2@gmail.com" and "123456"
    Then Verify that user "MariamTester2@gmail.com" logged in successfully
    Then Click on topmenu "Jewelry" and select product "Black & White Diamond Heart"
    Then Add product to wishlist successfully
