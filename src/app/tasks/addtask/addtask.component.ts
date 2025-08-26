import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
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
  @Output() close = new EventEmitter<void>();
  enterredTitle = '';
  enterredSummary = '';
  enteredDueDate = '';

  private tasksService = inject(TasksService);

  onCancel() {
    this.close.emit();
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
    this.close.emit();
  }
}
