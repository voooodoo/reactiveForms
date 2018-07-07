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
      "type": "",
      "name": "phones",
      "label": "phones",
      "array" : true,
      "controls": [
        {"value":"+3"}
      ]
    },{
      "arrayType": "text",
      "name": "texts",
      "label": "texts",
      "array" : true,
      "controls": [
        {"value":"everybody"}
      ]
    }]
    ;
  
  secondForm: FormGroup;
  
  constructor(private formBuilder:FormBuilder) {}
  
  ngOnInit() {

    let fieldsCtrls = {};
    for (let item of this.secondFormJSON) {
      switch(item.array) {
        case true:
          fieldsCtrls[item.name] = this.formBuilder.array([
            this.formBuilder.control(item.value)
          ]);
      break;
        
      default:
        fieldsCtrls[item.name] = this.formBuilder.control(item.value || '');
      }

      this.secondForm = this.formBuilder.group( fieldsCtrls );
    }

  }

  removeItem(name:string,index:number) {
    (<FormArray>this.secondForm.controls[name]).removeAt(index);
  }

  addItem(name:string, value:string ){
    (<FormArray>this.secondForm.controls[name]).push(new FormControl(value));
  }

  onSubmit() {
    console.log(this.secondForm);
  }
}
