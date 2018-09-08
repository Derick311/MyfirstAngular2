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
import { HeroImageComponent} from './shared/hero-image/hero-image.component';
import { BannerComponent } from './shared/banner/banner.component';

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
    HeroImageComponent,
    BannerComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
