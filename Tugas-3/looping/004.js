function makeLadder(sisi) {
  for(var r = 1; r <= sisi; r++) {
    baris = "";
    for(var t = 1; t <= r; t++) {
      baris += "#";
    }
    console.log(baris);
  }
}

// TEST CASE
makeLadder(7)
