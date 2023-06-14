import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';

interface Option {
  id: number;
  name: string;
}

@Component({
  selector: 'app-multi-select',
  templateUrl: './multi-select.component.html',
  styleUrls: ['./multi-select.component.scss']
})
export class MultiSelectComponent implements OnInit {
  name = 'Angular';  
    
  @Input() categories = [];
  @Output() messageSent: EventEmitter<[]> = new EventEmitter<[]>();  
  selected: any = [ 
  ];  
     
  getSelectedValue(){  
  }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log("this.categories", this.categories)
    this.selectAllForDropdownItems(this.categories);
  }
  
  selectAllForDropdownItems(items: any[]) {
    console.log("All");
    let allSelect = (items: any[])=> {
      items.forEach(element => {
        element['selectedAllGroup'] = 'selectedAllGroup';
      });
    };

     allSelect(items);
  }

  onSelectionChange(event: any): void {
    console.log(this.selected, "selected")
    this.messageSent.emit(event);
    // Perform additional logic or actions based on the selection change
  }

  compareOptions(option1: Option, option2: Option): boolean {
    return option1 && option2 && option1.id === option2.id;
  }

  
}
