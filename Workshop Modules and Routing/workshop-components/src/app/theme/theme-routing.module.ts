import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { MainComponent } from './main/main.component';
import { AddThemeComponent } from './add-theme/add-theme.component';
import { CurrentThemeComponent } from './current-theme/current-theme.component';

const routes: Routes = [
  {
    path: 'themes',
    children: [
      { path: '', pathMatch: 'full', component: MainComponent },
      { path: ':themeId', component: CurrentThemeComponent },
    ],
  },
  {
    path: 'new-theme',
    component: AddThemeComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ThemeRoutingModule {}
