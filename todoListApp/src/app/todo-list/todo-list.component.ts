import { Component, OnInit } from '@angular/core';
import { TasksService } from '../services/tasks.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  tasks: Array<any>;
  newTask: any = {};
  taskToDelete: any = {};

  constructor(private tasksService: TasksService) { }

  getTasks() {
    console.log("================getTasks reached =========================");
    this.tasksService.getTasksFromDB()
      .subscribe((response) => this.tasks = response.reverse());
  }

  deleteTask(theid) {
    console.log("================deleteTask reached =========================");
    console.log(theid);
    this.tasksService.deleteTaskInDB(theid)
      .subscribe((response) => {
        console.log('response from deleteTaskInDB =============>', response)
        this.getTasks();
      });
  }

  addTask() {
    console.log("================addTask reached =========================");
    console.log(this.newTask);
    this.tasksService.createTaskInDB(this.newTask)
      .subscribe((response) => {
        console.log('response from createTaskInDB =============>', response)
        this.getTasks();
      });
  }

  ngOnInit() {
    this.getTasks();
  }

}

