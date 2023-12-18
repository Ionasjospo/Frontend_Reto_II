import { Component } from '@angular/core';
import {CdkDragDrop, CdkDropList, CdkDrag, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';


@Component({
  selector: 'app-form-page',
  templateUrl: './form-page.component.html',
  styleUrl: './form-page.component.css',
  standalone: true,
  imports: [CdkDropList, CdkDrag, MatFormFieldModule, MatSelectModule],
})
export class FormPageComponent {
  
  invalid_list : string[] = [

  ]
  
  columns_csv : string[] = [
    'Día',
    'Debe',
    'Haber',
    'RUT',
    'S',
    'C',
    'Serie',
    'Número',
    'Concepto',
    'Moneda',
    'Total',
    'N',
    'IVA',
    'Cotización',
    'Libro'
  ];

   drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }

  
}
