describe('Create Student', () => {
    it('Validação de elementos', () => {
        login();

        cy.wait(2000);
        cy.get('#collasible-nav-dropdown').should('be.visible').click();

        cy.contains('.dropdown-item', 'Aluno').should('be.visible').click();

        cy.url().should('include', '/register-student');
        
        cy.get('button').contains('Adicionar').should('be.visible').click();

        cy.get('#modal-content-users').should('be.visible');

        cy.get('#modal-content-users').within(() => {
            cy.get('input[name="nameComplet"]').should('be.visible').type('Novo Aluno1');
            cy.get('select[name="course"]').should('be.visible').select('sistemas de informação');
            cy.get('input[name="registration"]').should('be.visible').type('123456789');
            cy.get('input[name="password"]').should('be.visible').type('senha123');
            cy.get('input[name="email"]').should('be.visible').type('novoaluno1@gmail.com');
            cy.get('select[name="unity"]').should('be.visible').select('ITABUNA');
            cy.get('select[name="semester"]').should('be.visible').select('1º Semestre');
            cy.get('input[name="confirmPassword"]').should('be.visible').type('senha123');

            cy.get('button').contains('Cadastrar').should('be.visible').click();
        });

        cy.get('.swal2-popup.swal2-modal.swal2-icon-success').should('be.visible');
        cy.get('#swal2-title').should('contain', 'Sucesso!');
        cy.get('#swal2-html-container').should('contain', 'Conta de usuário criada com sucesso!');
        cy.get('.swal2-confirm').should('be.visible').click();
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