import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { FeedPage } from '../feed/feed';
import { DocumentosPage } from '../documentos/documentos';
import { ConfiguracoesPage } from '../configuracoes/configuracoes';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab4Root = FeedPage;
  tabRoot = ConfiguracoesPage;
  
  constructor() {

  }
}
