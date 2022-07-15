import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mydemo';
  private number: number = 12345; 
  isVisible: boolean = false;

  get counter() {
    return this.number;
  }

  set counter(value) {
    this.number = value;
  }

  decrement() {
    this.counter--;
  }

  increment() {
    this.counter++;
  }

  switchVisibility(){
    this.isVisible = !this.isVisible;
  }
 
}
