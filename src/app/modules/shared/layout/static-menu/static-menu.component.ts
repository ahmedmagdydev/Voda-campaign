import { Component, OnInit } from '@angular/core';
import { SegmentsService } from '../../../../services/segmentsService';

@Component({
  selector: 'app-static-menu',
  templateUrl: './static-menu.component.html',
  styleUrls: ['./static-menu.component.css']
})
export class StaticMenuComponent implements OnInit {
  segmentsItems: any;
  items = [
    {
      title: 'items',
      icon: 'icon-items',
      link: 'assets/data/segments.json',
      active: false
    },
    {
      title: 'layer',
      icon: 'icon-layer',
      link: 'assets/data/segments.json',
      active: true
    },
    {
      title: 'filter_list',
      icon: 'icon-filter_list',
      link: 'assets/data/segments.json',
      active: false
    },
    {
      title: 'textsms',
      icon: 'icon-textsms',
      link: 'assets/data/sms.json',
      active: false
    },
    {
      title: 'alarm',
      icon: 'icon-alarm',
      link: 'assets/data/segments.json',
      active: false
    },
    {
      title: 'checkmark',
      icon: 'icon-checkmark',
      link: 'assets/data/segments.json',
      active: false
    },
    {
      title: 'low_priority',
      icon: 'icon-low_priority',
      link: 'assets/data/segments.json',
      active: false
    },
    {
      title: 'items-check',
      icon: 'icon-items-check',
      link: 'assets/data/segments.json',
      active: false
    },
    {
      title: 'dashboard',
      icon: 'icon-dashboard',
      link: 'assets/data/segments.json',
      active: false
    },
    {
      title: 'notifications',
      icon: 'icon-notifications',
      link: 'assets/data/segments.json',
      active: false
    },
    {
      title: 'settings',
      icon: 'icon-settings',
      link: 'assets/data/segments.json',
      active: false
    }
  ];

  constructor(public segmentsService: SegmentsService) {}

  getItems(link: any, index) {
    this.segmentsService
      .getFiles(link)
      .then(segments => (this.segmentsItems = segments));
    this.items.forEach(item => {
      item.active = false;
    });
    this.items[index].active = true;
  }
  activeItem(_index) {
    if (_index === 1) {
      return true;
    }
  }

  ngOnInit() {
    this.getItems('assets/data/segments.json', 0);
  }
}
