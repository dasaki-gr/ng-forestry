import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MaterialModule } from '@angular/material';
import { SettingsService } from './services/settings.service';

import { RouterModule, Routes } from '@angular/router';


// It's better not to use all Modules but only whitch you want from https://material.angular.io/components
// import { MdButtonModule, 
//          MdCheckboxModule,
//          MdToolbarModule,
//          MdIconModule,
//          MdSidenavModule,
//          MdMenuModule
//        } from '@angular/material';
import 'hammerjs';

import { AppComponent } from './app.component';
import { TempformComponent } from './components/tempform/tempform.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { HomeComponent } from './components/home/home.component';
import { Temp01Component } from './components/temp01/temp01.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'temp01', component: Temp01Component },
  { path: 'tempForm', component: TempformComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    TempformComponent,
    PageNotFoundComponent,
    HomeComponent,
    Temp01Component
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MaterialModule.forRoot() //,  <- This if you want to use all components of Material
    // MdButtonModule, 
    // MdCheckboxModule, 
    // MdToolbarModule, 
    // MdIconModule, 
    // MdSidenavModule,
    // MdMenuModule

  ],
  providers: [SettingsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
