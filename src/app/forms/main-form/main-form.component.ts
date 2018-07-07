import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, FormControlName, FormArray } from '@angular/forms';

@Component({
  selector: 'app-main-form',
  templateUrl: './main-form.component.html',
  styleUrls: ['./main-form.component.scss']
})
export class MainFormComponent implements OnInit {
  

  public formData: any[] = [
    {
      "name":"nameCheckbox",
      "label":"name",
      "type":"checkbox",
      "value":false
    },
    {
      "name":"userName",
      "label":"name",
      "type":"text",
      "value":"Tom",
      "required":true,
      "disabled": "nameCheckbox"
    }, 
    {
      "name":"userPassword",
      "label":"password",
      "type":"password",
      "value":"",
      "required":true,
    },{
      "name":"userEmail",
      "label":"email",
      "type":"text",
      "value":"",
      "required":false,
      "enable":true
    },{
      "name":"userSubscribe",
      "label":"subscribe",
      "type":"checkbox",
      "value":false,
      "validators":"",
      "enable":true
    },{
      "name":"emailSubscribe",
      "label":"email",
      "type":"text",
      "value":"",
      "required":false,
      "disabled": "userSubscribe",
    }
    ,{
      "name":"userGender",
      "label":"gender",
      "type":"radio",
      "value":"",
      "options":[
        {"label":"male","value":"male"},
        {"label":"female","value":"female"},
        {"label":"zombie","value":"zombie"}
      ],
      "required":"true",
      "enable":true
    }, {
      "arrayType": "text",
      "name": "phones",
      "label": "phones",
      "array" : true,
      "value":"+3",
      "enable":false
    }];




  form: FormGroup;
  constructor(private formBuilder:FormBuilder) {}
  
  ngOnInit() {

    
    let fieldsCtrls = {};
    for (let item of this.formData) {
      switch(item.array) {
        case true:
          fieldsCtrls[item.name] = this.formBuilder.array([
            this.formBuilder.control(item.value)
          ]);
      break;
        
      default:
        fieldsCtrls[item.name] = this.formBuilder.control({ 
          value: item.value ||'',
          disabled: item.disabled ? true:false
        });
      }
      
      this.form = this.formBuilder.group( fieldsCtrls );
   }

   for (let item of this.formData) {
    if(item['disabled']) {
      this.form.controls[item.disabled].valueChanges.subscribe(value => {
      this.form.get(item.name)[value ? 'enable': 'disable']()
        });
      }
    }
  }
  
  removeItem(name:string,index:number) {
    (<FormArray>this.form.controls[name]).removeAt(index);
  }

  addItem(name:string, value:string ){
    (<FormArray>this.form.controls[name]).push(new FormControl(value));
  }

  onSubmit() {
    console.log(this.form);
  }
}
