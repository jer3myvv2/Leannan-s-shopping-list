    document.getElementById('splash-screen').addEventListener('click', function() {
    var splash=document.getElementById('splash-screen');
    splash.classList.add('fade-out');
    document.body.classList.remove('show-splash');
});

function filterItems(){
    var input=document.getElementById('myInput');
    var filter=input.value.toUpperCase();
    var list=document.getElementById('itemList');
    var items=list.getElementsByTagName('li');
    for(var i=0;i<items.length;i++){
        var item=items[i].getElementsByTagName('a')[0];
        var textValue=item.textContent || item.innerText;
        if(textValue.toUpperCase().indexOf(filter)>-1){
            items[i].style.display="";
        }else{
            items[i].style.display="none";
        }
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const itemList=document.getElementById('itemList');
    const additemBtn=document.getElementById('addItemBtn');
    const newitemInput=document.getElementById('newItemInput');

    additemBtn.addEventListener('click', function(){
        const text=newitemInput.value;
        if(text===""){return;}
        const li=document.createElement('li');
        li.innerHTML=`<span class="item-name">${text}</span><button class="delete-btn">Delete</button>`;
        itemList.appendChild(li);
        newitemInput.value="";
    });

    itemList.addEventListener('click', function(e){
        if(e.target.classList.contains('delete-btn')){
            e.target.parentElement.remove();
        }
    });
});

const searchInput=document.getElementById('myInput');
const shoppingList=document.getElementById('shopping-list');

searchInput.addEventListener('input', (event)=>{
    const filter=event.target.value.toLowerCase();
    const items=shoppingList.getElementsByTagName('li');
    Array.from(items).forEach(item=>{
        const itemName=item.querySelector('.item-name').textContent.toLowerCase();
        if(itemName.includes(filter)){
            item.style.display="";
        }else{
            item.style.display="none";
        }
    });
});

const approved90sItems=['tamagotchi',
    'walkman',
    'retro sneakers',
    'nokia 3310',
    'beanie babies',
    'fanny pack',
    'slap bracelets',
    'dunkaroos',
    'floppy disk',
    'furby',
    'choker'
];

function addItem(){
    const inputField=document.getElementById('itemInput');
    const newItem=inputField.value.trim();
    if(approved90sItems.includes(newItem)){
        console.log("Wagwan! Adding item:", newItem);
        createListItem(newItem);
      }else{
        alert("Ugh, that's not a 90s item! Please enter something from the 90s.");
      }
    inputField.value="";
}

const is90s=approved90sItems.some(keyword=>newItem.includes(keyword));
if(is90s){
    console.log("Wagwan! Adding item:", newItem);
    createListItem(newItem);
}else{
    alert("Ugh, that's not a 90s item! Please enter something from the 90s.");
}
