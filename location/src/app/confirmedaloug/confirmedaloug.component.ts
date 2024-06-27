import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-confirmedaloug',
  templateUrl: './confirmedaloug.component.html',
  styleUrls: ['./confirmedaloug.component.css']
})
export class ConfirmedalougComponent {
  @Output() deleteConfirmed = new EventEmitter<void>();
  @Output() deleteCancelled = new EventEmitter<void>();

  confirmDelete(): void {
    this.deleteConfirmed.emit();
  }

  closeModal(): void {
    this.deleteCancelled.emit();
  }
}
