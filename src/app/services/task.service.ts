import { Injectable } from '@angular/core';
import {Observable} from 'rxjs'
import {HttpClient,HttpHeaders} from '@angular/common/http'
import { Task } from 'src/app/Task';


const httpOptions={
  headers: new HttpHeaders({
    'Content-Type':'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private httpurl='http://localhost:5000/tasks'
  constructor(private http:HttpClient) { }
  
  getTasks():Observable< Task[]>{
    return this.http.get<Task[]>(this.httpurl)
  }

  deletTask(task:Task):Observable< Task>{
    let deleturl=`http://localhost:5000/tasks/${task.id}`
    return this.http.delete<Task>(deleturl)
  }
  toggelTask(task:Task):Observable< Task>{
    let toggel=`http://localhost:5000/tasks/${task.id}`
    return this.http.put<Task>(toggel,task,httpOptions)
  }
  AddTask(task:Task):Observable<Task>{
    return this.http.post<Task>(this.httpurl,task,httpOptions)
  }
}
