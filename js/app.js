const containerTerminal = document.querySelector('.containerTerminal');
const TerminalInput = document.getElementById('terminalInput');
const inputLine = document.querySelector('.input-line'); 

TerminalInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        const command = TerminalInput.value;
        const historyLine = document.createElement('div');
        historyLine.innerHTML = `<span class="prompt">
        ┌──(vfos㉿vfos)-[~]
        └─$</span> ${command}`;
        historyLine.classList.add('history-item');
        
        containerTerminal.insertBefore(historyLine, inputLine);

        processCommand(command);

        TerminalInput.value = '';
        containerTerminal.scrollTop = containerTerminal.scrollHeight;
    }
});

function processCommand(command) {
    const resultLine = document.createElement('div');
    if (command.trim() !== '') {

    }
    containerTerminal.insertBefore(resultLine, inputLine);
}