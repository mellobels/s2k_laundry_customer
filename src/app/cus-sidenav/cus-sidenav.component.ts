import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-cus-sidenav',
  standalone: true,
  imports: [RouterLink,RouterOutlet,RouterModule,CommonModule],
  templateUrl: './cus-sidenav.component.html',
  styleUrl: './cus-sidenav.component.css'
})
export class CusSidenavComponent {
  isOpen: boolean = true;

  toggleNav(): void {
    this.isOpen = !this.isOpen;
  }
}
