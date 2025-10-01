# Terminal Portfolio - GitHub Pages<h1>Ainda vou fazer tudo, calma lá.</h1>

Portfólio interativo em formato de terminal que funciona 100% no GitHub Pages (frontend apenas).

## Acesso

Acesse em: `https://VertigoFromOuterSpace.github.io/vertigo.github.io`

## Estrutura do Projeto para GitHub Pages

```
vertigo.github.io/
├── index.html           # Página principal
├── css/
│   └── style.css        # Estilos
├── js/
│   └── terminal.js      # Lógica do terminal (frontend)
└── projetos/
    └── projetos.txt     # Seus projetos (editável)
```

## Como Funciona

- **100% Frontend**: Não requer servidor backend
- **Sistema de Arquivos Virtual**: Implementado em JavaScript
- **Comandos Unix-like**: ls, cd, cat, pwd, etc.
- **GitHub Pages Ready**: Basta fazer push e está online

## Comandos Disponíveis

Digite no terminal:
- `ls [dir]` - Lista arquivos
- `cd <dir>` - Muda diretório
- `cat <arquivo>` - Lê arquivos
- `pwd` - Diretório atual
- `help` - Lista comandos
- `about` - Sobre você
- `skills` - Suas habilidades
- `contact` - Contato
- `clear` - Limpa terminal

## Como Personalizar

### 1. Editar Seus Projetos

Edite o arquivo `projetos/projetos.txt` com seus projetos reais.

### 2. Adicionar Mais Arquivos

No arquivo `js/terminal.js`, adicione ao objeto `fileContents`:

```javascript
const fileContents = {
    '/projetos/projetos.txt': 'conteúdo...',
    '/novapasta/novoarquivo.txt': 'novo conteúdo...'
};
```

E ao objeto `filesystem`:

```javascript
const filesystem = {
    '/': ['projetos', 'novapasta'],
    '/projetos': ['projetos.txt'],
    '/novapasta': ['novoarquivo.txt']
};
```

### 3. Personalizar Informações

No arquivo `js/terminal.js`, edite as funções:
- `cmdAbout()` - Suas informações
- `cmdSkills()` - Suas habilidades
- `cmdContact()` - Seu contato

### 4. Mudar Cores

Edite `css/style.css`:
```css
body {
    background-color: #000000;  /* Fundo preto */
    color: #ff0000;             /* Texto vermelho */
}
```

## Deploy no GitHub Pages

### Opção 1: Via Interface Web

1. Vá em `Settings` do repositório
2. Clique em `Pages` (menu lateral)
3. Em `Source`, selecione `main` branch
4. Clique em `Save`
5. Aguarde alguns minutos
6. Acesse: `https://SEU-USUARIO.github.io/vertigo.github.io`

### Opção 2: Via Git

```bash
# Adicionar mudanças
git add .

# Commit
git commit -m "Deploy para GitHub Pages"

# Push
git push origin main
```

## Estrutura de Diretórios Virtual

```
/
└── projetos/
    └── projetos.txt
```

Para adicionar mais diretórios, edite o objeto `filesystem` em `js/terminal.js`.

## Tecnologias

- HTML5
- CSS3
- JavaScript (Vanilla)
- GitHub Pages

## Notas

- O backend Rust (`src/`, `Cargo.toml`) é opcional e usado apenas para desenvolvimento local
- Para GitHub Pages, apenas os arquivos da raiz (HTML, CSS, JS) são necessários
- O sistema de arquivos é virtual e vive na memória do navegador

## Desenvolvimento Local

Para testar localmente sem servidor:

```bash
# Opção 1: Python
python3 -m http.server 8000

# Opção 2: Node.js
npx serve

# Opção 3: PHP
php -S localhost:8000
```

Depois acesse: `http://localhost:8000`

## Licença

MIT
