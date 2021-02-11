import { TestDeleteComponent } from './test-delete/test-delete.component';
import { TestUpdateComponent } from './test-update/test-update.component';
import { TestAddComponent } from './test-add/test-add.component';
import { TestListComponent } from './test-list/test-list.component';
import { LayoutComponent } from './layout/layout.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: '', component: TestListComponent },
      { path: 'add', component: TestAddComponent },
      { path: 'update', component: TestUpdateComponent },
      { path: 'delete', component: TestDeleteComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
