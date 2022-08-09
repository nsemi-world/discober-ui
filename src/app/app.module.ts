import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopMenuComponent } from './components/top-menu/top-menu.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatToolbarModule} from '@angular/material/toolbar'; 
import {MatIconModule} from '@angular/material/icon';
import {MatTabsModule} from '@angular/material/tabs'; 


import { BridgesPageComponent } from './pages/bridges-page/bridges-page.component';
import { TopMenuOptionsComponent } from './components/top-menu-options/top-menu-options.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { ChurchesPageComponent } from './pages/churches-page/churches-page.component';
import { MuseumsPageComponent } from './pages/museums-page/museums-page.component';
import { ParksPageComponent } from './pages/parks-page/parks-page.component';
import { WaterBodiesPageComponent } from './pages/water-bodies-page/water-bodies-page.component';
import { StartTourPageComponent } from './pages/start-tour-page/start-tour-page.component';
import { OverviewPageComponent } from './pages/overview-page/overview-page.component';
import { OverviewHeaderComponent } from './components/overview-header/overview-header.component';
import { OverviewJumbotronComponent } from './components/overview-jumbotron/overview-jumbotron.component';
import { OverviewBodyComponent } from './components/overview-body/overview-body.component';
import { ProfileComponent } from './components/profile/profile.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { LogoutComponent } from './components/logout/logout.component';

@NgModule({
  declarations: [
    AppComponent,
    TopMenuComponent,
    BridgesPageComponent, 
    TopMenuOptionsComponent,
    HomepageComponent,
    ChurchesPageComponent,
    MuseumsPageComponent,
    ParksPageComponent,
    WaterBodiesPageComponent,
    StartTourPageComponent,
    OverviewPageComponent,
    OverviewHeaderComponent,
    OverviewJumbotronComponent,
    OverviewBodyComponent,
    ProfileComponent,
    LoginComponent,
    RegisterComponent,
    LogoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatTabsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
