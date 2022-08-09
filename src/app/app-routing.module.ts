import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { LogoutComponent } from './components/logout/logout.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RegisterComponent } from './components/register/register.component';
import { BridgesPageComponent } from './pages/bridges-page/bridges-page.component';
import { ChurchesPageComponent } from './pages/churches-page/churches-page.component';
import { HomepageComponent } from './pages/homepage/homepage.component';
import { MuseumsPageComponent } from './pages/museums-page/museums-page.component';
import { ParksPageComponent } from './pages/parks-page/parks-page.component';
import { StartTourPageComponent } from './pages/start-tour-page/start-tour-page.component';
import { WaterBodiesPageComponent } from './pages/water-bodies-page/water-bodies-page.component';

const routes: Routes = [
  { path: 'home', component: HomepageComponent },
  { path: 'bridges', component: BridgesPageComponent},
  { path: 'churches', component: ChurchesPageComponent },
  { path: 'museums', component: MuseumsPageComponent },
  { path: 'parks', component: ParksPageComponent },
  { path: 'waterbodies', component: WaterBodiesPageComponent },
  { path: 'start-tour', component: StartTourPageComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'logout', component: LogoutComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
