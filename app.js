const menu = document.getElementById('listall');

function additems(){
    const Items = document.createElement('li');
    Items.innerHTML=`
    <input type="text" placeholder="enter task" class="type">
    <input type="checkbox" class="check" onchange="doItems(this.parentElement)">
    <button class="but" onclick="deleteitems(this.parentElement)"> <i class="fa-solid fa-trash" style="color: #ff0000;"></i> </button>
    <button class="but" onclick="additems()"><i class="fa-solid fa-plus" style="color: #000000;"></i></button>
    `;
    menu.appendChild(Items);
}
function deleteitems(del){
    const warn = confirm("confirm to delete task?")
    if(warn===true){
        del.remove();
    }

    
}

function doItems(text){
    const checkBox = text.querySelector('.check');
    const modeElement = text.querySelector('.type');
    if (checkBox.checked) {
        modeElement.classList.add('soft');
    } else {
        modeElement.classList.remove('soft');
    }
}