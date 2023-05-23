let item = document.querySelectorAll('.slider .item')
let next = document.getElementById('next')
let prev = document.getElementById('prev')

let active = 3
function loadshow(){
    let click = 0
    item[active].style.transform = `none`
    item[active].style.zIndex = 1
    item[active].style.filter = `none`
    item[active].style.opacity = 1
    for (var i = active + 1; i < item.length; i++){
        click++
        item[i].style.transform = `translateX(${120*click}px) scale(${1 - 0.2*click}) perspective(16px) rotateY(-1deg)`
        item[i].style.zIndex = -click
        item[i].style.filter = `blur(5px)`
        item[i].style.opacity = click > 2 ? 0 : 0.6
    }
    click = 0 
    for(var i = active - 1; i >= 0; i--){
        click++
        item[i].style.transform = `translateX(${-120*click}px) scale(${1 - 0.2*click}) perspective(16px) rotateY(-1deg)`
        item[i].style.zIndex = -click
        item[i].style.filter = `blur(5px)`
        item[i].style.opacity = click > 2 ? 0 : 0.6
    }
}
loadshow()
next.onclick = function(){
    active = active + 1 < item.length ? active + 1 : active
    loadshow()
}
prev.onclick = function(){
    active=-1 < item.length ? active - 1 : active
    loadshow()
}

// Text element
var loves = "Happy sweet’17 to my beloved friend, Shinta. May your day be full of love, laughter and awe-inspiring dreams. I hope your 17th treat you nicely. Today and always, remember that I’m here to cheer you on! <3"

 document.getElementById("love").innerHTML = loves