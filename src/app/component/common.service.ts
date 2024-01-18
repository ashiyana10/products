import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

export class IProduct {
  id!: string;
  code!: string;
  name!: string;
  description!: string;
  image!: string;
  price!: number;
  category!: string;
  quantity!: number;
  inventoryStatus!: string;
  rating!: number;
}
@Injectable({
  providedIn: 'root',
})
export class CommonService {
  public sidebarVisible = new BehaviorSubject<boolean>(true);
  public screenWidth$ = new BehaviorSubject<number>(window.innerWidth);
  constructor() {
    this.setSidebarVisibility();
  }

  /**
   * get the screen width
   * @returns the screen width
   */
  setSidebarVisibility(): void {
     // if screen size less than 640 then hide the sidebar
    if (this.screenWidth$.value < 640) {
      this.sidebarVisible.next(false);
    }
    // if screen size greater than 640 then show the sidebar
    else if (this.screenWidth$.value > 640) {
      this.sidebarVisible.next(true);
    }
  }
}
