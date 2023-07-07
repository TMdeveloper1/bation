import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { CarritoComponent } from './carrito/carrito.component';

const routes: Routes = [
  { path: 'register', component: RegistrationComponent },
  { path: 'carrito', component: CarritoComponent }
  // other routes...
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
