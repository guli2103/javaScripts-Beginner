alert("Brauzer modellari")

let a =window.prompt("Qaysi dastirlash tilini kiritmoqchisiz:" ,
`
HTML
Java
C++
`
)
if (a.toLowerCase() === "html"){
    window.open('https://ru.wikipedia.org/wiki/HTML' )
}
else if(a.toLowerCase() === "java"){
    window.open('https://ru.wikipedia.org/wiki/Java')
}
else if(a.toLowerCase() === "c++"){
    window.open('https://ru.wikipedia.org/wiki/C%2B%2B')
}
else{
    alert("Bunday ma'lumot topilmadi")
}