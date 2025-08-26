import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewTask } from '../task.model';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './addtask.component.html',
  styleUrl: './addtask.component.css',
})
export class AddtaskComponent {
  @Input({ required: true }) userId!: string;
  @Output() cancel = new EventEmitter<void>();
  enterredTitle = '';
  enterredSummary = '';
  enteredDueDate = '';

  constructor(private tasksService: TasksService) {}

  onCancel() {
    this.cancel.emit();
  }

  onSubmit() {
    this.tasksService.addTask(
      {
        title: this.enterredTitle,
        summary: this.enterredSummary,
        date: this.enteredDueDate,
      },
      this.userId
    );
    this.cancel.emit();
  }
}
