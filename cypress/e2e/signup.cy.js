describe('Validação de elementos', () => {
    it('Deve exibir todos os campos e validações', () => {
            
        cy.visit("https://enadex-v1.vercel.app")
        cy.get('#navLinksEntrar').should('be.visible').click()
        cy.get('.links-modal-login[href="/"]').should('have.text', 'Crie sua conta aqui').click();
    
        cy.get('label[for="name"]').should('have.text', 'Nome');
        cy.get('#name').should('be.visible');
    
        cy.get('label[for="email"]').should('have.text', 'Email *');
        cy.get('#email').should('be.visible');
        cy.get('#email').should('have.attr', 'required');
    
        cy.get('label[for="curso"]').should('have.text', 'Curso');
        cy.get('#cursoSelect').should('be.visible');
        cy.get('#cursoSelect option').should('have.length', 2);
    
        cy.get('label[for="unidade"]').should('have.text', 'Unidade');
        cy.get('#unidade').should('be.visible');
        cy.get('#unidade option').should('have.length', 6);
    
        cy.get('label[for="matricula"]').should('have.text', 'Matrícula');
        cy.get('#matricula').should('be.visible');
    
        cy.get('label[for="semestre"]').should('have.text', 'Semestre');
        cy.get('#semestre').should('be.visible');
        cy.get('#semestre option').should('have.length', 11);
    
        cy.get('label[for="password"]').should('have.text', 'Senha');
        cy.get('#password').should('be.visible');
    
        cy.get('label[for="confirmPassword"]').should('have.text', 'Confirmar Senha');
        cy.get('#confirmPassword').should('be.visible');
    
        cy.get('.links-modal-login[href="/termos-uso"]').should('have.text', 'Termos de Uso');
        cy.get('.links-modal-login[href="/politica-privacidade"]').should('have.text', 'Política de Privacidade');
    
        cy.get('.modal-body button[type="submit"]').should('have.text', 'CRIAR CONTA');
    
        cy.get('.links-modal-login[href="/"]').should('have.text', 'Faça login aqui');
      });
    
});

describe('Modal de Cadastro', () => {
   
    it('Deve preencher todos os campos do formulário', () => {

      cy.visit("https://enadex-v1.vercel.app")
      cy.get('#navLinksEntrar').should('be.visible').click()
      cy.get('.links-modal-login[href="/"]').should('have.text', 'Crie sua conta aqui').click();

      cy.get('#name').type('John Doe');
  
      cy.get('#email').type('johndoe@example.com');
  
      cy.get('#cursoSelect').select('6636d04c2a9c00506b72601b');
  
      cy.get('#unidade').select('SALVADOR');
  
      cy.get('#matricula').type('123456');
  
      cy.get('#semestre').select('5');
  
      cy.get('#password').type('mypassword');
  
      cy.get('#confirmPassword').type('mypassword');
  
    //   cy.get('.modal-body button[type="submit"]').click();
    });
  });


