Feature: Ecommerce validations
    Scenario: Placing the Order
        Given a login to Ecommerce2 application with "ksmith@gmail.com" and "PassWrong"
        Then Verify Error Message is displayed