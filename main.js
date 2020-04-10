window.onload = ()=>{
    const tempA = document.getElementById('tempA');
    const tempB = document.getElementById('tempB');
    let rootElement = document.getElementById('root');

    const toReference = setTimeout(()=>{
        rootElement.appendChild(tempA.content);
    }, 3000);

    document.getElementsByTagName('body')[0].addEventListener('changeTemplateEvent',(e)=>{
        rootElement.childNodes.forEach((childNode)=>{
            rootElement.removeChild(childNode);
        });
        rootElement.appendChild(tempB.content);
    });
}