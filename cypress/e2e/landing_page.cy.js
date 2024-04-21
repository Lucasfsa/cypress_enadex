describe('Elementos landing page', () => {
    it('Validação de elementos', () => {
        cy.visit("https://enadex-v1.vercel.app/index")

        cy.get('.title-landing').should('be.visible').should('have.text', ' Bem vindo(a) á Enadex')

        cy.get('.col-md-5 > .mt-5').should('be.visible').should('have.text', 'Sua Plataforma Online de Preparação para o ENADE!')

        cy.get('.mb-4').should('be.visible').should('have.text', 'Na Enadex, você encontrará uma vasta coleção de questões de concursos, simulados e materiais de estudo cuidadosamente selecionados para refletir o conteúdo e o formato do ENADE. Além disso, oferecemos um recurso de classificação (rank) para acompanhar seu progresso e compará-lo com outros estudantes, incentivando uma preparação ainda mais motivadora e engajadora.')

        cy.get('.img-fluid').should('be.visible')

        cy.get('.btn-acessar').should('be.visible').should('have.text', 'Acessar')

        cy.get('.p-3').should('be.visible')

        cy.get('[href="/faq"]').should('be.visible')
        cy.get('[href="/itens-obrigatorios"]').should('be.visible') 
        cy.get('[href="/cursos"]').should('be.visible')
    })
})

describe('Tela landing page', () => {
    it('Validação de redirecionamento', () => {
        cy.visit("https://enadex-v1.vercel.app/index")

        cy.get('.btn-acessar').click()
        cy.url().should('include', '/login');

        cy.visit("https://enadex-v1.vercel.app/index")
        cy.get('[href="/faq"]').click()
        cy.url().should('include', '/faq');

        cy.visit("https://enadex-v1.vercel.app/index")
        cy.get('[href="/itens-obrigatorios"]').click()
        cy.url().should('include', '/itens-obrigatorios');

        cy.visit("https://enadex-v1.vercel.app/index")
        cy.get('[href="/cursos"]').click()
        cy.url().should('include', '/cursos');
    })
})