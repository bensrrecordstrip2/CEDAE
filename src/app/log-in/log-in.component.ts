import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'pm-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent implements OnInit {
  LogInForm: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.LogInForm   = this.fb.group({
      User: ["", [Validators.required, Validators.email]],
      Pass: ["", [Validators.required]],
    });
  }
  save(): void{
    console.log(this.LogInForm.value);
  }
  buttondisplay(): void{
    alert('Hola buton');
  }
}
