import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Character} from '../_model/Character';


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
      const character: Character = new Character(this.form.controls.firstName.value, this.form.controls.lastName.value,
        this.form.controls.email.value, this.form.controls.dateOfBirth.value);
      console.log('titi' + character);
      localStorage.setItem('character', JSON.stringify(character));
    }

  }

  resetForm() {
    this.form.reset();

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
