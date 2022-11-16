alert("String2")


console.log('1- VAZIFA')
a = 21
b = 3
function calc(a,b){
    console.log('qoshganingizda: ', a + b )
    console.log('ayirganingizda: ', a - b )
    console.log('kopaytirganingizda: ' , a * b)
    console.log('bolganingizda: ', a / b)
}
calc(a,b)

console.log('2-VAZIFA')
let malumot = `Men Ergasheva Gulbahor Bozorboy qizi 2003-yil 21-martda Navoiy viloyati Qiziltepa tumanida tavallud topganman.
2010-yil Qiziltepa tumanidagi Amir Temur nomli 37-umumiy orta talim maktabning 1-sinfiga qabul qilinganman. 2021-yida bitirganman. 
Hozirda Ndpi "Matematika-Informatika" yonalishida 2-kurs talabasiman`
let ism = "Gulbahor"
let fam = ' Ergasheva'
function c(){
    let yangi = malumot.replace('Ergasheva' , 'Bozorova')
    console.log(yangi)
    let malumot1 = ` ${(ism + fam )} siz JavaScripts kursiga qatnashmoqdasiz`
    console.log(malumot1)
}
c()

