import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {StoryService} from '../story/story.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  stories: string[];
  constructor(private httpService: HttpClient, private storyService: StoryService, private router: Router) {
    this.httpService.get("./assets/stories/stories.json").subscribe((value: string[]) => this.stories = value)
  }

  ngOnInit() {
  }

  setStory(story: string){
    this.storyService.story = story;
  }

  loadStoryStart(){
    this.storyService.nextPage("intro_page");
    this.router.navigate(["/story"])
  }

}

