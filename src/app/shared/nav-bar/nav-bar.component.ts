import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavBarButtonContent } from './nav-bar-button.const';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {
  content: NavBarButton[] = NavBarButtonContent;

  constructor(private router: Router) { }

  ngOnInit() {
  }

  goToPage(page: string) {
    console.log('PAGE', page);
    this.router.navigateByUrl(page);
  }

}
