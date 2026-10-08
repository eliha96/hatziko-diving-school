/* ==========================================================================
   Hatziko Diving School - Matrix Hacker Terminal Module
   ========================================================================== */

let terminalTimeouts = [];

export function clearTerminalTimeouts() {
    terminalTimeouts.forEach(t => clearTimeout(t));
    terminalTimeouts = [];
}

export function startTerminalStream() {
    const logsContainer = document.getElementById('terminal-logs');
    if (!logsContainer) return;

    // Completely clear terminal on open
    logsContainer.innerHTML = '';
    clearTerminalTimeouts();

    const initialLogs = [
        { delay: 600,   text: "initiating system...", type: "normal" },
        { delay: 2000,  text: "connecting to core mainframes...", type: "normal" },
        { delay: 3400,  text: "accessing database...", type: "normal" },
        { delay: 4800,  text: "bypassing security protocols...", type: "normal" },
        { delay: 6200,  text: "loading developer credentials...", type: "normal" },
        { delay: 7600,  text: "verifying identity...", type: "normal" },
        { delay: 9200,  text: "ERROR - we have an intruder!", type: "error" },
        { delay: 10800, text: "downloading virus...", type: "warning" },
        { delay: 12400, text: "[████████████████████████████████] 100% VIRUS INJECTED", type: "error" },
        { delay: 14000, text: "[CRITICAL] Firewall overridden from IP: 127.0.0.1", type: "error" },
        { delay: 15600, text: "[SYSTEM] Capturing security camera feed...", type: "warning" },
        { delay: 17200, text: "[ALERT] Intruder photo rendered successfully.", type: "warning" }
    ];

    initialLogs.forEach(item => {
        const timeout = setTimeout(() => {
            const line = document.createElement('p');
            line.className = 'log-line ' + (item.type === 'error' ? 'log-error' : (item.type === 'warning' ? 'log-warn' : ''));
            line.innerText = item.text;
            logsContainer.appendChild(line);
            logsContainer.scrollTop = logsContainer.scrollHeight;
        }, item.delay);
        terminalTimeouts.push(timeout);
    });

    const imageStartTime = 18800;

    // Display original matrix CRT green rat image with CATCH ME IF YOU CAN screen text
    const imgTimeout = setTimeout(() => {
        const imgWrapper = document.createElement('div');
        imgWrapper.className = 'rat-scanline-image-wrapper';
        
        const img = document.createElement('img');
        img.src = 'matrix_rat_catch_me_if_you_can.jpg';
        img.alt = 'Catch me if you can';
        img.className = 'rat-scanline-img';

        imgWrapper.appendChild(img);
        logsContainer.appendChild(imgWrapper);
        
        // Continuously scroll to keep bottom of expanding image visible
        let scrollCount = 0;
        const scrollInterval = setInterval(() => {
            logsContainer.scrollTop = logsContainer.scrollHeight;
            scrollCount++;
            if (scrollCount > 40) clearInterval(scrollInterval);
        }, 50);

        // When scanline animation finishes, ensure max-height is unconstrained
        setTimeout(() => {
            imgWrapper.style.maxHeight = 'none';
            logsContainer.scrollTop = logsContainer.scrollHeight;
        }, 1600);
    }, imageStartTime);
    terminalTimeouts.push(imgTimeout);
}
