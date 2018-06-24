import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators,  FormArray } from '@angular/forms';

@Component({
  selector: 'app-root',
  styles: [`
        input.ng-touched.ng-invalid {border:solid red 2px;}
    `],
  templateUrl: './app.component.html'
})
export class AppComponent {
  
  form: FormGroup;

  constructor() {
    this.form = new FormGroup({
      'name': new FormControl('', Validators.required),
      'pass': new FormControl(''),
      'gender': new FormControl(''),
      'subscribe': new FormControl(''),
      'country': new FormControl(''),
      'email': new FormControl('', [Validators.email, Validators.required]),
      'phones': new FormArray([
        new FormControl('+38', Validators.required),
      ]) 
    })
  }
  addPhone(){
    (<FormArray>this.form.controls["phones"]).push(new FormControl("+38", Validators.required));
  }

  removePhone(index:number) {
    console.log(index);
    (<FormArray>this.form.controls["phones"]).removeAt(index);
  }

  onSubmit() {
    console.log(this.form);
  }
}
