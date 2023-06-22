import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-herostatus',
  templateUrl: './herostatus.page.html',
  styleUrls: ['./herostatus.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class HerostatusPage implements OnInit {
  @Input() value: any;
  constructor(private _modal: ModalController) { }

  ngOnInit() {
   
  }

  closeModal(){
    this._modal.dismiss()
  }

}
