
const hapus = () => {
    $(event.currentTarget).parent().remove();
    //debugger;
    // alert('mau hapus');
}

const addItemInHTML = function(value) {
    if (value == null) {
        return ;
    }

    const daftarList = document.getElementsByClassName("daftar-list")

    const li = document.createElement("li")
    const itemHTML =`${value} <button onclick="hapus()">hapus</button>`;

    daftarList[0].appendChild(li)
    li.innerHTML = itemHTML
}

const addItem = () => {
    const itemInput = document.getElementsByName("itemInput")
    let itemInputValue = itemInput[0].value
    addItemInHTML(itemInputValue)

    let itemArray = localStorage.getItem("item");

    if ( itemArray == null ){
        // jika itemArray adalah string atau null maka kita bikin array baru dengan key 0 dengan value
        // itemInputValue
        itemArray = [itemInputValue]
    }else{
        // jika itemArray adalah bukan string atau null maka kemungkinan dia adalah array
        // jadi kita tambahkan dengan menggunakan method "pus"
        itemArray = JSON.parse(itemArray);
        itemArray.push(itemInputValue)
    }

    // merubah array ke string supaya bisa disimpan di localStorage
    const itemArrayStringify = JSON.stringify(itemArray);   
    
    localStorage.setItem("item",itemArrayStringify);

    itemInput[0].value = ""
}

const runNow = () => {
    const itemFromLS = localStorage.getItem("item")
    
    if (itemFromLS != null){
        const items = JSON.parse(itemFromLS);
        
        items.forEach( item => {
            addItemInHTML(item)
        })
    }
    
}


runNow();



















const logMessage = function(pesan, param2) {
    console.log(pesan);
}
// bonus internet 44.31GB, midnight quota 44.98 GB
const logMessage2 = (pesan) => {
    console.log(pesan)
}

const logMessage3 = (pesan, jumlah) => {
    console.log(`${pesan} dgn jumlah ${jumlah}`)
    window.alert(`${pesan} dgn jumlah ${jumlah}`)
}

const logMessage4 = pesan => console.log(pesan)


// contoh penggunaan return di function
const multiple = function(number){
    return number * number;
}
//debugger;
const nilai = multiple(5);
console.log(`nilai multiple dari 5 adalah ${nilai}`);


const multiple2 = number => number * number ;

const nilai2 = multiple2(6);
console.log(`nilai multiple2 dari 6 adalah ${nilai2}`);


const inputProduct = (productName = "", number = 1) => {
    console.log(`product name ${productName}, with ${number} pieces`)
}

const isLulus = (nilai = 0) => {
    console.log(nilai)
    if (nilai >= 80)
        return true;
    else {
        return false;
    }
}

const nilaiSaya = 100;
let lulus = isLulus(nilaiSaya);
console.log(`dengan nilai saya ${nilaiSaya}, apakah saya lulus?`);
let kelulusan = ( lulus ? 'lulus': 'ngulang' );
console.log(kelulusan);



// contoh callback function
const doWork = () => {
    console.log('bathing');
    console.log('clothing');
    console.log('to office');
}

const doSleep = () => {
    console.log('bathing');
    console.log('eating');
    console.log('go to kasur');
}

const ask = (message, doIt, somethingElse) => {
    const isSetuju = window.confirm(message);
    if (isSetuju){
        doIt();
    }else {
        somethingElse();
    }
}

// ask("do you work?", doWork, doSleep);
