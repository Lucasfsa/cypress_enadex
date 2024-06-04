describe('Student managment', () => {
    it('Validação de elementos', () => {
      login();
      
      cy.wait(2000);
      cy.get('#collasible-nav-dropdown').should('be.visible').click();

      cy.contains('.dropdown-item', 'Aluno').should('be.visible').click();

      cy.url().should('include', '/register-student');
      
      cy.get('.rounded').should('be.visible');

      cy.get('.d-flex.justify-content-start.py-3.toMoveAway.font').within(() => {

        cy.get('img').should('have.attr', 'src', '/assets/add-user-DGxsxhnk.png');
        cy.contains('h1', 'Gerenciamento de Alunos').should('be.visible');
      });

      cy.get('.d-flex.justify-content-start.py-1.toMoveAway').within(() => {
          cy.get('button').contains('Adicionar').should('be.visible');
      });

      cy.get('.divTableStyle').within(() => {
        cy.get('table').should('have.class', 'tableStyle');
        cy.get('thead').within(() => {
            cy.get('tr').within(() => {
                cy.get('th').eq(1).should('contain', 'Nome');
                cy.get('th').eq(2).should('contain', 'Email');
                cy.get('th').eq(3).should('contain', 'Registro');
                cy.get('th').eq(4).should('contain', 'Semestre');
                cy.get('th').eq(5).should('contain', 'Curso');
                cy.get('th').eq(6).should('contain', 'Unidade');
                cy.get('th').eq(7).should('contain', 'Status');
                cy.get('th').eq(8).should('contain', 'Ações');
            });
        });
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