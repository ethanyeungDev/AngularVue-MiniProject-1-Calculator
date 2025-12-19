import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
    standalone: true,
    imports: [CommonModule, FormsModule],
    styleUrls:  ['./app.css'],
    templateUrl: './app.html',
})

export class App {
  add_1: number | null = null;
  add_2: number | null = null;
  sum: number | null = null;
  displaySumBool: boolean = false;

  sub_1: number | null = null;
  sub_2: number | null = null;
  diff: number | null = null;
  displaySubBool: boolean = false;

  fac_1: number | null = null;
  fac_2: number | null = null;
  prod: number | null = null;
  displayProdBool: boolean = false;

  div_1: number | null = null;
  div_2: number | null = null;
  quot: number | null = null;
  displayQuotBool: boolean = false;

  val1: number | null = null;
  val2: number | null = null;

  constructor() {
  }

  nullAllValues() {
    this.add_1 = null;
    this.add_2 = null;
    this.sum = null;
    this.displaySumBool = false;

    this.sub_1 = null;
    this.sub_2 = null;
    this.diff = null;
    this.displaySubBool = false;

    this.fac_1 = null;
    this.fac_2 = null;
    this.prod = null;
    this.displayProdBool = false;

    this.div_1 = null;
    this.div_2 = null;
    this.quot = null;
    this.displayQuotBool = false;
  }

  onAdd() {
    this.val1 = (this.add_1||0);
    this.val2 = (this.add_2||0);
    this.nullAllValues();
    this.sum = this.val1 + this.val2;
    this.displaySumBool = true;
  }

  onSub() {
    this.val1 = (this.sub_1||0);
    this.val2 = (this.sub_2||0);
    this.nullAllValues();
    this.diff = this.val1 - this.val2;
    this.displaySubBool = true;
  }

  onFac() {
    this.val1 = (this.fac_1||0);
    this.val2 = (this.fac_2||0);
    this.nullAllValues();
    this.prod = this.val1 * this.val2;
    this.displayProdBool = true;
  }

  onDiv() {
    this.val1 = (this.div_1||0);
    this.val2 = (this.div_2||0);
    this.nullAllValues();
    if (this.val2 !== 0) {
      this.quot = this.val1 / this.val2;
      this.displayQuotBool = true;
    }
  }
}