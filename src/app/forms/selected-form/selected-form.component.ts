import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';

@Component({
  selector: 'app-selected-form',
  templateUrl: './selected-form.component.html',
  styleUrls: ['./selected-form.component.scss']
})
export class SelectedFormComponent implements OnInit {

  public selectedFormData: any[] = [
    {
      "name":"UserName",
      "label":"name",
      "type":"text",
      "value":"name",
      "required": true
    }, {
      "name":"lastName",
      "label":"lastName",
      "type":"text",
      "value":"lastName",
      "disabled" : true,

    }, {
      "name":"userGender",
      "label":"gender",
      "type":"radio",
      "value":"",
      "options":[
        {"label":"male","value":"Male"},
        {"label":"female","value":"Female"},
        {"label":"zombie","value":"Zombie"}
      ]
    }, {
      "name":"userCountry",
      "label":"country",
      "type":"select",
      "value":"",
      "options":[
        {"value":"Ukraine", "selected":true},
        {"value":"The USA"}
      ],
    }, {
        "type": "group",
        "label": "",
        "name": "UsaGroup",
        "children": [
          {
            "type": "text",
            "label":"driver license",
            "name": "driverLicense",
          
        }, {
          "type": "text",
          "label":"driver",
          "name": "driver",
        }
      ]
    }];

  selectedForm: FormGroup;
  
  constructor(private formBuilder:FormBuilder) { }

  ngOnInit() {

    let fieldsCtrls = {};
    
    for (let item of this.selectedFormData) {
      switch(item.type) {
        case 'array':
          fieldsCtrls[item.name] = this.formBuilder.array([
            this.formBuilder.control(item.value)
          ]);
      break;
        case 'group':
        let children = {};
        for(let child of item.children) {
          children[child.name] = this.formBuilder.control('');
        } 

          fieldsCtrls[item.name] = this.formBuilder.group(children);
          
      break;

        
      default:
        fieldsCtrls[item.name] = this.formBuilder.control({ 
          value: item.value ||'',
          disabled: item.disabled ? true:false
        });
      }
      
      this.selectedForm = this.formBuilder.group( fieldsCtrls );
   }
  }
   onSubmit() {
    console.log(this.selectedForm);
  }

  }
