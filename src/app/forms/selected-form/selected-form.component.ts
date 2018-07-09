import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

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
      "value":"name"
    }, {
      "name":"lastName",
      "label":"lastName",
      "type":"text",
      "value":"lastName",
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
    }, ];

  selectedForm: FormGroup;
  
  constructor(private formBuilder:FormBuilder) { }

  ngOnInit() {
    let fieldsCtrls = {};
    for (let item of this.selectedFormData) {
      fieldsCtrls[item.name] = this.formBuilder.control({ 
        value: item.value ||'',
        disabled: item.disabled ? true:false
      });
    }
      
    this.selectedForm = this.formBuilder.group( fieldsCtrls );
   }
  
   onSubmit() {
    console.log(this.selectedForm);
  }

}
