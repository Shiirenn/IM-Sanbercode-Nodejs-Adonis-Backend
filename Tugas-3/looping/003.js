function makeRectangle(panjang,lebar) {
    for (var d = 1; d <= lebar; d++) {
      var baris = "";
      for(var o = 1; o <= panjang; o++) {
        baris += "#"
      }
      console.log(baris)
    }
  }
  
  // TEST CASE
  
  makeRectangle(8,4)