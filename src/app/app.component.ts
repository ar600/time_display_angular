import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Timezone Display';
  today = new Date();
  switch1 :boolean = false;
  switch2 :boolean = false;
  switch3 :boolean = false;

  showPST = function(){
      this.switch1 =!this.switch1;
      console.log('Hello',this.today);
      document.getElementById("time").innerHTML = ("PST time: "+this.today);

  }
  showMST = function(){
  this.switch2 =!this.switch2;

  console.log('Hello',this.today);
  document.getElementById("time").innerHTML = ("MST time: "+this.today);
  }

  showCST = function(){
  this.switch3 =!this.switch3;
  console.log('Hello',this.today);
  document.getElementById("time").innerHTML = ("CST time: "+this.today);
  }

}
