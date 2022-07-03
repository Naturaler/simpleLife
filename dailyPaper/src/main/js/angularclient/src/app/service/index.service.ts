import {Injectable} from '@angular/core';
import {PaperDto} from "../model/paper-dto";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class IndexService {
  private paperUrl: string;

  constructor(private http: HttpClient) {
    this.paperUrl = 'http://localhost:18080/paper/save';
  }

  savePaper(paperDto: PaperDto) {
    return this.http.post(this.paperUrl, paperDto)
  }

}
