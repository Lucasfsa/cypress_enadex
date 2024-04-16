describe('Screen Home', () => {
    it('Validação de elementos', () => {
        cy.visit("https://enadex-v1.vercel.app")

        cy.get('ul').should('be.visible')
        cy.get('.col-md-8').should('have.text', 'Bem-vindo(a) à Enadex - Sua Plataforma Online de Preparação para o ENADE!')
        cy.get('.active').should('have.text', 'Home')

        cy.get('.col-md-9')
        .should('have.text', 'É com grande entusiasmo que lhe damos as boas-vindas à Enadex! Nossa plataforma web foi desenvolvida para ser sua aliada na jornada de preparação para o ENADE, oferecendo uma gama completa de recursos e ferramentas para ajudá-lo(a) a alcançar seus objetivos acadêmicos.Na Enadex, você encontrará uma vasta coleção de questões de concursos, simulados e materiais de estudo cuidadosamente selecionados para refletir o conteúdo e o formato do ENADE. Além disso, oferecemos um recurso de classificação (rank) para acompanhar seu progresso e compará-lo com outros estudantes, incentivando uma preparação ainda mais motivadora e engajadora.Explore nossa plataforma, navegue pelas diferentes seções e mergulhe nos recursos que preparamos especialmente para você. Esteja certo(a) de que estamos aqui para apoiá-lo(a) em cada etapa do caminho, fornecendo orientação personalizada e suporte dedicado.')
        
        cy.get('.logoHome').should('be.visible')
    })
})