import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateWishlistComponent } from './create-wishlist.component';

describe('CreateWishlistComponent', () => {
  let component: CreateWishlistComponent;
  let fixture: ComponentFixture<CreateWishlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateWishlistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateWishlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
