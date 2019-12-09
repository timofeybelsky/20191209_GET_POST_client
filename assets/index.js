'use strict';

/*
    fetch('./users.json')
    .then(response => {
        return response.json()
    })
    .then(console.log)
    .catch(console.error);
    */



/*async function loadItems(url) {
    try{
        const response = await fetch(url);
        const data = await response.json();
        console.log(data);
    }catch(e){
        console.error(e);
    }
}

loadItems(urlDB);*/

//---//

const urlDB = "http://192.168.0.106:3000/tasks";

const postTaskButton = document.getElementById('post');
const taskInput = document.querySelector('input[type="text"]');

//loadTasksButton.onclick

    window.onload = async function (){
    try{
        const response = await fetch(urlDB);
        const data = await response.json();
        console.log(data);
    }catch(e){
        console.error(e);
    }
};

postTaskButton.onclick = async function () {
    try{

        const {value} = taskInput;

        const response = fetch('http://192.168.0.106:3000/task', {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            mode: 'cors', // no-cors, cors, *same-origin
            cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
            credentials: 'same-origin', // include, *same-origin, omit
            headers: {
                'Content-Type': 'application/json',
                // 'Content-Type': 'application/x-www-form-urlencoded',
            },
            redirect: 'follow', // manual, *follow, error
            referrer: 'no-referrer', // no-referrer, *client
            body: JSON.stringify(new Object({
                value
            })), // тип данных в body должен соответвовать значению заголовка "Content-Type"
        });

        console.log(response);

        if(response.status >= 200 && response.status < 300)
        {
            const data = await response.json();
            console.log(data);
        }


    }catch(e){
        console.error(e);
    }
};
