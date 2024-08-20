import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageLoginComponent } from './pages/page-login/page-login.component';
import { PageInscriptionComponent } from './pages/page-inscription/page-inscription.component';
import { SidebarComponent } from './pages/sidebar/sidebar.component';
import { AssetsComponent } from './pages/assets/assets.component';
import { ComputersComponent } from './pages/computers/computers.component';
import {CreateComputerComponent} from './pages/create-computer/create-computer.component'
import {UpdateComputerComponent} from './pages/update-computer/update-computer.component'
const routes: Routes = [
  { path: 'login', component: PageLoginComponent },
  { path: 'inscription', component: PageInscriptionComponent },
  {path: 'createcomputer' , component: CreateComputerComponent},
{path: 'updatecomputer/:id' , component: UpdateComputerComponent },
{ path: 'computer', component: ComputersComponent },
  {
    path: 'sidebar',
    component: SidebarComponent,
    children: [
      
      { path: 'computer', component: ComputersComponent },
      // Ajoutez d'autres routes enfants ici si nécessaire
    ]
  },
  { path: '', redirectTo: '/sidebar', pathMatch: 'full' } // Redirection vers le tableau de bord par défaut
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
