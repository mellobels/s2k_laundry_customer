import { Component } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';

@Component({
  selector: 'app-cus-landingpage',
  standalone: true,
  imports: [RouterLink,RouterModule],
  templateUrl: './cus-landingpage.component.html',
  styleUrl: './cus-landingpage.component.css'
})
export class CusLandingpageComponent {

}
