describe('Create Question', () => {
    it('Validação de elementos', () => {
      login();
      
      cy.wait(2000);
      cy.get('#collasible-nav-dropdown').should('be.visible').click();

      cy.contains('.dropdown-item', 'Simulado/Perguntas').should('be.visible').click();

      cy.url().should('include', '/cadastrar-perguntas');
      
      cy.get('.QuestionRegistrationTitle h1').should('have.text', 'Registrar Questão');

      cy.get('#courseSelect').should('exist')
        .and('have.class', 'form-control w-7')
        .and('contain', 'Curso');
  
      cy.get('#courseSelect option').should('have.length', 11); 
  
      cy.get('select.form-control.w-7').eq(1).should('exist')
        .and('contain', 'Ano');
  
      cy.get('select.form-control.w-7').eq(1).find('option').should('have.length', 21); 
  
      cy.get('.checkboxLabelSimulated').within(() => {
        cy.get('input.checkboxSimulated').should('have.attr', 'type', 'checkbox');
        cy.contains('Simulado');
      });
  
      cy.get('.QuestionRegistrationInputs').within(() => {
        cy.get('label.questionLabel').should('have.text', 'Enunciado');
        cy.get('textarea#questionInput').should('have.class', 'inputQuestion')
          .and('have.attr', 'placeholder', 'Ex: Quanto é 2+2?');
      });
  
      cy.get('.QuestionRegistrationAlternatives').within(() => {
        cy.get('label.alternativesLabel').should('have.text', 'Alternativas');
  
        cy.get('.optionContainer').within(() => {
          cy.get('.optionInputContainer').should('have.length', 1);
  
          cy.get('.optionInputContainer').within(() => {
            cy.get('span').should('have.text', 'A)');
            cy.get('textarea.inputOption').should('have.attr', 'placeholder', 'Alternativa A)');
            cy.get('input.correctOptionCheckbox').should('have.attr', 'type', 'checkbox');
            cy.get('button.removeOptionButton').should('have.text', 'X');
          });
        });
      });
  
      cy.get('.QuestionRegistrationButtonsHolder').within(() => {
        cy.get('button.QuestionButton').eq(0).should('have.text', 'Adicionar');
        cy.get('button.QuestionButton').eq(1).should('have.text', 'Registrar Questão')
          .and('be.disabled');
      });
    });

  
  });

function login() {
    cy.visit("https://enadex-v1.vercel.app")

    cy.get('#navLinksEntrar').should('be.visible').click()

    cy.get('#email').should('be.visible').type('qa@gmail.com');
    cy.get('#password').should('be.visible').type('qa@123');

    cy.get('#exampleCheck1').should('be.visible').click()
    cy.contains('button', 'ENTRAR').should('be.visible').click()
}