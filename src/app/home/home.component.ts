import {Component, OnInit} from '@angular/core';
import {MarvelService} from '../_service/marvel.service';
import {Observable} from 'rxjs';
import {MarvelObject} from '../_model/MarvelObject';

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
    // console.log('toto2');
    this.marvelService.allCharacter().subscribe((res) => {
      console.log('toto' + res.data.results[2].thumbnail.path);
      this.allCharacter = res.data.results;
    });
  }


}
