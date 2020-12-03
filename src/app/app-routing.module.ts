import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';




import { CardComponent} from './card/card.component';
import { TwoComponent} from './two/two.component';
import { ThreeComponent} from './three/three.component';

const routes: Routes = [

  {path:'card', component:CardComponent},
  {path:'two', component:TwoComponent},
  {path:'three', component:ThreeComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
