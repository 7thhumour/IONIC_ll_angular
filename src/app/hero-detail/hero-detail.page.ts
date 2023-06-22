import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, ModalController, ToastController } from '@ionic/angular';
import { HeroService } from '../services/hero.service';
import { ActivatedRoute } from '@angular/router';
import { HerostatusPage } from '../herostatus/herostatus.page';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.page.html',
  styleUrls: ['./hero-detail.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class HeroDetailPage implements OnInit {
  heroDetail:any
  constructor(private _toastController: ToastController, private _heroService: HeroService, private _modal:ModalController, private route:ActivatedRoute) {

    this._heroService.getHero(+this.route.snapshot.params['heroId']).subscribe(result => {
      
      this.heroDetail = result 
      const toast = this._toastController.create({
        message: "Hero " + this.heroDetail.name + " is viewable",
        duration: 3000,
        position:"bottom"
      })

      toast.then((toastMessage) => {
        toastMessage.present();
      })
    })
  }

  ngOnInit():void {  }

  async openModal(status:boolean)
  {
    const statusModal = await this._modal.create({
      component: HerostatusPage,
      componentProps:{
        value:status
      }
    })

    return await statusModal.present()
  }
}
