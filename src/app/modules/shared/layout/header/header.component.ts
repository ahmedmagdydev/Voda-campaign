import { Component, OnInit } from '@angular/core';
import {MenuItem} from 'primeng/api';
import { SideMenuService } from '../../../../services/sidemenu.service';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
// tslint:disable: indent
	items: MenuItem[];
  constructor(private SideMenuService: SideMenuService) { }

  ngOnInit() {
  	this.items = [
  	            {label: 'New', icon: 'pi pi-fw pi-plus'},
  	            {label: 'Open', icon: 'pi pi-fw pi-download'},
  	            {label: 'Undo', icon: 'pi pi-fw pi-refresh'}
  	        ];
  }

  toggleMenu(){
    
    this.SideMenuService.toggleSideMenu();
  }

}
