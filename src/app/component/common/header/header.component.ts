import { Component } from '@angular/core';
import { CommonService } from '../../common.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  private sidebarSubscription: Subscription;
  sidebarVisible!: boolean;
  constructor(private CommonService: CommonService) {
    this.sidebarSubscription = this.CommonService.sidebarVisible.subscribe(
      (value) => {
        this.sidebarVisible = value;
      }
    );
  }

  clickBUtton(): void {
    this.CommonService.sidebarVisible.next(!this.sidebarVisible);
    console.log(this.sidebarVisible);
  }
}
