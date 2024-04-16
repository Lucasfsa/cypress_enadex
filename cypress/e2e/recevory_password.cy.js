describe('Redirect Esqueci minha senha -> Cadastro', () => {
    it('Redirecionamento login', () => {

        cy.visit("https://enadex-v1.vercel.app/")
        cy.contains('a.forgotPasswordLink', 'Esqueci minha senha').should('be.visible').click()
      
        cy.url().should('include', '/esqueci-minha-senha');

        cy.get('input').should('be.visible')
        cy.contains('button', 'Recuperar Senha').should('be.visible')

        
        cy.contains('a.linkVoltar', 'Voltar').should('be.visible').click()
        cy.url().should('include', '/login');
    });
});

describe('Validação Cadastro', () => {
    it('Validação de elentos', () => {

        cy.visit("https://enadex-v1.vercel.app/")
        cy.contains('a.forgotPasswordLink', 'Esqueci minha senha').should('be.visible').click()
      
        cy.url().should('include', '/esqueci-minha-senha');

        cy.get('input').should('be.visible')
        cy.contains('button', 'Recuperar Senha').should('be.visible')

        
        cy.contains('a.linkVoltar', 'Voltar').should('be.visible').click()
        cy.url().should('include', '/login');
    });
});