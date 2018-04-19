import { Component,Input,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'add-delete-button',
  templateUrl: 'add-delete-button.html'
})
export class AddDeleteButtonComponent {

  @Input('itemqty') qty;
  @Output() someEvent = new EventEmitter();

  constructor() {
   
  }
  ngAfterViewInit(){
    console.log(this.qty)
  }

  lessQty(obj){
  console.log(obj)
  }
  addQty(obj){
    console.log(obj)
  }
}
