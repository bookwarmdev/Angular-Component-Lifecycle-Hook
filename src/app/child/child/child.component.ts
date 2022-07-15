import { Component, DoCheck, Input, OnChanges, OnInit, SimpleChange, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit, OnChanges, DoCheck {

  private myNumber!: number;
  

  userInfo = {
    name: "Bookwarmdev"
  }

  constructor() { }

  @Input() myName!: String;

  @Input()
  set myNewNumber(number: number) {
    this.myNumber = number;
  }

  get myNewNumber() {
    return this.myNumber;
  }

  

  updateName() {
    this.userInfo.name = "Amoo .O. Faruk"
  }

  ngOnChanges(changes: SimpleChanges) {
    const newNumberChange: SimpleChange = changes['myNewNumber'];
    console.log('ngOnChanges previousValue', newNumberChange.previousValue)
    console.log('ngOnChanges currentValue', newNumberChange.currentValue);
  }

  ngOnInit(): void {
    console.log('ngOnInit ', this.myNewNumber);

  }

  ngDoCheck(): void {
    console.log('ngDoChechk');
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit');
  }

  ngAfterContentChecked(){
    console.log('ngAfterContentChecked');
  }

  ngAfterViewInit(){
    console.log('ngAfterViewInit');
  }

  ngAfterViewChecked(){
    console.log('ngAfterViewChecked');
  }

  ngOnDestroy(){
    console.log('ngOnDestroy');
    
  }

}
