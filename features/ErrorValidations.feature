Feature: Ecommerce validations
    Scenario Outline: Login Validation
        Given a login to Ecommerce2 application with "<username>" and "<password>"
        Then Verify Error Message is displayed

        Examples: 
        |   username            |   password        |
        |   ksmith@gmail.com1   |   PasswordWrong   |
        |   kae@gmail.com       |   WrongAgain      |