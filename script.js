const c = 299792458; // m/s
const h = 6.62607015e-34; // J·s
const eV = 1.602176634e-19; // J

// Tab functionality
function openTab(evt, tabName) {
    let i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for(i=0;i<tabcontent.length;i++) tabcontent[i].style.display="none";
    tablinks = document.getElementsByClassName("tablinks");
    for(i=0;i<tablinks.length;i++) tablinks[i].className=tablinks[i].className.replace(" active","");
    document.getElementById(tabName).style.display="block";
    evt.currentTarget.className+=" active";
}
document.getElementsByClassName("tablinks")[0].click(); // open first tab by default

// Wavelength ↔ Frequency ↔ Photon Energy
function convertWavelength() {
    const val = parseFloat(document.getElementById('wl_inputValue').value);
    const inUnit = document.getElementById('wl_inputUnit').value;
    const outUnit = document.getElementById('wl_outputUnit').value;
    let result='';

    try{
        let lambda_m;
        if(inUnit==='nm') lambda_m=val*1e-9;
        else if(inUnit==='THz') lambda_m=c/(val*1e12);
        else if(inUnit==='eV') lambda_m=h*c/(val*eV);

        if(outUnit==='nm') result=(lambda_m*1e9).toFixed(3)+' nm';
        else if(outUnit==='THz') result=(c/lambda_m/1e12).toFixed(3)+' THz';
        else if(outUnit==='eV') result=(h*c/(lambda_m)/eV).toFixed(3)+' eV';

    } catch(err){ result='Error: '+err.message; }

    document.getElementById('wl_result').textContent=result;
}

// Pulse duration ↔ bandwidth
function convertPulse(){
    const tau_fs=parseFloat(document.getElementById('pulse_duration').value);
    const delta_nu=(0.44/(tau_fs*1e-15))/1e12; // THz
    document.getElementById('pulse_result').textContent=delta_nu.toFixed(3)+' THz';
}

// SFG / DFG
function calculateSFG(){
    const pump=parseFloat(document.getElementById('sfg_pump').value);
    const signal=parseFloat(document.getElementById('sfg_signal').value);
    const sfg=1/(1/pump+1/signal);
    document.getElementById('sfg_result').textContent='SFG Wavelength: '+sfg.toFixed(3)+' nm';
}
function calculateDFG(){
    const pump=parseFloat(document.getElementById('sfg_pump').value);
    const signal=parseFloat(document.getElementById('sfg_signal').value);
    const dfg=1/(1/pump-1/signal);
    document.getElementById('sfg_result').textContent='DFG Wavelength: '+dfg.toFixed(3)+' nm';
}

// OPO
function calculateOPO(){
    const pump=parseFloat(document.getElementById('opo_pump').value);
    const signal=parseFloat(document.getElementById('opo_signal').value);
    const idler=1/(1/pump-1/signal);
    document.getElementById('opo_result').textContent='Idler Wavelength: '+idler.toFixed(3)+' nm';
}

