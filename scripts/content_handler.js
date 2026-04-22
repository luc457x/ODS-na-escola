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
                <h1>Projeto Plantando Consciência</h1>
                
                <h2>🌱 A importância da educação ambiental nas escolas</h2>
                <p>A educação ambiental nas escolas é essencial para formar cidadãos conscientes, saudáveis e comprometidos com o futuro do planeta. Ao integrar práticas sustentáveis e o contato direto com a natureza desde a primeira infância, promovemos não apenas o aprendizado, mas também o bem-estar físico e emocional dos alunos.</p>
                
                <h2>🌿 Espaços verdes como aliados da aprendizagem e da saúde</h2>
                <p>Ambientes escolares com áreas verdes estimulam a curiosidade, a criatividade e a concentração. Estudos mostram que crianças que têm acesso regular à natureza apresentam melhor desempenho acadêmico, menos estresse e maior capacidade de resolver problemas. Além disso, o contato com espaços naturais favorece hábitos saudáveis, como atividades físicas ao ar livre e alimentação consciente.</p>
                
                <h2>👶 Natureza desde cedo: um investimento no futuro</h2>
                <p>O vínculo com o meio ambiente deve começar na primeira infância, quando a criança está formando sua visão de mundo. Brincar na terra, observar animais e cuidar de plantas desenvolve empatia, responsabilidade e respeito pela vida. Esses valores, cultivados desde cedo, refletem em atitudes mais sustentáveis na vida adulta.</p>
                
                <div class="material-card" style="margin-top: 2rem;">
                    <p style="margin:0; text-align:center; font-weight:600; color: var(--color-primary-dark); font-size: 1.15rem;">
                        Incluir a educação ambiental no currículo escolar é mais do que ensinar sobre reciclagem ou biodiversidade — é criar uma cultura de cuidado, pertencimento e transformação. É preparar nossos alunos para serem protagonistas de um mundo mais justo e equilibrado.
                    </p>
                </div>
            </div>
        `,
        'material': `
            <div class="content-section">
                <h1>Material do Projeto</h1>
                <p style="text-align: center; font-size: 1.15rem; color: var(--color-text); margin-bottom: 2rem;">A seguir estão reunidos os materiais desenvolvidos para a realização do projeto.</p>
                
                <div class="material-card" style="text-align: center;">
                    <p>Os arquivos estão disponíveis para download em formato ZIP, contendo os materiais em PDF e PNG, prontos para serem impressos ou utilizados em dispositivos digitais.</p>
                    <a href="./docs/projeto_plantando_consciencia.zip" class="material-download-btn" download>📥 Baixar Pacote de Arquivos (ZIP)</a>
                </div>
                
                <h2>Como usar o material?</h2>
                <div class="material-card">
                    <p>O material foi desenvolvido para ser utilizado pelo professor como um guia, podendo ser adaptado conforme a necessidade da turma e a realidade da escola.</p>
                    <p>Ele é composto por duas partes:</p>
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
                <p style="font-size: 1.15rem;">Para mais informações sobre o projeto, tirar dúvidas ou propor parcerias, entre em contato pelos meios abaixo. Será um prazer ajudar!</p>
                
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