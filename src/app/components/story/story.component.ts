import {Component, Input, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.scss']
})
export class StoryComponent implements OnInit {

  @Input()
  page: string;

  sPage: storyPage = new storyPage();
  pastStory: string[] = [];

  constructor(private httpService: HttpClient) {
  }

  ngOnInit() {
    this.updatePage(this.page)
  }

  updatePage(newPage: string){
    this.httpService.get('./assets/story_pages/' + newPage + ".json").subscribe(
        (value: storyPage) => {
          this.sPage.pageLinks = [];
          for(const link of value['pageLinks'])
            this.sPage.pageLinks.push(new pageLink(link.buttonText, link.page));
          this.pastStory.push(this.sPage.storyText);
          this.sPage.storyText = value['storyText'];
        }
    )
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
