alert("Funksiya")

const vaqt = new Date()
a = vaqt.getMonth()
console.log(a)

function calc(a,b){
    console.log("yigindisi: ",  a + b)
    console.log( "ayirmasi: " , a - b)
    console.log("ko'paytmasi: " + a * b)
    console.log( "bo'linmasi: "+ a / b)
}
calc(1,10)
calc(22,-90)