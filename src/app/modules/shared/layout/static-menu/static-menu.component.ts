import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-static-menu',
  templateUrl: './static-menu.component.html',
  styleUrls: ['./static-menu.component.css']
})
export class StaticMenuComponent implements OnInit {
  items = [
    {
      title: 'items',
      icon: 'icon-items',
      link: '#'
    },
    {
      title: 'layer',
      icon: 'icon-layer',
      link: '#'
    },
    {
      title: 'filter_list',
      icon: 'icon-filter_list',
      link: '#'
    },
    {
      title: 'textsms',
      icon: 'icon-textsms',
      link: '#'
    },
    {
      title: 'alarm',
      icon: 'icon-alarm',
      link: '#'
    },
    {
      title: 'checkmark',
      icon: 'icon-checkmark',
      link: '#'
    },
    {
      title: 'low_priority',
      icon: 'icon-low_priority',
      link: '#'
    },
    {
      title: 'items-check',
      icon: 'icon-items-check',
      link: '#'
    },
    {
      title: 'dashboard',
      icon: 'icon-dashboard',
      link: '#'
    },
    {
      title: 'notifications',
      icon: 'icon-notifications',
      link: '#'
    },
    {
      title: 'settings',
      icon: 'icon-settings',
      link: '#'
    }
  ];

  activeItem(_index) {
    if (_index === 1) {
      return true;
    }
  }
  constructor() {}

  ngOnInit() {}
}
