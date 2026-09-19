Feature: Ecommerce validations
    @Regression
    Scenario: Placing the Order
        Given a login to Ecommerce application with "ksmith@gmail.com" and "12345Pass"
        When Add "ZARA COAT 3" to Cart
        Then Verify "ZARA COAT 3" is displayed in the Cart
        When Enter valid details and Place the Order
        Then Verify order is place in OrderHistory

    @Validataion
    Scenario Outline: Login validation
        Given a login to Ecommerce2 application with "<username>" and "<password>"
        Then Verify Error Message is displayed
        Examples: 
        |   username            |   password        |
        |   ksmith@gmail.com1   |   PasswordWrong   |
        |   kae@gmail.com       |   WrongAgain      |