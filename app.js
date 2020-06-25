const navSlide = () =>{
    const burger = document.querySelector('.burger-btn');
    const nav = document.querySelector('.links');

    burger.addEventListener('click', () =>{
        //Toggle Nav
        nav.classList.toggle('nav-active');

        //Burger Animation
        burger.classList.toggle('toggle');
    });
}

navSlide();