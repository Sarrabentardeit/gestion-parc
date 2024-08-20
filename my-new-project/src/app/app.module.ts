import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageLoginComponent } from './pages/page-login/page-login.component';
import { PageInscriptionComponent } from './pages/page-inscription/page-inscription.component';
import { SidebarComponent } from './pages/sidebar/sidebar.component';
import { AssetsComponent } from './pages/assets/assets.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatTableModule } from '@angular/material/table';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { ComputersComponent } from './pages/computers/computers.component'; // Ajoutez cette ligne
import { HttpClientModule } from '@angular/common/http';
import {CreateComputerComponent} from './pages/create-computer/create-computer.component';
import { FormsModule } from '@angular/forms';
import { UpdateComputerComponent } from './pages/update-computer/update-computer.component';

@NgModule({
  declarations: [
    AppComponent,
    PageLoginComponent,
    PageInscriptionComponent,
    SidebarComponent,
    AssetsComponent,
    ComputersComponent,
    CreateComputerComponent,
    UpdateComputerComponent
     ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatListModule,
    MatIconModule,
    MatExpansionModule,
    MatTableModule, 
    HttpClientModule ,
    FormsModule
  ],
  providers: [
    provideAnimationsAsync()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
