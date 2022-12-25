import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Task } from './task';

@Injectable({
  providedIn: 'root'
})
export class ApiClientService {

  rootUrl = 'http://localhost:3000/todos';

  constructor(private http: HttpClient) { }

  getAllTasks () : Observable<Task[]> {
    return this.http.get<Task[]>(this.rootUrl);
  }

  addTask (name: string) : Observable<Task> {
    const httpOptions = {
      headers: {
        'Content-Type': 'application/json'
      }
    };

    return this.http.post<Task>(this.rootUrl, { name }, httpOptions);
  }


  deleteTask (id: string) : Observable<Task> {
    return this.http.delete<Task>(this.rootUrl + `/${id}`);
  }


  doneTask (id: string) : Observable<Task> {
    const httpOptions = {
      headers: {
        'Content-Type': 'application/json'
      }
    };

    return this.http.put<Task>(this.rootUrl + `/${id}/done`, {}, httpOptions);
  }
}
