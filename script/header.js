

var header = document.querySelector('#header');
var container1 = document.querySelector('#container');

window.addEventListener('scroll',()=>{
    const y=window.pageYOffset;

    if (y>300) {
            header.classList.add('headersticky');
            container1.classList.add('padding');
    }
    else{
         header.classList.remove('headersticky');
         container1.classList.remove('padding');
    }
})