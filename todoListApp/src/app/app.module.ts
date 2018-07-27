import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from "@angular/http";
import { RouterModule,Routes } from "@angular/router";
import { FormsModule } from "@angular/forms";

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TasksService } from './services/tasks.service';

const routes: Routes = [
  {path: 'api/tasks/delete/:id', component: TodoListComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    RouterModule.forRoot(routes),
    NgbModule.forRoot(),
    FormsModule,    
  ],
  providers: [TasksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
