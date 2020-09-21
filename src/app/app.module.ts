import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UsersViewComponent } from './components/users-view/users-view.component';
import { UserDetailCardComponent } from './components/user-detail-card/user-detail-card.component';
import { RespositoriesViewComponent } from './components/respositories-view/respositories-view.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { RepoDetailCardComponent } from './components/repo-detail-card/repo-detail-card.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersViewComponent,
    UserDetailCardComponent,
    RespositoriesViewComponent,
    NavBarComponent,
    RepoDetailCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
