for(var k = 1; k <= 20; k++) {
    var tampung1 = "";
    if(k % 2 == 1) {
        if(k % 3 == 0) {
            tampung1 = k + "- I Love Coding";
        } else {
            tampung1 = k + "- Santai";
        }
    } else {
        tampung1 = k + "- Berkualitas";
    }
    console.log(tampung1);
}