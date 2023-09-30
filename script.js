const inputText=document.getElementById("input-text");
const taskList=document.getElementById("task-content");

function taskAdd(){
    if(inputText.value === ''){
        alert("Must contain some information! ");
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=inputText.value;
        taskList.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    inputText.value="";
    sData();

}

taskList.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("t1");
        sData();
    }
    else if (e.target.tagName == "SPAN"){
        e.target.parentElement.remove();
        sData();
    }
},false);

function sData(){
    localStorage.setItem("data",taskList.innerHTML);
}
function sTask(){
    taskList.innerHTML=localStorage.getItem("data");
}
sTask()