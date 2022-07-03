import {Component} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {IndexService} from "../../service/index.service";
import {PaperDto} from "../../model/paper-dto";

@Component({
  selector: 'app-root',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent {
  paperDto: PaperDto;

  constructor(private route: ActivatedRoute, private router: Router, private indexService: IndexService) {
    this.paperDto = new PaperDto();
  }

  onPaper() {
    this.gotoPaper();
  }

  private gotoPaper() {
    this.router.navigate(['/paper']);
  }

  save() {
    this.indexService.savePaper(this.paperDto).subscribe(result => this.gotoIndex());
  }

  private gotoIndex() {
    this.router.navigate(['/index']);
  }

  showModal(paperTypeDesc: string, paperType: string) {
    console.log("click show modal");
    this.paperDto.typeDesc = paperTypeDesc;
    this.paperDto.type = paperType;
  }
}
