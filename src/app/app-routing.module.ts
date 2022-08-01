import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoardAdminComponent } from './components/board-admin/board-admin.component';
import { BoardModeratorComponent } from './components/board-moderator/board-moderator.component';
import { BoardUserComponent } from './components/board-user/board-user.component';
import { LoginComponent } from './components/login/login.component';
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
  { path: 'user', component: BoardUserComponent },
  { path: 'mod', component: BoardModeratorComponent },
  { path: 'admin', component: BoardAdminComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
