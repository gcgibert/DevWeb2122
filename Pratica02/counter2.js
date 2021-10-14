const delay = (ms) => new Promise((res) => setTimeout(res, ms));

async function espera(){
    await delay(1000);
    console.log("Aguardou 1s");
    
    await delay(1000);
    console.log("Aguardou mais 1s");
}

espera();