import { NgModule } from '@angular/core';
//* import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { HeroDetailComponent }  from './hero-detail/hero-detail.component';

const routes: Routes = [
  { path: 'heroes', component: HeroesComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  // This route redirects a URL that fully matches the empty path to the route whose path is '/dashboard'.
  { path: 'detail/:id', component: HeroDetailComponent },
];

@NgModule({
  // imports: [
  //   CommonModule
  // ],
  // declarations: []
  // You generally don't declare components in a routing module so you can delete the @NgModule.declarations array and delete CommonModule references too.

  imports: [ RouterModule.forRoot(routes) ],
  // The method is called forRoot() because you configure the router at the application's root level. The forRoot() method supplies the service providers and directives needed for routing, and performs the initial navigation based on the current browser URL.

  exports: [ RouterModule ]
})
export class AppRoutingModule { }