import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, FormArray, AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-second-form',
  templateUrl: './second-form.component.html',
  styleUrls: ['./second-form.component.scss']
})
export class SecondFormComponent implements OnInit {
  
  public secondFormJSON: any[] = [
    {
      "name":"secondUserName",
      "label":"name",
      "type":"text",
      "value":"secondTom",
      "required":true
    }, 
    {
      "name":"secondUserGender",
      "label":"gender",
      "type":"radio",
      "value":"",
      "options":[
        {"label":"male","value":"Male"},
        {"label":"female","value":"Female"},
        {"label":"zombie","value":"Zombie"}
      ],
      "required":"true"
    }, {
      "type": "array",
      "name": "phones",
      "label": "phones",
      "controls": [
        {"value":"+3"}
      ]
    }];
  
  secondForm: FormGroup;

  constructor(private formBuilder:FormBuilder) {
    this.secondForm = this.formBuilder.group({      
      "phones": new FormArray([
    ])

    })
  }
  
  ngOnInit() {
    for(let i = 0; i<this.secondFormJSON.length;i++) {
      let controlName = this.secondFormJSON[i];
      switch(controlName.type) {
        case 'array': 
          console.log(1);
          for(let i = 0; i<controlName.controls.length; i++) {
            this.addPhone(controlName.controls[i].value)
          }
          break;
        
       default:
        this.secondForm.addControl(controlName.name, new FormControl(controlName.value));
      } 
    }
  }

  

  addPhone(value:string){
    value = value || '+3';
    (<FormArray>this.secondForm.controls["phones"]).push(new FormControl(value));
  }

  onSubmit() {
    console.log(this.secondForm);
  }
}
