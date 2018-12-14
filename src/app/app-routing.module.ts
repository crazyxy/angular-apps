import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BlogListComponent } from './components/blog-list/blog-list.component';
import { UploadComponent } from './components/upload/upload.component';
import { LoginComponent } from './components/login/login.component';
import { OathCallbackComponent } from './components/oath-callback/oath-callback.component';
import { OathCallbackGuard } from './guards/oath-callback/oath-callback.guard';
import { AuthenticatedGuard } from './guards/authenticated/authenticated.guard';

const routes: Routes = [
  {path: '', redirectTo: '/blogs', pathMatch: 'full'},
  {path: 'home', component: BlogListComponent },
  {path: 'blogs/:search', component: BlogListComponent},
  {path: 'blogs', component: BlogListComponent},
  {path: 'upload', component: UploadComponent, canActivate: [AuthenticatedGuard]},
  {path: 'login', component: LoginComponent},
  {path: 'id_token', component: OathCallbackComponent, canActivate: [OathCallbackGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
