import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/Task';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  tasks:Task[]=[]
  constructor(private taskservice:TaskService) { }

  ngOnInit(): void {
    this.taskservice.getTasks().subscribe((tasks)=>{
      this.tasks=tasks
    })
  }
  deleteTaks(task:Task){
    this.taskservice.deletTask(task).subscribe(()=>{
     this.tasks=this.tasks.filter(t=>t.id !== task.id)
    })
  }
 toggelTask(task:Task){
  task.reminder = !task.reminder
  this.taskservice.toggelTask(task).subscribe()
 }
 AddTaks(task:Task){
  this.taskservice.AddTask(task).subscribe((task)=>{
      this.tasks.push(task)
    })
 }
}
