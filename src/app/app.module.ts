import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LandingComponent} from './components/landing/landing.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
    MatButtonModule,
    MatCardModule,
    MatDialogModule, MatFormFieldModule,
    MatInputModule,
    MatMenuModule,
    MatToolbarModule
} from '@angular/material';
import {FlexLayoutModule} from '@angular/flex-layout';
import {StoryComponent} from './components/story/story.component';
import {HttpClientModule} from '@angular/common/http';
import {MenuComponent} from './components/menu/menu.component';
import {ClipboardModule} from 'ngx-clipboard';
import { StoryCodeDialogComponent } from './components/story-code-dialog/story-code-dialog.component';
import {FormsModule} from '@angular/forms';
import { PageMakerComponent } from './components/creation/page-maker/page-maker.component';


@NgModule({
    declarations: [
        AppComponent,
        LandingComponent,
        StoryComponent,
        MenuComponent,
        StoryCodeDialogComponent,
        PageMakerComponent,
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
        MatFormFieldModule

    ],
    entryComponents: [StoryCodeDialogComponent],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
