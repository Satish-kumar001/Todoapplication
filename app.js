let inputBox=document.querySelector("#input-box");
let btn=document.querySelector("#btn");
let listContainer=document.querySelector(".list-container");

btn.addEventListener("click", () =>{
    if(inputBox.value == "") {
        alert("please write some task");

    }
    else{
        let list = document.createElement("li");
        let span = document.createElement("span");
        span.innerHTML = "&#10005;";
        list.innerText = inputBox.value;
        list.append(span);
        listContainer.append(list);
        saveData()
        inputBox.value = "";
    }
})

listContainer.addEventListener("click",(evt)=>{
    if(evt.target.tagName=="LI")
    {
        evt.target.classList.toggle("checked");
        saveData()
    }
    if(evt.target.tagName=="SPAN")
    {
        evt.target.parentElement.remove();
        saveData()
    }

})

function saveData(){
    localStorage.setItem("data1",listContainer.innerHTML);
}

function getData(){
    listContainer.innerHTML=localStorage.getItem("data1");
}
getData();