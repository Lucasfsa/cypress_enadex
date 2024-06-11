describe('Cadastro Curso', () => {
    it('Validação de elementos', () => {

        login();

        cy.wait(2000);

        cy.get("#collasible-nav-dropdown").should("be.visible").click();

        cy.get("#responsive-navbar-nav > div > div.dropdown-text-white.nav-item.show.dropdown > div > a:nth-child(3)").should("be.visible").click();

        cy.url().should('include', '/cadastrar-curso');

        cy.get("#root > div > div.d-flex.justify-content-start.py-1.toMoveAway > div > button").should("be.visible").should("have.text", "Adicionar").click();

        cy.get("#modal-content-users > div.modal-header.d-flex.justify-content-between > button").should("be.visible").click();

        cy.get("#root > div > div.d-flex.justify-content-start.py-1.toMoveAway > div > button").should("be.visible").should("have.text", "Adicionar").click();

        cy.get("#modal-content-users > div.modal-header.d-flex.justify-content-between > div.mt-3 > img").should("be.visible");

        cy.get("#modal-content-users > div.modal-header.d-flex.justify-content-between > div:nth-child(2) > h5").should("be.visible").should("have.text", "Cadastro de Curso");

        cy.get("#modal-content-users > div.modal-body > form > div.row > div > div > label").should("be.visible").should("have.text", "Nome do curso");

        const uuid = () => Cypress._.random(0, 1e6);

        const id = uuid();

        cy.get("#input1").should("be.visible").type(id);

        cy.get("#modal-content-users > div.modal-body > form > div.modal-footer > div > button").should("be.visible").should("have.text", "Cadastrar").click();

        cy.get("#swal2-title").should("be.visible").should("have.text", "Sucesso!");

        cy.get("#swal2-html-container").should("be.visible").should("have.text", "Curso criado com sucesso!");

        cy.get("body > div.swal2-container.swal2-center.swal2-backdrop-show > div > div.swal2-actions > button.swal2-confirm.swal2-styled").should("be.visible").should("have.text", "OK").click();

        cy.wait(2000);

        cy.get("#root > div > div.divTableStyle > table").contains(id);

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
