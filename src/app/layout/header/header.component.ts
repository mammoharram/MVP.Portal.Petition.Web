import { Component, inject } from '@angular/core';
import { RouterLink } from '@angular/router';
import { LayoutService } from '../layout.service';

@Component({
  imports: [RouterLink],
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  // Inject services using modern inject token pattern
  protected layoutService = inject(LayoutService);

  // Example structural application details
  protected appName = 'High Quartile MVP';
  protected userProfile = {
    name: 'Mohammad',
    avatar: '/azure-users.svg'
  };
}

