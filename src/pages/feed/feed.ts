import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MoovieProvider } from '../../providers/moovie/moovie';
/**
 * Generated class for the FeedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
	selector: 'page-feed',
	templateUrl: 'feed.html',
	providers: [
		MoovieProvider
	]




})
export class FeedPage {

	public feed = {
		titulo: "Raislan da Silva",
		data: "July 8, 2018",
		descricao: "Criação do meu primeiro app",
		qtd_likes: 12,
		qtd_comments: 4,
		time_comments: "11h Ju"
	}

	public listar_videos = new Array<any>();

	public nome_usuario: string = "Raislan Devloper";

	public somaDoisNumero(valor1: number, valor2: number): void {
		alert(valor1 + valor2);
	}

	constructor(
		public navCtrl: NavController,
		public navParams: NavParams,
		private movieProvider: MoovieProvider
	) {
	}

	ionViewDidLoad() {
		//this.somaDoisNumero(10,5);

		this.movieProvider.getLatesMovies().subscribe(
			data => {
				const response = (data as any);
				const objeto_retorno = JSON.parse(response._body);
				console.log(objeto_retorno);
				this.listar_videos = objeto_retorno.result;
			}, error => {
				console.log(error);
			}
		)
	}

}
