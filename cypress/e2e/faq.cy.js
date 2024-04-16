describe('Screen FAQ', () => {
    it('Validação de elementos', () => {

        cy.visit("https://enadex-v1.vercel.app/login")

        cy.get('[type="email"]').should('be.visible').type('qa@gmail.com');
        cy.get('.passwordInput > input').should('be.visible').type('qa@123');

        cy.get('.buttonLogin').click()
        cy.url().should('include', '/');

        
        cy.visit("https://enadex-v1.vercel.app/faq")

        cy.get('.text-white').should('have.text', 'FAQ - Perguntas frequentes')

        clickAccordions();

        cy.get(':nth-child(2) > .mb-5 > .accordion-collapse > .accordion-body')
        .should("have.text", 'O Enade é uma prova do Governo Federal que avalia o desempenho dos estudantes de cursos de graduação (bacharelados, licenciaturas e superiores de tecnologia).')
        
        cy.get(':nth-child(3) > .mb-5 > .accordion-collapse > .accordion-body')
        .should("have.text", 'Avaliar o rendimento dos concluintes dos cursos de graduação em relação aos conteúdos programáticos previstos nos respectivos componentes curriculares, com objetivo de conhecer a qualidade dos cursos e instituições de educação superior brasileiras. Os resultados do Enade, aliados às respostas do Questionário do Estudante, são insumos para o cálculo dos Indicadores de Qualidade da Educação Superior, que podem receber a nota de 1 a 5.')

        cy.get(':nth-child(4) > .mb-5 > .accordion-collapse > .accordion-body')
        .should("have.text", 'O ciclo avaliativo do ENADE define as áreas de conhecimento que terão os cursos avaliados a cada ano, consulte o portal ENADE para verificar se o seu curso será avaliado no ano vigente. O exame é aplicado aos estudantes ingressantes e concluintes habilitados de cursos de bacharelado e superiores de tecnologia.')

        cy.get(':nth-child(5) > .mb-5 > .accordion-collapse > .accordion-body')
        .should("have.text", 'a) ingressantes: aqueles que tenham iniciado o respectivo curso no ano vigente, estejam devidamente matriculados e tenham de 0 a 25% da carga horária mínima do currículo do curso integralizada até o último dia do período de retificação de inscrições do Enade; b) concluintes de cursos de bacharelado: aqueles que tenham integralizado 80% ou mais da carga horária mínima do currículo do curso definido pela IES e não tenham colado grau até o último dia do período de retificação de inscrições do Enade; ou aqueles com previsão de integralização de 100% da carga horária do curso até julho do ano vigente; c) concluintes de cursos superiores de tecnologia: aqueles que tenham integralizado 75% ou mais da carga horária mínima do currículo do curso definido pela IES e não tenham colado grau até o último dia do período de retificação de inscrições do Enade; ou aqueles com previsão de integralização de 100% da carga horária do curso até dezembro do ano vigente.')

        cy.get(':nth-child(6) > .mb-5 > .accordion-collapse > .accordion-body')
        .should("have.text", 'Prova (obrigatória);Questionário do Estudante (obrigatório): destinado a levantar informações que permitam caracterizar o perfil dos estudantes e o contexto de seus processos formativos, relevantes para a compreensão dos resultados dos estudantes no Enade;Questionário de Percepção de Prova: destinado a levantar informações que permitam aferir a percepção dos estudantes em relação à prova, auxiliando, também, na compreensão dos resultados dos estudantes no Enade;Questionário do Coordenador de Curso: destinado a levantar informações que permitam caracterizar o perfil do coordenador de curso e o contexto dos processos formativos, auxiliando, também, na compreensão dos resultados dos estudantes no Enade.')

        cy.get(':nth-child(7) > .mb-5 > .accordion-collapse > .accordion-body')
        .should("have.text", 'O Questionário do Estudante (QE) é destinado a levantar informações que permitam caracterizar o perfil dos estudantes e o contexto de seus processos formativos, relevantes para a compreensão dos resultados dos estudantes no ENADE e para subsidiar os processos de avaliação de cursos de graduação e de IES.')

        cy.get(':nth-child(8) > .mb-5 > .accordion-collapse > .accordion-body')
        .should("have.text", 'Quem não responder, não consegue consultar seu local de prova, fica em situação irregular junto ao Inep e não poderá colar grau até a finalização do processo.')
        
        cy.get(':nth-child(9) > .mb-5 > .accordion-collapse > .accordion-body')
        .should("have.text", 'Caso o estudante possua algum impedimento de ordem pessoal ou profissional, no dia da prova, ele deve atentar para o período de solicitação de dispensa da prova (xx/xx/xxxx a xx/xx/xxxx) realizando o pedido e anexando os documentos comprobatórios dentro no sistema ENADE.')
        
        cy.get(':nth-child(10) > .mb-5 > .accordion-collapse > .accordion-body')
        .should("have.text", 'Parte do cadastro no portal ENADE é feito pela própria instituição de ensino. É necessário complementar seu cadastro no portal e responder o questionário do aluno.')
        
        cy.get(':nth-child(11) > .mb-5 > .accordion-collapse > .accordion-body')
        .should("have.text", 'Será realizada em um único domingo, e a data, horário e local de realização ficará disponível no Cartão de Confirmação de Inscrição, com tempo de prova de até 4h.')
        
        cy.get(':nth-child(12) > .mb-5 > .accordion-collapse > .accordion-body')
        .should("have.text", 'Esta avaliação não tem nota mínima e não reprova ninguém, mas lembramos que quanto melhor for seu desempenho, melhor será avaliada a instituição de ensino em que você estudou. Fazer a prova de forma séria e com concentração pode valorizar ainda mais seu diploma e render frutos importantes ao seu futuro profissional.')
        
        cy.get(':nth-child(13) > .mb-5 > .accordion-collapse > .accordion-body')
        .should("have.text", 'A prova é dividida em duas partes, com situações-problema e estudos de caso. Geral (conhecimentos básicos, comum aos cursos de todas as áreas) com 10 questões no total - 1 (uma) discursiva e 9 (nove) de múltipla escolha;Específico (do seu curso) com 30 (trinta) questões no total - 1 (uma) discursiva e 29 (vinte e nove) de múltipla escolha.')
        
        cy.get(':nth-child(14) > .mb-5 > .accordion-collapse > .accordion-body')
        .should("have.text", 'Prepare-se conosco, buscamos abordar o melhor conteúdo para você, de acordo com seu curso através de questões de edições anteriores e “vídeo-aulas”.')
        
        cy.get(':nth-child(15) > .mb-5 > .accordion-collapse > .accordion-body')
        .should("have.text", 'As provas e os gabaritos das edições anteriores do ENADE estão disponíveis por meio do link: https://www.gov.br/inep/pt-br/areas-de-atuacao/avaliacao-e-exames-educacionais/enade/provas-e-gabaritos')

        clickAccordions();
    });
});

function clickAccordions(){
    cy.get(':nth-child(2) > .mb-5 > .accordion-header > .accordion-button').click()
    cy.get(':nth-child(3) > .mb-5 > .accordion-header > .accordion-button').click()
    cy.get(':nth-child(4) > .mb-5 > .accordion-header > .accordion-button').click()
    cy.get(':nth-child(5) > .mb-5 > .accordion-header > .accordion-button').click()
    cy.get(':nth-child(6) > .mb-5 > .accordion-header > .accordion-button').click()
    cy.get(':nth-child(7) > .mb-5 > .accordion-header > .accordion-button').click()
    cy.get(':nth-child(9) > .mb-5 > .accordion-header > .accordion-button').click()
    cy.get(':nth-child(10) > .mb-5 > .accordion-header > .accordion-button').click()
    cy.get(':nth-child(11) > .mb-5 > .accordion-header > .accordion-button').click()
    cy.get(':nth-child(12) > .mb-5 > .accordion-header > .accordion-button').click()
    cy.get(':nth-child(13) > .mb-5 > .accordion-header > .accordion-button').click()
    cy.get(':nth-child(14) > .mb-5 > .accordion-header > .accordion-button').click()
    cy.get(':nth-child(15) > .mb-5 > .accordion-header > .accordion-button').click()

}