import { Component, inject } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { LayoutService } from '../layout.service';

interface MenuItem {
  label: string;
  route: string;
  icon: string;
  children?: MenuItem[];
}

@Component({
  imports: [RouterLink, RouterLinkActive],
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent {
  protected layoutService = inject(LayoutService);

  // Structural menu array supporting main items and internal links
  protected menuItems: MenuItem[] = [
    { label: 'Dashboard', route: '/dashboard', icon: '📊' },
    { label: 'New Petition', route: '/petitioner/personal-info', icon: '📝' },
    { label: 'Settings', route: '/settings', icon: '⚙️' }
  ];
}