import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RxjsOperatorsComponent } from './features/rxjs-operators/rxjs-operators.component';
import { TemplatesComponent } from './features/templates/templates.component';

const routes: Routes = [
  {
    path: 'template', component: TemplatesComponent
  },
  {
    path: 'rxjs', component: RxjsOperatorsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
