# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: 1-RegisterTest.spec.js >> User can register successfully
- Location: tests\1-RegisterTest.spec.js:4:1

# Error details

```
Test timeout of 40000ms exceeded.
```

```
Error: locator.textContent: Test timeout of 40000ms exceeded.
Call log:
  - waiting for locator('.result')

```

# Page snapshot

```yaml
- generic [ref=e2]:
  - generic [ref=e3]:
    - generic [ref=e4]:
      - link "Tricentis Demo Web Shop" [ref=e6] [cursor=pointer]:
        - /url: /
        - img "Tricentis Demo Web Shop" [ref=e7]
      - list [ref=e10]:
        - listitem [ref=e11]:
          - link "Register" [ref=e12] [cursor=pointer]:
            - /url: /register
        - listitem [ref=e13]:
          - link "Log in" [ref=e14] [cursor=pointer]:
            - /url: /login
        - listitem [ref=e15]:
          - link "Shopping cart (0)" [ref=e16] [cursor=pointer]:
            - /url: /cart
            - generic [ref=e17]: Shopping cart
            - generic [ref=e18]: (0)
        - listitem [ref=e19]:
          - link "Wishlist (0)" [ref=e20] [cursor=pointer]:
            - /url: /wishlist
            - generic [ref=e21]: Wishlist
            - generic [ref=e22]: (0)
      - generic [ref=e24]:
        - status [ref=e25]
        - textbox [ref=e26]: Search store
        - button "Search" [ref=e27] [cursor=pointer]
    - list [ref=e29]:
      - listitem [ref=e30]:
        - link "Books" [ref=e31] [cursor=pointer]:
          - /url: /books
      - listitem [ref=e32]:
        - link "Computers" [ref=e33] [cursor=pointer]:
          - /url: /computers
      - listitem [ref=e34]:
        - link "Electronics" [ref=e35] [cursor=pointer]:
          - /url: /electronics
      - listitem [ref=e36]:
        - link "Apparel & Shoes" [ref=e37] [cursor=pointer]:
          - /url: /apparel-shoes
      - listitem [ref=e38]:
        - link "Digital downloads" [ref=e39] [cursor=pointer]:
          - /url: /digital-downloads
      - listitem [ref=e40]:
        - link "Jewelry" [ref=e41] [cursor=pointer]:
          - /url: /jewelry
      - listitem [ref=e42]:
        - link "Gift Cards" [ref=e43] [cursor=pointer]:
          - /url: /gift-cards
    - generic:
      - generic [ref=e44]:
        - generic [ref=e45]:
          - strong [ref=e47]: Categories
          - list [ref=e49]:
            - listitem [ref=e50]:
              - link "Books" [ref=e51] [cursor=pointer]:
                - /url: /books
            - listitem [ref=e52]:
              - link "Computers" [ref=e53] [cursor=pointer]:
                - /url: /computers
            - listitem [ref=e54]:
              - link "Electronics" [ref=e55] [cursor=pointer]:
                - /url: /electronics
            - listitem [ref=e56]:
              - link "Apparel & Shoes" [ref=e57] [cursor=pointer]:
                - /url: /apparel-shoes
            - listitem [ref=e58]:
              - link "Digital downloads" [ref=e59] [cursor=pointer]:
                - /url: /digital-downloads
            - listitem [ref=e60]:
              - link "Jewelry" [ref=e61] [cursor=pointer]:
                - /url: /jewelry
            - listitem [ref=e62]:
              - link "Gift Cards" [ref=e63] [cursor=pointer]:
                - /url: /gift-cards
        - generic [ref=e64]:
          - strong [ref=e66]: Manufacturers
          - list [ref=e68]:
            - listitem [ref=e69]:
              - link "Tricentis" [ref=e70] [cursor=pointer]:
                - /url: /tricentis
        - generic [ref=e71]:
          - strong [ref=e73]: Newsletter
          - generic [ref=e75]:
            - text: "Sign up for our newsletter:"
            - textbox [ref=e77]
            - button "Subscribe" [ref=e79] [cursor=pointer]
      - generic [ref=e82]:
        - heading "Register" [level=1] [ref=e84]
        - generic [ref=e85]:
          - list [ref=e88]:
            - listitem [ref=e89]: The specified email already exists
          - generic [ref=e90]:
            - strong [ref=e92]: Your Personal Details
            - generic [ref=e93]:
              - generic [ref=e94]:
                - generic [ref=e95]: "Gender:"
                - generic [ref=e96]:
                  - radio "Male" [ref=e97]
                  - text: Male
                - generic [ref=e98]:
                  - radio "Female" [checked] [ref=e99]
                  - text: Female
              - generic [ref=e100]:
                - generic [ref=e101]: "First name:"
                - textbox "First name:" [ref=e102]: Mariam
                - text: "*"
              - generic [ref=e103]:
                - generic [ref=e104]: "Last name:"
                - textbox "Last name:" [ref=e105]: Tester
                - text: "*"
              - generic [ref=e106]:
                - generic [ref=e107]: "Email:"
                - textbox "Email:" [ref=e108]: MariamTester2@gmail.com
                - text: "*"
          - generic [ref=e109]:
            - strong [ref=e111]: Your Password
            - generic [ref=e112]:
              - generic [ref=e113]:
                - generic [ref=e114]: "Password:"
                - textbox "Password:" [ref=e115]: "123456"
                - text: "*"
              - generic [ref=e116]:
                - generic [ref=e117]: "Confirm password:"
                - textbox "Confirm password:" [ref=e118]: "123456"
                - text: "*"
          - button "Register" [ref=e120] [cursor=pointer]
  - generic [ref=e121]:
    - generic [ref=e122]:
      - generic [ref=e123]:
        - heading "Information" [level=3] [ref=e124]
        - list [ref=e125]:
          - listitem [ref=e126]:
            - link "Sitemap" [ref=e127] [cursor=pointer]:
              - /url: /sitemap
          - listitem [ref=e128]:
            - link "Shipping & Returns" [ref=e129] [cursor=pointer]:
              - /url: /shipping-returns
          - listitem [ref=e130]:
            - link "Privacy Notice" [ref=e131] [cursor=pointer]:
              - /url: /privacy-policy
          - listitem [ref=e132]:
            - link "Conditions of Use" [ref=e133] [cursor=pointer]:
              - /url: /conditions-of-use
          - listitem [ref=e134]:
            - link "About us" [ref=e135] [cursor=pointer]:
              - /url: /about-us
          - listitem [ref=e136]:
            - link "Contact us" [ref=e137] [cursor=pointer]:
              - /url: /contactus
      - generic [ref=e138]:
        - heading "Customer service" [level=3] [ref=e139]
        - list [ref=e140]:
          - listitem [ref=e141]:
            - link "Search" [ref=e142] [cursor=pointer]:
              - /url: /search
          - listitem [ref=e143]:
            - link "News" [ref=e144] [cursor=pointer]:
              - /url: /news
          - listitem [ref=e145]:
            - link "Blog" [ref=e146] [cursor=pointer]:
              - /url: /blog
          - listitem [ref=e147]:
            - link "Recently viewed products" [ref=e148] [cursor=pointer]:
              - /url: /recentlyviewedproducts
          - listitem [ref=e149]:
            - link "Compare products list" [ref=e150] [cursor=pointer]:
              - /url: /compareproducts
          - listitem [ref=e151]:
            - link "New products" [ref=e152] [cursor=pointer]:
              - /url: /newproducts
      - generic [ref=e153]:
        - heading "My account" [level=3] [ref=e154]
        - list [ref=e155]:
          - listitem [ref=e156]:
            - link "My account" [ref=e157] [cursor=pointer]:
              - /url: /customer/info
          - listitem [ref=e158]:
            - link "Orders" [ref=e159] [cursor=pointer]:
              - /url: /customer/orders
          - listitem [ref=e160]:
            - link "Addresses" [ref=e161] [cursor=pointer]:
              - /url: /customer/addresses
          - listitem [ref=e162]:
            - link "Shopping cart" [ref=e163] [cursor=pointer]:
              - /url: /cart
          - listitem [ref=e164]:
            - link "Wishlist" [ref=e165] [cursor=pointer]:
              - /url: /wishlist
      - generic [ref=e166]:
        - heading "Follow us" [level=3] [ref=e167]
        - list [ref=e168]:
          - listitem [ref=e169]:
            - link "Facebook" [ref=e170] [cursor=pointer]:
              - /url: http://www.facebook.com/nopCommerce
          - listitem [ref=e171]:
            - link "Twitter" [ref=e172] [cursor=pointer]:
              - /url: https://twitter.com/nopCommerce
          - listitem [ref=e173]:
            - link "RSS" [ref=e174] [cursor=pointer]:
              - /url: /news/rss/1
          - listitem [ref=e175]:
            - link "YouTube" [ref=e176] [cursor=pointer]:
              - /url: http://www.youtube.com/user/nopCommerce
          - listitem [ref=e177]:
            - link "Google+" [ref=e178] [cursor=pointer]:
              - /url: https://plus.google.com/+nopcommerce
    - generic [ref=e179]:
      - text: Powered by
      - link "nopCommerce" [ref=e180] [cursor=pointer]:
        - /url: http://www.nopcommerce.com/
    - generic [ref=e181]: Copyright © 2026 Tricentis Demo Web Shop. All rights reserved.
```

# Test source

```ts
  1  | const { test, expect } = require('@playwright/test');
  2  | const { POManager } = require('../pageObject/POManager');
  3  | 
  4  | test('User can register successfully', async ({ page }) => {
  5  | 
  6  |     const username = "Mariam"
  7  |     const lastname = "Tester"
  8  |     const email = "MariamTester2@gmail.com"
  9  |     const password = "123456"
  10 | 
  11 |     const pommanager = new POManager(page)
  12 | 
  13 |     // The returned object must be stored in a variable inside the test
  14 |     const homepage = pommanager.getHomePage()
  15 |     await homepage.goTo()
  16 |     await homepage.openRegisterPage()
  17 | 
  18 | 
  19 |     const registerpage = pommanager.getRegisterPage()
  20 |     registerpage.user_register(username, lastname, email, password)
  21 | 
> 22 |     console.log(await (registerpage.message).textContent())
     |                                              ^ Error: locator.textContent: Test timeout of 40000ms exceeded.
  23 |     expect(registerpage.message).toHaveText("Your registration completed")
  24 | 
  25 | 
  26 | 
  27 | 
  28 | 
  29 | 
  30 | 
  31 | 
  32 | 
  33 | })
```