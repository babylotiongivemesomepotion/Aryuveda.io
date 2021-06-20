 function scrollright(){
        const section = document.getElementById('section');
        section.scrollBy(400,0);
        section.style.transition="all 5s";
    }

 function scrollleft(){
        const section = document.getElementById('section');
        section.scrollBy(-400,0);
        section.style.transition="all 5s";
    }
