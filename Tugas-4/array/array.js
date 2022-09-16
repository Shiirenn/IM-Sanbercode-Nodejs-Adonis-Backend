// Soal No. 1//
console.log("Soal No. 1 (Array Multidimensi)");

var input = [
    ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
    ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
    ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
    ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
] 

function dataHandling(data) {
    for(var a = 0; a < data.length; a++) {
        console.log("Nomor ID: ", data[a][0]);
        console.log("Nama Lengkap: ", data[a][1]);
        console.log("TTL: ", data[a][2], input[a][3]);
        console.log("Hobi: ", data[a][4]);
    }
}
dataHandling(input);

// Soal No. 2//
console.log("Soal No. 2 (Balik Kata)");

function balikKata(kata) {
    var output = ""
    var panjangKata = kata.length

    for(var a = panjangKata-1; a >= 0; a--) {
        output+=kata[a] 
    }

    return output;
}

console.log(balikKata("SanberCode")) 
//Output: edoCrebnaS

console.log(balikKata("racecar")) 
//Output: racecar

console.log(balikKata("kasur rusak"))
//Output: kasur rusak

console.log(balikKata("haji ijah"))
//Output: haji ijah

console.log(balikKata("I am Sanbers"))
//Output: srebnaS ma I

