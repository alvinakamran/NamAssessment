const routes = require("../../fixtures/routes.json")
class loginAPIPage{

    loginAPI(){
        cy.request(
            'GET', Cypress.config('baseUrl')+routes.loginEndpoint
        ).then(response => {
            expect(response.status).equal(200);
            expect(response.headers).to.include({'content-type': 'text/html'})
            expect(response.requestHeaders).to.include({'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.212 Safari/537.36'})
        })
    }

}

export default loginAPIPage;