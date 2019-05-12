import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

class Options {
  name?: string
}

@Component({
  selector: 'app-auto-complete',
  templateUrl: './auto-complete.component.html',
  styleUrls: ['./auto-complete.component.css']
})
export class AutoCompleteComponent implements OnInit {
  options: Options[] = [
    { name: 'React' },
    { name: 'Angular' },
    { name: 'Vue' },
  ]

  myControl = new FormControl()
  filteredOptions: Observable<Options[]>

  constructor() { }

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value)),
    )
  }

  displayFn(subject) {
    return subject ? subject.name : undefined
  }

  private _filter(value: Options | string): object[] {
    const filterValue: string = (typeof value === 'object' ? value.name : value).toLowerCase()
    return this.options.filter(option => option.name.toLowerCase().includes(filterValue))
  }

}
