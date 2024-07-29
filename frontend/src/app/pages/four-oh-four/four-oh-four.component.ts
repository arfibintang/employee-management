import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-four-oh-four',
  templateUrl: './four-oh-four.component.html',
  styleUrls: ['./four-oh-four.component.scss']
})
export class FourOhFourComponent implements OnInit {

  constructor(
    private _router: Router
  ) { }

  redirectToHome() {
    this._router.navigateByUrl('/home');
  }

  ngOnInit(): void {
  }

}
