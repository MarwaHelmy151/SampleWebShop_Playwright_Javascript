Feature: Remove product from cart successfully

  Scenario: Remove product from cart successfully
    Given Login to DemoWepShop with valid credentials "MariamTester3@gmail.com" and "123456"
    Then Verify that user "MariamTester3@gmail.com" logged in successfully
    Then Click on topmenu "Digital downloads" and add prodcut "3rd Album" to cart
    Then Click on topmenu "Apparel & Shoes" and add prodcut "Blue and green Sneaker" to cart
    Then Verify that 2 items "3rd Album" and "Blue and green Sneaker" are available in shopping cart
    Then Remove product "Blue and green Sneaker" from cart successfully
    Then Verify that "3rd Album" is still available
