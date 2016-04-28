import {Page, NavController, NavParams} from 'ionic-angular';
import {IPerson} from '../../models/IPerson'; 
/*
  Generated class for the PersonDetailsPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Page({
  templateUrl: 'build/pages/person-details/person-details.html',
})
export class PersonDetailsPage {
public person: IPerson;
constructor(public nav: NavController, public navParams: NavParams) {
this.person = navParams.data;
}
}
