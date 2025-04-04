import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { ServicesComponent } from './services/services.component';
import { LakersComponent } from './lakers/lakers.component';
import { BullsComponent } from './bulls/bulls.component';
import { WarriorsComponent } from './warriors/warriors.component';
import { CelticsComponent } from './celtics/celtics.component';
import { HeatComponent } from './heat/heat.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'services', component: ServicesComponent },
  { path: 'lakers', component: LakersComponent },
  { path: 'bulls', component: BullsComponent },
  { path: 'warriors', component: WarriorsComponent },
  { path: 'celtics', component: CelticsComponent },
  { path: 'heat', component: HeatComponent }
];
