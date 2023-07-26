import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
// import { EventEmitter } from 'stream';

@Component({
  selector: 'app-top-nav',
  templateUrl: './top-nav.component.html',
  styleUrls: ['./top-nav.component.scss']
})
export class TopNavComponent implements OnInit {

  @Input() navBarStatus: boolean;
  @Output() statusValue = new EventEmitter();
  isNavOpen: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  openNav(){
    this.isNavOpen = !this.isNavOpen;
    let status = this.isNavOpen ? 'open' : 'close';
    this.statusValue.emit(status)
  }

}
