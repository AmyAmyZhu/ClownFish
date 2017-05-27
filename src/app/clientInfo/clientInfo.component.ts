/**
 * Created by amyzhu on 17/5/27.
 */
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import CustomValidators from '../forms/CustomValidators';

@Component({
  selector: 'app-clientInfo',
  templateUrl: './clientInfo.component.html',
  styleUrls: ['./clientInfo-component.css']
})
export class ClientComponent implements OnInit {
  clientForm: FormGroup;
  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.clientForm = this.formBuilder.group({
      name: ['', Validators.required],
      age: ['', Validators.required],
    });
  }
  submitForm(): void {
    console.log(this.clientForm);
  }
}
