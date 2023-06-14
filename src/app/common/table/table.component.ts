import { Component, Input, SimpleChanges } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';

export interface WorldData {
  Rails: string;
  Cells: string;
  Service: string;
  Status: string;
}
const DATA = [
  {priority: 'P1', status: 'Undefined', dateCreated: '12/12/12', testNumber: 545, testCurrency: 45, testTime: '12:45'},
  {priority: 'P1', status: 'Undefined', dateCreated: '12/12/12', testNumber: 545, testCurrency: 45, testTime: '12:45'},
  {priority: 'P1', status: 'Undefined', dateCreated: '11/12/12', testNumber: 545, testCurrency: 45, testTime: '12:45'},
  {priority: 'P1', status: 'Undefined', dateCreated: '11/12/12', testNumber: 545, testCurrency: 45, testTime: '12:45'},
  {priority: 'P1', status: 'Open', dateCreated: '12/12/12', testNumber: 545, testCurrency: 45, testTime: '12:45'},
  {priority: 'P1', status: 'Open', dateCreated: '12/12/12', testNumber: 545, testCurrency: 45, testTime: '12:45'},
  {priority: 'P1', status: 'Open', dateCreated: '12/12/12', testNumber: 545, testCurrency: 45, testTime: '12:45'},
  {priority: 'P1', status: 'Open', dateCreated: '12/12/12', testNumber: 545, testCurrency: 45, testTime: '12:45'},
  {priority: 'P1', status: 'New', dateCreated: '12/12/12', testNumber: 545, testCurrency: 45, testTime: '12:45'},
  {priority: 'P1', status: 'New', dateCreated: '12/12/12', testNumber: 545, testCurrency: 45, testTime: '12:45'},
  {priority: 'P2', status: 'Undefined', dateCreated: '12/12/12', testNumber: 545, testCurrency: 45, testTime: '12:45'},
  {priority: 'P2', status: 'Undefined', dateCreated: '12/12/12', testNumber: 545, testCurrency: 45, testTime: '12:45'},
  {priority: 'P2', status: 'Undefined', dateCreated: '12/12/12', testNumber: 545, testCurrency: 45, testTime: '12:45'},
  {priority: 'P2', status: 'Undefined', dateCreated: '12/12/12', testNumber: 545, testCurrency: 45, testTime: '12:45'},
  {priority: 'P2', status: 'Open', dateCreated: '12/12/12', testNumber: 545, testCurrency: 45, testTime: '12:45'},
  {priority: 'P2', status: 'Open', dateCreated: '12/12/12', testNumber: 545, testCurrency: 45, testTime: '12:45'},
  {priority: 'P2', status: 'Open', dateCreated: '12/12/12', testNumber: 545, testCurrency: 45, testTime: '12:45'},
  {priority: 'P2', status: 'Open', dateCreated: '12/12/12', testNumber: 545, testCurrency: 45, testTime: '12:45'},
  {priority: 'P2', status: 'New', dateCreated: '12/12/12', testNumber: 545, testCurrency: 45, testTime: '12:45'},
  {priority: 'P2', status: 'New', dateCreated: '12/12/12', testNumber: 545, testCurrency: 45, testTime: '12:45'},
]
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {

  displayedColumns: string[] = ['Rails', 'Cells', 'Service', 'Status'];
  @Input() dataSource: MatTableDataSource<WorldData>;

  selectedValues = new FormControl([]);
  regionValues = new FormControl([]);
  countryValues = new FormControl([]);
  capitalValues = new FormControl([]);
  spans: any;

  constructor() { 
    this.dataSource = new MatTableDataSource<WorldData>([]);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("this.categories", this.dataSource)
  }

  getRowSpan(row: any): number {
    // Calculate and return the row span value based on your logic
    // For example:
    return 1;
  }
}
