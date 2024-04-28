describe('Redirect Esqueci minha senha -> Cadastro', () => {
    it('Redirecionamento login', () => {

        cy.visit("https://enadex-v1.vercel.app/")
        cy.get('.btn-acessar').click()

        cy.get('.forgotPasswordLink').should('be.visible').click()
        cy.url().should('include', '/esqueci-minha-senha');
      
        cy.get('input').should('be.visible')
        cy.contains('button', 'Recuperar Senha').should('be.visible')

        
        cy.contains('a.linkVoltar', 'Voltar').should('be.visible').click()
        cy.url().should('include', '/login');
    });
});

describe('Validação Cadastro', () => {
    it('Validação de elementos', () => {

        cy.visit("https://enadex-v1.vercel.app/")
        cy.get('.btn-acessar').click()

        cy.get('.forgotPasswordLink').should('be.visible').click()
        cy.url().should('include', '/esqueci-minha-senha');
      
        cy.get('#inputEmail').should('be.visible').type('jhondoe@gmail.com')       

        cy.get('.recoverCode').should('be.visible').click()
        cy.get('.modalRedefinir').should('be.visible')

        cy.get('#inputCodigo').should('be.visible').type('jhondoe@gmail.com')
        cy.get('#inputSenha').should('be.visible').type('jhondoe@gmail.com')
        cy.get('#inputConfirmacaoSenha').should('be.visible').type('jhondoe@gmail.com')

        cy.get('.modalConfirmar > a').should('be.visible')
        cy.get('.buttonRedefinir').should('be.visible')    
        cy.get('.fechar').should('be.visible').click()
    });
});