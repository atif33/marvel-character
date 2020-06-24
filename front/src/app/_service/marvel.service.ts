import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Md5} from 'ts-md5';
import {Observable} from 'rxjs';


const PrivateKey = '483cade656aa93a4486c1e11561ad174051c8e27';
const PublicKey = '4226dc598694c2b1b65ad086b223bcba';
const TimeStamp = new Date().getTime();
const hash = Md5.hashStr(TimeStamp + PrivateKey + PublicKey).toString();


@Injectable({
  providedIn: 'root'
})
export class MarvelService {

  constructor(private http: HttpClient) {
  }

  allCharacter(): Observable<any> {
    // tslint:disable-next-line:max-line-length
    return this.http.get('http://gateway.marvel.com/v1/public/characters?ts=' + TimeStamp + '&apikey=' + PublicKey + '&hash=' + hash + '&limit=100');
  }
}
