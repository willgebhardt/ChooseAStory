import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LandingComponent} from './components/landing/landing.component';
import {MenuComponent} from './components/menu/menu.component';
import {StoryComponent} from './components/story/story.component';
import {PageMakerComponent} from './components/creation/page-maker/page-maker.component';

const routes: Routes = [
  {
    path: '',
    data: {title: 'Landing'},
    component: LandingComponent,
    children: [
      {
        path: '',
        data: {title: ''},
        component: MenuComponent
      },
      {
        path: 'story',
        data: {title: 'Story'},
        component: StoryComponent
      },
      {
        path: 'page-maker',
        data: {title: 'Creation'},
        component: PageMakerComponent
      }
    ]
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
