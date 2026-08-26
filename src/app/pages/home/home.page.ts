import { Component } from '@angular/core';
import { StatusCardComponent } from './status-card/status-card.component';

@Component({
  imports: [StatusCardComponent],
  selector: 'app-home',
  styleUrl: './home.page.scss',
  templateUrl: './home.page.html',
})
export class HomePage {
  applications = [
    {
      id: '1',
      title: 'H-1B',
      referenceNumber: 'REF123456',
      updatedAt: new Date('2024-06-01T10:00:00Z'),
      status: 'pending' as const,
      remarks: 'Initial submission received.'
    },
    {
      id: '2',
      title: 'L-1',
      referenceNumber: 'REF654321',
      updatedAt: new Date('2024-06-02T14:30:00Z'),
      status: 'in_progress' as const,
      remarks: 'Under review by the processing team.'
    },
    {
      id: '3',
      title: 'F-1',
      referenceNumber: 'REF987654',
      updatedAt: new Date('2024-06-03T09:15:00Z'),
      status: 'approved' as const,
      remarks: 'Approved and ready for next steps.'
    },
    {
      id: '4',
      title: 'O-1',
      referenceNumber: 'REF456789',
      updatedAt: new Date('2024-06-04T11:45:00Z'),
      status: 'rejected' as const,
      remarks: 'Application rejected due to missing documentation.'
    }
  ];
}
