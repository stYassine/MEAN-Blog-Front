import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

/// built in modules
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';



/// Comments
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { SingleArticleComponent } from './components/single-article/single-article.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ProfileArticlesComponent } from './components/profile-articles/profile-articles.component';
import { ProfileCommentsComponent } from './components/profile-comments/profile-comments.component';
import { ProfileLikesComponent } from './components/profile-likes/profile-likes.component';


/// Services
import { RestApiService } from './services/rest-api.service';
import { AuthService } from './services/auth.service';


/// Routes
const routes: Routes =[
  { path: '', component: HomeComponent },
  { path: 'article/:id', component: SingleArticleComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'about', component: AboutComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'profile/:id', component: ProfileComponent, children: [
    { path: 'articles', component: ProfileArticlesComponent },
    { path: 'comments', component: ProfileCommentsComponent },
    { path: 'likes', component: ProfileLikesComponent },
  ] },
  
  { path: '**', component: HomeComponent },
];



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    SingleArticleComponent,
    LoginComponent,
    RegisterComponent,
    AboutComponent,
    ContactComponent,
    SidebarComponent,
    ProfileComponent,
    ProfileArticlesComponent,
    ProfileCommentsComponent,
    ProfileLikesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(routes)
  ],
  providers: [
    RestApiService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
