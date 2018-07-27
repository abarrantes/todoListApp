import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map'

@Injectable()

export class TasksService {

  constructor(private http: Http) { }

  getTasksFromDB() {
    return this.http.get('http://localhost:3000/api/tasks')
      .map((res) => res.json());
  }

  createTaskInDB(newTask){
    console.log("================= services/tasks.service/createTaskInDB was reached ===============")
    return this.http.post('http://localhost:3000/api/tasks/create',newTask)
      .map((res)=> res.json());
  }

  deleteTaskInDB(theid){
    console.log(theid);
    console.log("================= services/tasks.service/deleteTaskInDB was reached ===============")
    return this.http.delete('http://localhost:3000/api/tasks/'+theid)
      .map((res)=> res.json());
  }
}