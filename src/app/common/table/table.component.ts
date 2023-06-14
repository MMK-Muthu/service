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
  {rail: 'r1', status: 'Pending', cell: 'ddwm', service: "zqmxls.wmpos-prt-cancel-trade1"},
  {rail: 'r1', status: 'Pending', cell: 'ddwm', service: "zqmxls.wmpos-prt-cancel-trade2"},
  {rail: 'r2', status: 'Pending', cell: 'rdwm', service: "zqmxls.wmpos-prt-cancel-trade1"},
  {rail: 'r2', status: 'Pending', cell: 'rrwm', service: "zqmxls.wmpos-prt-cancel-trade1"},
  {rail: 'P1', status: 'Pending', cell: '12/12/12', service: "zqmxls.wmpos-prt-cancel-trade1"},
  {rail: 'P1', status: 'Pending', cell: '12/12/12', service: "zqmxls.wmpos-prt-cancel-trade1"},
  {rail: 'P1', status: 'Pending', cell: '12/12/12', service: "zqmxls.wmpos-prt-cancel-trade1"}
]

const Data2 = [{rail: "r1", cell: "ddwm", service: "zqmxls.wmpos-prt-cancel-trade1", status:"Pending"},
{rail: "r1", cell: "ddwm", service: "zqmxls.wmppp-sfsf-cancel-trade2", status:"Pending"},
 {rail: "r2", cell: "rdwm", service: "zqmxls.wmpew-bcd-cancel-trade3", status:"Pending"},
 {rail: "r2",cell: "rrwm", service: "zqmxls.wmerr-abc-cancel-trade4", status:"Pending"}
];
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

   //displayedColumns = ['rail', 'status', 'cell', 'testNumber'];
  displayedColumns = ['rail', 'cell', 'service', 'status'];

  dataSource = DATA;

  spanningColumns = ['rail', 'cell','status'];

  spans: any = [];

  constructor() {
    // this.cacheSpan('rail', (d: { rail: any; }) => d.rail);
    // this.cacheSpan('cell', (d: { rail: any; cell: any; }) => d.rail + d.cell);
    // this.cacheSpan('status', (d: { rail: any; cell: any; status: any; }) => d.rail + d.cell + d.status);

    
  }

  /**
   * Evaluated and store an evaluation of the rowspan for each row.
   * The key determines the column it affects, and the accessor determines the
   * value that should be checked for spanning.
   */
  cacheSpan(key: any, accessor: any) {
    console.log("key", key, accessor);
    for (let i = 0; i < this.dataSource.length;) {
      let currentValue = accessor(this.dataSource[i]);
      console.log("currentValue", currentValue);
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

    console.log("ddd", this.spans);

  }
  ngOnInit(): void {
    this.cacheSpan('rail', (d: { rail: any; }) => d.rail);
    this.cacheSpan('cell', (d: { rail: any; cell: any; }) => d.rail + d.cell);
    this.cacheSpan('status', (d: { rail: any; cell: any; status: any; }) => d.rail + d.cell + d.status);
  }

  getRowSpan(col: string | number, index: string | number) {
    return this.spans[index] && this.spans[index][col];
  }
}

