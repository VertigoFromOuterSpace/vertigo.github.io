# Guia Rápido: Deploy no GitHub Pages

## Passo a Passo

### 1. Verificar Arquivos Necessários

Certifique-se de que estes arquivos estão na raiz do repositório:

```
✓ index.html
✓ css/style.css
✓ js/terminal.js
✓ projetos/projetos.txt
```

### 2. Commit e Push

```bash
# Adicionar todos os arquivos
git add index.html css/ js/ projetos/

# Commit
git commit -m "Deploy terminal portfolio para GitHub Pages"

# Push para o repositório
git push origin main
```

### 3. Ativar GitHub Pages

1. Acesse: https://github.com/VertigoFromOuterSpace/vertigo.github.io
2. Clique em `Settings` (engrenagem no topo)
3. No menu lateral, clique em `Pages`
4. Em `Source`, selecione:
   - Branch: `main`
   - Folder: `/ (root)`
5. Clique em `Save`
6. Aguarde 2-3 minutos

### 4. Acessar o Site

Seu portfólio estará disponível em:
```
https://VertigoFromOuterSpace.github.io/vertigo.github.io
```

Ou se o repositório se chamar apenas `vertigo.github.io`:
```
https://VertigoFromOuterSpace.github.io
```

## Atualizações Futuras

Para fazer mudanças:

```bash
# 1. Edite os arquivos (projetos.txt, terminal.js, etc)

# 2. Commit e push
git add .
git commit -m "Atualização do portfólio"
git push origin main

# 3. Aguarde 1-2 minutos e recarregue a página
```

## Testar Localmente Antes

```bash
# Teste antes de fazer push
python3 -m http.server 8000

# Acesse: http://localhost:8000
# Teste todos os comandos
# Ctrl+C para parar o servidor
```

## Solução de Problemas

### Site não aparece?
- Aguarde 5-10 minutos após ativar Pages
- Verifique se a branch está correta (main)
- Limpe o cache do navegador (Ctrl+Shift+R)

### Comandos não funcionam?
- Verifique o console do navegador (F12)
- Certifique-se que `js/terminal.js` está no lugar certo
- Veja se há erros de JavaScript

### CSS não carrega?
- Verifique o caminho em `index.html`: `href="css/style.css"`
- Certifique-se que a pasta `css/` está na raiz

## Personalização Rápida

### Mudar seu nome no prompt:
Edite `index.html` e `js/terminal.js`, substitua `vfos` pelo seu nome.

### Adicionar seus projetos:
Edite `projetos/projetos.txt` com seus projetos reais.

### Mudar cores:
Edite `css/style.css`:
- `#000000` = fundo preto
- `#ff0000` = texto vermelho
- `#00ff00` = output verde

## Pronto!

Agora você tem um portfólio terminal interativo online! 🎉
