# Diretrizes para IA (AGENTS.md)

Este documento define as regras e o contexto arquitetural do projeto **Desenvolvendo sustentabilidade em ambientes de aprendizagem** para guiar Agentes de IA e assistentes de programação.

## 📌 Contexto do Projeto

Este site hospeda os projetos "Plantando Consciência" e "Caminhos da Igualdade", voltados para a educação ambiental e redução de desigualdades no ambiente escolar. É um repositório de materiais desenvolvido como atividade extensionista de faculdade.

## 🛠️ Stack Tecnológico

- **HTML5 Vanilla**: Estrutura base da página.
- **CSS3 Vanilla**: Estilização com design limpo, moderno, responsivo (focado em Glassmorphism e Flexbox).
- **JavaScript Vanilla**: Lógica de roteamento simples (SPA - Single Page Application) e interatividade.

## 🏗️ Arquitetura

O projeto não utiliza nenhum build system ou framework (sem React, Vue, NPM, etc.).
- `index.html`: Contém apenas o esqueleto principal (Header, Nav, Footer e um `<main id="conteudo">` vazio).
- `css/styles.css`: Arquivo principal de estilos, contém as variáveis CSS (`:root`) e todo o design system.
- `scripts/content_handler.js`: O coração da aplicação. Todo o texto e estrutura das "páginas" (Home, Material, Contato) são injetados dinamicamente via JS através de Template Literals dentro deste arquivo.
- `docs/`: Contém os materiais desenvolvidos para o projeto.
- `img/`: Contém as imagens utilizadas no site.
- `scripts/`: Contém os scripts utilizados no site.

## ⚖️ Regras de Desenvolvimento

1. **Preserve a Arquitetura SPA Simples**: Não crie novos arquivos `.html` para novas páginas. O conteúdo deve ser adicionado como uma nova chave no objeto `conteudos` dentro do `content_handler.js`.
2. **Sem Frameworks**: O código deve permanecer 100% Vanilla (HTML, CSS e JS).
3. **Padrão de Código e Idioma**: 
   - Mantenha nomes de variáveis e funções preferencialmente em **Português** (`carregarConteudo`, `conteudoDiv`), acompanhando o padrão atual do projeto.
   - Todo o conteúdo escrito para os usuários finais e comentários no código devem ser em **Português do Brasil (pt-BR)**.
4. **Design UX/UI**: Preserve a estética atual (uso de variáveis de cores já definidas, fontes 'Outfit' e 'Lato', e as transições de *fade-in* ao trocar de abas).
