describe('Redirect Login -> Cadastro', () => {
    it('Redirecionamento login', () => {

        cy.visit("https://enadex-v1.vercel.app/")
        cy.contains('a.createAccount', 'Cadastrar-se').should('be.visible').click()
      
        cy.url().should('include', '/register');

        cy.contains('button', 'Voltar').should('be.visible').click()
        
        cy.url().should('include', '/login');
    });
});

/*describe('Validação de cadastro', () => {
    it('Validação de elementos', () => {

        cy.visit("https://enadex-v1.vercel.app/register")
        cy.get('body')
    });
});*/

