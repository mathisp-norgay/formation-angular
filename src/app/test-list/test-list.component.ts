import { MatTableDataSource } from '@angular/material/table';
import { ConfigService } from './../config/config.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-test-list',
  templateUrl: './test-list.component.html',
  styleUrls: ['./test-list.component.scss']
})

export class TestListComponent implements OnInit {

  testList;
  dataSource = new MatTableDataSource;
  displayedColumns: string[] = ['id', 'titre', 'description'];
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(private config: ConfigService) { }

  ngOnInit(): void {
    this.getAllTests();
    this.dataSource.sort = this.sort;
  }

  getAllTests = () => {
    this.config.findAll()
      .subscribe(data => {
        this.dataSource.data = data as [];
      })
  }

}
