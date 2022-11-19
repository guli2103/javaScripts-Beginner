alert("Foor and break")
let a = [["Ada",1979-80],["Algol",1960],["ARL",1961-1962],["DELPHI", 1995],["C", 1972-1973],['C++', 1980],
['Kobol',1959-1961],['HTML', 1989],['LOGO',1968-70],['Java',1995],
['django'],["flastik"]]  

for( let x in a ){
    console.log(a[x][0], "dasturlash tili ", a[x][1], "-yilda chiqarilgan ")
    if(a[x][0] === "django"){
        break
    }
}