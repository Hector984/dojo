

//Nueva forma de usar dojo con AMD

require(["dojo/dom","dojo/query","dojo/on","dojo/domReady!"],function(dom,query,on){
    let box = dom.byId("box");
    let showBox = query(".show");
    let hideBox = query(".hide");

    let original = box.innerHTML;

    on(box,"mouseenter",function(e){

        box.innerHTML = "Mueve el mouse hacia afuera para ver mas magia!!";
        box.style.background = "gray";
    });//fin de la funcion

    on(box,"mouseleave",function(e){
        box.style.background = "white";
        box.innerHTML = original;
    });//Fin de la funcion

    on(showBox,"click",function(e){
        box.style.display = "block";
    });

    on(hideBox,"click",function(e){
        box.style.display = "none";
    });
});



//Forma vieja de usar dojo
/*
dojo.ready(function(){
    let test = dojo.query("#test");
    let text = dojo.query(".text");
    console.log(text[0].innerHTML);
    console.log(test[0].innerHTML);
    console.log(test.length);
    console.log(text.length);
});

dojo.ready(function(){
    let allText = dojo.query("h1");
    console.log(allText[0].innerHTML);
});
*/