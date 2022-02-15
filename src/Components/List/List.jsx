import React from 'react';

function List(){
return(
    <main class="container" id="taskList">
        <div class="row justify-content-center">
            <h1 class="col-md-3 ">To Do</h1>
            <div class="col-md-6 ">

                <div id="toDoList">
          <div class="btn-group btn-lg btn-block task
          
          " data-id="2" role="group" aria-label="Basic example">
        
          <button type="button" class="btn btn-primary flip " value="notDone">
          Laundry
          </button>
          <button type="button" class="btn btn-primary delete btn-danger">X</button></div>
          <div class="btn-group btn-lg btn-block task
          
          " data-id="26" role="group" aria-label="Basic example">
        
          <button type="button" class="btn btn-primary flip " value="notDone">
          asdf
          </button>
          <button type="button" class="btn btn-primary delete btn-danger">X</button></div>
          <div class="btn-group btn-lg btn-block task
          
          " data-id="7" role="group" aria-label="Basic example">
        
          <button type="button" class="btn btn-primary flip " value="notDone">
          Walk the Dog
          </button>
          <button type="button" class="btn btn-primary delete btn-danger">X</button></div></div>
            </div>
        </div>
        <div class="row justify-content-center">
            <h1 class="col-md-3">Done</h1>
            
            
                <div class="col-md-6 ">
                    <div id="doneList">
            <div class="btn-group btn-lg btn-block task
            
            " data-id="9" role="group" aria-label="Basic example">
          
            <button type="button" class="btn btn-secondary flip" value="Done">
            Do Dishes
            </button>
            <button type="button" class="btn btn-secondary delete btn-danger">X</button></div>
            <div class="btn-group btn-lg btn-block task
            
            " data-id="1" role="group" aria-label="Basic example">
          
            <button type="button" class="btn btn-secondary flip" value="Done">
            Groceries
            </button>
            <button type="button" class="btn btn-secondary delete btn-danger">X</button></div>
            <div class="btn-group btn-lg btn-block task
            
            " data-id="4" role="group" aria-label="Basic example">
          
            <button type="button" class="btn btn-secondary flip" value="Done">
            Mow the lawn
            </button>
            <button type="button" class="btn btn-secondary delete btn-danger">X</button></div></div>
                </div>
               
        </div>
    </main>
)
}

export default List;