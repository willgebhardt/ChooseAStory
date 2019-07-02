import { Component, OnInit } from '@angular/core';
import {StoryService} from '../story/story.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  constructor(public storyService: StoryService) { }

  ngOnInit() {
  }

}
