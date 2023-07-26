import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataService } from '../data.service';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit, OnDestroy {

  sub: Subscription | undefined;
  userDatails: any = [];
  @Input() tableHeightValue: any;
  tableHeight: string;
  isExpand: boolean[] = [false];
  loading: boolean = false;

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.getUserDetails();
  }

  getUserDetails(): void{
    this.loading = true;
    this.sub = this.dataService.getDetails().subscribe((res: any) => {
      if(res){
        console.log('Response', res)
        this.userDatails = res;
        this.loading = false;
      }
    })
  }

  showDetails(index: number): void{
    this.isExpand[index] = true;
  }

  closeDetails(index: number): void{
    this.isExpand[index] = false;

  }

  ngOnDestroy(): void{
    if(this.sub){
      this.sub.unsubscribe();
    }
  }

 


}
