import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ApiClientService } from '../api-client.service';
import { Task } from '../task';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  tasks: Task[] = [];
  taskForm = this.fb.group({
    name: ''
  });

  constructor(private api: ApiClientService, private fb: FormBuilder) { }

  ngOnInit(): void {
    this.getTasks();
  }

  getTasks () : void {
    this.api.getAllTasks().subscribe(tasks => this.tasks = tasks);
  }

  markTaskAsDone (id: string) {
    const updatedTasks = this.tasks.map(task => {
      if (task._id === id) {
        task.done = true;
      }
      return task;
    })
    this.tasks = updatedTasks;
  }

  removeTaskFromList (id: string) {
    const updatedTasks = this.tasks.filter(task => task._id !== id)
    this.tasks = updatedTasks;
  }

  postTask () {
    if (this.taskForm.value.name)
      this.api.addTask(this.taskForm.value.name).subscribe(task => this.tasks.push(task));

    this.taskForm.reset();
  }

}
