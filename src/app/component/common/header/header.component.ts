import { Component, OnDestroy } from '@angular/core';
import { CommonService } from '../../common.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnDestroy {
  private sidebarSubscription: Subscription;
  sidebarVisible!: boolean;
  constructor(private CommonService: CommonService) {
    /* get the sidebar value for update the next value based on button click */
    this.sidebarSubscription = this.CommonService.sidebarVisible.subscribe(
      (value) => {
        this.sidebarVisible = value;
      }
    );
  }

  /**
   * set the sidebar visible or hide value based on hamburger button click
   */
  clickButton(): void {
    // set the subject value
    this.CommonService.sidebarVisible.next(!this.sidebarVisible);
  }

  /**
   * unsubscribe the subscription
   */
  ngOnDestroy(): void {
    this.sidebarSubscription.unsubscribe();
  }
}
