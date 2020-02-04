import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CakebookComponent } from './blog-contents/cakebook/cakebook.component';

const routes: Routes = [
  { path: 'blog/cakebook.io', component: CakebookComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
