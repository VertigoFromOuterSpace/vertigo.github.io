// Sistema de arquivos virtual
const filesystem = {
    '/': ['projetos'],
    '/projetos': ['projetos.txt']
};

const fileContents = {
    '/projetos/projetos.txt': `=== MEUS PROJETOS ===

1. Terminal Portfolio
   - Portfólio interativo em formato de terminal
   - Tecnologias: JavaScript, HTML/CSS
   - Status: Em desenvolvimento

2. [Adicione seus projetos aqui]
   - Descrição do projeto
   - Tecnologias utilizadas
   - Status

3. [Outro projeto]
   - Descrição
   - Tecnologias
   - Status

=== FIM ===`
};

// Estado do terminal
let currentDir = '/';

// Elementos DOM
const containerTerminal = document.querySelector('.containerTerminal');
const terminalInput = document.getElementById('terminalInput');
const inputLine = document.querySelector('.input-line');
const outputTerminal = document.querySelector('.outputTerminal');
const currentDirSpan = document.getElementById('currentDir');

// Atualiza o prompt
function updatePrompt() {
    const displayDir = currentDir === '/' ? '~' : currentDir;
    currentDirSpan.textContent = displayDir;
}

// Processa comandos
function processCommand(commandLine) {
    const parts = commandLine.trim().split(/\s+/);
    const command = parts[0];
    const args = parts.slice(1);

    switch (command) {
        case 'ls':
            return cmdLs(args);
        case 'cd':
            return cmdCd(args);
        case 'cat':
            return cmdCat(args);
        case 'pwd':
            return cmdPwd();
        case 'help':
            return cmdHelp();
        case 'about':
            return cmdAbout();
        case 'skills':
            return cmdSkills();
        case 'contact':
            return cmdContact();
        case 'clear':
            return { output: 'CLEAR_TERMINAL' };
        case '':
            return { output: '' };
        default:
            return { output: `bash: ${command}: comando não encontrado` };
    }
}

// Comando ls
function cmdLs(args) {
    const dir = args.length > 0 ? args[0] : currentDir;
    const targetDir = resolvePath(dir);
    
    if (filesystem[targetDir]) {
        return { output: filesystem[targetDir].join('  ') };
    } else {
        return { output: `ls: não foi possível acessar '${dir}': Arquivo ou diretório inexistente` };
    }
}

// Comando cd
function cmdCd(args) {
    if (args.length === 0) {
        currentDir = '/';
        updatePrompt();
        return { output: '' };
    }

    const target = args[0];
    let newPath;

    if (target === '..') {
        if (currentDir === '/') {
            newPath = '/';
        } else {
            newPath = '/';
        }
    } else if (target.startsWith('/')) {
        newPath = target;
    } else if (currentDir === '/') {
        newPath = '/' + target;
    } else {
        newPath = currentDir + '/' + target;
    }

    if (filesystem[newPath] || newPath === '/') {
        currentDir = newPath;
        updatePrompt();
        return { output: '' };
    } else {
        return { output: `cd: ${target}: Arquivo ou diretório inexistente` };
    }
}

// Comando cat
function cmdCat(args) {
    if (args.length === 0) {
        return { output: 'cat: faltando operando' };
    }

    const filePath = resolvePath(args[0]);
    
    if (fileContents[filePath]) {
        return { output: fileContents[filePath] };
    } else {
        return { output: `cat: ${args[0]}: Arquivo ou diretório inexistente` };
    }
}

// Comando pwd
function cmdPwd() {
    return { output: currentDir };
}

// Comando help
function cmdHelp() {
    return {
        output: `Comandos disponíveis:
ls [dir]       - Lista arquivos e diretórios
cd <dir>       - Muda de diretório
cat <arquivo>  - Mostra conteúdo de arquivo
pwd            - Mostra diretório atual
help           - Mostra esta mensagem
about          - Informações sobre o desenvolvedor
skills         - Minhas habilidades
contact        - Formas de contato
clear          - Limpa o terminal`
    };
}

// Comando about
function cmdAbout() {
    return {
        output: `Desenvolvedor Full Stack apaixonado por tecnologia.
Especializado em Web Development e muito mais!`
    };
}

// Comando skills
function cmdSkills() {
    return {
        output: `Skills:
- Rust
- JavaScript/TypeScript
- HTML/CSS
- Git
- Linux`
    };
}

// Comando contact
function cmdContact() {
    return {
        output: `Contato:
GitHub: VertigoFromOuterSpace
Email: seu-email@exemplo.com`
    };
}

// Resolve caminhos relativos/absolutos
function resolvePath(path) {
    if (path.startsWith('/')) {
        return path;
    }
    
    if (currentDir === '/') {
        return '/' + path;
    } else {
        return currentDir + '/' + path;
    }
}

// Event listener para Enter
terminalInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        const command = terminalInput.value;
        
        // Adiciona comando ao histórico
        const displayDir = currentDir === '/' ? '~' : currentDir;
        const historyLine = document.createElement('div');
        historyLine.innerHTML = `<div class="history-prompt">┌──(vfos㉿vfos)-[${displayDir}]</div><div class="history-command">└─$ ${command}</div>`;
        historyLine.classList.add('history-item');
        outputTerminal.appendChild(historyLine);

        // Processa comando
        if (command.trim() !== '') {
            const result = processCommand(command);
            
            if (result.output === 'CLEAR_TERMINAL') {
                outputTerminal.innerHTML = '';
            } else if (result.output) {
                const resultLine = document.createElement('div');
                resultLine.textContent = result.output;
                resultLine.classList.add('output-line');
                outputTerminal.appendChild(resultLine);
            }
        }

        terminalInput.value = '';
        containerTerminal.scrollTop = containerTerminal.scrollHeight;
    }
});

// Inicializa
updatePrompt();
