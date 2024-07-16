import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router'; // Asegúrate de importar RouterModule
import { AppRoutingModule } from './app.routes';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
    // Otros componentes que tengas
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule // Asegúrate de incluir RouterModule aquí
    // Otros módulos que necesites importar
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }