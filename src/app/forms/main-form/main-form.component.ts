import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, FormControlName } from '@angular/forms';

@Component({
  selector: 'app-main-form',
  templateUrl: './main-form.component.html',
  styleUrls: ['./main-form.component.scss']
})
export class MainFormComponent implements OnInit {
  

  public formJSON: any[] = [
    {
      "name":"userName",
      "label":"name",
      "type":"text",
      "value":"Tom",
      "required":true
    }, 
    {
      "name":"userPassword",
      "label":"password",
      "type":"password",
      "value":"",
      "required":true
    },{
      "name":"userEmail",
      "label":"email",
      "type":"text",
      "value":"",
      "required":false
    },{
      "name":"userSubscribe",
      "label":"subscribe",
      "type":"checkbox",
      "value":"",
      "validators":""
    },{
      "name":"userGender",
      "label":"gender",
      "type":"radio",
      "value":"",
      "options":[
        {"label":"male","value":"male"},
        {"label":"female","value":"female"},
        {"label":"zombie","value":"zombie"}
      ],
      "required":"true"
    }];




  form: FormGroup;
  constructor(private formBuilder:FormBuilder) {
    this.form = formBuilder.group({
    })
  }
  
  ngOnInit() {
    for(let i = 0; i<this.formJSON.length;i++) {
      let controlName = this.formJSON[i];
      this.form.addControl(controlName.name, new FormControl(controlName.value) );
    }  
  }

  onSubmit() {
    console.log(this.form);
  }
}
