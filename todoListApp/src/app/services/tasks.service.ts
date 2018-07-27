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
}





