import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommunityComponent } from './community.component';
import { EditCommunityComponent } from '../../@shared/components/edit-community/edit-community.component';

const routes: Routes = [
  {
    path: '',
    component: CommunityComponent,
    data: {
      title: 'Guide Page',
    },
  },
  {
    path: 'edit/:id',
    component: EditCommunityComponent,
    data: {
      title: 'Edit Guide',
    },
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CommunityRoutingModule {}
