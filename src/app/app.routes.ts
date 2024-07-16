import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './shared/layout/layout.component'; // Asegúrate de que la ruta sea correcta
import { HomeComponent } from './modules/home/home.component'; // Asegúrate de que la ruta sea correcta

export const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      { path: 'home', component: HomeComponent },
      // Añade más rutas según necesites
    ]
  },
  // Otras configuraciones de rutas si es necesario
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }