function changeTemplate(e){
    //e.preventDefault();
    let changeTemplateEvent = new CustomEvent("changeTemplateEvent",()=>{
        detail:{
            actionToDo:'chnage the template'
        }
    });

    document.getElementsByTagName('body')[0].dispatchEvent(changeTemplateEvent);
}
