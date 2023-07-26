import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { UserDetailsComponent } from './user-details/user-details.component';
import { TopNavComponent } from './top-nav/top-nav.component';
import { SideMenuBarComponent } from './side-menu-bar/side-menu-bar.component';
import { FooterComponent } from './footer/footer.component';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    UserDetailsComponent,
    TopNavComponent,
    SideMenuBarComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
