
import { Component, input, computed } from '@angular/core';
import { DatePipe } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { Application, ApplicationStatus } from './application-status.model';

@Component({
  selector: 'app-status-card',
  imports: [
    MatCardModule,
    MatChipsModule,
    MatIconModule,
    MatButtonModule,
    DatePipe
  ],
  templateUrl: './status-card.component.html',
  styleUrls: ['./status-card.component.scss']
})
export class StatusCardComponent {
  application = input.required<Application>();

  // Determine standard Angular Material theme colors for chips
  chipColor = computed(() => {
    const colorMap: Record<ApplicationStatus, string> = {
      pending: 'accent',
      in_progress: 'primary',
      approved: 'success',
      rejected: 'warn'
    };
    return colorMap[this.application().status];
  });

  // Assign contextual material icons
  statusIcon = computed(() => {
    const iconMap: Record<ApplicationStatus, string> = {
      pending: 'hourglass_empty',
      in_progress: 'pending',
      approved: 'check_circle',
      rejected: 'cancel'
    };
    return iconMap[this.application().status];
  });

  statusLabel = computed(() => {
    const labels: Record<ApplicationStatus, string> = {
      pending: 'Pending Review',
      in_progress: 'In Progress',
      approved: 'Approved',
      rejected: 'Rejected'
    };
    return labels[this.application().status];
  });
}
