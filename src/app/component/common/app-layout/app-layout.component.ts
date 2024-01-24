import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { CommonService } from '../../common.service';

@Component({
  selector: 'app-app-layout',
  templateUrl: './app-layout.component.html',
  styleUrls: ['./app-layout.component.scss'],
})
export class AppLayoutComponent implements OnDestroy {
  sidebarVisible!: boolean;
  private sidebarSubscription: Subscription;
  constructor(public CommonService: CommonService) {
    /* hide & show the sidebar based on the sidebar visible value which exists on service file */
    this.sidebarSubscription = this.CommonService.sidebarVisible.subscribe(
      (value) => {
        this.sidebarVisible = value;
      }
    );
  }

  /**
   * unsubscribe the subscription
   */
  ngOnDestroy(): void {
    this.sidebarSubscription.unsubscribe();
  }
}
