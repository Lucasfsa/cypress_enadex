describe('Valid Navbar', () => {
    it('Validação de navbar', () => {
      login();
  
      cy.get('.navbar').should('be.visible');
  
      cy.get('.logoNav')
        .should('be.visible')
        .and('have.attr', 'src', '/assets/LogoEnadex-Dw0n8uwz.svg')
        .and('have.attr', 'alt', '');
      cy.get('.logoNav').parent('a').should('have.attr', 'href', '/');
  
      cy.get('a.navLinks[href="/"]').should('be.visible').and('have.attr', 'href', '/');

      cy.get('a.navLinks[href="/simulados"]').should('be.visible').and('have.attr', 'href', '/simulados');
  
      cy.get('[href="/banco-de-questoes"]').should('be.visible')
        .and('have.attr', 'href', '/banco-de-questoes')
        .and('have.class', 'active');
  
      cy.get('a.navLinks[href="/register-admin-teacher"]').should('be.visible').and('have.attr', 'href', '/register-admin-teacher');
  
      cy.get('a#collasible-nav-dropdown')
        .should('be.visible')
        .and('have.attr', 'aria-expanded', 'false')
        .and('have.class', 'dropdown-toggle nav-link');
  
      cy.get('span.navLinks').contains('Sair')
        .should('be.visible')
        .and('have.css', 'cursor', 'pointer');

      cy.get('#collasible-nav-dropdown')
        .should('be.visible')
        .and('have.attr', 'aria-expanded', 'false')
        .and('have.attr', 'role', 'button')
        .and('have.attr', 'tabindex', '0')
        .and('have.text', 'Recursos');
  
      cy.get('.navbar-nav').last().children('span')
        .should('be.visible')
        .and('have.text', 'Sair')
        .and('have.css', 'cursor', 'pointer');
    });
  });

function login() {
    cy.visit("https://enadex-v1.vercel.app")
    cy.visit("https://enadex-v1.vercel.app")

    cy.get('#navLinksEntrar').should('be.visible').click()

    cy.get('#email').should('be.visible').type('qa@gmail.com');
    cy.get('#password').should('be.visible').type('qa@123');

    cy.get('#exampleCheck1').should('be.visible').click()
    cy.contains('button', 'ENTRAR').should('be.visible').click()
}