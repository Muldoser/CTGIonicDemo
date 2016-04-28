import {Page} from 'ionic-angular';
import {ExtraPage} from '../extra/extra';


@Page({
  templateUrl: 'build/pages/getting-started/getting-started.html'
})
export class GettingStartedPage {
public myname: string;
   public goToPage = ExtraPage;
  constructor() {
      this.myname = "Younes";
  }
}
