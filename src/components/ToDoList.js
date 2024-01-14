import React, { useState } from "react";
import "../App.css";

export default function ToDoList() {
  return (
    <div className="container">
      <h2 className="center">To Do List</h2>
    </div>
  );
}
//To do list that lets nurse select amount of patients they have, and
//allows them to have a to do list per patient. (super organised)
//Or, just a general to do list.
//User can enter most important tasks in red / bold or some kind of
//prompt to let them know the task is more important than others.

//There should be the option to have reminders for certain tasks for things
//like time critical medications (so prompts to administer these drugs on the
//right time)
