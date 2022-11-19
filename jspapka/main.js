alert("Bu JavaScripts")

console.log("4-DARS VAZIFALATI (o'zgarivchilar)")
var a = 12
var b = 14
console.log(a+b)
console.log(a-b)
console.log(a*b)
console.log(a/b)

console.log("5-DARS VAZIFALARI (Arifmetik operatorlari)")
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

console.log("6-DARS VAZIFALARI (Taqqoslash operatorlari)")
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

console.log("7-DARS VAZIFALARI (Mantiqiy operatorlari)")
var a6 = 21
var b6 = 3
console.log((a6 > b6) && (a6 < b6))
console.log((a6 > b6) || (a6 < b6))
console.log(!(a6 > b6))

console.log("8-DARS VAZIFALARI (Belgilash operatorlari)")
a7 = 54
b7 = 33
console.log(a7 += b7)
console.log(a7 += 3)
console.log(a7 *= b7)
console.log(a7  -= b7)
console.log(a7 /= b7)
console.log(a7 %= b7)

console.log("9-DARS VAZIFALARI (Uchlik operatorlari)")
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

console.log("10-DARS VAZIFALARI (Shart operatorlari)")
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

console.log("11-DARS VAZIFALARI (Funksiya)")
function salom(){
    console.log("Salom")
}
salom()
function odam(ism, familiya ){
    alert("Salom "+ ism + familiya)
}
odam("Gulbahor"," Ergasheva")
function hisoblash(a11,b11){
    console.log(a11 + b11)
}
hisoblash(34,55)


console.log("12-DARS VAZIFASI (Takrorlash operatori while)")
let i = 0
while (i < 5){
    console.log("dastur ishlamoqda")
    i++
}

console.log("13-DARS VAZIFALARI (Stringlar)")
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


console.log("14-DARS VAZIFALZRI (Stringlarni qidirish)")
let a12 = "JavaScript kursi"
console.log(a12.indexOf("kursi"))
console.log(a12.search("Java"))
console.log(a12.includes("Script"))
console.log(a12.includes("susys"))


console.log("15-DARS VAZIFALARI (Stringlar davomi)")
let a13 = `JavaScript modellari
Beginner
Intermedit
Edvens
`
console.log(a13)
let ism = window.prompt("Ismingizni kiriting: ")
let fam = window.prompt("Familiyangizni kiriting: ")
let a14 = `JavaScript modellari
Beginner
Intermedit
Edvens
${ism + fam } siz JavaScript kurslaridan shu modellarni o'rganasiz
`
console.log(a14)

console.log("16-DARS VAZIFALARI (Arrays yani massivlar)")
let a15 = ["Gulbahor"]
let a16 = ["SHahnoza"]
let a17 = ["Umida"]
let dugoshlar = ["Gulbahor", "Shahnoza", "Umida"]
console.log(dugoshlar[0],dugoshlar[1],dugoshlar[2])
dugoshlar[3] = "Gulxayo"
console.log(dugoshlar[0],dugoshlar[1],dugoshlar[2],dugoshlar[3])
dugoshlar[1] = "Oybegim"
console.log(dugoshlar[0],dugoshlar[1],dugoshlar[2],dugoshlar[3])
console.log("salom " + dugoshlar[2])


console.log("17-DARS VAZIFALARI (Arrays davomi)")
const massiw = ["Gulbahor",["Ergasheva",["Bozorboy qizi",19]]]
console.log(massiw[1][1][0])
console.log(massiw[0])
console.log(massiw[1][0])
console.log(massiw[1][1][1])

console.log("18-DARS VAZIFALARI (Brouzer modellari BOM)")
let a18 = window.open("https://github.com/guli2103" , "mening oynam", "width=400 , height=400")
console.log(a18)

console.log("19-DARS VAZIFALARI (Location) ")
console.log(window.location.href)
console.log(window.location.hostname)
console.log(window.location.pathname)
console.log(window.location.protocol)
// console.log(window.location.assign())

console.log("20-DARS VAZIFALARI (History)")
function ortgaQaytish(){
    window.history.back()
}

console.log("21-DARS VAZIFALARI (Vaqt funksiyalari) ")
function myFunc(){
    alert(` ${ism + fam} Siz vaqt funksiyalari bilan ishlayobsiz`)
}

console.log("22-DARS VAZIFALARI (Takrolash operatori forda)")
for(i = 0; i < 20; i++){
    console.log(i)
}


console.log("23-DARS VAZIFALARI (forni davomi)")
let mashinalar =['BMW',"Ferreri"," Kia" ,"Mers","Chevrolet"]
for(let x in  mashinalar ){
    console.log(mashinalar[x])
}

console.log("24-DARS VAZIFALARI (Date yani vaqtlar bilan ishlash)")
const vaqtt = new Date()
console.log(vaqtt)
const vaqt1 = new Date('Nov 19 2022')
console.log(vaqt1)
const vaqt2 = new Date('2022-11-16')
console.log(vaqt2)
const vaqt3 = new Date("19/11/2022")
console.log(vaqt3)

console.log("25-DARS VAZIFALARI (Date metodlarining davomi)")
const days = ["0",'Dushanba','Seshanba','Chorshanba','Payshanba','Juma','Shanba','Yakshanba']
console.log(days[vaqt1.getDay()])
console.log(days[7])

