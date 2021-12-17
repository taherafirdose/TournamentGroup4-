import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { AddTournamentComponent } from './pages/add-tournament/add-tournament.component';
import { ContactComponent } from './pages/contact/contact.component';
import { EditTournamentComponent } from './pages/edit-tournament/edit-tournament.component';
import { HomeComponent } from './pages/home/home.component';
import { ProductsComponent } from './pages/products/products.component';
import { ServicesComponent } from './pages/services/services.component';
import { TournamentListComponent } from './tournament-list/tournament-list.component';
import { AuthComponent } from './admin/auth/auth.component';
import { RegisterComponent } from './admin/register/register.component';
import { AuthGuard } from './admin/auth/auth.guard';

const routes: Routes = [
  {path: 'home', component: HomeComponent, data: {title: 'Home'}},
  {path: 'about', component: AboutComponent, data: {title: 'About'}},
  {path: 'contact', component: ContactComponent, data: {title: 'Contact'}},
  {path: 'products', component: ProductsComponent, data: {title: 'Products'}},
  {path: 'services', component: ServicesComponent, data: {title: 'Services'}},
  {path: 'tournament-list', component: TournamentListComponent, data: {title: 'Tournaments'}, canActivate: [AuthGuard]},
  {path: 'add-tournament', component: AddTournamentComponent, data: {title: 'Add Tournament'}, canActivate: [AuthGuard]},
  {path: 'edit-tournament/:id', component: EditTournamentComponent, data: {title: 'Edit Tournament'}, canActivate: [AuthGuard]},
  {path: 'login', data: {title: 'Login'},  component: AuthComponent},
  {path: 'register', data: {title: 'Register'},  component: RegisterComponent},
  {path: '', redirectTo: '/login', pathMatch: 'full'},
  { path: '**', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
