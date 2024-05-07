describe('Signup teatcher', () => {
    it('Cadastro professor', () => {

        cy.visit("https://enadex-v1.vercel.app")
        cy.get('.btn-acessar').should('be.visible').click()

        cy.get('[type="email"]').should('be.visible').type('qa@gmail.com');
        cy.get('.passwordInput > input').should('be.visible').type('qa@123');
        cy.get('#criarButton').click()

        cy.get('[href="/register-admin-teacher"]').should('be.visible').click();

        
        cy.get('input[name="nameComplet"]').should('be.visible').type('John Doe Silvester');
        cy.get('input[name="password"]').should('be.visible').type('123456');        
        cy.get('input[name="confirmPassword"]').should('be.visible').type('123456');        
        cy.get('input[name="email"]').should('be.visible').type('jhondoe@gmail.com');        
        cy.get('input[name="course"]').should('be.visible').type('Sistema de informação');        
        cy.get('#selectUnit').should('be.visible').select(1); 
        cy.contains('button', 'Cadastrar').should('be.visible')

    });
});
