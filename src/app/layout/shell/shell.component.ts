import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { SideNavComponent } from '../side-nav/side-nav.component';
import { RouterOutlet } from "@angular/router";

@Component({
  imports: [
    HeaderComponent,
    FooterComponent,
    SideNavComponent,
    RouterOutlet
  ],
  selector: 'app-shell',
  styleUrl: './shell.component.scss',
  templateUrl: './shell.component.html',
})
export class AppShellComponent { }

