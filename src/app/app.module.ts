import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LandingComponent} from './components/landing/landing.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatCardModule,
  MatDialogModule,
  MatFormFieldModule,
  MatIconModule,
  MatInputModule,
  MatMenuModule,
  MatRadioModule,
  MatToolbarModule,
  MatTooltipModule
} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';
import {StoryComponent} from './components/story/story.component';
import {HttpClientModule} from '@angular/common/http';
import {MenuComponent} from './components/menu/menu.component';
import {ClipboardModule} from 'ngx-clipboard';
import {StoryCodeDialogComponent} from './components/story-code-dialog/story-code-dialog.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {PageMakerComponent} from './components/creation/page-maker/page-maker.component';
import {ButtonEditDialogComponent} from './components/creation/button-edit-dialog/button-edit-dialog.component';
import {PageLinkPipe} from './components/creation/pipes/page-link.pipe';
import { ConfirmationDialogComponent } from './components/confirmation-dialog/confirmation-dialog.component';


@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    StoryComponent,
    MenuComponent,
    StoryCodeDialogComponent,
    PageMakerComponent,
    ButtonEditDialogComponent,
    PageLinkPipe,
    ConfirmationDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatCardModule,
    MatInputModule,
    HttpClientModule,
    MatButtonModule,
    MatMenuModule,
    ClipboardModule,
    MatDialogModule,
    FormsModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatIconModule,
    MatRadioModule,
    MatTooltipModule
  ],
  entryComponents: [StoryCodeDialogComponent, ButtonEditDialogComponent, ConfirmationDialogComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
