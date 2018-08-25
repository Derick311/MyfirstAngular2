// libs
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// imports
import { RouterModule, Routes } from '@angular/router';

// components
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { NavBarComponent } from './shared/nav-bar/nav-bar.component';
import { AppRoutingModule } from './app-routing.module';
import { AboutComponent } from './pages/about/about.component';
import { ServicesComponent } from './pages/services/services.component';
import { DonationsComponent } from './pages/donations/donations.component';
import { DoctrineComponent } from './pages/doctrine/doctrine.component';


// module
@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    NavBarComponent,
    AboutComponent,
    ServicesComponent,
    DonationsComponent,
    DoctrineComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
