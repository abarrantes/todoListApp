import { Component, OnInit } from '@angular/core';
import { TasksService } from '../services/tasks.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  tasks: Array<any>;

  constructor(private tasksService: TasksService) { }

  ngOnInit() {

    this.tasksService.getTasksFromDB()
      .subscribe((response) => this.tasks = response);
  }

}

