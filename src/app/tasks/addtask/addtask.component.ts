import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './addtask.component.html',
  styleUrl: './addtask.component.css',
})
export class AddtaskComponent {
  @Output() cancel = new EventEmitter<void>();
  enterredTitle = '';
  enterredSummary = '';
  enteredDueDate = '';

  onCancel() {
    this.cancel.emit();
  }
}
