alert("Foor and break")
let a = [["Ada",1979-80],["Algol",1960],["ARL",1961-1962],["DELPHI", 1995],["C", 1972-1973],['C++', 1980],['Kobol',1959-1961],['HTML', 1989],['LOGO',1968-70],['Java',1995]]
let b = [['django'],["flastik"]]

for(c = 0 ; c < 20; c++){
    console.log(a[0][0]," dasturlash tili ",a[0][1], "-yillarda kiritilingan")
    console.log(a[1][0]," dasturlash tili ",a[1][1], "-yillarda kiritilingan")
    console.log(a[2][0]," dasturlash tili ",a[2][1], "-yillarda kiritilingan")
    console.log(a[3][0]," dasturlash tili ",a[3][1], "-yillarda kiritilingan")
    console.log(a[4][0]," dasturlash tili ",a[4][1], "-yillarda kiritilingan")
    console.log(a[5][0]," dasturlash tili ",a[5][1], "-yillarda kiritilingan")
    console.log(a[6][0]," dasturlash tili ",a[6][1], "-yillarda kiritilingan")
    console.log(a[7][0]," dasturlash tili ",a[7][1], "-yillarda kiritilingan")
    console.log(a[8][0]," dasturlash tili ",a[8][1], "-yillarda kiritilingan")
    console.log(a[9][0]," dasturlash tili ",a[9][1], "-yillarda kiritilingan")

    if (a === b[0]){
        console.log("django dasturlash tili emas")
        break
    }
    else if( a === b[1]){
        console.log("Flastik dasturlash tili emas")
        break
    }
    else{
        console.log("Muvaffaqiyatli yakunlandi")
    }
}
