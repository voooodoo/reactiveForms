import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainFormComponent } from './main-form/main-form.component';
import { ReactiveFormsModule, FormsModule} from '@angular/forms';
import { TextFormComponent } from './forms-item/text-form/text-form.component';
import { PasswordFormComponent } from './forms-item/password-form/password-form.component';
import { CheckboxComponent } from './forms-item/checkbox/checkbox.component';
import { RadioComponent } from './forms-item/radio/radio.component';
import { SecondFormComponent } from './second-form/second-form.component';
import { SelectedFormComponent } from './selected-form/selected-form.component';
import { SelectComponent } from './forms-item/select/select.component';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  declarations: [MainFormComponent, TextFormComponent, PasswordFormComponent, CheckboxComponent, RadioComponent, SecondFormComponent, SelectedFormComponent, SelectComponent],
  exports:[MainFormComponent, SecondFormComponent,SelectedFormComponent]
})
export class MyFormsModule { }
