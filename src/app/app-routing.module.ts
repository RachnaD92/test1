import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import{ArunComponent} from './arun/arun.component';
import { RachnaComponent } from './rachna/rachna.component'
const routes: Routes = [
    {
        path:'arun',
        component:ArunComponent
    },
    {
         path:'rachna',
        component:RachnaComponent
    }
]
    

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
