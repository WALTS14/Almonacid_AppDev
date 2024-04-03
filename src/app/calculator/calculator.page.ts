import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.page.html',
  styleUrls: ['./calculator.page.scss'],
})
export class CalculatorPage implements OnInit {

  textField: string = "";
  operators: string = "";
  firstnumber: number | null = null;
  secondnumber: number | null = null;
  result: number | string = "";

  constructor() { }
  ngOnInit(): void {
    
  }

  goBtn(value: number) {
    if (this.operators == "") {
      this.firstnumber = this.firstnumber == null ? value : this.firstnumber * 10 + value;
      this.textField += value;
    } else {
      this.secondnumber = this.secondnumber == null ? value : this.secondnumber * 10 + value;
      this.textField += value;
    }
  }

  clearBtn(){
    this.textField = "";
    this.firstnumber = null;
    this.secondnumber = null;
    this.operators = "";
    this.result = "";
  }

  goDivide() {
    this.operators = "/";
    this.textField += this.operators;
  }

  goMultiply() {
    this.operators = "*";
    this.textField += this.operators;
  }

  goSubtract() {
    this.operators = "-";
    this.textField += this.operators;
  }
  goAdd() {
    this.operators = "+";
    this.textField += this.operators;
  }

  goEqual() {
    if (this.operators !== "" && this.firstnumber !== null && this.secondnumber !== null) {
      switch (this.operators) {
        case "+":
          this.result = this.firstnumber + this.secondnumber;
          break;
        case "-":
          this.result = this.firstnumber - this.secondnumber;
          break;
        case "":
          this.result = this.firstnumber * this.secondnumber;
          break;
        case "/":
          if (this.secondnumber === 0) {
            this.result = 'Error: Division by zero';
          } else {
            this.result = this.firstnumber / this.secondnumber;
          }
          break;
        default:
          break;
      }
      this.textField = this.textField + "=" + this.result;
      this.firstnumber = this.result as number;
      this.secondnumber = null;
      this.operators = "";
    }
  }
}