import { Component } from '@angular/core';
import products from '../../../assets/products.json';
import { IProduct } from '../common.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent {
  products: IProduct[];
  filterProducts: IProduct[];
  listView: boolean;

  constructor() {
    this.listView = true;
    this.products = products.data;
    this.filterProducts = this.products
      .slice()
      .sort((a, b) => b.price - a.price);
  }

  sortByPrice(event: string): void {
    console.log(event);
    if (event === 'low') {
      this.filterProducts = this.products
        .slice()
        .sort((a, b) => a.price - b.price);
    } else {
      this.filterProducts = this.products
        .slice()
        .sort((a, b) => b.price - a.price);
    }
  }

  searchData(search: Event): void {
    const searchValue = (search.target as HTMLInputElement).value;
    const lowerCaseSearchTerm = searchValue.toLowerCase();
    this.filterProducts = this.products.filter((product) => {
      const lowerCaseProductName = product.name.toLowerCase();
      return lowerCaseProductName.includes(lowerCaseSearchTerm);
    });
  }
}
