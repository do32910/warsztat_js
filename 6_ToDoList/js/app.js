document.addEventListener('DOMContentLoaded', function(){

    //usuwanie ostrzeżenia przy aktywowaniu pola z inputem
    document.getElementById('taskInput').addEventListener('focus', function(){
        if(this.parentElement.querySelector('div.error')){
            var errorField = this.parentElement.querySelector('div.error');
            this.parentElement.removeChild(errorField);
        }
    });

    // dodawanie zadania do listy
    document.getElementById('addTaskButton').addEventListener('click', function(e){
        e.preventDefault();
        // jeśli zadanie ma nieprawidłową długość, zwróć błąd
        var inputField = document.getElementById('taskInput').value;
        if(inputField.length > 100 || inputField.length < 5){
            if(!this.parentElement.querySelector('div.error')){
                var errorField = document.createElement("div");
                errorField.classList.add('error');
                errorField.innerText = "Zadanie musi mieć od 5 do 100 znaków";
                errorField.style.color = "red";
                document.querySelector('body').appendChild(errorField);
            }
            return 1;
        }

        // usuwanie zawartości inputa
        document.getElementById('taskInput').value = '';


        var taskList = document.getElementById('taskList');

        // utwórz element z informacją o pozostałych do zrobienia zadaniach
        // (jeśli taki element jeszcze nie istnieje)
        if(!document.querySelector('#tasksToFinish')){
            var tasksToFinish = document.createElement('div');
            tasksToFinish.id = "tasksToFinish";
            var counterSpan = document.createElement('span');
            counterSpan.id = "counter";
            // counterSpan.innerText = countList();
            tasksToFinish.innerHTML = "Tasks to finish: ";
            tasksToFinish.appendChild(counterSpan);
            document.querySelector('body').insertBefore(tasksToFinish, taskList);
        }

        
        //tworzenie nowego zadania
        var newTask = document.createElement('li');

        var taskHeader = document.createElement('h1');
        taskHeader.innerText = inputField;

        var deleteBtn = document.createElement('button');
        deleteBtn.innerText = "Delete";

        var completedBtn = document.createElement('button');
        completedBtn.innerText = "Complete";

        newTask.appendChild(taskHeader);
        newTask.appendChild(deleteBtn);
        newTask.appendChild(completedBtn);

        taskList.appendChild(newTask);

        // obliczanie ile zadań pozostało do zrobienia
        updateTasksNum();


        // oznaczanie zadania jako wykonane
        completedBtn.addEventListener('click', function(){
            if(this.parentElement.querySelector('h1').classList.contains('taskCompleted')){
                this.parentElement.querySelector('h1').classList.remove('taskCompleted');
                updateTasksNum();
            }else{
                this.parentElement.querySelector('h1').classList.add('taskCompleted');
                updateTasksNum();
            }
        });

        // usuwanie zadania
        deleteBtn.addEventListener('click', function(){
            var toDelete = this.parentElement;
            toDelete.parentElement.removeChild(toDelete);
            updateTasksNum();
            checkIfAnyTasks();
        });
    });   

    document.getElementById('removeFinishedTasksButton').addEventListener('click', function(){
        var taskListElements = document.querySelectorAll('#taskList li');
        for(var i=0; i<taskListElements.length; i++){
            if(taskListElements[i].querySelector('h1').classList.contains('taskCompleted')){
                taskListElements[i].parentElement.removeChild(taskListElements[i]);
            }
        }
        updateTasksNum();
        checkIfAnyTasks();
    });

});


function countList(){
    return (document.querySelectorAll('#taskList li').length - document.querySelectorAll('.taskCompleted').length);
}

function checkIfAnyTasks(){
    if(document.querySelectorAll('li').length == 0){
        var toRemove = document.querySelector('#tasksToFinish');
        toRemove.parentElement.removeChild(toRemove);
    }
}

function updateTasksNum(){
    document.querySelector('#counter').innerHTML = countList();
}