import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AuthInterceptor } from './auth/auth.interceptor';
import { JwtModule, JWT_OPTIONS } from '@auth0/angular-jwt';
import { LoginComponent } from './views/login/login.component';
import { MatCardModule } from '@angular/material/card'
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatSnackBarModule } from '@angular/material/snack-bar'; 
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDivider, MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSelectModule } from '@angular/material/select';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatExpansionModule } from '@angular/material/expansion';
import { ErrorSnackbarComponent } from './components/error-snackbar/error-snackbar.component';
import { OkSnackbarComponent } from './components/ok-snackbar/ok-snackbar.component';
import { LoadingSpinnerComponent } from './components/loading-spinner/loading-spinner.component';
import { RegisterComponent } from './views/register/register.component';
import { NumberRestricDirective } from './validation/number-restrict.directive';
import { EmailRestrictDirective } from './validation/email-restrict.directive';
import { LetterRestrictDirective } from './validation/letter-restrict.directive';
import { TopNavbarComponent } from './components/top-navbar/top-navbar.component';
import { MyListsComponent } from './views/my-lists/my-lists.component';
import { GroupsComponent } from './views/groups/groups.component';
import { ClaimedItemsComponent } from './views/claimed-items/claimed-items.component';
import { FriendsComponent } from './views/friends/friends.component';
import { ActivateUserComponent } from './views/activate-user/activate-user.component';
import { CreateWishlistComponent } from './components/create-wishlist/create-wishlist.component';
import { DeleteConfirmComponent } from './components/delete-confirm/delete-confirm.component';
import { ViewWishlistComponent } from './views/view-wishlist/view-wishlist.component';
import { CreateItemComponent } from './components/create-item/create-item.component';
import { MatSliderModule } from '@angular/material/slider';

export function jwtOptionsFactory() {
  return {
    tokenGetter: () => localStorage.getItem('token'),
  };
}

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ErrorSnackbarComponent,
    OkSnackbarComponent,
    LoadingSpinnerComponent,
    RegisterComponent,
    NumberRestricDirective,
    EmailRestrictDirective,
    LetterRestrictDirective,
    TopNavbarComponent,
    MyListsComponent,
    GroupsComponent,
    ClaimedItemsComponent,
    FriendsComponent,
    ActivateUserComponent,
    CreateWishlistComponent,
    DeleteConfirmComponent,
    ViewWishlistComponent,
    CreateItemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    JwtModule.forRoot({
      jwtOptionsProvider: {
        provide: JWT_OPTIONS,
        useFactory: jwtOptionsFactory,
      },
    }),
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    HttpClientModule,
    MatButtonModule,
    MatSnackBarModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatSelectModule,
    MatTooltipModule, 
    MatDatepickerModule,
    MatNativeDateModule,
    MatIconModule,
    MatExpansionModule,
    MatDividerModule,
    MatSliderModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
