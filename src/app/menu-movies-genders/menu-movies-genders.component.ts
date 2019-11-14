import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { MovieService } from '../services/movie.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-menu-movies-genders',
  templateUrl: './menu-movies-genders.component.html',
  styleUrls: ['./menu-movies-genders.component.css']
})
export class MenuMoviesGendersComponent implements OnInit {

  public moviesCategories: any;
  public isLoading: boolean;
  constructor(private readonly route: ActivatedRoute,
    private readonly router: Router, private movieService: MovieService) { }

  ngOnInit() {
    this.refreshView();
  }

  refreshView() {
    this.isLoading = true;
    this.movieService.getMoviGenders().subscribe((result: any) => {
      this.isLoading = false;
      if (result.status === "00") {
        this.moviesCategories = result.result;
      } else {
        Swal.fire({
          title: 'Movies',
          text: 'Error: ' + result.result,
          icon: 'error',
        });
      }
    },
      (err) => {
        this.isLoading = false;
        Swal.fire({
          title: 'Movies',
          text: err.message,
          icon: 'error',
        });
      });
  }

  goToMovies(id: number) {
    this.router.navigate(["menu-movies", id]);
  }

}
