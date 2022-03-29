import { Component, OnInit,Input,Output,EventEmitter } from '@angular/core';
import { Task } from 'src/app/Task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {
  @Input() task:Task
  @Output() onDeleteTask =new EventEmitter()
  @Output() onToggelTask =new EventEmitter()
  fatime=faTimes
  constructor() { }

  ngOnInit(): void {
  }
  onDelete(task:Task){
    this.onDeleteTask.emit(task)
  }
  ontoggel(task:Task){
    this.onToggelTask.emit(task)
  }

}
