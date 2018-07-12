import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IntervalComponent } from '../app/interval/interval.component';
import { ChartViewComponent } from './chart-view/chart-view.component';

const routes: Routes =[
  {path: 'interval', component: IntervalComponent},
  {path: 'chart', component: ChartViewComponent}
];
@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
