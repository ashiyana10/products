import { Component, HostListener, OnDestroy } from '@angular/core';
import { CommonService } from '../../common.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnDestroy {
  sidebarVisible!: boolean;
  private sidebarSubscription: Subscription;
  constructor(private CommonService: CommonService) {
    /* get the sidebar value for show & hide */
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
