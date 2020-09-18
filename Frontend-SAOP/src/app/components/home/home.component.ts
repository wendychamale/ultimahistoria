import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  counter = 0;

  increment(): void {
    this.counter++;
  }

  decrement(): void {
    this.counter--
  }

}
