import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  title = 'Bobby Estey Demo';
  twoWayBinding = 'twoBinding';
  items:string[] = null;

  @Input() count: number = 3;
  @Output() countChange = new EventEmitter<number>();

  constructor() {
    console.log('AppComponent.constructor');
  }

  ngOnInit() {
    this.items = ['Action', 'Another action', 'Yet Another Action'];
  }

  increment() {
    this.count++;
    this.countChange.emit(this.count);
    console.log('increment current count: ' + this.count);

    // push = add item to array
    this.items.push('increment ' + String(this.count));
  }

  decrement() {
    this.count--;
    this.countChange.emit(this.count);
    console.log('decrement current count: ' + this.count);

    // pop = remove item from array
    this.items.pop();
  }

  addItem(item) {
    console.log('addItem: ' + item);
    this.items.push(item);
    return false;
  }

  deleteItem(item) {
    console.log('deleteItem: ' + item);
    for (let i = 0; i < this.items.length; i++) {
      if (this.items[i] == item) {
        this.items.splice(i, 1);
      }
    }
  }
}
