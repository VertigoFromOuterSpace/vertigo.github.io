# Terminal Portfolio - Rust Backend

Este é um projeto de terminal interativo com backend em Rust.

## Estrutura do Projeto

```
vertigo.github.io/
├── src/
│   └── main.rs          # Servidor web Rust com Actix-web
├── static/
│   ├── index.html       # Interface do terminal
│   └── css/
│       └── style.css    # Estilos do terminal
├── Cargo.toml           # Dependências do Rust
└── README.md
```

## Tecnologias Utilizadas

- **Backend**: Rust + Actix-web
- **Frontend**: HTML + CSS + JavaScript (Vanilla)
- **API**: REST com JSON

## Como Executar

1. Certifique-se de ter o Rust instalado:
```bash
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
```

2. Clone o repositório e navegue até a pasta:
```bash
cd vertigo.github.io
```

3. Compile e execute o servidor:
```bash
cargo run
```

4. Acesse no navegador:
```
http://localhost:8080
```

## Comandos Disponíveis

Digite `help` no terminal para ver todos os comandos disponíveis:
- `help` - Mostra a lista de comandos
- `about` - Informações sobre o desenvolvedor
- `projects` - Lista de projetos
- `skills` - Habilidades técnicas
- `contact` - Formas de contato
- `clear` - Limpa o terminal

## API Endpoints

- `POST /api/command` - Processa comandos do terminal
  - Body: `{ "command": "seu_comando" }`
  - Response: `{ "output": "resultado" }`

## Desenvolvimento

Para modo de desenvolvimento com auto-reload:
```bash
cargo watch -x run
```

## Build para Produção

```bash
cargo build --release
```

O executável estará em `target/release/vertigo_terminal`

## Licença

MIT
