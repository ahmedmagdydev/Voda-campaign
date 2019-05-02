import { Component, OnInit } from '@angular/core';
import {SideMenuService} from './services/sidemenu.service'



@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent {
    sideMenuVisible =true;
    constructor(private SideMenuService: SideMenuService){}
    ngOnInit(): void {
        this.SideMenuService.menuVisible.subscribe((visible: any) => this.sideMenuVisible = visible);
    }
}
