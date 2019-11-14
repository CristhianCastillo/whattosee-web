import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegisterService } from '../services/register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public registerForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private registerService: RegisterService) {
    this.registerForm = this.formBuilder.group(
      {
        email: ['', [Validators.required]],
        username: ['', [Validators.required]],
        password: ['', Validators.required]
      }
    );
  }

  registerUser() {
    if (this.registerForm.valid) {
      let user = {
        email: this.registerForm.value['email'],
        userName: this.registerForm.value['username'],
        password: this.registerForm.value['password']
      }
      this.registerService.registerUser(user).subscribe((result: any) => {
        if (result.status === "00") {
          console.log('Usuario registrado correctamente, Inici Sesión');
        } else {
          console.log('Ocurrio un problema')
        }
      },
        (err) => {
          console.log(err.message);
        });
    } else {
      console.log('Debe ingresar todos los datos del formulario.');
    }
  }

  ngOnInit() {
  }

}
