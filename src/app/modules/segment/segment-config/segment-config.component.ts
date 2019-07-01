import { Component, OnInit, Input } from '@angular/core';
import { DragDropService } from '../../../services/dragDrop.service';
@Component({
  selector: 'app-segment-config',
  templateUrl: './segment-config.component.html',
  styleUrls: ['./segment-config.component.css']
})
export class SegmentConfigComponent implements OnInit {
  @Input() segmentConfig;

  storedFields;
  sqlGenerated;
  generatedSql;
  optemizeSqlCheck;
  constructor(private dragDropService: DragDropService) {}
  ngOnInit() {
    // console.log(this.segmentConfig);
    this.dragDropService.dropItem.subscribe(item => console.log(item));
    this.storedFields = [
      {
        tableName: 'V_CONTRACT	',
        dataAttr: 'CONTRACT_KE',
        priority: 'high',
        dataAttrCheck: 'dataAttrCheck'
      },
      {
        tableName: 'V_CONTRACT	',
        dataAttr: 'CONTRACT_KE',
        priority: 'high',
        deduplicate: 'deduplicate'
      },
      {
        tableName: 'V_CONTRACT	',
        dataAttr: 'CONTRACT_KE',
        priority: 'high',
        substitution: 'substitution'
      }
    ];
    this.sqlGenerated = false;
    // tslint:disable-next-line: max-line-length
    this.generatedSql = `|SELECT /*Paralle*/ V_CONTRACT.CONTRACT_KEY, V_CONTRACT.MOBILE_NUMBER_INTL, ADSL_CELL_ALL.ALPHA_SITE_ID, ADSL_CELL_ALL.REGION FROM MDM.V_CONTRACT V_CONTRACT, MDM.V_RATE_PLAN V_RATE_PLAN, MOM.V_CELL_ALL_CBAADSL_CELL_ALL, MDM.V_CPF_OUT_PROFILE_MONTHLY _1 PF_OUT_PROFILE_MONTHLY_1 WHERE (V_CONTRACT.LAST_CONTRACT_STATUS NOT IN ( 'De - Activel' , 'Suspended') AND EXISTS ( SELECT /*+Parallel*/ NULL FROM CMD.SE28946 SE28946 WHERE SE28946.A1 = V_CONTRACT.CONTRACT_KEY )`;
    this.optemizeSqlCheck = false;
  }

  generateSql() {
    this.sqlGenerated = true;
  }
}
