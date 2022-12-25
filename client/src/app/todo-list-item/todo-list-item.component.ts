import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ApiClientService } from '../api-client.service';
import { Task } from '../task';

@Component({
  selector: 'app-todo-list-item',
  templateUrl: './todo-list-item.component.html',
  styleUrls: ['./todo-list-item.component.css']
})
export class TodoListItemComponent implements OnInit {

  @Input() task! : Task
  @Output() doneTaskEvent = new EventEmitter;
  @Output() removeTaskEvent = new EventEmitter;

  constructor(private api: ApiClientService) { }

  ngOnInit(): void {
  }

  markAsDone() : void {
    this.api.doneTask(this.task._id).subscribe(() => this.doneTaskEvent.emit(this.task._id));
  }

  removeTask() : void {
    this.api.deleteTask(this.task._id).subscribe(() => this.removeTaskEvent.emit(this.task._id));
  }

}
