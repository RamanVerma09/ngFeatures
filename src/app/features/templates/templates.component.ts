import { AfterViewInit, Component, OnInit, TemplateRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-templates',
  templateUrl: './templates.component.html',
  styleUrls: ['./templates.component.scss']
})
export class TemplatesComponent implements OnInit, AfterViewInit {

  selected: any = false;
  constructor() { }

  @ViewChild('bye') byTemp: TemplateRef<HTMLElement>;

  ngAfterViewInit(): void {
    console.log(this.byTemp);
  }
  ngOnInit(): void {
  }

  trackById(index: any) {
    return index;
  }

}
