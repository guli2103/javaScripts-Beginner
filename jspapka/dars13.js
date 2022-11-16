alert("string")
let malumot = 'Men Ergasheva Gulbahor Bozorboy qizi 2003-yil 21-martda Navoiy viloyati Qiziltepa tumanida tavallud topganman. 2010-yil Qiziltepa tumanidagi Amir Temur nomli 37-umumiy orta talim maktabning 1-sinfiga qabul qilinganman. 2021-yida bitirganman. Hozirda Ndpi "Matematika-Informatika" yonalishida 2-kurs talabasiman '
console.log(malumot)
console.log(malumot.length)
console.log(malumot.toLowerCase())
console.log(malumot.toUpperCase())
console.log(malumot.slice(0))
console.log(malumot.slice(-9))
console.log(malumot.substring(4))
console.log(malumot.substr(3 , 21))


let yangi = malumot.replace('Ergasheva','Bozorova')
console.log(yangi)
let yangi1 = malumot.replace('2003','2022')
console.log(yangi1)
let yangi2 = malumot.replace( /gulbahor/i, 'Shahnoza' )
console.log(yangi2)
