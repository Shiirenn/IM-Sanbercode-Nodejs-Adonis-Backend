
console.log("Soal No. 1 (Array to Object)");
function arrayToObject(arr) {
    for(var i = 0; i < arr.length; i++) {

        var thisYear = (new Date()).getFullYear();

        var personArr = arr[i];

        var objPerson = {
            firstName : personArr[0],
            lastName : personArr[1],
            gender : personArr[2],
        } 
        if(!personArr[3] || personArr[3] > thisYear) {
            objPerson.age = "Invalid Birth Year"
        }else{
            objPerson.age = thisYear - personArr[3]
        }

        var fullName = objPerson.firstName + " " + objPerson.lastName
        console.log(`${i + 1}. ${fullName} :`, objPerson );


    }
}

var people = [ ["Bruce", "Banner", "male", 1975], ["Natasha", "Romanoff", "female"] ]
arrayToObject(people) 
var people2 = [ ["Tony", "Stark", "male", 1980], ["Pepper", "Pots", "female", 2023] ]
arrayToObject(people2) 


console.log("Soal No. 2 (Naik Angkot)");
function naikAngkot(arrPenumpang) {
    rute = ['A', 'B', 'C', 'D', 'E', 'F'];

    var output = []
    for (var r = 0; r < arrPenumpang.length; r++){
        var penumpangNow = arrPenumpang [r]
        var objPenumpang = {
            penumpang : penumpangNow[0],
            naikDari : penumpangNow[1],
            tujuan : penumpangNow[2],
        }
        var bayar = (rute.indexOf(penumpangNow[2]) - rute.indexOf(penumpangNow[1])) * 2000
        objPenumpang.bayar = bayar

        output.push(objPenumpang)
  
    }

    return output  
  }
  console.log(naikAngkot([
    ['Dimitri', 'B', 'F'], 
    ['Icha', 'A', 'B']
]
));

console.log("Soal No 3. Nilai Tertinggi");
function nilaiTertinggi(siswa) {
    var output1 = {}
    for (var n = 0; n < siswa.length; n++) {
        var currentN = siswa[n]
        if (!output1[currentN.class]) {
            output1[currentN.class] = {
                name: siswa[n].name,
                score: siswa[n].score,
            }


        } else {
            if (currentN.score > output1[currentN.class].score) {
                output1[currentN.class] = {
                    name: siswa[n].name,
                    score: siswa[n].score,
                }

            }
        }
    }
    return output1
  }

  // TEST CASE
console.log(nilaiTertinggi([
    {
      name: 'Asep',
      score: 90,
      class: 'adonis'
    },
    {
      name: 'Ahmad',
      score: 85,
      class: 'vuejs'
    },
    {
      name: 'Regi',
      score: 74,
      class: 'adonis'
    },
    {
      name: 'Afrida',
      score: 78,
      class: 'reactjs'
    }
  ]));

  console.log(nilaiTertinggi([
    {
      name: 'Bondra',
      score: 100,
      class: 'adonis'
    },
    {
      name: 'Putri',
      score: 76,
      class: 'laravel'
    },
    {
      name: 'Iqbal',
      score: 92,
      class: 'adonis'
    },
    {
      name: 'Tyar',
      score: 71,
      class: 'laravel'
    },
    {
      name: 'Hilmy',
      score: 80,
      class: 'vuejs'
    }
  ]));