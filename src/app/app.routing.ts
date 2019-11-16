import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {BlankTemplateComponent} from './template/blank-template.component';
import {LeftNavTemplateComponent} from './template/left-nav-template.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

export const routes: Routes = [
  //{path: '', component: WelcomeComponent}, 
  {path: '', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
{
  path: 'dashboard',
  component: LeftNavTemplateComponent,
  data: {
    title: 'Angular Admin Template'
  },
  children: [
    {
      path: 'dashboard',
      loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule),
      data: {
        title: 'Dashboard Page'
      },
    },
    {
      path: 'ui-elements',
      loadChildren: () => import('./ui-elements/ui-elements.module').then(m => m.UiElementsModule),
      data: {
        title: 'UI Elements'
      },
    },
    {
      path: 'forms',
      loadChildren: () => import('./forms/forms.module').then(m => m.FormsModule),
      data: {
        title: 'Form Page'
      },
    }
  ]
},

  // Vitamin Products
  {
    path: 'int',
    component: LeftNavTemplateComponent,
    data: {
      title: 'Interactive media'
    },
    children: [
      {
        path: '',
        loadChildren: () => import('./products/products.module').then(m => m.ProductsModule)
      }
    ]
  },

// tables
{
  path: 'complex',
  component: LeftNavTemplateComponent,
  data: {
    title: 'Complex information system'
  },
  children: [
    {
      path: '',
      loadChildren: () => import('./tables/tables.module').then(m => m.TablesModule)
    }
  ]
}, {
  path: '**',
   component: PageNotFoundComponent
}];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule {
}
