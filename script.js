const mainPage = document.getElementById('main');
const btn = document.getElementById('forcebsod');

btn.addEventListener("click", () => {
    mainPage.style.display = 'none';
    document.body.style.cursor = 'progress';
    const Load = document.createElement('h1');
    if (Load) {
        document.body.appendChild(Load);
        Load.innerHTML = 'Generating BSoD';
        Load.style.textAlign = 'center';
    }
    setTimeout(() => {
        Load.style.display = 'none';
        document.body.style.background = '#0078D7';
        document.body.style.color = '#ffffff';
        const v1 = document.getElementById('emote');
        const v2 = document.getElementById('wt1');
        const v3 = document.getElementById('stopcode');
        const bg = document.getElementById('bg');
        const tc = document.getElementById('textcolor');
        const wf = document.getElementById('whatfailed');
        let emote = String(v1.value) || ':(';
        let wtext1 = String(v2.value) || "Your PC ran into a problem and needs to restart. We're just collecting some error info, and then we'll restart for you.";
        let stpCode = String(v3.value) || 'IRQL_NOT_LESS_OR_EQUAL';
        let backg = String(bg.value) || '#0078D7';
        let textC = String(tc.value) || '#ffffff';
        let whatF = String(wf.value) || 'myfault.sys';
        const sadEm = document.createElement('h1');
        if (sadEm) {
            document.body.appendChild(sadEm);
            sadEm.innerHTML = emote;
            sadEm.style.fontSize = '8rem';
            sadEm.style.margin = '50px 170px';
        }
        
        const wTex1 = document.createElement('h1');
        if (wTex1) {
            document.body.appendChild(wTex1);
            wTex1.innerHTML = wtext1;
            wTex1.style.fontSize = '1.7rem';
            wTex1.style.width = '800px';
            wTex1.style.margin = '50px 170px';
        }

        const sCode = document.createElement('h1');
        if (sCode) {
            document.body.appendChild(sCode);
            sCode.style.fontSize = '1rem';
            sCode.style.width = '800px';
            sCode.style.margin = '50px 170px';
        }

        const wFail = document.createElement('h1');
        if (wFail) {
            document.body.appendChild(wFail);
            wFail.innerHTML = `What failed: ${whatF}`;
            wFail.style.fontSize = '1rem';
            wFail.style.width = '800px';
            wFail.style.margin = '50px 170px';
        }

        const bgs = document.createElement('h1');
        if (bgs) {
            document.body.style.background = backg;
            document.body.style.color = textC;
        }
        document.documentElement.requestFullscreen();
        document.body.style.cursor = 'none';
        document.body.style.userSelect = 'none';

        let bsodP = 0;
        const countUpLoop = setInterval(() => {
            bsodP += Math.floor(Math.random() * 5) + 1;
            if (bsodP > 100) {
                bsodP = 100;
                clearInterval(countUpLoop)
                const closeTimeout = setTimeout(() => {
                    window.location.reload()
                }, 500);
            };
            sCode.innerHTML = `<br>${bsodP}% complete<br><br>Stop Code: ${stpCode}`;
        }, 300);
    }, 3000);
});

const classcolor = document.getElementById('classcolor');
let backg = String(classcolor.value);
if (classcolor) {
classcolor.style.color = backg;
};
