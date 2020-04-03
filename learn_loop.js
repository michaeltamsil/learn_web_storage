let index = 4;
const maxLength = 4;
// debugger;
// contoh while
// while (index < maxLength) {
//     console.log(` index ke ${index}`);

//     index = index + 1;
// }

// contoh do while
// do {
//     console.log(`index ke ${index}`);

//     index = index + 1;
// }while (index < maxLength);

// contoh for loop

for (let nomor = 0; nomor < 10; nomor++){

    if (nomor % 2 == 1 ) {
        // console.log(`sampai ke nomor ${nomor}`);
        // break;
        continue;
    }
    console.log(`nomor ke ${nomor}`);
}

let students = [];