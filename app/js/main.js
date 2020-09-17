let btn = document.querySelector('.btn');
let startPage =document.querySelector('.start-page');
document.body.style.overflow='hidden';
btn.addEventListener('click', function () {
    let start = Date.now();
    let timer =setInterval(function () {
        let timePassed = Date.now()-start;
        if (timePassed>=2000){
            clearInterval(timer);
            return;
        }
        draw(timePassed);
    },20);
    function draw(timePassed) {
        startPage.style.left = timePassed*2 + 'px';
    }
    document.body.style.overflow='visible';
});
