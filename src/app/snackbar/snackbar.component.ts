import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-snackbar',
  templateUrl: './snackbar.component.html',
  styleUrls: ['./snackbar.component.css']
})
export class SnackbarComponent implements OnInit {

  constructor(private snackbar: MatSnackBar) { }

  ngOnInit() {
  }

  openSnackbar(message) {
    this.snackbar.open(message)
  }
}
