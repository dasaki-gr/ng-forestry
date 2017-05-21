import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'dsk-tempform',
  templateUrl: './tempform.component.html',
  styleUrls: ['./tempform.component.scss']
})
export class TempformComponent implements OnInit {
  registerForm: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      firstname: ['John', Validators.required],
      lastname: [''],
      address: this.formBuilder.group({
        street: [],
        zip: [],
        city: []
      })
    });
  }

  public submitForm(){
    console.log (this.registerForm.value);
  }


}
