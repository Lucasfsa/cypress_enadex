describe('Validação de envio', () => {
    it('Redirecionamento login', () => {

        cy.visit("https://enadex-v1.vercel.app")
        cy.get('#navLinksEntrar').should('be.visible').click()
        cy.get('.links-modal-forgot').should('be.visible').click()
      
        cy.get('input').should('be.visible')
        cy.get('#inputEmail').should('be.visible').type('qa@teste.com')

        cy.contains('button', 'Recuperar Senha').should('be.visible').click()
        cy.get('.modalconteudo').contains('Código de confirmação enviado!');
        cy.get('.modalconteudo').contains('Redefinir Senha');
    });
});

describe('Validação de redefinição de senha', () => {
    it('Validação de elementos', () => {

        cy.visit("https://enadex-v1.vercel.app")
        cy.get('#navLinksEntrar').should('be.visible').click()
        cy.get('.links-modal-forgot').should('be.visible').click()

        cy.get('#inputEmail').should('be.visible').type('qa@teste.com')
        cy.get('.recoverCode').should('be.visible')
        cy.get('.itemsRecuperacao > .buttonRecuperar').should('be.visible')
        cy.get('.recoverCode').should('be.visible').click()
        
        cy.get('#inputCodigo').should('be.visible');
        cy.get('#inputCodigo').type('123456');

        cy.get('#inputSenha').should('be.visible');
        cy.get('#inputSenha').type('NovaSenha123');

        cy.get('#inputConfirmacaoSenha').should('be.visible');
        cy.get('#inputConfirmacaoSenha').type('NovaSenha123');

        cy.get('span.tituloRedefinir').should('be.visible');
        cy.get('a#Reenviar').should('be.visible');
        cy.get('button.buttonRedefinir').should('be.visible');
    });
});