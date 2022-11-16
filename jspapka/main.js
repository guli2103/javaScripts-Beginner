alert("Bu JavaScripts")

console.log("4-DARS VAZIFALATI")
var a = 12
var b = 14
console.log(a+b)
console.log(a-b)
console.log(a*b)
console.log(a/b)

console.log("5-DARS VAZIFALARI")
const a1 = 23
const b1 = 3
console.log(a1%b1)
console.log(a1**b1)

let narx1 = 1
let narx2 = 12
console.log(++narx1 )
console.log(--narx2 )

let a2 = 12
let b2 = "1212"
console.log(a2+b2)
console.log(a2*b2)

let a3 = 33
let b3 = "22hhh"
console.log(a3+b3)

console.log("6-DARS VAZIFALARI")
let a4 = 14
let b4 = 43
console.log(a4 == b4)
console.log(a4 > b4)
console.log(a4 < b4 )

let a5 = 12
let b5 = "12"
console.log( a5 == b5)
console.log(a5 === b5)
console.log(a5 != b5 )

console.log("7-DARS VAZIFALARI")
var a6 = 21
var b6 = 3
console.log((a6 > b6) && (a6 < b6))
console.log((a6 > b6) || (a6 < b6))
console.log(!(a6 > b6))

console.log("8-DARS VAZIFALARI")
a7 = 54
b7 = 33
console.log(a7 += b7)
console.log(a7 += 3)
console.log(a7 *= b7)
console.log(a7  -= b7)
console.log(a7 /= b7)
console.log(a7 %= b7)

console.log("9-DARS VAZIFALARI")
a8 = 21
b8 = 3
c = a8 > b8 ? a8 : b8
console.log(c) 
c = a8 < b8 ? "kichik" : "katta"
console.log(c) 

a9 = 21
b9 = 21
c = a9 == b9 ? "teng" : "teng emas" 
console.log(c)

console.log("10-DARS VAZIFALARI")
a10 = 2022
b10 = 2003
if(a10 - b10 > 18 ){
    console.log("Siz 18 yoshga to'lgansiz");    
}
else if (a10 - b10 < 18){
    console.log("Siz 18 yoshga to'lmagansiz");
}
else{
    confirm.log("Siz 18 yoshga endi kirgansiz")

}

console.log("11-DARS VAZIFALARI")
function salom(){
    console.log("Salom")
}
salom()
function odam(ism, familiya ){
    alert("Salom "+ ism + familiya)
}
odam("Gulbahor"," Ergasheva")
function hisoblash(a,b){
    console.log(a+b)
}
hisoblash(34,55)


console.log("12-DARS VAZIFASI")
let i = 0
while (i < 5){
    console.log("dastur ishlamoqda")
    i++
}

console.log("13-dars vazifalari")
let tekst = "SUSYS JavaScript kurslari"
console.log(tekst[1])
console.log(tekst.length)
console.log(tekst.toLowerCase())
console.log(tekst.toUpperCase())
console.log(tekst.slice(0 , 8))
console.log(tekst.slice(7))
console.log(tekst.slice(-8))

console.log(tekst.substring(6))

console.log(tekst.substr(3,9))

let malumot = "SUSYS JavaScript kurslari"
let yangi = malumot.replace('SUSYS' ,'CIPHER')
console.log(malumot)
console.log(yangi)


