describe('Elementos login', () => {
    it('Validação de elementos', () => {

        cy.visit("https://enadex-v1.vercel.app")
        cy.get('#navLinksEntrar').should('be.visible').click()

        cy.get('#email').should('be.visible');
        cy.get('#password').should('be.visible');

        cy.get('#exampleCheck1').should('be.visible');
        cy.get('#exampleCheck1 + label').should('have.text', 'MANTER CONECTADO');
     
        cy.get('.links-modal-forgot').should('have.attr', 'href', '/');
        cy.get('.links-modal-forgot').should('have.text', 'ESQUECEU A SENHA?');

        cy.get('.links-modal-login[href="/termos-uso"]').should('have.text', 'Termos de Uso');
        cy.get('.links-modal-login[href="/politica-privacidade"]').should('have.text', 'Política de Privacidade');

        cy.get('.modal-body button[type="submit"]').should('have.text', 'ENTRAR');

        
        cy.get('.links-modal-login[href="/"]').should('have.text', 'Crie sua conta aqui');

    });
});

describe('Tela login', () => {
    it('Validação de redirecionamento', () => {     

        cy.visit("https://enadex-v1.vercel.app")

        cy.get('#navLinksEntrar').should('be.visible').click()

        cy.get('#email').should('be.visible').type('qa@gmail.com');
        cy.get('#password').should('be.visible').type('qa@123');

        cy.get('#exampleCheck1').should('be.visible').click()
        cy.contains('button', 'ENTRAR').should('be.visible').click()

    });
});