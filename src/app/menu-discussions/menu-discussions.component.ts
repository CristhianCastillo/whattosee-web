import { Component, OnInit } from '@angular/core';
import { DiscussionService } from '../services/discussion.service';
import Swal from 'sweetalert2';
import { MovieService } from '../services/movie.service';

declare var $: any;
@Component({
  selector: 'app-menu-discussions',
  templateUrl: './menu-discussions.component.html',
  styleUrls: ['./menu-discussions.component.css']
})
export class MenuDiscussionsComponent implements OnInit {

  public foros: any;
  public movies: any;
  public isLoading: boolean;
  public nameForo: string;
  public movieSelected: string;
  public foroSelected: any;
  public commentUser: string;
  constructor(private discussionService: DiscussionService, public movieServices: MovieService) { }

  ngOnInit() {
    this.refreshView();
  }

  refreshView() {
    this.isLoading = true;
    this.discussionService.getDiscussions().subscribe((result: any) => {
      this.isLoading = false;
      if (result.status === "00") {
        this.foros = result.result;
      } else {
        Swal.fire({
          title: 'Foros',
          text: 'Error: ' + result.result,
          icon: 'error',
        });
      }
    },
      (err) => {
        this.isLoading = false;
        Swal.fire({
          title: 'Foros',
          text: err.message,
          icon: 'error',
        });
      });
    this.isLoading = true;
    this.movieServices.getAllMovies().subscribe((result: any) => {
      this.isLoading = false;
      if (result.status === "00") {
        this.movies = result.result;
      } else {
        Swal.fire({
          title: 'Foros',
          text: 'Error: ' + result.result,
          icon: 'error',
        });
      }
    },
      (err) => {
        this.isLoading = false;
        Swal.fire({
          title: 'Foros',
          text: err.message,
          icon: 'error',
        });
      });
  }

  showCommentaries(foro: any) {
    this.foroSelected = foro;
    $('#modal-edit').modal('show');
  }

  showCreateComment() {
    $('#modal-comment').modal('show');
  }

  createForo() {
    $('#modal-create').modal('show');
  }

  sendComment() {
    if (this.commentUser === '') {
      Swal.fire({
        title: 'Foro',
        text: 'Debe ingresar un comentario valido.',
        icon: 'error',
      });
    } else {
      const comment = {
        description: this.commentUser,
        userEntity: {
          id: Number(localStorage.getItem('idUser'))
        },
        discussionEntity: {
          id: Number(this.foroSelected.id)
        }
      };
      this.discussionService.createComment(comment).subscribe((result: any) => {
        if (result.status === "00") {
          Swal.fire({
            title: 'Foros',
            text: 'Comentario creado correctamente.',
            icon: 'success',
          });
          $('#modal-comment').modal('toggle');
          $('#modal-edit').modal('toggle');
          this.refreshView();
        } else {
          Swal.fire({
            title: 'Foros',
            text: 'Error: ' + result.result,
            icon: 'error',
          });
        }
      },
        (err) => {
          Swal.fire({
            title: 'Foros',
            text: err.message,
            icon: 'error',
          });
        });
    }
  }

  saveForo() {
    if (this.nameForo === null) {
      Swal.fire({
        title: 'Foro',
        text: 'Debe ingresar un nombre valido.',
        icon: 'error',
      });
    } else {
      const foro = {
        name: this.nameForo,
        userEntity: {
          id: Number(localStorage.getItem('idUser'))
        },
        movieEntity: {
          id: Number(this.movieSelected)
        }
      };
      this.discussionService.createDiscussion(foro).subscribe((result: any) => {
        if (result.status === "00") {
          Swal.fire({
            title: 'Foros',
            text: 'Foro creado correctamente.',
            icon: 'success',
          });
          $('#modal-create').modal('toggle');
          this.refreshView();
        } else {
          Swal.fire({
            title: 'Foros',
            text: 'Error: ' + result.result,
            icon: 'error',
          });
        }
      },
        (err) => {
          Swal.fire({
            title: 'Foros',
            text: err.message,
            icon: 'error',
          });
        });
    }
  }
}
