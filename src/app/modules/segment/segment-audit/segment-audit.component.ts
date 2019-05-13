import { Component, OnInit } from '@angular/core';
import { Car } from '../../../domain/car';
import { auditService } from '../../../services/audit-service'
import { from } from 'rxjs';
import { SelectItem } from 'primeng/api';
@Component({
  selector: 'app-segment-audit',
  templateUrl: './segment-audit.component.html',
  styleUrls: ['./segment-audit.component.css']
})
export class SegmentAuditComponent implements OnInit {

  cars: Car[];

  cols: any[];

  brands: SelectItem[];

  colors: SelectItem[];
  
  status:SelectItem[];

  yearFilter: number;

  yearTimeout: any;

  progressBar = 75;

  cities;

  constructor( private auditService: auditService ) { }

  ngOnInit() {
    this.cities = [
        {name: 'New York', code: 'NY'},
        {name: 'Rome', code: 'RM'},
        {name: 'London', code: 'LDN'},
        {name: 'Istanbul', code: 'IST'},
        {name: 'Paris', code: 'PRS'}
    ];
    this.auditService.getCarsSmall().then(cars => this.cars = cars);

        this.brands = [
            { label: 'All Brands', value: null },
            { label: 'Audi', value: 'Audi' },
            { label: 'BMW', value: 'BMW' },
            { label: 'Fiat', value: 'Fiat' },
            { label: 'Honda', value: 'Honda' },
            { label: 'Jaguar', value: 'Jaguar' },
            { label: 'Mercedes', value: 'Mercedes' },
            { label: 'Renault', value: 'Renault' },
            { label: 'VW', value: 'VW' },
            { label: 'Volvo', value: 'Volvo' }
        ];

        this.colors = [
            { label: 'White', value: 'White' },
            { label: 'Green', value: 'Green' },
            { label: 'Silver', value: 'Silver' },
            { label: 'Black', value: 'Black' },
            { label: 'Red', value: 'Red' },
            { label: 'Maroon', value: 'Maroon' },
            { label: 'Brown', value: 'Brown' },
            { label: 'Orange', value: 'Orange' },
            { label: 'Blue', value: 'Blue' }
        ];
        
        this.status = [
            { label: 'Started', value: 'Started' },
            { label: 'Error', value: 'Error' },
            { label: 'Completed', value: 'Completed' },
            { label: 'Aborted', value: 'Aborted' }
        ];

        this.cols = [
            { field: 'status', header: 'Status' },
            { field: 'year', header: 'Date' },
            { field: 'brand', header: 'Time ' },
            { field: 'color', header: 'Text' }
        ];
    }

//     onYearChange(event, dt) {
//         if (this.yearTimeout) {
//             clearTimeout(this.yearTimeout);
//         }

//         this.yearTimeout = setTimeout(() => {
//             dt.filter(event.value, 'year', 'gt');
//         }, 250);
//   }

}
