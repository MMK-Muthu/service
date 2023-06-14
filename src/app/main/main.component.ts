import { Component, Input, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';

export interface WorldData {
  Rails: string;
  Cells: string;
  Service: string;
  Status: string;
}

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})

export class MainComponent implements OnInit {
  uniqueCells: any = [];
  countries: any;
  regions: any = [
  ];
  capitals: any;
  selectedService: any;
  dataSource: MatTableDataSource<WorldData>;
  table:any = [
//     {rail: "r1", cell: "ddwm", status:"Pending", service: "zqmxls.wmpos-prt-cancel-trade1"},
// {rail: "r1", cell: "ddwm", status:"Pending", service: "zqmxls.wmppp-sfsf-cancel-trade2"},
//  {rail: "r2", cell: "rdwm",  status:"Pending", service: "zqmxls.wmpew-bcd-cancel-trade3"},
//  {rail: "r2",cell: "rrwm",  status:"Pending", service: "zqmxls.wmerr-abc-cancel-trade4",}
  ];
  constructor(private http: HttpClient) {
    this.dataSource = new MatTableDataSource<WorldData>([]);
   }
  

  selectedValues = new FormControl([]);

  ngOnInit(): void {
    this.getRegion();
  }

  getRegion() {
    const apiUrl = 'https://restcountries.com/v3.1/all';
    const api = '/assets/output.json';
    
    this.http.get(api).subscribe((jsonObject: any) => {
      // const jsonObject = JSON.parse(response);
      const uniqueRails: any = [];

      for (const key in jsonObject) {
        if (jsonObject.hasOwnProperty(key)) {
          const rail = jsonObject[key].rail;
          const exist = uniqueRails.find((item: any) => item.name === rail);
          if (exist == null) {
            uniqueRails.push({id: rail, name: rail});
          }
        }
      }
      // Handle the response data here
      // const reg: any = [];
      // const regions = [...new Set(Object.values(response).map((country: any) => country.region))];
      // regions.forEach(x => reg.push({id: x, name: x}))
       this.regions = uniqueRails;
    // Handle the region data here
    }, (error) => {
      // Handle any errors
      console.error(error);
    });
  }

  async getCountries() {
    // const apiUrl =`https://restcountries.com/v3.1/region/${region}`
    const api = '/assets/output.json';
    return new Promise((resolve, reject) => {
      // Perform your asynchronous task here
      // For example, making an API call
      this.http.get(api).subscribe(
        (jsonObject: any) => {
          // Resolve the promise when the operation is complete
          // for (const key in jsonObject) {
          //   if (jsonObject.hasOwnProperty(key) && jsonObject[key].rail == region) {
          //     const cell = jsonObject[key].cell;
          //     const exist = this.uniqueCells.find((item: any) => item.name === cell);
          //     console.log("exist", exist)
          //     if (exist == null) {
          //       this.uniqueCells.push({id: cell, name: cell});
          //     }
          //   }
          // }
          resolve(jsonObject);
        },
        (error) => {
          // Reject the promise if there is an error
          reject(error);
        }
      );
    });

  }

  getCapital(capital: any) {
    const apiUrl =`https://restcountries.com/v3.1/name/${capital}`
    
    this.http.get(apiUrl).subscribe((response) => {
      // Handle the response data here
      const cap: any = [];
      const regions = [...new Set(Object.values(response).map((country: any) => {
        cap.push({id: country.capital[0], name: country.capital[0]})
      }))];
      this.capitals = cap;
    // Handle the region data here
    }, (error) => {
      // Handle any errors
      console.error(error);
    });
  }

  async onRegionChange(event: any)
  {
    this.countries = [];
    this.uniqueCells = [];
    await this.getCountries().then((jsonObject: any) => {
      for (const e in event){
        for (const key in jsonObject) {
          if (jsonObject.hasOwnProperty(key) && jsonObject[key].rail == event[e]) {
            const cell = jsonObject[key].cell;
            const exist = this.uniqueCells.find((item: any) => item.name === cell);
            if (exist == null) {
              this.uniqueCells.push({id: cell, name: cell});
            }
          }
        }
      }
      this.countries = this.uniqueCells;
    });

  }

  async onCountryChange(event: any)
  {
    this.capitals = [];
    this.uniqueCells = [];
    await this.getCountries().then((jsonObject: any) => {
      for (const e in event){
        for (const key in jsonObject) {
          if (jsonObject.hasOwnProperty(key) && jsonObject[key].cell == event[e]) {
            const service = jsonObject[key].service;
            const exist = this.uniqueCells.find((item: any) => item.name === service);
            if (exist == null) {
              this.uniqueCells.push({id: service, name: service});
            }
          }
        }
      }
      this.capitals = this.uniqueCells;
    });
  }
  onCapitalChange(event: any)
  {
    this.selectedService = event;
  }

  async onSubmit() {
    this.uniqueCells = [];
    await this.getCountries().then((jsonObject: any) => {
      for (const e in this.selectedService){
        for (const key in jsonObject) {
          if (jsonObject.hasOwnProperty(key) && jsonObject[key].service == this.selectedService[e]) {
            let obj = {
              rail:jsonObject[key].rail,
              cell:jsonObject[key].cell,
              service:jsonObject[key].service,
              status:"Pending"
            }

            this.uniqueCells.push(obj);
          }
        }
      }
      this.table = this.uniqueCells;
      console.log("this.table", this.table)
    });
  }

}


