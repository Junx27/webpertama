window.addEventListener('scroll', function(){
    var header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 0)
})
document.querySelector('nav ul').style.height='0px';
function menu () {
    if (document.querySelector('nav ul').style.height=='0px')
    {
        document.querySelector('nav ul').style.height='40px';
    }
    else
    {
        document.querySelector('nav ul').style.height='0px';
    }
}
function mousein(obj) {
    obj.style.borderRadius = '20px';
    obj.style.color = 'white';
}
function mouseout(obj) {
    obj.style.borderRadius = '0px';
    obj.style.color = 'black';
}
function btnin(obj) {
    document.getElementById('btn-text').innerHTML = 'Klik disini untuk order';
}
function btnout(obj) {
    document.getElementById('btn-text').innerHTML = '';
}