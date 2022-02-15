import React from 'react';

function Input(){
return(
        <div className="row justify-content-center">
        <div className="input-group w-50">
            <input type="text" className="form-control" placeholder="Task Name" id="newTask"/>
            <span type="button" className="input-group-text btn btn-outline-secondary" id="submit">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                    className="bi bi-plus" viewBox="0 0 16 16">
                    <path
                        d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z">
                    </path>
                </svg>
            </span>
        </div>
    </div>)
}

export default Input;