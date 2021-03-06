import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  //{ path: '', loadChildren: './pages/menu/menu.module#MenuPageModule' },
  // { path: 'auth', loadChildren: './auth/auth.module#AuthPageModule' },

  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', loadChildren: './pages/login/login.module#LoginPageModule' },
  { path: 'register', loadChildren: './pages/register/register.module#RegisterPageModule' },
  { path: 'product-info', loadChildren: './pages/product-info/product-info.module#ProductInfoPageModule' },
<<<<<<< HEAD
  { path: 'orders', loadChildren: './pages/orders/orders.module#OrdersPageModule' }
=======
  { path: 'checkout', loadChildren: './pages/checkout/checkout.module#CheckoutPageModule' },

  { path: 'home', loadChildren: './pages/home/home.module#HomePageModule' },
  { path: 'cart', loadChildren: './pages/cart/cart.module#CartPageModule' },
  { path: 'orders', loadChildren: './pages/orders/orders.module#OrdersPageModule' },
  { path: 'profile', loadChildren: './pages/profile/profile.module#ProfilePageModule' },






>>>>>>> 39e200cb7fbb83739e3f208425e9a8c491ea9d9a
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
