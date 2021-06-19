window.alert("test alert")
window.addEventListener('load', function () {
    const p1 = document.getElementById("testp");
    console.log(p1)
    p1.innerText = "Try to click me"
    b1 = document.getElementById("clickBtn");
    b1.innerText = "click now"
    b1.addEventListener("click", function(){
        console.log(b1+"click")
    })
    const box1 = document.getElementById("box");
    box1.innerHTML= '<p>structure changed</p>'
    //box1.innerText= '<p>This will be text</p>'
    const i1 = document.getElementById("theName")
    i1.addEventListener("keyup", function (e){
        console.log(e,e.target.value)
    })

})