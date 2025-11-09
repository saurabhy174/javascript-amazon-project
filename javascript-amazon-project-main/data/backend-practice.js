const xhr= new XMLHttpRequest();   //creates a new htpp message

xhr.addEventListener('load',()=>{
    console.log(xhr.responseText);
});

xhr.open('GET','https://supersimplebackend.dev');
xhr.send();