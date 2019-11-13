import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";

declare var $: any;
@Component({
  selector: 'app-menu-movies',
  templateUrl: './menu-movies.component.html',
  styleUrls: ['./menu-movies.component.css']
})
export class MenuMoviesComponent implements OnInit {

  public idGenderMovie: string;
  constructor(private readonly route: ActivatedRoute,
    private readonly router: Router) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.idGenderMovie = params.get("id");
      console.log('Id Genero Peliculas: ', this.idGenderMovie);
    });
  }

  loadMovieInfo() {
    $('#exampleModal').modal('show');
  }

  closeModal() {
    $('#exampleModal').modal('toggle');
  }

}
