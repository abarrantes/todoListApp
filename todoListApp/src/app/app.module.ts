import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from "@angular/http";
import { RouterModule,Routes } from "@angular/router";

import { AppComponent } from './app.component';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TasksService } from './services/tasks.service';

@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    // RouterModule.forRoot(routes)
  ],
  providers: [TasksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
