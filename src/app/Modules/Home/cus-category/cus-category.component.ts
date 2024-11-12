import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-cus-category',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl: './cus-category.component.html',
  styleUrl: './cus-category.component.css'
})
export class CusCategoryComponent implements OnInit{
  categ: any;
  ngOnInit(): void {
  }
}
