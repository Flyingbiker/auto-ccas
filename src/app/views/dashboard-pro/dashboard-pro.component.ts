import { AnnoncesPerMonth } from './../../interfaces/annoncesPerMonth';
import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user/user.service';
import { EChartsOption } from 'echarts';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject, Subscription } from 'rxjs';

@Component({
  selector: 'app-dashboard-pro',
  templateUrl: './dashboard-pro.component.html',
  styleUrls: ['./dashboard-pro.component.scss']
})
export class DashboardProComponent implements OnInit {

  public proConnected : string = 'Aymeric';

  public options:any;

  public xData : Array<string> = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  public yData : Array<number> = [820, 932, 901, 934, 1290, 1330, 1320];
  
  public valueAnnoncesPerMonth : Array<AnnoncesPerMonth>;
  public valueAnnoncesPerMonthSubject = new Subject<Array<AnnoncesPerMonth>>();
  public getAnnoncesByMonthSubscription : Subscription;

  public chartOption: EChartsOption = {
    title: {
      text: 'Graphic by Aymeric',
      subtext: 'Données issues de la BDD',  
    },
    xAxis: {
      type: 'category',
      data: this.xData,
    },
    yAxis: {
      type: 'value',
    },
    tooltip: {
      backgroundColor: '#000',      
      axisPointer: {
        crossStyle:{
          color: '#fff',        
        }
      },
      className: "legend-box"
    },
    series: [
      {
        data: this.yData,
        type: 'line',
      },      
    ],
  };

  constructor(private proService : UserService,
              private httpClient : HttpClient) { }

  ngOnInit(): void {
    this.getAnnoncesByMonthSubscription = this.getAnnoncesByMonth().subscribe(
      (response) =>{
        this.valueAnnoncesPerMonth = response;
        console.log(response, response['data'][2].sum, response['data'].length );
        
        let len = response['data'].length;
        this.chartOption.xAxis['data'] = [] ;
        this.chartOption.series[0]['data'] = [] ;
        for (let i = 0 ; i < len ; i++){
          this.chartOption.xAxis['data'].push(response['data'][i].year + ' - ' + response['data'][i].month);
          this.chartOption.series[0]['data'].push(response['data'][i].sum);
        }
        console.log(this.xData, this.yData);        
      }
    );
  }

  public emitValueAnnoncesPerMonthSubject(){
    this.valueAnnoncesPerMonthSubject.next(this.valueAnnoncesPerMonth.slice())
  }


  public onChartEvent(event: any, type: string) {
    console.log('chart event:', type, event);
  }

  public getAnnoncesByMonth() : Observable<Array<AnnoncesPerMonth>> {
    return this.httpClient.get<Array<AnnoncesPerMonth>>('http://formation-dwwm/Symfony/API_buisness_case/public/index.php/api/annonces')
      // .subscribe(
      //   (response) => {
      //     this.valueAnnoncesPerMonth = response;
      //     // console.log(response, this.valueAnnoncesPerMonth['data'], this.valueAnnoncesPerMonth['data'][2].sum);
          
      //     //1 remplir variable longueur
      //     var len = this.valueAnnoncesPerMonth['data'].length;
      //     this.chartOption.xAxis['data'] = [];
      //     this.chartOption.series[0]['data'] = [];

      //     //2 remplir les 3 tables de variables temporaires
      //     for (let i = 0; i < len ; i++){
      //       this.chartOption.xAxis['data'].push(this.valueAnnoncesPerMonth['data'][i].month + ' ' +  this.valueAnnoncesPerMonth['data'][i].year);
      //       this.chartOption.series[0]['data'].push(this.valueAnnoncesPerMonth['data'][i].sum);
      //     }
      //     console.log(this.chartOption.xAxis['data']);
      //     console.log(this.chartOption.series[0]['data']);

      //     //3 pousser les données vers le graphique
          
      //   }
      // )
    // 
  }  

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.getAnnoncesByMonthSubscription.unsubscribe();
  }
}
