import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-menu-movies-genders',
  templateUrl: './menu-movies-genders.component.html',
  styleUrls: ['./menu-movies-genders.component.css']
})
export class MenuMoviesGendersComponent implements OnInit {

  constructor(private readonly route: ActivatedRoute,
    private readonly router: Router) { }

  ngOnInit() {
  }

  goToMovies() {
    this.router.navigate(["menu-movies", 4]);
  }

}
