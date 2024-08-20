import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommunityComponent } from './freedom-page.component';
import { EditCommunityComponent } from '../../@shared/components/edit-community/edit-community.component';

const routes: Routes = [
  {
    path: '',
    component: CommunityComponent,
    data: {
      title: 'Island Destination',
    },
  },
  {
    path: 'edit/:id',
    component: EditCommunityComponent,
    data: {
      title: 'Edit Destination',
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FreedomPageRoutingModule { }
