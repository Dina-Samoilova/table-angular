import { Component, OnInit } from '@angular/core';
import { TableDataService } from '../../services/table-data.service';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { Data } from '../../Orders';


@Component({
  selector: 'app-table-filtering',
  templateUrl: './table-filtering.component.html',
  styleUrls: ['./table-filtering.component.scss']
})

export class TableFilteringComponent implements OnInit {
  tableData: Data[] = [];

  orders$: Observable<Data[]>
  filter = new FormControl('', {nonNullable: true});

  constructor(private tableDataService: TableDataService) {
    this.orders$ = this.filter.valueChanges.pipe(
      startWith(''),
      map(text => this.tableData.filter(order => {
        const term = text.toLowerCase();
        return order.description.toLowerCase().includes(term);
      })));
  }

  ngOnInit(): void {
    this.tableDataService
      .getTableData()
      .subscribe((order) => {this.tableData = order.response.data});
  }
}
