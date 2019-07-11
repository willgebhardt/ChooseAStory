import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class StoryService {
  story: string;

  pastStory: string[] = [];
  sPage: storyPage = new storyPage();

  storyCode: string;
  pageCode: string;

  pages: string[] = [];

  storyEnd = false;

  constructor(private httpService: HttpClient) { }

  nextPage(newPage: string){
    this.pages.push(newPage);
    this.httpService.get('./assets/stories/' + this.story + "/" + newPage + ".json").subscribe(
        (value: storyPage) => {
          this.sPage.pageLinks = [];
          for(const link of value['pageLinks'])
            this.sPage.pageLinks.push(new pageLink(link.buttonText, link.page));
          this.storyEnd = this.sPage.pageLinks.length === 0;
          this.pastStory = this.pastStory.concat(this.sPage.storyText);
          this.sPage.storyText = value['storyText'];
        }
    );
    this.storyCode = btoa(JSON.stringify(this.pages));
    this.pageCode = btoa(JSON.stringify([newPage]))
  }

  refresh(){
    this.sPage = new storyPage();
    this.pages = [];
    this.pastStory = [];
  }
}

export class pageLink {
  buttonText: string;
  page: string;


  constructor(buttonText: string, page: string) {
    this.buttonText = buttonText;
    this.page = page;
  }
}

export class storyPage {
  pageLinks: pageLink[];
  storyText: string[];

  constructor() {
    this.pageLinks = [];
    this.storyText = [];
  }

}
