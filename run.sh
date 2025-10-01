#!/bin/bash

# Script para gerenciar o servidor Rust

case "$1" in
    start)
        echo "Iniciando servidor..."
        cargo run
        ;;
    dev)
        echo "Modo desenvolvimento (auto-reload)..."
        if ! command -v cargo-watch &> /dev/null; then
            echo "Instalando cargo-watch..."
            cargo install cargo-watch
        fi
        cargo watch -x run
        ;;
    build)
        echo "Compilando para produção..."
        cargo build --release
        echo "Binário disponível em: target/release/vertigo_terminal"
        ;;
    clean)
        echo "Limpando arquivos de build..."
        cargo clean
        ;;
    test)
        echo "Testando servidor..."
        curl -X POST http://localhost:8080/api/command \
          -H "Content-Type: application/json" \
          -d '{"command":"help"}'
        ;;
    *)
        echo "Terminal Portfolio - Comandos disponíveis:"
        echo ""
        echo "  ./run.sh start   - Inicia o servidor"
        echo "  ./run.sh dev     - Modo desenvolvimento (auto-reload)"
        echo "  ./run.sh build   - Build para produção"
        echo "  ./run.sh clean   - Limpa arquivos de build"
        echo "  ./run.sh test    - Testa a API"
        echo ""
        ;;
esac
