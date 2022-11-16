alert("String1")
let a = "Men Ergasheva Gulbahor Bozorboy qizi"

if (a.indexOf('Ergasheva')){
    console.log('Siz izlagan malumot ', a.indexOf('Ergasheva'), ' qatordan boshlanadi 13 qatorda tugaygi')
}
else if (a.search('Gulbahor')){
    console.log('Siz izlandan malumot ', a.search('Gulbahor'), "qatordan boshlanadi")
}
else if(a.includes('Bozorboy')){
    console.log('Siz izlayotgatgam malumot bor ' , a.includes('Bozorboy'))
}
else if(a.includes('gggg')){
    console.log('siz izlayotgan malumot yoq ', a.includes('gggg') )
}