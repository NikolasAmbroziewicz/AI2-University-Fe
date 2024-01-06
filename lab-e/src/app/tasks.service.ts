import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import {Task} from "./task";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  readonly beUrl = 'http://localhost:35745'

  constructor(
    private http: HttpClient,
    ) { }

    public index(archived = false): Observable<Task[]> {
      return this.http.get<Task[]>(`${this.beUrl}/todos`, {
        params: {
          archived: archived,
          _sort: 'id',
          _order: 'desc',
        }
      })
    }
  
    public post(task: Task): Observable<Task> {
      return this.http.post(`${this.beUrl}/todos`, task)
    }
  
    public put(task: Task): Observable<Task> {
      return this.http.put(`${this.beUrl}/todos/${task.id}`, task)
    }
  
    public delete(task: Task): Observable<any> {
      return this.http.delete(`${this.beUrl}/todos/${task.id}`);
    }
}
