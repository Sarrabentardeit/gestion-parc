// sidebar.component.ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  toggleSidebar() {
    const sidebar = document.querySelector('.sidebar');
    if (sidebar) {
      sidebar.classList.toggle('close');
    }
  }

  toggleSubMenu(event: Event) {
    const parent = (event.target as HTMLElement).closest('li');
    if (parent) {
      parent.classList.toggle('showMenu');
    }
  }

  LogOut() {
    console.log('User logged out');
  }
}
