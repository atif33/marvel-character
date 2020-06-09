import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-new-hero',
  templateUrl: './new-hero.component.html',
  styleUrls: ['./new-hero.component.scss']
})
export class NewHeroComponent implements OnInit {
  form: FormGroup;

  constructor(private  formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.initForm();
  }

  onSubmit() {
    if (this.form.invalid) {

    } else {
    }

  }

  resetForm() {

  }

  initForm() {
    this.form = this.formBuilder.group({
      lastName: [null, Validators.required],
      firstName: [null, Validators.required],
      email: [null, Validators.required],
      dateOfBirth: [null, Validators.required]
    });
  }
}
