import {Component, Input, OnInit} from '@angular/core';
import {StoryService} from './story.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.scss']
})
export class StoryComponent implements OnInit {

  constructor(public storyService: StoryService, private router: Router) {}

  ngOnInit() {
    if(!this.storyService.story || !this.storyService.sPage){
      this.router.navigate(['/'])
    }
  }

}


