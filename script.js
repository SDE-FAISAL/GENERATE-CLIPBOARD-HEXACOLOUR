const getcolor=()=>{
    const randomNum = Math.floor(Math.random()*16777215)
    const randomCode = '#'+ randomNum.toString(16)
    document.body.style.background=randomCode
    document.getElementById('code').innerText=randomCode
    navigator.clipboard.writeText(randomCode)
}

// event call
document.getElementById('btn').addEventListener('click',
getcolor
);

// init call
getcolor()