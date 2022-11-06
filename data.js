const nama = 'fadly';
let usia = '16';

const biodata = document.getElementById('biodata') ;
console.log(biodata) ;

function generateBiodata() {
    let golongan;

    if (usia > 6 && usia < 12) {
        golongan = "GOLONGAN ANAK ANAK" ;
    }
    else  if (usia > 12 && usia < 18) {
        golongan = 'GOLONGAN REMAJA' ;
    }
    else if (usia > 17 && usia <50) {
        golongan = "GOLONGAN DEWASA" ;
    }
    else if (usia > 49) {
       golongan = "GOLONGAN TUA" ;
    }
    else {
        golongan = "GOLONGAN BAYI" ;
    }

   return biodata.innerHTML = golongan;

}
console.log(nama);
console.log('usia',usia);

generateBiodata();