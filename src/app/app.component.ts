import { Component, OnInit } from '@angular/core';
import { CalculationMethod } from './calculation-method'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'section2Q1';
  value1: any;
  calculation: CalculationMethod[];
  selectedMethod: CalculationMethod;
  isPrime: boolean;
  public isTrue: boolean = false;
  isFibonacci: boolean;
  constructor() {
    this.calculation = [
      { method: 'isPrime', code: 1 },
      { method: 'isFibonacci', code: 2 }
    ];
  }


  ngOnInit() {
    this.selectedMethod;



  }

  checkIntegerNumber($event) {
    let regex: RegExp = new RegExp(/^[0-9]{1,}$/g);
    let specialKeys: Array<string> = ['Backspace', 'Tab', 'End', 'Home', 'ArrowRight', 'ArrowLeft'];
    if (specialKeys.indexOf($event.key) !== -1) {
      return;
    } else {
      if (regex.test($event.key)) {
        return true;
      } else {
        return false;
      }
    }
  }


  checkCal() {
    console.log(this.selectedMethod)
    console.log(this.value1);
    if (this.selectedMethod == this.calculation[0]) {
      if ((this.value1 == 1) || (this.value1 % 2 == 0)) {
        return this.isTrue = false
      } else {
        return this.isTrue = true;
      }
    } else {
      if (this.isperfectSquare(5 * (this.value1 * this.value1) - 4) || this.isperfectSquare(5 * (this.value1 * this.value1) + 4)) {
        return this.isTrue = true;
      } else {
        return this.isTrue = false;
      }

    }

  }
  isperfectSquare(num: any) {
    let s = Math.sqrt(num);
    return (s * s == num);
  }

}

