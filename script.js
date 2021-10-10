let value1 = document.getElementById('value1')
let value2 = document.getElementById('value2')
let value3 = document.getElementById('value3')

let inpSpeed = document.getElementById('inpSpeed')
let startBtn = document.getElementById('button-red')
let endBtn = document.getElementById('button-end')
var animprop = document.querySelector('.value')
let values = [
    '😃', '😇', '😋', '😂', '😎', '😭', '😡'
]

let startcnt = 0;
let endcnt = 0;
function getRandomValue() {
    return values[Math.floor(Math.random() * 7)]
}

let animationId;

function updateAnimation(newSpeed) {
    if (animationId) clearInterval(animationId)

    animationId = setInterval(() => {

        value1.innerText = getRandomValue()
        value2.innerText = getRandomValue()
        value3.innerText = getRandomValue()
    
    }, 1000 / newSpeed)
}

inpSpeed.onchange = function (ev) {
    // document.documentElement => this is ":root" of css
    if(animationId === undefined)
    {
        ev.target.value = 5;
        alert('PLZ PRESS START BUTTON')
    }
    else if(startcnt >= 1 && endcnt>=1)
    {
        ev.target.value = 5;
        alert('PLZ PRESS START BUTTON')
    }
    else
    {
        document.documentElement.style.setProperty('--speed', ev.target.value)

        updateAnimation(ev.target.value)
    }
    
}

startBtn.onclick = function(){
    // document.documentElement => this is ":root" of css
    if(endcnt != 0)
    {
        endcnt = 0;
        startcnt = 0;
    }
    inpSpeed.value = "5";
    startcnt = startcnt + 1
        document.documentElement.style.setProperty('--speed', 5)

        updateAnimation(5)
}

endBtn.onclick = function(){
    
    if(animationId === undefined)
    {
        alert('PLZ PRESS START BUTTON')
    }
    else if(startcnt >= 1 && endcnt>=1)
    {
        alert('PLZ PRESS START BUTTON')
    }
    else
    {
        endcnt = endcnt + 1;
        clearInterval(animationId)
        document.documentElement.style.removeProperty('--speed')
        value1.innerText = getRandomValue()
        value2.innerText = getRandomValue()
        value3.innerText = getRandomValue()
        // //inpSpeed.value = 5;
        // if(value1.innerText == value2.innerText && value1.innerText == value3.innerText)
        // {
        //     alert('Your Points : 3/3 .. CONGRATS !!');
        // }
        // else if(value1.innerText==value2.innerText || value2.innerText == value3.innerText || value3.innerText == value1.innerText)
        // {
        //     alert('Your Points : 2/3 ');
        // }
        // else
        // {
        //     alert('Your Points : 0/3 .. Better Luck NExt Time :D !!');
        // }
    }
}



