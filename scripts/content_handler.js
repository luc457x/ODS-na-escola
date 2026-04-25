document.addEventListener('DOMContentLoaded', function() {
    // Show container animation on load
    setTimeout(() => {
        const conteudo = document.getElementById('conteudo');
        if (conteudo) {
            conteudo.classList.add('loaded');
        }
    }, 100);
    carregarConteudo('home');
});

function carregarConteudo(pagina) {
    const conteudoDiv = document.getElementById('conteudo');
    
    // Atualizar classe active nos botões de navegação
    document.querySelectorAll('.nav-btn').forEach(btn => {
        if (btn.getAttribute('data-target') === pagina) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });

    const conteudos = {
        'home': `
            <div class="content-section">
                <h1>Desenvolvendo ODS em abientes de aprendizagem</h1>

                <p>Este site é um repositório de materiais desenvolvidos durante a realização de atividade extensionista para a conclusão do curso de Análise e Desenvolvimento de Sistemas pelo aluno Lucas de Paula Teixeira.</p>
                <p>A Atividade extensionista foi desenvolvida pelo aluno para levar conhecimento e práticas sustentáveis, contribuindo para o desenvolvimento social, cultural e ambiental de sua comunidade e de qualquer outra comunidade que possa se beneficiar.</p>
                <p>Todo material contido neste repositório é de domínio público e pode ser utilizado livremente por qualquer pessoa.</p>

                <h2>Projeto Plantando Consciência</h2>
                
                <h3>🌱 A importância da educação ambiental desde a infância</h3>
                <p>Integrar práticas sustentáveis na escola é essencial para formar cidadãos conscientes e comprometidos com o futuro. O contato direto com a natureza desde cedo desenvolve empatia, responsabilidade e respeito pela vida, refletindo em atitudes mais sustentáveis na vida adulta.</p>
                
                <h3>🌿 Espaços verdes como aliados da aprendizagem e saúde</h3>
                <p>Ambientes escolares com áreas verdes estimulam a curiosidade e a concentração. Crianças com acesso à natureza apresentam melhor desempenho acadêmico, menos estresse e desenvolvem hábitos saudáveis, como atividades físicas ao ar livre e alimentação consciente.</p>
                
                <div class="material-card" style="margin-top: 2rem;">
                    <p style="margin:0; text-align:center; font-weight:600; color: var(--color-primary-dark); font-size: 1.15rem;">
                        Incluir a educação ambiental no currículo escolar é mais do que ensinar sobre reciclagem ou biodiversidade — é criar uma cultura de cuidado, pertencimento e transformação. É preparar nossos alunos para serem protagonistas de um mundo mais justo e equilibrado.
                    </p>
                </div>
                <br>
                <h2>Projeto Caminhos da Igualdade</h2>
                <h3>🎓 Educação como chave para reduzir desigualdades</h3>
                <p>Em um país marcado por diferenças profundas, a escola é o espaço onde se pode transformar realidades e construir um futuro mais justo. O acesso à educação de qualidade é essencial para romper ciclos de exclusão e ampliar oportunidades, especialmente para meninas, que enfrentam múltiplas barreiras. Ao valorizar a diversidade e promover a inclusão, a escola se torna um ponto de partida para a redução das desigualdades, permitindo que cada jovem trilhe seu próprio caminho com autonomia e dignidade.</p>
                <h3>👧 Meninas protagonistas: inclusão e equidade</h3>
                <p>Meninas da rede pública, muitas vezes, lidam com desafios que vão além da sala de aula: responsabilidades domésticas, falta de acesso à tecnologia e discriminação. Ao apoiar essas jovens, o projeto fortalece não só a igualdade de gênero, mas também combate desigualdades sociais, raciais e econômicas. Incentivar o protagonismo feminino é criar novas possibilidades, ampliar horizontes e inspirar sonhos, mostrando que a escola pode ser um espaço de acolhimento, respeito e transformação.</p>
                <div class="material-card" style="margin-top: 2rem;">
                    <p style="margin:0; text-align:center; font-weight:600; color: var(--color-primary-dark); font-size: 1.15rem;">
                        Caminhos da Igualdade é um convite para fortalecer a educação, com foco na redução das desigualdades e no protagonismo das meninas como agentes de mudança. Cada material inspira a construção de um Brasil mais justo, plural e inclusivo.
                    </p>
                </div>



            </div>
        `,
        'material': `
            <div class="content-section">
                <h1>Material do Projeto</h1>
                <p>A seguir estão reunidos os materiais desenvolvidos para a realização do projeto.</p>
                
                <div class="material-card" style="text-align: center;">
                    <p>Os arquivos estão disponíveis para download em formato ZIP, contendo os materiais em PDF e PNG, prontos para serem impressos ou utilizados em dispositivos digitais.</p>
                    <a href="./docs/projeto_plantando_consciencia.zip" class="material-download-btn" download>📥 Baixar Pacote de Arquivos (ZIP)</a>
                </div>
                
                <h2>Como usar o material?</h2>
                <div class="material-card">
                    <p>O material foi desenvolvido para ser utilizado pelo professor como um guia, podendo ser adaptado conforme a necessidade da turma e a realidade da escola.</p>
                    <p>Ele é composto pelos seguintes projetos:</p>
                    <ul>
                        <li>♻️ <strong>Projeto de Reciclagem:</strong> Voltado para a conscientização sobre resíduos sólidos.</li>
                        <li>🪴 <strong>Projeto de Horta Comunitária:</strong> Focado no contato direto com o plantio e a terra.</li>
                    </ul>
                    <p>Cada projeto está subdividido em duas partes para melhor adaptação à idade dos alunos do Ensino Fundamental (anos iniciais e anos finais).</p>
                    <p>Além do material desenvolvido por nós, o pacote inclui dois manuais da Embrapa para auxiliar tecnicamente no desenvolvimento do projeto da horta.</p>
                </div>
            </div>
        `,
        'contato': `
            <div class="content-section" style="text-align: center;">
                <h1>Entre em Contato</h1>
                <p>Para mais informações sobre o projeto, tirar dúvidas ou propor parcerias, entre em contato pelos meios abaixo. Será um prazer ajudar!</p>
                
                <div class="contatos-list">
                    <a href="https://api.whatsapp.com/send?phone=5522998923719" class="contato-link" target="_blank" rel="noopener noreferrer">
                        <span class="contato-icon">📱</span>
                        <h2>+55 (22) 99892-3719</h2>
                    </a>
                    
                    <a href="mailto:contato@lucas7x.win" class="contato-link" target="_blank" rel="noopener noreferrer">
                        <span class="contato-icon">✉️</span>
                        <h2>contato@lucas7x.win</h2>
                    </a>
                </div>
            </div>
        `
    };
    
    // Injetar o conteúdo HTML com animação de fade-in (via CSS animation e JS timing)
    conteudoDiv.style.opacity = '0';
    
    setTimeout(() => {
        conteudoDiv.innerHTML = conteudos[pagina] || '<div class="content-section"><h2 style="text-align:center;">Página não encontrada</h2></div>';
        conteudoDiv.style.opacity = '1';
    }, 200); // tempo para o fade-out rápido
}