import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { MovieService } from '../services/movie.service';
import Swal from 'sweetalert2';

declare var $: any;
@Component({
  selector: 'app-menu-movies',
  templateUrl: './menu-movies.component.html',
  styleUrls: ['./menu-movies.component.css']
})
export class MenuMoviesComponent implements OnInit {

  public idGenderMovie: string;
  public movies: any;
  public isLoading: boolean;
  public movieSelected: any;
  public calificationMovie: string;
  public commentUser: string;
  constructor(private readonly route: ActivatedRoute,
    private readonly router: Router, private movieService: MovieService) { }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.idGenderMovie = params.get("id");
      console.log('Id Genero Peliculas: ', this.idGenderMovie);
      this.refreshView();
    });
  }

  refreshView() {
    this.isLoading = true;
    this.movieService.getMovisByGender(Number(this.idGenderMovie)).subscribe((result: any) => {
      this.isLoading = false;
      if (result.status === "00") {
        this.movies = result.result;
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

  goToInfoMovie(movie: any) {
    console.log(movie);
    this.movieSelected = movie;
    $('#modal-movie').modal('show');
  }

  getScoreMovie(score: number, scoreCounter: number) {
    if (scoreCounter === 0)
      return 0;
    return score / scoreCounter;
  }

  showModalScore() {
    $('#modal-score').modal('show');
  }

  showModalComment() {
    $('#modal-comment').modal('show');
  }

  scoreMovie() {
    if (this.calificationMovie === null) {
      Swal.fire({
        title: 'Movies',
        text: 'Debe seleccionar un puntaje para calificar.',
        icon: 'error',
      });
    } else {
      const score = {
        score: Number(this.calificationMovie),
        idMovie: this.movieSelected.id
      };
      this.movieService.scoreMovie(score).subscribe((result: any) => {
        if (result.status === "00") {
          Swal.fire({
            title: 'Movies',
            text: 'Pelicula calificada correctamente',
            icon: 'success',
          });
          $('#modal-score').modal('toggle');
          $('#modal-movie').modal('toggle');
          this.refreshView();
        } else {
          Swal.fire({
            title: 'Movies',
            text: 'Error: ' + result.result,
            icon: 'error',
          });
        }
      },
        (err) => {
          Swal.fire({
            title: 'Movies',
            text: err.message,
            icon: 'error',
          });
        });
    }
  }

  sendComment() {
    if (this.commentUser === null) {
      Swal.fire({
        title: 'Movies',
        text: 'Debe ingresar un comentario valido.',
        icon: 'error',
      });
    } else {
      const comment = {
        description: this.commentUser,
        userEntity: {
          id: Number(localStorage.getItem('idUser'))
        },
        movieEntity: {
          id: this.movieSelected.id
        }
      };
      this.movieService.createComment(comment).subscribe((result: any) => {
        if (result.status === "00") {
          Swal.fire({
            title: 'Movies',
            text: 'Comentario creado correctamente',
            icon: 'success',
          });
          $('#modal-comment').modal('toggle');
          $('#modal-movie').modal('toggle');
          this.refreshView();
        } else {
          Swal.fire({
            title: 'Movies',
            text: 'Error: ' + result.result,
            icon: 'error',
          });
        }
      },
        (err) => {
          Swal.fire({
            title: 'Movies',
            text: err.message,
            icon: 'error',
          });
        });
    }
  }
}
