import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Subject }    from 'rxjs/Subject';

export interface toolButtonI {
  name : string,
  value : any,
  type : string,
  title: string,
  service?:string,
  func?:string,
  fnparams?:any[],
  fontSet ?:string,
  fontIcon ?: string,
  settingName ?: string,
  svg_src ?: string,
  fill?:string,
  width?:string
}

export interface settingsObj {
  name : string,
  type : string,
  value : any;
  description : string
}

@Injectable()
export class SettingsService {
  private _configSettingsAll:any;
  private _appSettingsOnly:any;

  // Observable object sources
  private _settingsObjSource = new Subject<any>();

  // Observable object streams
  settingsObjAnnounced = this._settingsObjSource.asObservable();

  private _mainAppSettings:any;
  private _buttonsObj:toolButtonI[];
  private _infoHtml: any;


  constructor() {
    this._mainAppSettings = {
        "googleMaps": {
          type: 'boolean',
          value: false,
          description : 'Enable Google Maps'
        },
        "unitpopup": {
          type: 'boolean',
          value: true,
          description : 'Show Coordinates'
        },
        "infowin": {
          type: 'boolean',
          value: false,
          description : 'Show InfoPopup'
        }
      };

            // Buttons Object
      this._buttonsObj = [
                    {
                      "name" : 'info',
                      "value" : true,
                      "service":'settings',
                      "func":'toggleSettingsValue',
                      "fnparams":['infowin'],
                      "type" : 'settingsValue',
                      "title": 'Πληροφορίες',
                      "fontSet" :'ms',
                      "fontIcon" : 'ms-information',
                      "settingName" : 'infowin'
                    },
                    {
                      "name" : 'gotoxy',
                      "value" : true,
                      "type" : 'command',
                      "title": 'Πληροφορίες',
                      "fontSet" :'ms',
                      "fontIcon" : 'ms-osm'
                    },
                    {
                      "name" : 'forest maps',
                      "value" : true,
                      "type" : 'svgButton',
                      "title": 'Πληροφορίες',
                      "svg_src" : '../../assets/svg/tree01.svg',
                      'fill':'#2980b9',
                      'width':'20px',
                      "settingName" : 'infowin'
                    },
                    {
                      "name" : 'gotoxy',
                      "value" : true,
                      "type" : 'command',
                      "title": 'Πληροφορίες',
                      "fontSet" :'ms',
                      "fontIcon" : 'ms-draw'
                    },
                    {
                      "name" : 'info',
                      "value" : true,
                      "type" : 'settingsValue',
                      "title": 'Πληροφορίες',
                      "fontSet" :'ms',
                      "fontIcon" : 'ms-crosshair',
                      "settingName" : 'infowin'
                    },
                    {
                      "name" : 'gotoxy',
                      "value" : true,
                      "type" : 'command',
                      "title": 'Πληροφορίες',
                      "fontSet" :'ms',
                      "fontIcon" : 'ms-shp'
                    }
        ];

   } // <- end of Constructor

   private addSettingsCategory(configSettingsObj: any, settingsCategory:string = 'appSettings', categoryItems:any = this._mainAppSettings):void{
          // check if exist appSettings object
          if (!configSettingsObj.hasOwnProperty(settingsCategory)) {
              configSettingsObj[settingsCategory]={};
          }
          // add _mainAppSettings properties if not exist
          for (var obj in categoryItems){
              if (!configSettingsObj[settingsCategory].hasOwnProperty(obj)) {
                  configSettingsObj[settingsCategory][obj]= categoryItems[obj];
              }
          }
    }

    // Service message commands
    announceSettingsObj(configSettingsObj: any) {

      this.addSettingsCategory(configSettingsObj, 'appSettings');
      this.addSettingsCategory(configSettingsObj, 'toolButtonsObj', this._buttonsObj);
      // add infoWinContent
      configSettingsObj['infoWinContent']='This is a Test2 <div> Text in div</div> <div> Text2 in div</div>';

      // add name property to settingsObj
      for (var obj in configSettingsObj.appSettings) {
        configSettingsObj.appSettings[obj].name=obj;
      }
      console.log('configSettingsObj ------------>',configSettingsObj);
      // announce configSettingsObj
      this._settingsObjSource.next(configSettingsObj);

      this._configSettingsAll=configSettingsObj;
      this._appSettingsOnly=configSettingsObj.appSettings;
    }

    hasAppSettings(settingsName: string):boolean{
      return this._appSettingsOnly.hasOwnProperty(settingsName);
    }

    toggleSettingsValue(settingsName: string):void{
      this._appSettingsOnly[settingsName].value = !this._appSettingsOnly[settingsName].value;
      // this._panelOpened.next(this.currentValue);
      this._configSettingsAll.appSettings = this._appSettingsOnly;
      this.announceSettingsObj(this._configSettingsAll);
    }

    setAppSettingsValue(settingsName: string, settingsVal:boolean){
      this._appSettingsOnly[settingsName].value = settingsVal;

      // this._panelOpened.next(this.currentValue);
      this._configSettingsAll.appSettings = this._appSettingsOnly;
      this.announceSettingsObj(this._configSettingsAll);
    }

    addSettings(settingsName: string, settingsObj: any){
      Object.defineProperty(this._appSettingsOnly, settingsName, settingsObj);


      // this._panelOpened.next(this.currentValue);
      this._configSettingsAll.appSettings = this._appSettingsOnly;
      this.announceSettingsObj(this._configSettingsAll);
    }

    getAppSettingsValue(settingsName:string):boolean{
      return this._appSettingsOnly[settingsName].value;
    }

    getSettings():any{
        return this._configSettingsAll;
    }

    getAppSettings():any{
        return this._appSettingsOnly;
    }

    getButtonSettings():any{
        return this._configSettingsAll.toolButtonsObj;
    }

    

}
