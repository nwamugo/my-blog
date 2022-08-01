import { Component, OnInit } from '@angular/core';
import { ScullyRoute, ScullyRoutesService } from '@scullyio/ng-lib';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {
  posts$ = this.scully.available$.pipe(
    map(posts => posts.filter((post: ScullyRoute) => post.title))
  );;

  constructor(private scully: ScullyRoutesService) { }

  ngOnInit(): void {
  }

}
