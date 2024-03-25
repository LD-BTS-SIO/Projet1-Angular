import { Component } from '@angular/core';
import { IpService } from './service/ip.service';
@Component({
selector: 'app-root',
templateUrl: './app.component.html',
styleUrls: ['./app.component.css']
})
export class AppComponent {
constructor(private ipService:IpService){
    
}
ngInit(){
    this.getIP()
}
title: string = 'projet titre';
ipAddress: string = 'Inconnue IP';
getIP()
{
this.ipService.getIPAddress().subscribe((res:any)=>{
this.ipAddress=res.ip;
});
}
}
