console.log("Hello World!")

// gadmoaqvs id html dan
const p = document.getElementById('myp')
const myBtn = document.getElementById('mybtn')
// cvlis p tags
p.textContent = 'Hello'

// daamate movlenis msmeneli. roca gilaks xels davawert konsolshi gamova hello
myBtn.addEventListener('click',function(){
    console.log('hello')
})

// vamatebt 1 s yvela daweraze
let num = 0

myBtn.addEventListener('click',function(){
    num = num + 1
    p.textContent = num
})













