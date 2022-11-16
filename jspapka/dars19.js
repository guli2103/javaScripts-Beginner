alert("Location")

let a = window.prompt("Sonni tanlang: ",
`
1:
2:
3:
`)

if(a === "1"){
    alert("sayt xavfsiz, saytdan bemalol foydalansangoz bo'ladi ")
    console.log(window.location.href)
    console.log("Xafsiz")
}
else if(a === "2"){
    alert("saytda ulanib bo'lmaydi")
    console.log(window.location.href)
    console.log("Internet mavjud emas")
}
else if(a === "3"){
    alert("sayt xavsiz emas")
    console.log(window.location.href)
    console.log("Xavsiz emas")
}
else{
    console.log("Dasturda xatolik bor")
}