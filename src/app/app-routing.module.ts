import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { ContactComponent } from './contact/contact.component';

const routes: Routes = [{path:'', component:HomeComponent},
{path:'services', component:ServicesComponent},
{path:'contact', component: ContactComponent},
{path:'about', component:AboutComponent},];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
