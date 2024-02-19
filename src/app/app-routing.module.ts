import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';
import { MyListsComponent } from './views/my-lists/my-lists.component';
import { LoginComponent } from './views/login/login.component';
import { RegisterComponent } from './views/register/register.component';
import { GroupsComponent } from './views/groups/groups.component';
import { ClaimedItemsComponent } from './views/claimed-items/claimed-items.component';
import { FriendsComponent } from './views/friends/friends.component';
import { ActivateUserComponent } from './views/activate-user/activate-user.component';
import { ViewWishlistComponent } from './views/view-wishlist/view-wishlist.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'activate', component: ActivateUserComponent },
  { path: '', canActivate: [AuthGuard], children: 
    [ 
      { path: 'groups', component: GroupsComponent },
      { path: 'my-lists', component: MyListsComponent },
      { path: 'my-lists/:id', component: ViewWishlistComponent },
      { path: 'claimed-items', component: ClaimedItemsComponent },
      { path: 'friends', component: FriendsComponent }
    ] 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
