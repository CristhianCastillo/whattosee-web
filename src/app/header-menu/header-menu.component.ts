import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header-menu',
  templateUrl: './header-menu.component.html',
  styleUrls: ['./header-menu.component.css']
})
export class HeaderMenuComponent implements OnInit {

  private menuType: any;
  public publicMenu = [
    { id: 0, name: 'Generos', url: '/menu-genders' },
    { id: 1, name: 'Foros', url: '/menu-discussions' }
  ];
  public userMenu = [
    { id: 0, name: 'Registro', url: '/register' },
    { id: 1, name: 'Iniciar sesión', url: '/login' }
  ];

  constructor(private router: Router) { }

  ngOnInit() {
  }

  selectTypeMenu() {
    const usuarioAutentificado = localStorage.getItem('tokenUser');
    if (usuarioAutentificado === null) {
      this.menuType = 'publicMenu';
      return true;
    } else {
      this.menuType = 'userMenu';
      return true;
    }
  }

  goToLogout() {
    localStorage.removeItem('tokenUser');
    localStorage.removeItem('idUser');
    this.router.navigate(['/login']).then(() => {
    });
  }

}
