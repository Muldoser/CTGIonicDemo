import {Page, NavController} from 'ionic-angular';
import {PeopleService} from '../../providers/people-service/people-service';
import {PersonDetailsPage} from '../person-details/person-details';
import {IPerson} from '../../models/IPerson'; 

/*interface IPerson {
    gender: string;
    name: {
        title:string;
        first:string;
        last:string;
    };
    location:{
        street:string;
        city:string;
        state:string;
        postcode:string;
    };
    email:string;
    login:{
        username:string;
        password:string;
        salt:string;
        md5:string;
        sha1:string;
        sha256:string;
    };
    registered:string;
    dob:string;
    phone:string;
    cell:string;
    id:{
        name:string;
        value:string;
    };
    picture:{
        large:string;
        medium:string;
        thumbnail:string;
    };
    nat:string;
}*/
/*
  Generated class for the ExtraPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Page({
  templateUrl: 'build/pages/extra/extra.html',
    providers: [PeopleService]
})
export class ExtraPage {
    
public people:Array<IPerson>;

constructor(public nav: NavController, public peopleService: PeopleService) {
    this.loadPeople();
  }
    
    loadPeople(){
        this.peopleService.load().then(data => {
            this.people = data;
            })
    }

    showPerson(p:IPerson){
    this.nav.push(PersonDetailsPage, p);
    }
}
