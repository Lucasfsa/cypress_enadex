describe('Elementos login', () => {
    it('Validação de elementos', () => {

        cy.visit("https://enadex-v1.vercel.app/login")

        cy.get('.logo').should('be.visible')

        cy.get('[type="email"]').should('be.visible').type('qa@gmail.com');
        cy.get('.passwordInput > input').should('be.visible').type('qa@123');

        cy.get('[type="email"]').should('be.enabled');
        cy.get('.passwordInput > input').should('be.enabled');

        cy.get('.buttonLogin').should('be.visible')

        cy.get('.forgotPasswordLink').should('be.visible').click()
        cy.url().should('include', '/esqueci-minha-senha');
        cy.visit("https://enadex-v1.vercel.app/login")


        cy.get('.createAccount').should('be.visible').click()
        cy.url().should('include', '/register');
        cy.visit("https://enadex-v1.vercel.app/login")

    });
});

describe('Tela login', () => {
    it('Validação de redirecionamento', () => {

        cy.visit("https://enadex-v1.vercel.app/login")

        cy.get('[type="email"]').should('be.visible').type('qa@gmail.com');
        cy.get('.passwordInput > input').should('be.visible').type('qa@123');

        cy.get('.buttonLogin').click()
        cy.url().should('include', '/');

    });
});