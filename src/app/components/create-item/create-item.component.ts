import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Item } from 'src/app/models/Item';

@Component({
  selector: 'app-create-item',
  templateUrl: './create-item.component.html',
  styleUrls: ['./create-item.component.scss']
})
export class CreateItemComponent {
  constructor(public dialogRef: MatDialogRef<CreateItemComponent>) {}

  @Output() ratingUpdated = new EventEmitter();

  itemName: string = "";
  itemDescription: string = "";
  itemCost?: number;
  rating: number = 0;
  item: Item = new Item();

  createItem(): void {
    this.item.itemName = this.itemName;
    this.item.itemDescription = this.itemDescription;
    this.item.itemCost = this.itemCost!;
    this.item.rating = this.rating;

    this.dialogRef.close(this.item);
  }
}
