import { Injectable, signal } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class LayoutService {
    // Signals handle reactive state changes with zero boilerplate
    isSidebarOpen = signal<boolean>(true);

    toggleSidebar(): void {
        this.isSidebarOpen.update(state => !state);
    }
}
