import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MyServiceService } from '../../../my-service.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-panel',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css'], // Fix: Use styleUrls instead of styleUrl
})
export class PanelComponent implements OnInit {
  currentDate: string | null = null;
  getDet: any[] = [];
  Transac_ID: string | null = null;
  track: string | null = null;
  detget: any;

  steps = ['Ordered', 'Shipped', 'On the way', 'Delivered'];
  currentStep = 0;

  constructor(private myserv: MyServiceService) {}

  ngOnInit(): void {
    this.Transac_ID = localStorage.getItem('temp_ID');
    console.log('Transaction ID:', this.Transac_ID);

    this.currentDate = this.formatDate(new Date());

    if (this.Transac_ID) {
      this.myserv.getDetails(this.Transac_ID).subscribe(
        (result: any) => {
          this.getDet = result || [];
          this.track = result.Tracking_number || null;

          if (this.getDet.length > 0) {
            const status = this.getDet[0].status || '';
            this.detget = this.tracking(this.steps.indexOf(status));
          }

          console.log('Result:', result);
          console.log('Details:', this.getDet);
        },
        (error) => {
          console.error('Error fetching details:', error);
        }
      );
    }
  }

  formatDate(date: Date): string {
    const options: Intl.DateTimeFormatOptions = {
      month: 'long',
      day: '2-digit',
      year: 'numeric',
    };
    return date.toLocaleDateString('en-US', options);
  }

  tracking(stepIndex: number): void {
    if (stepIndex >= 0 && stepIndex < this.steps.length) {
      this.currentStep = stepIndex;
    }
  }

  trackByTransacDet(index: number, item: any): string {
    return item.Transac_det || index; // Use unique identifier
  }

  trackByDetID(index: number, item: any): string {
    return item.TransacDet_ID || index; // Use unique identifier
  }
}
