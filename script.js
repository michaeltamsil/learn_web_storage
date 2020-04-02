const addItemInHTML = value => {

    if (value == null) {
        return ;
    }

    const daftarList = document.getElementsByClassName("daftar-list")

    const li = document.createElement("li")
    const itemHTML =`${value} <button>hapus</button>`;

    daftarList[0].appendChild(li)
    li.innerHTML = itemHTML
}

const addItem = () => {
    const itemInput = document.getElementsByName("itemInput")
    let itemInputValue = itemInput[0].value
    if (!itemInputValue){
        return ;    // gunanya utk exit
    }

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
        debugger;
        const items = JSON.parse(itemFromLS);
        
        items.forEach( item => {
            addItemInHTML(item)
        })
    }
    
}

runNow();