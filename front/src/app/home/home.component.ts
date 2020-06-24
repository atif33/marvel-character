import {Component, OnInit} from '@angular/core';
import {MarvelService} from '../_service/marvel.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  allCharacter;
  page = 1;

  constructor(private marvelService: MarvelService) {
  }

  ngOnInit(): void {
    this.marvelService.allCharacter().subscribe((res) => {
      this.allCharacter = res.data.results;
    });
  }


}
