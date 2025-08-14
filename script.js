const c = 299792458; // m/s
const h = 6.62607015e-34; // J·s
const eV = 1.602176634e-19; // J

// Define units for each conversion type
const unitsMap = {
    wavelength_freq: ['nm', 'THz'],
    wavelength_energy: ['nm', 'eV'],
    pulse_bandwidth: ['fs', 'THz']
};

function updateUnits() {
    const type = document.getElementById('paramType').value;
    const inputUnit = document.getElementById('inputUnit');
    const outputUnit = document.getElementById('outputUnit');

    inputUnit.innerHTML = '';
    outputUnit.innerHTML = '';

    unitsMap[type].forEach(u => {
        inputUnit.innerHTML += `<option value="${u}">${u}</option>`;
        outputUnit.innerHTML += `<option value="${u}">${u}</option>`;
    });
}

// Initialize units
updateUnits();

function convertLaser() {
    const type = document.getElementById('paramType').value;
    const val = parseFloat(document.getElementById('inputValue').value);
    const inUnit = document.getElementById('inputUnit').value;
    const outUnit = document.getElementById('outputUnit').value;
    const resultElement = document.getElementById('laserResult');

    let resultText = '';

    try {
        if(type === 'wavelength_freq') {
            let lambda_m = inUnit === 'nm' ? val*1e-9 : c/(val*1e12);
            let freq_Hz = c/lambda_m;
            resultText = outUnit === 'nm' ? `${(lambda_m*1e9).toFixed(3)} nm`
                                          : `${(freq_Hz/1e12).toFixed(3)} THz`;

        } else if(type === 'wavelength_energy') {
            let lambda_m = inUnit === 'nm' ? val*1e-9 : h*c/(val*eV);
            let energy_eV = h*c/lambda_m/eV;
            resultText = outUnit === 'nm' ? `${(lambda_m*1e9).toFixed(3)} nm`
                                          : `${energy_eV.toFixed(3)} eV`;

        } else if(type === 'pulse_bandwidth') {
            let tau_fs = inUnit === 'fs' ? val : val*1e3;
            let delta_nu_THz = 0.44 / (tau_fs*1e-15) / 1e12;
            resultText = outUnit === 'fs' ? `${tau_fs.toFixed(3)} fs`
                                          : `${delta_nu_THz.toFixed(3)} THz`;
        }
    } catch(err) {
        resultText = 'Error: ' + err.message;
    }

    resultElement.textContent = resultText;
}

