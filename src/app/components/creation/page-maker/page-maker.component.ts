import {Component, OnInit} from '@angular/core';
import {saveAs} from 'file-saver';
import {Page, PageLink} from '../../page';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MatDialog} from '@angular/material';
import {ButtonEditDialogComponent} from '../button-edit-dialog/button-edit-dialog.component';
import {PageLinkPipe} from '../pipes/page-link.pipe';
import {ConfirmationData, ConfirmationDialogComponent} from '../../confirmation-dialog/confirmation-dialog.component';


@Component({
  selector: 'app-page-maker',
  templateUrl: './page-maker.component.html',
  styleUrls: ['./page-maker.component.scss']
})
export class PageMakerComponent implements OnInit {
  pageForm: FormGroup;

  constructor(private formBuilder: FormBuilder, private dialog: MatDialog) {
    this.pageForm = this.formBuilder.group({
      pageTitle: [''],
      pageLinks: [[]],
      storyText: ''
    });
  }

  ngOnInit() {
  }

  save() {
    let link_pipe = new PageLinkPipe();

    const newPage: Page = Object.assign({}, this.pageForm.value);
    newPage.storyText = this.pageForm.get('storyText').value.split("\n");
    newPage.pageTitle = link_pipe.transform(newPage.pageTitle, 'file');
    console.log(newPage);
    if(!newPage.pageTitle){
      let data = new ConfirmationData;
      data.content = "You appear to be missing a page title, please add on before continuing";
      data.title = "Error";
      ConfirmationDialogComponent.openConfirmationDialog(data, this.dialog).then( value => {
        return;
      });
    }
    else {
      let badLink = false;
      for (let link of newPage.pageLinks) {
        if (!link.page || !link.buttonText) {
          badLink = true;
        }
      }
      if (badLink) {
        let data = new ConfirmationData;
        data.acceptText = "Download Anyway";
        data.content = "You appear to have a link that is not complete. This will not break the system but might have unintended consequences.";
        data.title = "Warning";
        ConfirmationDialogComponent.openConfirmationDialog(data, this.dialog).then(value => {
          if (value) {
            saveAs(new Blob([JSON.stringify(newPage)], {type: 'text/plain;charset=utf-8'}), newPage.pageTitle + '.json');
          }
        });
      } else {
        saveAs(new Blob([JSON.stringify(newPage)], {type: 'text/plain;charset=utf-8'}), newPage.pageTitle + '.json');

      }
    }

  }

  log(val: any) {
    console.log(val);
  }


  load(fileList: FileList): void {
    console.log(fileList);
    let file = fileList[0];
    let fileReader: FileReader = new FileReader();
    let self = this;
    fileReader.onloadend = function (x) {
      let load: Page = JSON.parse(<string>fileReader.result);
      self.pageForm.get('pageTitle').setValue(load.pageTitle);
      self.pageForm.get('pageLinks').setValue(load.pageLinks);
      let text = "";
      for(let para of load.storyText)
        text += (para + "\n");
      self.pageForm.get('storyText').setValue(text);
    };
    fileReader.readAsText(file);
  }

  edit(idx: number){
    let data = {index: idx, allButtons: this.pageForm.get('pageLinks').value};
    let dialogRef = this.dialog.open(ButtonEditDialogComponent, {
      data: data,
      width: '40%',
      minWidth: '325px',
    });

    dialogRef.afterClosed().subscribe((value: PageLink[]) => {
      if(value) this.pageForm.get('pageLinks').setValue(value);
    })
  }

  addButton() {
    let newLink = new PageLink();
    newLink.buttonText = "Not Set";
    newLink.page = "";
    this.pageForm.get('pageLinks').value.push(newLink);
  }

  removeButton(i: number){
    this.pageForm.get('pageLinks').value.splice(i, 1);
  }

}
