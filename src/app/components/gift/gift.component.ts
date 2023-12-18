import { Component, OnInit } from '@angular/core';
import { GiftService } from 'src/app/services/gift.service';

@Component({
  selector: 'app-gift',
  templateUrl: './gift.component.html',
  styleUrls: ['./gift.component.css']
})
export class GiftComponent implements OnInit {
  protected giftCounts: number = 12;
  constructor(private service: GiftService) { }

  ngOnInit(): void {
    this.service.getGiftsCount().subscribe({
      next: (data) => {
        this.giftCounts = data;
      },
      error: (err) => {
          console.log(err);
      },
    })
  }

}
