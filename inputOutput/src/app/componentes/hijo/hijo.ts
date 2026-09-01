import { ChangeDetectorRef, Component, EventEmitter, Input, input, model, OnChanges, OnInit, Output, output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-hijo',
  styleUrl: './hijo.css',
  templateUrl: './hijo.html',
})
export class Hijo implements OnInit, OnChanges {

  constructor(private cdr: ChangeDetectorRef) {
  }

  dataSignal = input<string>();
  datoDelHijoSignal = output<string>();
  miModelo = model();

  @Input() data: any;
  @Output() datoDelHijo: EventEmitter<string> = new EventEmitter<string>();



  ngOnChanges(change: any) {
    console.log(change);
    this.cdr.detectChanges();
  }

  ngOnInit() {
    //this.datoDelHijo.emit("Dato desde el hijo");
  }

  emitirDato() {
     this.datoDelHijoSignal.emit("Dato desde el hijo");
     //this.datoDelHijo.emit("Dato desde el hijo 2");
  }



}
