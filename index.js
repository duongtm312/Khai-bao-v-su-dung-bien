let i = 10
let f = 20.5
let b = true
let s = 'Hà Nội'

document.write('i = ' + i)
document.write('<br/>')
document.write('f = ' + f)
document.write('<br/>')
document.write('b = ' + b)
document.write('<br/>')
document.write('s = ' + s)

let width = 20
let height = 10
let area = width * height
document.write('Area = ' + area)

function myFunction(){
let a = prompt("Nhập số a")
let b = prompt("Nhập số b")

if (a%b==0){
    alert("a chia het cho b")
}
else {
    alert("a ko chia het cho b")
}
}