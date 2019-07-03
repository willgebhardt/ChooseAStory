import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material';

@Component({
  selector: 'app-story-code-dialog',
  templateUrl: './story-code-dialog.component.html',
  styleUrls: ['./story-code-dialog.component.scss']
})
export class StoryCodeDialogComponent implements OnInit {

  code: string;

  constructor(public dialogRef: MatDialogRef<StoryCodeDialogComponent>) { }

  ngOnInit() {
  }

  close(){
    this.dialogRef.close(this.code);
  }

}
