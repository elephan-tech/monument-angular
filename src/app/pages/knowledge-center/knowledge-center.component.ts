import { Model } from './../../models/knowledge';
import { KnowledgeService } from './../../services/knowledge.service';
import { Router } from '@angular/router';
import { ModalComponent } from './../../components/modal/modal.component';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-knowledge-center',
  templateUrl: './knowledge-center.component.html',
  styleUrls: ['./knowledge-center.component.scss'],
  encapsulation: ViewEncapsulation.None,
  template: `<div [innerHTML]="data | safeHtml"></div>`,
})
export class KnowledgeCenterComponent implements OnInit {
  pageTitle: string;
  heroImg: string;
  panelOpenState = false;
  knowledges: Model[];

  constructor(
    public modalController: ModalController,
    public router: Router,
    private knowledgeService: KnowledgeService
  ) {}

  ngOnInit() {
    this.pageTitle = 'Knowledge Center';
    this.heroImg = 'assets/images/monument-16.png';
    this.knowledgeService.getAll().subscribe((obs) => {
      console.log({ obs });
      this.knowledges = obs;
    });
  }

  async presentModal(card) {
    const modal = await this.modalController.create({
      component: ModalComponent,
      componentProps: {
        title: card.title,
        description: card.mainContent,
        tabs: card.tabs,
      },
      cssClass: 'fullscreen',
    });
    return await modal.present();
  }

  navigateTo(url) {
    this.router.navigateByUrl(url);
  }
}
