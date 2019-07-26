import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManagersComponent } from './managers/managers.component';
import { NewComponent } from './new/new.component';
import { EditComponent } from './edit/edit.component';
import { ViewComponent } from './view/view.component';

const routes: Routes = [
  {path:'',pathMatch:'full',redirectTo:'managers'},
  {path:'managers',component:ManagersComponent},
  {path:'managers/new',component:NewComponent},
  {path:'managers/edit/:id',component:EditComponent},
  {path:'managers/view/:id',component:ViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
