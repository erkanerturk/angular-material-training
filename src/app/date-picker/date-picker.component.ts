import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-picker',
  templateUrl: './date-picker.component.html',
  styleUrls: ['./date-picker.component.css']
})
export class DatePickerComponent implements OnInit {

  minDate = new Date(2018)
  maxDate = new Date(2019, 6, 1)

  constructor() { }

  ngOnInit() {
  }

  dateFilter = date => {
    const day = date.getDay()
    return day !== 0 && day !== 6
  }

}
