import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddComponent } from './pages/add/add.component';
import { ListComponent } from './pages/list/list.component';
import { SearchComponent } from './pages/search/search.component';
import { HeroComponent } from './pages/hero/hero.component';
import { HomeComponent } from './pages/home/home.component';

const heroRoutes : Routes = [
  {
    path:'',
    component:HomeComponent,
    children:[
      {
        path:'list',
        component:ListComponent,
      },
      {
        path:'add',
        component:AddComponent
      },
      {
        path:'edit/:id',
        component:AddComponent
      },
      {
        path:'search',
        component:SearchComponent
      },
      {
        path:':id',
        component:HeroComponent
      },
      {
        path:'**',
        redirectTo:'list'
      }  
    ]
  }
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild ( heroRoutes )
  ],
  exports:[
    RouterModule
  ]
})
export class HerosRoutingModule { }
