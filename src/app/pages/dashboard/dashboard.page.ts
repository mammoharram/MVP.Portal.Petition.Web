import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

interface StatusStat {
  label: string;
  count: number;
  color: string;
}

interface RecentApplication {
  caseNumber: string;
  employee: string;
  role: string;
  status: string;
  updatedAt: string;
}



@Component({
  imports: [CommonModule, RouterModule],
  selector: 'app-dashboard',
  styleUrl: './dashboard.page.scss',
  templateUrl: './dashboard.page.html',
})
export class DashboardPage {
  casesByStatus: StatusStat[] = [
    { label: 'Initiated', count: 4, color: 'blue' },
    { label: 'LCA Filed', count: 6, color: 'purple' },
    { label: 'Attorney Review', count: 3, color: 'amber' },
    { label: 'Employer Review', count: 2, color: 'orange' },
    { label: 'Awaiting Payment', count: 5, color: 'red' },
    { label: 'Filed', count: 8, color: 'green' },
    { label: 'RFE', count: 1, color: 'pink' },
    { label: 'Approved', count: 12, color: 'emerald' },
    { label: 'Denied', count: 1, color: 'gray' }
  ];

  recentApplications: RecentApplication[] = [
    { caseNumber: 'H-1B-2048', employee: 'Priya Sharma', role: 'Senior Frontend Engineer', status: 'Attorney Review', updatedAt: 'Today, 9:30 AM' },
    { caseNumber: 'H-1B-2041', employee: 'Luis Gomez', role: 'DevOps Engineer', status: 'Filed', updatedAt: 'Yesterday, 4:45 PM' },
    { caseNumber: 'H-1B-2037', employee: 'Aisha Rahman', role: 'Data Scientist', status: 'Awaiting Payment', updatedAt: 'Yesterday, 11:10 AM' },
    { caseNumber: 'H-1B-2032', employee: 'Daniel Kim', role: 'Product Manager', status: 'Approved', updatedAt: 'Aug 9, 2026' },
    { caseNumber: 'H-1B-2028', employee: 'Sofia Nguyen', role: 'Security Analyst', status: 'RFE', updatedAt: 'Aug 8, 2026' }
  ];


}

