import { Component, OnInit } from '@angular/core';
import {PicsumService} from '../services/picsum.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-picsum',
  templateUrl: './picsum.component.html',
  styleUrls: ['./picsum.component.css']
})
export class PicsumComponent implements OnInit {
  picusm: Observable<any>;

  constructor(private picsumService: PicsumService) { }

  ngOnInit(): void {
    this.getImages();
  }

  // tslint:disable-next-line:typedef
  getImages() {
    this.picusm = this.picsumService.getPicsum();

   /* this.picsumService.getPicsum().subscribe((d) => {
      console.log(d);
    });*/
  }

}
