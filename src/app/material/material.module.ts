import { NgModule } from '@angular/core';
import { MatButtonModule, MatButtonToggleModule, MatIconModule } from "@angular/material";

const MaterialComponents = [
  MatButtonModule,
  MatButtonToggleModule,
  MatIconModule,
]

@NgModule({
  imports: [MaterialComponents],
  exports: [MaterialComponents]
})
export class MaterialModule { }
