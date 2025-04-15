const menu = document.getElementById('listall');

window.onload = function(){
    let listSaveArrlocalStr = localStorage.getItem('listSaveArrlocal')
    let listSaveArrlocal = listSaveArrlocalStr ? JSON.parse(listSaveArrlocalStr) : [];
    listSaveArrlocal.forEach(li =>{
        let text = li.textAll;
        let check = li.checkAll;
        const Items = document.createElement('li');
        Items.innerHTML=`
        <input type="text" placeholder="enter task" class="type" value= "${text}">
        <input type="checkbox" class="check" onchange="doItems(this.parentElement)"${check ? 'checked' : ''} >
        <button class="but" onclick="deleteitems(this.parentElement)"> <i class="fa-solid fa-trash" style="color: #ff0000;"></i> </button>
        <button class="but" onclick="additems()"><i class="fa-solid fa-plus" style="color: #000000;"></i></button>
        `;
        menu.appendChild(Items);
    })
}

function additems(){
    const Items = document.createElement('li');
    Items.innerHTML=`
    <input type="text" placeholder="enter task" class="type" oninput="saveMode()">
    <input type="checkbox" class="check" onchange="doItems(this.parentElement)">
    <button class="but" onclick="deleteitems(this.parentElement)"> <i class="fa-solid fa-trash" style="color: #ff0000;"></i> </button>
    <button class="but" onclick="additems()"><i class="fa-solid fa-plus" style="color: #000000;"></i></button>
    `;
    menu.appendChild(Items);
    saveMode();
}
function deleteitems(del){
    const warn = confirm("confirm to delete task?")
    if(warn===true){
        del.remove();
    }
    saveMode()

    
}

function doItems(text){
    const checkBox = text.querySelector('.check');
    const modeElement = text.querySelector('.type');
    if (checkBox.checked) {
        modeElement.classList.add('soft');
    } else {
        modeElement.classList.remove('soft');
    }
    saveMode()
}
function saveMode(){
    let listSaveArr = []
    const listsave = document.querySelectorAll('li')
    listsave.forEach(li =>{
        const textAll = li.querySelector('.type').value;
        const checkAll = li.querySelector('.check').checked;
        if (textAll !== "") {
            listSaveArr.push({ textAll, checkAll });
        }
    })
    localStorage.setItem('listSaveArrlocal',JSON.stringify(listSaveArr))
    
}