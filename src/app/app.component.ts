import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators,  FormArray, FormBuilder, FormControlName, RequiredValidator} from '@angular/forms';



@Component({
  selector: 'app-root',
  styles: [`
        input.ng-touched.ng-invalid {border:solid red 2px;}
    `],
  templateUrl: './app.component.html'
})
export class AppComponent {
} 

  