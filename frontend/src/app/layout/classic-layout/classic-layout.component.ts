import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Router, NavigationEnd } from '@angular/router';
import { Subject } from 'rxjs';
import { filter, takeUntil } from 'rxjs';
import { NzMessageService } from 'ng-zorro-antd/message';

@Component({
  selector: 'classic-layout',
  templateUrl: './classic-layout.component.html',
  styleUrls: ['./classic-layout.component.scss']
})
export class ClassicLayoutComponent implements OnInit {

  isCollapsed = false;
  activePage = '';
  private _unsubscribeAll: Subject<any> = new Subject<any>();
  canManageAccounts = false;
  loadingMenu = true;
  recentModules: any = [];

  constructor(
    private _router: Router,
    private _nzMessageService: NzMessageService
  ) { }

  ngOnInit(): void {
    // Subscribe to any route change event
    this._router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      takeUntil(this._unsubscribeAll)
    ).subscribe((event: any) => {
      this.activePage = event.url;
    });

    this.activePage = this._router.url;
  }

  /**
   * Open page
   * @param url 
   */
  openPage(url: string) {
    this._router.navigateByUrl(url);
  }

  /**
   * logout
   */
  logout() {
    window.localStorage.removeItem(environment.access_token_identifier);
    this._router.navigateByUrl('/');
  }

}
