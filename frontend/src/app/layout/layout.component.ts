import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute } from '@angular/router';

import { Subject } from 'rxjs';
import { filter, map, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {

  layout = 'classic';
  private _unsubscribeAll: Subject<any> = new Subject<any>();

  constructor(
    private _router: Router,
    private _activatedRoute: ActivatedRoute
  ) { }

  updateLayout() {
    // Get the current activated route
    let route = this._activatedRoute;
    while ( route.firstChild )
    {
        route = route.firstChild;
    }

    const paths = route.pathFromRoot;
    paths.forEach((path) => {
        // Check if there is a 'layout' data
        if ( path.routeConfig && path.routeConfig.data && path.routeConfig.data['layout']) {
            // Set the layout
            this.layout = path.routeConfig.data['layout'];
        }
    });
  }

  ngOnInit(): void {
    // Subscribe to any route change event
    this._router.events.pipe(
        filter(event => event instanceof NavigationEnd),
        takeUntil(this._unsubscribeAll)
    ).subscribe(() => {
        // Update the layout
        this.updateLayout();
    });

    // Check layout on first page load
    this.updateLayout();
  }
  

  ngOnDestroy() {
    // Unsubscribe from all subscriptions
    this._unsubscribeAll.next(1);
    this._unsubscribeAll.complete();
  }

}
