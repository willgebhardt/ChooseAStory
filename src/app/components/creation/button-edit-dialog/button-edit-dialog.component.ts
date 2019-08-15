import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from '@angular/material';
import {Page, PageLink} from '../../page';
import {FormBuilder, FormGroup} from '@angular/forms';
import {PageLinkPipe} from '../pipes/page-link.pipe';

@Component({
  selector: 'app-button-edit-dialog',
  templateUrl: './button-edit-dialog.component.html',
  styleUrls: ['./button-edit-dialog.component.scss']
})
export class ButtonEditDialogComponent implements OnInit {

  link: FormGroup;

  position: number;

  constructor(    @Inject(MAT_DIALOG_DATA) public data: {index: number, allButtons: PageLink[]},
                  public dialogRef: MatDialogRef<ButtonEditDialogComponent>,
                  private builder: FormBuilder) {
    this.link = builder.group({
      buttonText: [data.allButtons[data.index].buttonText],
      page: [data.allButtons[data.index].page],
    });
    this.position = data.index;
  }

  ngOnInit() {
  }

  submit() {
    let link: PageLink = Object.assign({}, this.link.value);
    let linkPipe = new PageLinkPipe();
    link.page = linkPipe.transform(link.page, 'file');

    this.data.allButtons[this.data.index] = link;


    const temp = this.data.allButtons[this.data.index];
    this.data.allButtons[this.data.index] = this.data.allButtons[this.position];
    this.data.allButtons[this.position] = temp;

    this.dialogRef.close(this.data.allButtons);
  }

}
