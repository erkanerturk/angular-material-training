import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from './material/material.module';
import { AppComponent } from './app.component';
import { TypographyComponent } from './typography/typography.component';
import { ButtonComponent } from './button/button.component';
import { ButtonToggleComponent } from './button-toggle/button-toggle.component';
import { IconComponent } from './icon/icon.component';
import { BadgeComponent } from './badge/badge.component';
import { ProgressSpinnerComponent } from './progress-spinner/progress-spinner.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { MenuComponent } from './menu/menu.component';
import { ListComponent } from './list/list.component';
import { GridListComponent } from './grid-list/grid-list.component';
import { ExpansionPanelComponent } from './expansion-panel/expansion-panel.component';
import { CardComponent } from './card/card.component';
import { TabComponent } from './tab/tab.component';
import { StepperComponent } from './stepper/stepper.component';
import { InputComponent } from './input/input.component';
import { SelectComponent } from './select/select.component';
import { AutoCompleteComponent } from './auto-complete/auto-complete.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { RadioButtonComponent } from './radio-button/radio-button.component';
import { DatePickerComponent } from './date-picker/date-picker.component';
import { SnackbarComponent } from './snackbar/snackbar.component';
import { DialogComponent } from './dialog/dialog.component';
import { DialogExampleComponent } from './dialog/dialog-example/dialog-example.component';
import { DataTableComponent } from './data-table/data-table.component';

@NgModule({
  declarations: [
    AppComponent,
    TypographyComponent,
    ButtonComponent,
    ButtonToggleComponent,
    IconComponent,
    BadgeComponent,
    ProgressSpinnerComponent,
    ToolbarComponent,
    SidenavComponent,
    MenuComponent,
    ListComponent,
    GridListComponent,
    ExpansionPanelComponent,
    CardComponent,
    TabComponent,
    StepperComponent,
    InputComponent,
    SelectComponent,
    AutoCompleteComponent,
    CheckboxComponent,
    RadioButtonComponent,
    DatePickerComponent,
    SnackbarComponent,
    DialogComponent,
    DialogExampleComponent,
    DataTableComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [DialogExampleComponent]
})
export class AppModule { }
