import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-menu-bar',
  templateUrl: './side-menu-bar.component.html',
  styleUrls: ['./side-menu-bar.component.scss']
})
export class SideMenuBarComponent implements OnInit {

  isOpen: string = 'open';
  tableHeight: string;
  constructor() { 
  }

  ngOnInit(): void {
    this.openNav();
    this.getHeight();
  }

  openNav(): void {
    document.getElementById("sidenav-content").style.width = "250px";
    document.getElementById("page-content").style.marginLeft = "250px";
  }
  
  closeNav(): void {
    document.getElementById("sidenav-content").style.width = "0px";
    document.getElementById("page-content").style.marginLeft= "0px";
  }

  getHeight(): void{
    this.tableHeight = (document.getElementById("sidenav-content").offsetHeight * 0.75).toString() + 'px';
    console.log('Height', this.tableHeight)
  }

  statusValue(e: Event): void{
    let status: any = e;
    if(status == 'close'){
      this.closeNav()
    }else{
      this.openNav()
    }
  }

}
