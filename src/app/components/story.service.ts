import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Page, PageLink} from './page';


@Injectable({
  providedIn: 'root'
})
export class StoryService {
  story: string;

  pastStory: string[] = [];
  sPage: Page = new Page();

  storyCode: string;
  pageCode: string;

  pages: string[] = [];

  storyEnd = false;

  constructor(private httpService: HttpClient) { }

  nextPage(newPage: string){
    this.pages.push(newPage);
    this.httpService.get('./assets/stories/' + this.story + "/" + newPage + ".json").subscribe(
        (value: Page) => {
          this.pastStory = this.pastStory.concat(this.sPage.storyText);
          this.sPage = value;
          this.storyEnd = this.sPage.pageLinks.length === 0;

        }
    );
    this.storyCode = btoa(JSON.stringify(this.pages));
    this.pageCode = btoa(JSON.stringify([newPage]))
  }

  refresh(){
    this.sPage = new Page();
    this.pages = [];
    this.pastStory = [];
  }
}
