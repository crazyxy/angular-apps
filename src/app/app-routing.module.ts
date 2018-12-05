import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BlogListComponent } from './components/blog-list/blog-list.component';
import { UploadComponent } from './components/upload/upload.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  {path: '', redirectTo: '/blogs', pathMatch: 'full'},
  {path: 'home', component: BlogListComponent },
  {path: 'blogs/:search', component: BlogListComponent},
  {path: 'blogs', component: BlogListComponent},
  {path: 'upload', component: UploadComponent},
  {path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
