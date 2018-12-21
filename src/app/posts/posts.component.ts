import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit {
posts$ : Object;
  constructor(private data: DataService, private route: ActivatedRoute) {
    
   }

  ngOnInit() {
    this.data.getPosts().subscribe(
      data => this.posts$ = data

    )
  }

}
