import { Component, EventEmitter, Output } from '@angular/core';
export interface Survey{
  question:string,
  answertype:string,
  options:string[]
}
export class Rootobject{
  title:string='';
  email:string='';
  surveys:Survey[]=[]
}
@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.scss'],
})
export class HeadComponent {

  @Output() valueEvent = new EventEmitter<void>();
 
  getValue() {
    const formTitle = (
      document.querySelector(
        '.example-form .example-full-width input'
      ) as HTMLInputElement
    ).value;
    const formDescription = (
      document.querySelector(
        '.example-form .example-full-width textarea'
      ) as HTMLTextAreaElement
    ).value;
    console.log(formTitle, formDescription);
    this.valueEvent.emit();
    return { formTitle, formDescription };
    // if()
  }
}
