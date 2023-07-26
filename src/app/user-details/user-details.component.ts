import { HttpClient } from '@angular/common/http';
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

  constructor(private dataService: DataService,private http: HttpClient ) { }

  ngOnInit(): void {
    this.getUserDetails();
  }

  async getUserDetails(): Promise<void>{
    this.loading = true;
    let data = await this.dataService.fetchData();
    this.userDatails = data;
    this.loading = false;
    console.log('Data', data)
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
