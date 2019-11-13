import { Component, OnInit } from '@angular/core';

declare var $: any;
@Component({
  selector: 'app-menu-discussions',
  templateUrl: './menu-discussions.component.html',
  styleUrls: ['./menu-discussions.component.css']
})
export class MenuDiscussionsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  loadMovieInfo(modal: string) {
    $('#' + modal).modal('show');
    console.log('Opening modal....' + modal);
  }

  closeModal(modal: string) {
    $('#' + modal).modal('toggle');
    console.log('Closing modal....' + modal);
  }

}
