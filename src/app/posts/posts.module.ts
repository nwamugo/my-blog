import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {ScullyLibModule} from '@scullyio/ng-lib';
import { SharedModule } from '../shared/shared.module';
import {PostsRoutingModule} from './posts-routing.module';
import {PostsComponent} from './posts.component';

@NgModule({
  declarations: [PostsComponent],
  imports: [CommonModule, SharedModule, PostsRoutingModule, ScullyLibModule],
})
export class PostsModule {}
