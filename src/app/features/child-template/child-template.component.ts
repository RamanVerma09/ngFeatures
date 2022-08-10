import { Component, Input, OnInit, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-child-template',
  templateUrl: './child-template.component.html',
  styleUrls: ['./child-template.component.scss']
})
export class ChildTemplateComponent implements OnInit {

  @Input() byeTemplate: TemplateRef<HTMLElement>;
  
  constructor() { }

  ngOnInit(): void {
  }

}
