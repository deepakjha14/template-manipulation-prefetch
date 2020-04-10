window.onload = (e)=>{
    console.log('Onload fired from custom code');
}

window.dispatchEvent(new Event('load'));