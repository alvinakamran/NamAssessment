/// <reference types="cypress" />
class loginPage{

    //LOCATORS 

    loginText = "[class='text-center']";
    emailTextField = "[name='username']";
    passwordTextField = "[name='password']";
    eyeIcon = "[class='fa fa-eye']";
    forgotPassword = '[class="qa-login--link-forgot_password pull-right"]';
    signInButton = '[id="loginSubmitButton"]';
    errorMessage = '[ng-show="$messageTemplate"]';



    verifyLoginScreen(){

        cy.get(this.loginText)
          .should('be.visible')
          .and('contain', 'Login');
     
        cy.get(this.emailTextField)
          .should('have.attr','placeholder', 'Email or Username')
          .and('have.attr', 'type', 'text');

        cy.get(this.passwordTextField)
          .should('have.attr','placeholder', 'Password')
          .and('have.attr', 'type', 'password');

        cy.get(this.eyeIcon)
          .should('be.visible')
          
        cy.get(this.forgotPassword)
          .should('be.visible')
          .and('have.text', 'Forgot Password?')
        
        cy.get(this.signInButton)
          .should('be.visible')
          .and('contain', 'Sign In') 

    }

    loginWithInvalidCreds(){

        cy.get(this.emailTextField)
          .type('alvina@hotmail.com');
         
        cy.get(this.passwordTextField)
          .type('1234');
        
        cy.get(this.signInButton)
          .click();  

        cy.get(this.errorMessage, { timeout: 7000 })
          .should('be.visible')
          .and('contain', 'Username and/or password invalid');
    }

    loginWithValidCreds(){
      cy.get(this.emailTextField)
      .type('enterValidEmail');
     
    cy.get(this.passwordTextField)
      .type('enterValidPassword');
    
    cy.get(this.signInButton)
      .click();  
    }
}

export default loginPage;