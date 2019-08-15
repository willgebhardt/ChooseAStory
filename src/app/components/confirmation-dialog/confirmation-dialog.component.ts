import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material';

export class ConfirmationData {
  title: string;
  content: string;
  acceptText?: string;
}

@Component({
  selector: 'confirmation-dialog',
  templateUrl: './confirmation-dialog.component.html',
  styleUrls: ['./confirmation-dialog.component.scss']
})
export class ConfirmationDialogComponent implements OnInit {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: ConfirmationData,
    public dialogRef: MatDialogRef<ConfirmationDialogComponent>
  ) {}

  ngOnInit() {}

  accept() {
    this.dialogRef.close(true);
  }

  close() {
    this.dialogRef.close(false);
  }

  static openConfirmationDialog(data: ConfirmationData, dialog: MatDialog) {
    const dialogRef = dialog.open(ConfirmationDialogComponent, {
      width: '40%',
      minWidth: '325px',
      data: data
    });
    return dialogRef.afterClosed().toPromise();
  }
}
