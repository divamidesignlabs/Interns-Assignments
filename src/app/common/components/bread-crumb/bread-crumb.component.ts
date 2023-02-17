import { Component, OnInit } from '@angular/core';
import { breadCrumb } from '../../interfaces/breadcrumb.interface';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
@Component({
  selector: 'app-bread-crumb',
  templateUrl: './bread-crumb.component.html',
  styleUrls: ['./bread-crumb.component.scss'],
})
export class BreadCrumbComponent {
  // public breadcrumbs : breadCrumb[] = [];
  // constructor() {
  //   this.breadcrumbs = this.buildBreadCrumb(this.activatedRoute.root);
  // }
  // buildBreadCrumb(route : ActivatedRoute , url : string=''):breadCrumb[]{
  //   return []
  // }
}
