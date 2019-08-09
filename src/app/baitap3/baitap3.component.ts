import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-baitap3',
  templateUrl: './baitap3.component.html',
  styleUrls: ['./baitap3.component.css']
})
export class Baitap3Component implements OnInit {
  HCN={
    cd:null,
    cr:null,
    cv:null,
    dt:null,
    diem:null
  };
  student={
    hoten:null,
    ns:null,
    gt:null,
    diem:null
  };
  isShow=false;
  result="Dau";
  constructor() {
   
   }
   Grade()
   {
     this.isShow=true;
     if(this.student.diem<5)
        this.result='Rot';
      else
        this.result='Dau';
   }
   thuchienTinh()
    {
     /* this.isPass=false;
      this.isCheck=true;
      if(this.HCN.diem>=5)
      {
        this.isPass=true;
      }*/
      this.HCN.dt=this.HCN.cd*this.HCN.cr;
      this.HCN.cv=(this.HCN.cd+this.HCN.cr)*2;
    
    }
  ngOnInit() {
  }

}
