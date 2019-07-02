import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
// import {Buffer} from 'buffer';


@Injectable({
  providedIn: 'root'
})
export class StoryService {
  story: string;

  pastStory: string[] = [];
  sPage: storyPage = new storyPage();

  pages: string[] = [];

  constructor(private httpService: HttpClient) { }

  nextPage(newPage: string){
    this.pages.push(newPage);
    this.httpService.get('./assets/stories/' + this.story + "/" + newPage + ".json").subscribe(
        (value: storyPage) => {
          this.sPage.pageLinks = [];
          for(const link of value['pageLinks'])
            this.sPage.pageLinks.push(new pageLink(link.buttonText, link.page));
          this.pastStory.push(this.sPage.storyText);
          this.sPage.storyText = value['storyText'];
        }
    )
  }

  getCode(){
    // console.log(Buffer.from(JSON.stringify(this.pages)).toString("base64"));

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
  storyText: string;

  constructor() {
    this.pageLinks = [];
    this.storyText = '';
  }

}
