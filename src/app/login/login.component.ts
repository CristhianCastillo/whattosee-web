import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';

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
          console.log('Usuario valido');
          localStorage.setItem('tokenUser', result.result.token);
          this.router.navigate(['/menu']).then(() => { });
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
