# Migração para Rust - Estrutura do Projeto

## Migração Concluída!

O backend do seu terminal interativo agora está completamente em **Rust** usando o framework **Actix-web**.

## Nova Estrutura de Pastas

```
vertigo.github.io/
├── src/
│   └── main.rs              # Servidor Rust (backend)
├── static/                   # Arquivos servidos pelo servidor
│   ├── index.html           # Interface do terminal
│   └── css/
│       └── style.css        # Estilos
├── target/                   # Binários compilados (ignorado no git)
├── Cargo.toml               # Configuração e dependências
├── Cargo.lock               # Lock de versões
└── README_RUST.md           # Documentação

### Pastas antigas (podem ser removidas):
├── html/                    # Movido para static/
├── css/                     # Movido para static/css/
├── js/                      # JavaScript substituído por Rust
└── assets/                  # Não utilizado
```

## Como Usar

### 1. Executar o Servidor

```bash
cargo run
```

O servidor estará disponível em: **http://localhost:8080**

### 2. Modo Desenvolvimento (com auto-reload)

```bash
cargo install cargo-watch
cargo watch -x run
```

### 3. Build para Produção

```bash
cargo build --release
./target/release/vertigo_terminal
```

## Tecnologias

- **Backend**: Rust + Actix-web 4.4
- **Serialização**: Serde + Serde JSON
- **Runtime Assíncrono**: Tokio
- **Frontend**: HTML + CSS + JavaScript (Vanilla - mínimo necessário)

## API REST

### Endpoint de Comandos

**POST** `/api/command`

**Request:**
```json
{
  "command": "help"
}
```

**Response:**
```json
{
  "output": "Comandos disponíveis:\nhelp - Mostra esta mensagem\n..."
}
```

## Comandos Disponíveis

Digite no terminal:
- `help` - Lista de comandos
- `about` - Sobre você
- `projects` - Seus projetos
- `skills` - Suas habilidades
- `contact` - Informações de contato
- `clear` - Limpa o terminal

## Personalização

### Adicionar Novos Comandos

Edite `src/main.rs`, função `process_command`:

```rust
let output = match command {
    "meucomando" => {
        "Resposta do meu comando"
    }
    // ... outros comandos
}
```

### Modificar Estilos

Edite `static/css/style.css`

### Modificar Interface

Edite `static/index.html`

## Dependências

```toml
actix-web = "4.4"      # Framework web
actix-files = "0.6"    # Servir arquivos estáticos
serde = "1.0"          # Serialização
serde_json = "1.0"     # JSON
tokio = "1"            # Runtime assíncrono
```

## Próximos Passos

1. [X] Backend em Rust funcionando
2. [X] Interface HTML conectada ao backend
3. [X] Sistema de comandos implementado
4. [ ] Adicionar mais comandos personalizados
5. [ ] Implementar autenticação (opcional)
6. [ ] Deploy em produção (GitHub Pages + backend externo)

## Limpeza (Opcional)

Você pode remover as pastas antigas que não são mais necessárias:

```bash
rm -rf html/ css/ js/ assets/
```

⚠️ **Atenção**: Faça backup antes de deletar!

## Notas

- O JavaScript agora é mínimo e está embutido no HTML
- Toda a lógica de processamento está no backend Rust
- O frontend apenas envia comandos via fetch API
- O servidor serve os arquivos estáticos da pasta `static/`

---

**Desenvolvido com Rust**
