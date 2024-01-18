import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { CommonService } from '../../common.service';

@Component({
  selector: 'app-app-layout',
  templateUrl: './app-layout.component.html',
  styleUrls: ['./app-layout.component.css']
})
export class AppLayoutComponent {
  sidebarVisible!:boolean
  private sidebarSubscription: Subscription;
  constructor(public CommonService: CommonService) {
    this.sidebarSubscription = this.CommonService.sidebarVisible.subscribe(
      (value) => {
        this.sidebarVisible = value;
        console.log(this.sidebarVisible)
      }
    );
  }
}
