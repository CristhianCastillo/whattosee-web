import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RegisterService } from '../services/register.service';
import Swal from 'sweetalert2';

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
          Swal.fire({
            title: 'Registro',
            text: 'Usuario registrado correctamente, Inicia Sesión',
            icon: 'success',
          });
        } else {
          Swal.fire({
            title: 'Registro',
            text: 'No se ha podido registrar el usuario. ' + result.result,
            icon: 'error',
          });
        }
      },
        (err) => {
          Swal.fire({
            title: 'Registro',
            text: 'No se ha podido registrar el usuario. ' + err.message,
            icon: 'error',
          });
        });
    } else {
      Swal.fire({
        title: 'Registro',
        text: 'Debe ingresar todos los datos del formulario',
        icon: 'warning',
      });
    }
  }

  ngOnInit() {
  }

}
