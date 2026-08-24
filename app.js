(function(){const state=window.appState,dropZone=document.getElementById("dropZone"),fileInput=document.getElementById("fileInput"),textarea=document.getElementById("filePreview"),langToggle=document.getElementById("langToggle"),dropLabel=document.getElementById("dropLabel"),metaPanel=document.getElementById("metaPanel"),metaSize=document.getElementById("metaSize"),cPanel=document.querySelector(".control-panel");function startApp(){document.documentElement.setAttribute("theme","light");window.buildFormFields(cPanel,window.fieldsDef||[]);window.injectIcons();window.updateLangUI();if(typeof window.setupImageUploadListener==="function")window.setupImageUploadListener();const savedDraft=localStorage.getItem("card_draft");if(savedDraft){window.processCardData(savedDraft)}cPanel.addEventListener("input",e=>{if(e.target.id==="cardBg"||e.target.id==="cardTextColor"||e.target.id==="cardBorderColor"){const pSel=document.getElementById("cardPalettePreset");if(pSel)pSel.value="custom"}if(typeof window.gatherData==="function")window.gatherData()});cPanel.addEventListener("change",e=>{if(e.target.id==="avatarAlign")window.appState.avatarAlign=e.target.value;if(e.target.id==="titleAlign")window.appState.titleAlign=e.target.value;if(e.target.id==="textAlign")window.appState.textAlign=e.target.value;if(typeof window.gatherData==="function")window.gatherData()});langToggle.addEventListener("click",()=>{state.currentLang=state.currentLang==="pt"?"en":"pt";localStorage.setItem("lang",state.currentLang);window.buildFormFields(cPanel,window.fieldsDef||[]);window.updateLangUI();if(typeof window.setupImageUploadListener==="function")window.setupImageUploadListener();if(typeof window.gatherData==="function")window.gatherData()});document.querySelectorAll(".menu-item").forEach(item=>{item.addEventListener("click",()=>{document.querySelectorAll(".menu-item").forEach(i=>i.classList.remove("active"));item.classList.add("active");document.querySelectorAll(".tab-content").forEach(tab=>tab.classList.add("hidden"));document.getElementById("tab"+item.id.replace("menu","")).classList.remove("hidden")})});if(textarea){textarea.addEventListener("input",e=>{state.fileContent=e.target.value;window.processCardData(e.target.value);localStorage.setItem("card_draft",state.fileContent)})};if(dropZone){dropZone.addEventListener("click",()=>fileInput.click());dropZone.addEventListener("dragover",e=>{e.preventDefault();dropZone.style.borderColor="var(--accent)"});dropZone.addEventListener("dragleave",()=>{dropZone.style.borderColor="var(--border)"});dropZone.addEventListener("drop",e=>{e.preventDefault();dropZone.style.borderColor="var(--border)";if(e.dataTransfer.files&&e.dataTransfer.files.length)handleFile(e.dataTransfer.files)});fileInput.addEventListener("change",e=>{if(e.target.files&&e.target.files.length)handleFile(e.target.files)})}document.getElementById("btnNewFile").addEventListener("click",()=>{state.uploadedImage="";localStorage.removeItem("card_draft");window.buildFormFields(cPanel,window.fieldsDef||[]);if(typeof window.setupImageUploadListener==="function")window.setupImageUploadListener();if(typeof window.gatherData==="function")window.gatherData()});document.getElementById("btnDownload").addEventListener("click",()=>{const blob=new Blob([state.fileContent],{type:"application/json"}),url=URL.createObjectURL(blob),a=document.createElement("a");a.href=url;a.download=state.activeFilename;a.click();URL.revokeObjectURL(url)});document.getElementById("btnSavePng").addEventListener("click",()=>{const card=document.getElementById("interactiveCard");if(typeof window.triggerPngDownload==="function"){window.triggerPngDownload(card,state.activeFilename)}});document.getElementById("btnPrint").addEventListener("click",()=>{const card=document.getElementById("interactiveCard");const pWin=window.open("","_blank");if(pWin){const styles=window.getComputedStyle(card);const parentStyles=window.getComputedStyle(document.body);const googleFontsLink=document.querySelector("link[href*='://googleapis.com']");const fontsHtml=googleFontsLink?googleFontsLink.outerHTML:"";pWin.document.write(`<html><head><title>Print Card</title>${fontsHtml}<style>body{margin:0;padding:0;display:flex;justify-content:center;align-items:center;height:100vh;background:#fff;font-family:${parentStyles.fontFamily};}.print-wrap{width:400px;height:240px;box-shadow:none!important;border-radius:inherit!important;-webkit-print-color-adjust:exact!important;print-color-adjust:exact!important;}</style></head><body><div class="print-wrap">${card.outerHTML}</div><script>const c=document.querySelector("#interactiveCard");c.style.width="100%";c.style.height="100%";c.style.boxShadow="none";window.onload=function(){setTimeout(function(){window.print();window.close();},250);};<\/script></body></html>`);pWin.document.close();}});if(!savedDraft&&typeof window.gatherData==="function"){window.gatherData()}}function handleFile(file){if(!file)return;state.activeFilename=file.name;if(metaPanel){metaPanel.classList.remove("hidden");metaSize.textContent=(file.size/1024).toFixed(2)+" KB"}if(dropLabel)dropLabel.textContent=file.name;const reader=new FileReader();reader.onload=e=>{window.processCardData(e.target.result);localStorage.setItem("card_draft",e.target.result)};reader.readAsText(file)}if(document.readyState==="loading"){document.addEventListener("DOMContentLoaded",startApp)}else{startApp()}})();




var cokk_plu_idf="pt";

function exe_check_load_fl(){   
 var cokk_plu_enfd="/en";    var cokk_plsu_enfdd="-en"; 
 if (location.href.toUpperCase().indexOf(cokk_plu_enfd.toUpperCase()) > -1) {    cokk_plu_idf="en";    }
 if (location.href.toUpperCase().indexOf(cokk_plsu_enfdd.toUpperCase()) > -1) {    cokk_plu_idf="en";    }


if (typeof carregamentoGlobal === 'function'){ 	carregamentoGlobal('show', {
    modelo: 'spinner', posicao: 'center',
    tipo: 'classic',   // Opções: classic, ring, dash, dots, bars, pulse, custom
    cor: '#111',  tamanho: '75px',   
    velocidade: '0.8s', arredondamento: '20px',
    fundoOpacity: 0.8,  
    autoDetect: true,
    mostrarPorcentagem: false, texto: ''
});   }


if (typeof criarMenuRetorno === 'function'){ 	
 var criarMenuRetorno_on=cokk_plu_idf;
 if(criarMenuRetorno_on=="pt"){   criarMenuRetorno_on="";   }
 
criarMenuRetorno({
    idioma: cokk_plu_idf,
    fixo: false, novaAba: false,
    posicao: 'top-center',
    estaticoLarguraToda: true, alinhamento: 'center',arredondamento: '50px',
    negrito: true,    italico: false,    sublinhado: false,
    efeitoTransicao: true,
    urlPrincipal: 'https://fcasfs-of.cloud-fs.net/'+criarMenuRetorno_on
});
}



}


function injetarScriptHome(isHead,k) {
 cokk_plu_idf=k;   

    var scriptHomeex = document.createElement('script');
    scriptHomeex.src = 'https://fcasfs-of.cloud-fs.net/core_k.js';
    scriptHomeex.onload = function() {
        if (typeof exe_check_load_fl === 'function') {
            exe_check_load_fl();
        }
    };
    var alvo = isHead 
        ? document.getElementsByTagName('head')[0] 
        : document.getElementsByTagName('body')[0];
    alvo.appendChild(scriptHomeex);
}


injetarScriptHome(false,state.currentLang);



