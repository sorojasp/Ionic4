import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
{
  path: 'vip', loadChildren: './vip/vip.module#VipPageModule'
}
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule, RouterModule.forChild(routes)

  ]
})
export class MemberRoutingModule { }
