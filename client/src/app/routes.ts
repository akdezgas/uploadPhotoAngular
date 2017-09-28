import { Routes } from '@angular/router';

import { PhoneDetailsComponent } from './phone-details/phone-details.component';
import { PhoneListComponent } from './phone-list/phone-list.component';

export const routes: Routes = [
    { path: '', component: PhoneListComponent },
    { path: 'phone/:id', component: PhoneDetailsComponent },
    { path: '**', redirectTo: '' }
];
