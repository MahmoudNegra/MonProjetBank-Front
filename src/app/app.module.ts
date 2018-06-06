import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { CompteListComponent } from './components/compte-list/compte-list.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ComptesAddComponent } from './components/comptes-add/comptes-add.component';
import { WelcomeComponent } from './components/welcome/welcome.component';
import { NotFoundComponent } from './components/not-found/not-found.component';


const mesRoutes = [

  {path: 'list', component: CompteListComponent},
  {path: 'add', component: ComptesAddComponent},
  {path: 'welcome', component: WelcomeComponent},
  {path: '', redirectTo: '/welcome', pathMatch: 'full' },
  {path: '**', component: NotFoundComponent},
];
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    CompteListComponent,
    ComptesAddComponent,
    WelcomeComponent,
    NotFoundComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(mesRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
