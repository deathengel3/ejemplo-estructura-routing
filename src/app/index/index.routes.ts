import {Route} from '@angular/router';
import {IndexComponent} from './index.component';


export const IndexRoutes: Route[] = [
  {
    path: '',
    component: IndexComponent,
    children: [
      {
        path: 'login',
        loadChildren: () => import('./login/login.module').then(login => login.LoginModule)
      },
      {
        path: 'olvidado',
        loadChildren: () => import('./olvide-password/olvide-password.module').then(op => op.OlvidePasswordModule)
      }
    ]
  }
];
