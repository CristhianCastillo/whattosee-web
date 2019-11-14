import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private loginService: LoginService, private router: Router) {
    this.loginForm = this.formBuilder.group(
      {
        username: ['', [Validators.required]],
        password: ['', [Validators.required]]
      }
    );
  }

  loginUser() {
    if (this.loginForm.valid) {
      let user = {
        username: this.loginForm.value['username'],
        password: this.loginForm.value['password']
      }
      this.loginService.loginUser(user).subscribe((result: any) => {
        if (result.status === "00") {
          localStorage.setItem('tokenUser', result.result.token);
          localStorage.setItem('idUser', result.result.id);
          this.router.navigate(['menu-genders']).then(() => { });
        } else {
          Swal.fire({
            title: 'Login',
            text: 'El usuario no se ha podio auntenticar: ' + result.result,
            icon: 'error',
          });
        }
      },
        (err) => {
          Swal.fire({
            title: 'Login',
            text: 'El usuario no se ha podio auntenticar: ' + err.message,
            icon: 'error',
          });
        });
    } else {
      Swal.fire({
        title: 'Login',
        text: 'Debe ingresar todos los datos del formulario',
        icon: 'warning',
      });
    }
  }

  ngOnInit() {
  }

}
