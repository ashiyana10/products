import { Component, HostListener } from '@angular/core';
import { CommonService } from '../../common.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {
  sidebarVisible!: boolean;
  private sidebarSubscription: Subscription;
  constructor(private CommonService: CommonService) {
    this.sidebarSubscription = this.CommonService.sidebarVisible.subscribe(
      (value) => {
        this.sidebarVisible = value;
        console.log(this.sidebarVisible);
      }
    );
  }
  // Method to handle the window resize event
  @HostListener('window:resize', ['$event'])
  onResize() {
    this.CommonService.screenWidth$.next(window.innerWidth);
    this.CommonService.setSidebarVisibility()
  }
}
