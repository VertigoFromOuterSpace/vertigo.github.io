# Guia de Comandos do Terminal

## Comandos de Navegação

### ls [diretório]
Lista os arquivos e diretórios no diretório atual ou especificado.

**Exemplos:**
```bash
ls              # Lista conteúdo do diretório atual
ls projetos     # Lista conteúdo da pasta projetos
```

### cd <diretório>
Muda para o diretório especificado.

**Exemplos:**
```bash
cd projetos     # Entra na pasta projetos
cd ..           # Volta para o diretório pai
cd /            # Vai para o diretório raiz
```

### pwd
Mostra o diretório atual.

**Exemplo:**
```bash
pwd             # Exibe: / ou /projetos
```

### cat <arquivo>
Mostra o conteúdo de um arquivo.

**Exemplos:**
```bash
cd projetos
cat projetos.txt        # Lê o arquivo no diretório atual
cat /projetos/projetos.txt  # Caminho absoluto
```

## Comandos de Informação

### help
Mostra todos os comandos disponíveis.

### about
Informações sobre o desenvolvedor.

### skills
Lista de habilidades técnicas.

### contact
Formas de contato.

### clear
Limpa o terminal.

## Estrutura de Diretórios

```
/
└── projetos/
    └── projetos.txt
```

## Dicas

1. O prompt mostra o diretório atual entre colchetes:
   ```
   ┌──(vfos㉿vfos)-[~]
   └─$
   ```

2. O símbolo `~` representa o diretório raiz (`/`)

3. Você pode usar caminhos relativos ou absolutos:
   - Relativo: `cd projetos` (a partir do diretório atual)
   - Absoluto: `cd /projetos` (a partir da raiz)

4. Para editar o conteúdo dos projetos, edite o arquivo:
   `projetos/projetos.txt`

## Exemplo de Uso Completo

```bash
# Listar o que tem na raiz
ls

# Entrar na pasta projetos
cd projetos

# Ver o conteúdo do arquivo
cat projetos.txt

# Voltar para a raiz
cd ..

# Verificar onde está
pwd
```
