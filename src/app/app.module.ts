import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { Content1Component } from './content1/content1.component';
import { Content2Component } from './content2/content2.component';

import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';

import { VotesComponent } from './votes/votes.component';
import { ExtraitPipe } from './extrait.pipe';
import { PostsComponent } from './posts/posts.component';
import { CoursesComponent } from './courses/courses.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
   {path: "", redirectTo: '/posts', pathMatch: 'full'},
   { path: "posts", component: PostsComponent },
   { path: "courses", component: CoursesComponent },
   { path: "**", component: PageNotFoundComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    FooterComponent,
    Content1Component,
    Content2Component,
    VotesComponent,
    ExtraitPipe,
    PostsComponent,
    CoursesComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
