describe('Redirect Login -> Cadastro', () => {
    it('Redirecionamento login', () => {

        cy.visit("https://enadex-v1.vercel.app")
        cy.get('.btn-acessar').should('be.visible').click()
        cy.get('.createAccount').should('be.visible').click()
        cy.url().should('include', '/register');
        cy.contains('button', 'Voltar').should('be.visible')

        cy.get('input[name="nameComplet"]').should('be.visible').type('John Doe Silvester');
        cy.get('input[name="registrationNumber"]').should('be.visible').type('1231233');        
        cy.get('input[name="password"]').should('be.visible').type('123456');        
        cy.get('input[name="confirmPassword"]').should('be.visible').type('123456');        
        cy.get('input[name="email"]').should('be.visible').type('jhondoe@gmail.com');        
        cy.get('input[name="course"]').should('be.visible').type('Sistema de informação');        
        cy.get('input[name="currentSemester"]').should('be.visible').type('9');        
        cy.get('#selectUnit').should('be.visible').select(1); 
      
    });
});


