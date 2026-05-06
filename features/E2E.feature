Feature: User can place order

  Scenario: User can place order
    Given Login to DemoWepShop with valid credentials "MariamTester2@gmail.com" and "123456"
    Then Verify that user "MariamTester2@gmail.com" logged in successfully
    Then Navigate to topMenu "Electronics" and select productcategory "Cell phones" and select product "Smartphone" and add to cart
    Then User can Checkout and add payment details "Egypt", "Cairo", "New Cairo", "1234", "123456"
    Then Order is successfully processed
    Then User can print the receipt
