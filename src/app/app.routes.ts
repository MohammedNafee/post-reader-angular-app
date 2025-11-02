import { Routes } from '@angular/router';
import { Posts } from './posts/posts';
import { History } from './history/history';

export const routes: Routes = [
  { path: '', component: Posts },
  { path: 'history', component: History }
];
