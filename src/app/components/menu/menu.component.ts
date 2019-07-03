import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {StoryService} from '../story/story.service';
import {Router} from '@angular/router';
import {MatDialog} from '@angular/material';
import {StoryCodeDialogComponent} from '../story-code-dialog/story-code-dialog.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  stories: string[];
  constructor(private httpService: HttpClient, public storyService: StoryService, private router: Router, public dialog: MatDialog) {
    this.httpService.get("./assets/stories/stories.json").subscribe((value: string[]) => this.stories = value)
  }

  ngOnInit() {
  }

  setStory(story: string){
    this.storyService.story = story;
  }

  loadStoryStart(){
    this.storyService.refresh();
    this.storyService.nextPage("intro_page");
    this.router.navigate(["/story"])
  }

  loadStoryCode() {
    const dialogRef = this.dialog.open(StoryCodeDialogComponent, {
      width: '40%'
    });

    dialogRef.afterClosed().subscribe((value: string) => {
      if(value) {
        value = atob(value);
        const pages = JSON.parse(value);
        this.storyService.refresh();
        for(const page of pages){
          this.storyService.nextPage(page)
        }
        this.router.navigate(["/story"])
      }
    });

  }

}

