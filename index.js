// <Todo-list>
const todo = document.getElementById('todo');
const create = document.getElementById('create');
const list = document.getElementById('list');

const createTodo = function() {
    const task = todo.value.trim()

    if(task !== "") {
        const li = document.createElement('li');
        li.innerText = task;
    
    const deleteButton = document.createElement('button');
    deleteButton.innerText = "delete";
    deleteButton.addEventListener('click', function(){
        li.remove();})

    list.append(li);

    li.append(deleteButton);
    deleteButton.style.backgroundColor = "red";
    deleteButton.style.color = "white"

    todo.value = ""
    
    li.style.color = "black";
}}

create.addEventListener('click', createTodo);




// 색상 변경
function daymode() {
    document.querySelector('body').style.backgroundColor = "#f5f5f5";
    document.querySelector('section').style.backgroundColor = "white";
    document.querySelector('header').style.backgroundColor = "#34495e"; 
    document.getElementsByClassName('btn')[0].style.backgroundColor = "#3498db";
    document.getElementsByClassName('btn')[1].style.backgroundColor = "#3498db";
    document.querySelector('body').style.color = "#2c3e50"; 

}

function nightmode() {
    document.querySelector('body').style.backgroundColor = "#2c3e50"; 
    document.querySelector('section').style.backgroundColor = "#7891a9";
    document.querySelector('header').style.backgroundColor = "#1f2c38"; 
    document.getElementsByClassName('btn')[0].style.backgroundColor = "#e74c3c";
    document.getElementsByClassName('btn')[1].style.backgroundColor = "#e74c3c";
    document.querySelector('body').style.color = "#ecf0f1";
}


//디지털시계

function setClock() {
    const dateInfo = new Date();
    const hour = modifyNumber(dateInfo.getHours());
    const min = modifyNumber(dateInfo.getMinutes());
    const sec = modifyNumber(dateInfo.getSeconds());
    const year = dateInfo.getFullYear();
    const month = dateInfo.getMonth()+1;
    const date = dateInfo.getDate();
    document.getElementById("time").innerHTML = hour + ":" + min + ":" + sec;
    document.getElementById("date").innerHTML = year + "." + month + "." + date;
}
function modifyNumber(time){
    if(parseInt(time)<10){
        return"0"+time;
    }
    else
        return time;
}
window.onload = function(){
    setClock();
    setInterval(setClock, 1000);
}



// 숫자 맞추기 게임 
const submit = document.getElementById("submit");
const result = document.getElementById("result");


const randomInt = Math.floor(Math.random() * 100) + 1;


function number() {
    const numberInput = Number(document.getElementById("numberInput").value);

    if (numberInput > randomInt) {
        result.innerText = "너무 높습니다";
    } else if (numberInput < randomInt) {
        result.innerText = "너무 낮습니다";
    } else {
        result.innerText = "맞췄습니다!";
    }

    if (numberInput > 101) {
        result.innerText = "0 ~ 100 사이의 숫자를 입력하세요";
    } else if (numberInput < 0) {
        result.innerText = "0 ~ 100 사이의 숫자를 입력하세요";
    }
    result.style.color = "black";
}

submit.addEventListener('click', number);