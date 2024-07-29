import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { NzMessageService } from 'ng-zorro-antd/message';
import { NzModalService } from 'ng-zorro-antd/modal';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  
  constructor(
    private _router: Router,
    private nzMessageService: NzMessageService,
    private nzModalService: NzModalService,
    private _route: ActivatedRoute
  ) { }


  ngOnInit(): void {
  }

}
