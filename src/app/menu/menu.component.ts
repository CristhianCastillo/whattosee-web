import { Component, OnInit } from '@angular/core';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private movieService: MovieService) { }

  ngOnInit() {
    this.movieService.getMoviGenders().subscribe((result: any) => {
      if (result.status === "00") {
        console.log("Generos de Peliculas");
        console.log(result);
      } else {
        console.log('Ocurrio un problema')
      }
    },
      (err) => {
        console.log(err.message);
      });
  }

}
