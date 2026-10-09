# Spec (SPEC.md)

## 1. Overview & Goals

Desenvolvimento do site do projeto **Desenvolvendo sustentabilidade em ambientes de aprendizagem**, hospedando as iniciativas "Plantando Consciência" e "Caminhos da Igualdade" voltadas para a educação ambiental e redução de desigualdades no ambiente escolar. Repositório de materiais desenvolvido como atividade extensionista universitária.

## 2. Scope

Repositório web estático (SPA) para apresentação dos projetos, disponibilização e download de materiais didáticos e documentos extensionistas, e canal de contato.

## 3. Tech Stack

- **HTML5 Vanilla**: Estrutura base da página (`index.html`).
- **CSS3 Vanilla**: Estilização com Glassmorphism, Flexbox, variáveis de design system (`css/styles.css`), fontes 'Outfit' e 'Lato'.
- **JavaScript Vanilla**: SPA routing simples e injeção dinâmica de conteúdo via `scripts/content_handler.js`. Sem build systems ou frameworks.

## 4. Functional Requirements (FR)

- **FR1 (Shell Principal)**: O arquivo `index.html` fornece o esqueleto principal com Header, Nav, Footer e `<main id="conteudo">`.
- **FR2 (Injeção de Conteúdo)**: As seções ("home", "material", "contato") são injetadas dinamicamente no elemento `<main id="conteudo">` a partir do objeto `conteudos` via template literals em `scripts/content_handler.js`.
- **FR3 (Navegação SPA)**: Alternância de abas ativa a navegação, atualiza a classe `active` nos links e dispara animação de transição.

## 5. Business Rules (BR)

- **BR1 (Vanilla Absoluto)**: Manter código 100% Vanilla (HTML, CSS e JS). Sem frameworks (React, Vue, etc.) e sem build systems (npm, Vite, webpack).
- **BR2 (Integridade SPA)**: Não criar novos arquivos `.html` para novas páginas. Todo novo conteúdo deve ser adicionado como chave no objeto `conteudos` dentro de `scripts/content_handler.js`.
- **BR3 (Padrão de Nomenclatura e Idioma)**: Variáveis e funções preferencialmente em Português (`carregarConteudo`, `conteudoDiv`). Textos de interface e comentários no código estritamente em Português do Brasil (pt-BR).

## 6. Non-Functional Requirements (NFR)

- **NFR1 (Design UX/UI)**: Manter design limpo, moderno e responsivo, preservando a paleta de cores (`:root`), fontes 'Outfit' e 'Lato' e efeitos de Glassmorphism.
- **NFR2 (Transições Suaves)**: Preservar as transições de *fade-in* ao alternar entre abas de conteúdo.
- **NFR3 (Acessibilidade e Semântica)**: Estrutura HTML5 semântica e responsiva para diferentes dispositivos.

