import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { NewTask, type Task } from './task.model';
import { AddtaskComponent } from './addtask/addtask.component';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
  imports: [TaskComponent, AddtaskComponent],
})
export class TasksComponent {
  @Input({ required: true }) userId!: string;
  @Input({ required: true }) name?: string;
  isAddingTasks = false;

  /**
   *
   */
  constructor(private tasksService: TasksService) {}

  get selectedUserTasks() {
    return this.tasksService.getUserTasks(this.userId);
  }

  onCompleteTask(id: string) {
    this.tasksService.removeTask(id);
  }

  onAddTask() {
    this.isAddingTasks = true;
  }

  onCloseAddTask() {
    this.isAddingTasks = false;
  }
}
