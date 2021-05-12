/// <reference types="cypress" />
import loginAPIPage from '../../support/pages/loginAPIPage';
const LoginAPIPage = new loginAPIPage();

describe('Login API scenarios', function(){

    it('Verify login API', function(){
        LoginAPIPage.loginAPI();        
    })

})