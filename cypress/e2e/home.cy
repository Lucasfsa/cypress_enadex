describe('Home', () => {
    it('Validação de elementos', () => {

        cy.visit("https://enadex-v1.vercel.app/")

        cy.get('.navLinksNoAuth').should('be.visible').should('have.text', 'Perguntas frequentes')

        cy.get('.navLinks').should('be.visible').should('have.text', 'Entrar')

        cy.get('.navLinkPrepareButton').should('be.visible').should('have.text', 'Quero me preparar')

        cy.get('.img-landing').should('be.visible')

        cy.get('.btn-acessar').should('be.visible').should('have.text', 'Comece agora!')

        cy.get('.img-exclamation').should('be.visible')

        cy.get('#root > div.container > div:nth-child(2) > div.col-12.col-md-6.d-flex.flex-column.justify-content-center.justify-content-md-center > h3').should('be.visible').should('have.text', 'Informações sobre a prova')

        cy.get('#root > div.container > div:nth-child(2) > div.col-12.col-md-6.d-flex.flex-column.justify-content-center.justify-content-md-center > p:nth-child(2)').should('be.visible').should('have.text', 'Tenha acesso a informações essenciais sobre o exame ENADE. Fique por dentro das datas importantes, estrutura da prova e como se preparar adequadamente.')

        cy.get('#root > div.container > div:nth-child(2) > div.col-12.col-md-6.d-flex.flex-column.justify-content-center.justify-content-md-center > p:nth-child(3)').should('be.visible').should('have.text', 'Calendário do ENADE: Consulte as datas e prazos importantes para inscrição e realização do exame. Formato da Prova: Conheça a estrutura e o tipo de questões que serão abordadas no exame. Orientações para o Dia da Prova: Saiba o que esperar no dia do exame e como se preparar psicologicamente.')

        cy.get('#root > div.container > div.row.mt-5.mb-5.pt-5.pb-5 > div:nth-child(1) > h3').should('be.visible').should('have.text', 'Informações gerais sobre a prova.')

        cy.get('#root > div.container > div.row.mt-5.mb-5.pt-5.pb-5 > div:nth-child(1) > p').should('be.visible').should('have.text', 'Dados gerais sobre a aplicação da prova')

        cy.get('#root > div.container > div.row.mt-5.mb-5.pt-5.pb-5 > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div > div.col-md-3 > img').should('be.visible')

        cy.get('#root > div.container > div.row.mt-5.mb-5.pt-5.pb-5 > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div > div.col-md-6 > h5').should('be.visible').should('have.text', '1 a 5')

        cy.get('#root > div.container > div.row.mt-5.mb-5.pt-5.pb-5 > div:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div > div.col-md-6 > p').should('be.visible').should('have.text', 'Notas Atribuidas')

        cy.get('#root > div.container > div.row.mt-5.mb-5.pt-5.pb-5 > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div > div.col-md-3 > img').should('be.visible')

        cy.get('#root > div.container > div.row.mt-5.mb-5.pt-5.pb-5 > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div > div.col-md-8 > h5').should('be.visible').should('have.text', '40%')

        cy.get('#root > div.container > div.row.mt-5.mb-5.pt-5.pb-5 > div:nth-child(2) > div:nth-child(1) > div:nth-child(2) > div > div.col-md-8 > p').should('be.visible').should('have.text', 'Dos cursos presenciais')

        cy.get('#root > div.container > div.row.mt-5.mb-5.pt-5.pb-5 > div:nth-child(2) > div.row.mt-3 > div:nth-child(1) > div > div.col-md-3 > img').should('be.visible')

        cy.get('#root > div.container > div.row.mt-5.mb-5.pt-5.pb-5 > div:nth-child(2) > div.row.mt-3 > div:nth-child(1) > div > div.col-md-8 > h5').should('be.visible').should('have.text', '48,7%')

        cy.get('#root > div.container > div.row.mt-5.mb-5.pt-5.pb-5 > div:nth-child(2) > div.row.mt-3 > div:nth-child(1) > div > div.col-md-8 > p').should('be.visible').should('have.text', 'Dos cursos EAD')

        cy.get('#root > div.container > div.row.mt-5.mb-5.pt-5.pb-5 > div:nth-child(2) > div.row.mt-3 > div:nth-child(2) > div > div.col-md-3 > img').should('be.visible')

        cy.get('#root > div.container > div.row.mt-5.mb-5.pt-5.pb-5 > div:nth-child(2) > div.row.mt-3 > div:nth-child(2) > div > div.col-md-8 > h5').should('be.visible').should('have.text', '26')

        cy.get('#root > div.container > div.row.mt-5.mb-5.pt-5.pb-5 > div:nth-child(2) > div.row.mt-3 > div:nth-child(2) > div > div.col-md-8 > p').should('be.visible').should('have.text', 'Áreas participantes')
        
        cy.get('.img-exclamation-list').should('be.visible')

        cy.get('#root > div.container > div:nth-child(4) > div.col-12.col-md-6.d-flex.flex-column.justify-content-center.justify-content-md-center > h3').should('be.visible').should('have.text', 'Simulado da prova')

        cy.get('#root > div.container > div:nth-child(4) > div.col-12.col-md-6.d-flex.flex-column.justify-content-center.justify-content-md-center > p:nth-child(2)').should('be.visible').should('have.text', 'Prepare-se para o exame com nossos simulados interativos. Teste seus conhecimentos com questões similares às do ENADE e receba um feedback imediato para melhorar seu desempenho.')

        cy.get('#root > div.container > div:nth-child(4) > div.col-12.col-md-6.d-flex.flex-column.justify-content-center.justify-content-md-center > p:nth-child(3)').should('be.visible').should('have.text', 'Acesse uma extensa biblioteca de questões abrangendo todos os tópicos do ENADE. Estude com questões passadas e amplie seu conhecimento sobre os temas mais relevantes.')

        clickAccordions();

        cy.get('#root > div.container > div:nth-child(6) > div > div > div').should('have.text',
            'O Enade é uma prova do Governo Federal que avalia o desempenho dos estudantes de cursos de graduação (bacharelados, licenciaturas e superiores de tecnologia).'
        )

        cy.get('#root > div.container > div:nth-child(7) > div > div > div').should('have.text',
            'Avaliar o rendimento dos concluintes dos cursos de graduação em relação aos conteúdos programáticos previstos nos respectivos componentes curriculares, com objetivo de conhecer a qualidade dos cursos e instituições de educação superior brasileiras. Os resultados do Enade, aliados às respostas do Questionário do Estudante, são insumos para o cálculo dos Indicadores de Qualidade da Educação Superior, que podem receber a nota de 1 a 5.'
        )

        cy.get('#root > div.container > div:nth-child(8) > div > div > div').should('have.text',
            'O ciclo avaliativo do ENADE define as áreas de conhecimento que terão os cursos avaliados a cada ano, consulte o portal ENADE para verificar se o seu curso será avaliado no ano vigente. O exame é aplicado aos estudantes ingressantes e concluintes habilitados de cursos de bacharelado e superiores de tecnologia.'
        )
        
        cy.get('#root > div.container > div:nth-child(9) > div > div > div').should('have.text',
            'a) ingressantes: aqueles que tenham iniciado o respectivo curso no ano vigente, estejam devidamente matriculados e tenham de 0 a 25% da carga horária mínima do currículo do curso integralizada até o último dia do período de retificação de inscrições do Enade; b) concluintes de cursos de bacharelado: aqueles que tenham integralizado 80% ou mais da carga horária mínima do currículo do curso definido pela IES e não tenham colado grau até o último dia do período de retificação de inscrições do Enade; ou aqueles com previsão de integralização de 100% da carga horária do curso até julho do ano vigente; c) concluintes de cursos superiores de tecnologia: aqueles que tenham integralizado 75% ou mais da carga horária mínima do currículo do curso definido pela IES e não tenham colado grau até o último dia do período de retificação de inscrições do Enade; ou aqueles com previsão de integralização de 100% da carga horária do curso até dezembro do ano vigente.'
        )
        
        cy.get('#root > div.container > div:nth-child(10) > div > div > div').should('have.text',
            'Prova (obrigatória);Questionário do Estudante (obrigatório): destinado a levantar informações que permitam caracterizar o perfil dos estudantes e o contexto de seus processos formativos, relevantes para a compreensão dos resultados dos estudantes no Enade;Questionário de Percepção de Prova: destinado a levantar informações que permitam aferir a percepção dos estudantes em relação à prova, auxiliando, também, na compreensão dos resultados dos estudantes no Enade;Questionário do Coordenador de Curso: destinado a levantar informações que permitam caracterizar o perfil do coordenador de curso e o contexto dos processos formativos, auxiliando, também, na compreensão dos resultados dos estudantes no Enade.'
        )
        
        cy.get('#root > div.container > div:nth-child(11) > div > div > div').should('have.text',
            'O Questionário do Estudante (QE) é destinado a levantar informações que permitam caracterizar o perfil dos estudantes e o contexto de seus processos formativos, relevantes para a compreensão dos resultados dos estudantes no ENADE e para subsidiar os processos de avaliação de cursos de graduação e de IES.'
        )
        
        cy.get('#root > div.container > div:nth-child(12) > div > div > div').should('have.text',
            'Quem não responder, não consegue consultar seu local de prova, fica em situação irregular junto ao Inep e não poderá colar grau até a finalização do processo.'
        )
        
        cy.get('#root > div.container > div:nth-child(13) > div > div > div').should('have.text',
            'Caso o estudante possua algum impedimento de ordem pessoal ou profissional, no dia da prova, ele deve atentar para o período de solicitação de dispensa da prova (xx/xx/xxxx a xx/xx/xxxx) realizando o pedido e anexando os documentos comprobatórios dentro no sistema ENADE.'
        )
        
        cy.get('#root > div.container > div:nth-child(14) > div > div > div').should('have.text',
            'Parte do cadastro no portal ENADE é feito pela própria instituição de ensino. É necessário complementar seu cadastro no portal e responder o questionário do aluno.'
        )
        
        cy.get('#root > div.container > div:nth-child(15) > div > div > div').should('have.text',
            'Será realizada em um único domingo, e a data, horário e local de realização ficará disponível no Cartão de Confirmação de Inscrição, com tempo de prova de até 4h.'
        )
        
        cy.get('#root > div.container > div:nth-child(16) > div > div > div').should('have.text',
            'Esta avaliação não tem nota mínima e não reprova ninguém, mas lembramos que quanto melhor for seu desempenho, melhor será avaliada a instituição de ensino em que você estudou. Fazer a prova de forma séria e com concentração pode valorizar ainda mais seu diploma e render frutos importantes ao seu futuro profissional.'
        )
        
        cy.get('#root > div.container > div:nth-child(17) > div > div > div').should('have.text',
            'A prova é dividida em duas partes, com situações-problema e estudos de caso. Geral (conhecimentos básicos, comum aos cursos de todas as áreas) com 10 questões no total - 1 (uma) discursiva e 9 (nove) de múltipla escolha;Específico (do seu curso) com 30 (trinta) questões no total - 1 (uma) discursiva e 29 (vinte e nove) de múltipla escolha.'
        )
        
        cy.get('#root > div.container > div:nth-child(18) > div > div > div').should('have.text',
            'Prepare-se conosco, buscamos abordar o melhor conteúdo para você, de acordo com seu curso através de questões de edições anteriores e “vídeo-aulas”.'
        )
        
        cy.get('#root > div.container > div:nth-child(19) > div > div > div').should('have.text',
            'As provas e os gabaritos das edições anteriores do ENADE estão disponíveis por meio do link: https://www.gov.br/inep/pt-br/areas-de-atuacao/avaliacao-e-exames-educacionais/enade/provas-e-gabaritos'
        )

        cy.get('#root > div.container > div:nth-child(20) > div:nth-child(1) > h1').should('be.visible').should('have.text', 'Faça parte dessa jornada!')

        cy.get('#root > div.container > div:nth-child(20) > div.d-flex.justify-content-center.mt-3 > a > button').should('be.visible').should('have.text', 'Acessar')

        cy.get('#navLinksPerguntas').click()
        cy.url().should('include', '/#perguntas');

    });
});

function clickAccordions(){

    cy.get('#root > div.container > div:nth-child(6) > div > h2 > button').click()
    cy.get('#root > div.container > div:nth-child(7) > div > h2 > button').click()
    cy.get('#root > div.container > div:nth-child(8) > div > h2 > button').click()
    cy.get('#root > div.container > div:nth-child(9) > div > h2 > button').click()
    cy.get('#root > div.container > div:nth-child(10) > div > h2 > button').click()
    cy.get('#root > div.container > div:nth-child(11) > div > h2 > button').click()
    cy.get('#root > div.container > div:nth-child(12) > div > h2 > button').click()
    cy.get('#root > div.container > div:nth-child(13) > div > h2 > button').click()
    cy.get('#root > div.container > div:nth-child(14) > div > h2 > button').click()
    cy.get('#root > div.container > div:nth-child(15) > div > h2 > button').click()
    cy.get('#root > div.container > div:nth-child(16) > div > h2 > button').click()
    cy.get('#root > div.container > div:nth-child(17) > div > h2 > button').click()
    cy.get('#root > div.container > div:nth-child(18) > div > h2 > button').click()
    cy.get('#root > div.container > div:nth-child(19) > div > h2 > button').click()

}
