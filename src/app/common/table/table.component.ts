import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';

export interface WorldData {
  Rails: string;
  Cells: string;
  Service: string;
  Status: string;
}

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}
const DATA = [
  {rail: 'r1', status: 'Pending', cell: 'ddwm', service: 'zqmxls.wmpos-prt-cancel-trade1'},
  {rail: 'r1', status: 'Pending', cell: 'ddwm', service: 'zqmxls.wmppp-sfsf-cancel-trade2'},
  {rail: 'r2', status: 'Pending', cell: 'rdwm',  service: 'zqmxls.wmppp-sfsf-cancel-trade3'},
  {rail: 'r2', status: 'Pending', cell: 'rrwm',  service: 'zqmxls.wmppp-sfsf-cancel-trade4'}
  // {rail: 'r1', status: 'Open', cell: '12/12/12', testNumber: 545, testCurrency: 45, service: '12:45'},
  // {rail: 'r1', status: 'Open', cell: '12/12/12', testNumber: 545, testCurrency: 45, service: '12:45'},
  // {rail: 'r1', status: 'Open', cell: '12/12/12', testNumber: 545, testCurrency: 45, service: '12:45'},
  // {rail: 'r1', status: 'Open', cell: '12/12/12', testNumber: 545, testCurrency: 45, service: '12:45'},
  // {rail: 'r1', status: 'New', cell: '12/12/12', testNumber: 545, testCurrency: 45, service: '12:45'},
  // {rail: 'r1', status: 'New', cell: '12/12/12', testNumber: 545, testCurrency: 45, service: '12:45'},
  // {rail: 'r2', status: 'Undefined', cell: '12/12/12', testNumber: 545, testCurrency: 45, service: '12:45'},
  // {rail: 'r2', status: 'Undefined', cell: '12/12/12', testNumber: 545, testCurrency: 45, service: '12:45'},
  // {rail: 'r2', status: 'Undefined', cell: '12/12/12', testNumber: 545, testCurrency: 45, service: '12:45'},
  // {rail: 'r2', status: 'Undefined', cell: '12/12/12', testNumber: 545, testCurrency: 45, service: '12:45'},
  // {rail: 'r2', status: 'Open', cell: '12/12/12', testNumber: 545, testCurrency: 45, service: '12:45'},
  // {rail: 'r2', status: 'Open', cell: '12/12/12', testNumber: 545, testCurrency: 45, service: '12:45'},
  // {rail: 'r2', status: 'Open', cell: '12/12/12', testNumber: 545, testCurrency: 45, service: '12:45'},
  // {rail: 'r2', status: 'Open', cell: '12/12/12', testNumber: 545, testCurrency: 45, service: '12:45'},
  // {rail: 'r2', status: 'New', cell: '12/12/12', testNumber: 545, testCurrency: 45, service: '12:45'},
  // {rail: 'r2', status: 'New', cell: '12/12/12', testNumber: 545, testCurrency: 45, service: '12:45'},
]

const Data2 = [{rail: "r1", cell: "ddwm", status:"Pending", service: "zqmxls.wmpos-prt-cancel-trade1"},
{rail: "r1", cell: "ddwm", status:"Pending", service: "zqmxls.wmppp-sfsf-cancel-trade2"},
 {rail: "r2", cell: "rdwm",  status:"Pending", service: "zqmxls.wmpew-bcd-cancel-trade3"},
 {rail: "r2",cell: "rrwm",  status:"Pending", service: "zqmxls.wmerr-abc-cancel-trade4",}
];
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  displayedColumns = ['Rails', 'Status', 'Cells', 'Service'];
  @Input() dataSource: any;

  spanningColumns = ['Rails', 'Status', 'Cells'];

  spans: any = [];

  constructor() {
    
  }

  /**
   * Evaluated and store an evaluation of the rowspan for each row.
   * The key determines the column it affects, and the accessor determines the
   * value that should be checked for spanning.
   */
  cacheSpan(key: any, accessor: any) {
    for (let i = 0; i < this.dataSource.length;) {
      let currentValue = accessor(this.dataSource[i]);
      let count = 1;

      // Iterate through the remaining rows to see how many match
      // the current value as retrieved through the accessor.
      for (let j = i + 1; j < this.dataSource.length; j++) {        
        if (currentValue != accessor(this.dataSource[j])) {
          break;
        }

        count++;
      } 

      if (!this.spans[i]) {
        this.spans[i] = {};
      }

      // Store the number of similar values that were found (the span)
      // and skip i to the next unique row.
      this.spans[i][key] = count;
      i += count;
    }
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log("dataSource", this.dataSource)
  this.cacheSpan('rail', (d: { rail: any; }) => d.rail);
    this.cacheSpan('status', (d: { rail: any; status: any; }) => d.rail + d.status);
    this.cacheSpan('cell', (d: { rail: any; status: any; cell: any; }) => d.rail + d.status + d.cell);
  }
  
ngOnInit(): void {
  console.log("dataSource", this.dataSource)
  this.cacheSpan('rail', (d: { rail: any; }) => d.rail);
    this.cacheSpan('status', (d: { rail: any; status: any; }) => d.rail + d.status);
    this.cacheSpan('cell', (d: { rail: any; status: any; cell: any; }) => d.rail + d.status + d.cell);
}
  getRowSpan(col: string | number, index: string | number) {
    return this.spans[index] && this.spans[index][col];
  }
}

