/// <reference types="cypress" />
import loginPage from '../../support/pages/loginUIPage';
const LoginPage = new loginPage();

describe('Login scenarios', function(){


    beforeEach(function () {
        cy.visit(Cypress.env("url"));
    });

    it('Verify login screen', function(){
        LoginPage.verifyLoginScreen();        
    })

    it('Login with invalid credentials', function(){
        LoginPage.loginWithInvalidCreds();
    })

    //Unable to create this scenario as I don't have valid credentials
    it('Login with valid credentials', function(){
        // LoginPage.loginWithValidCreds();
    })
})