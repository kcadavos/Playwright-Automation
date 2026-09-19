Feature: Ecommerce validations
    @Regression
    Scenario: Placing the Order
        Given a login to Ecommerce application with "ksmith@gmail.com" and "12345Pass"
        When Add "ZARA COAT 3" to Cart
        Then Verify "ZARA COAT 3" is displayed in the Cart
        When Enter valid details and Place the Order
        Then Verify order is place in OrderHistory