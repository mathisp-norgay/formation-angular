import { ConfigService } from './../config/config.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-test-delete',
  templateUrl: './test-delete.component.html',
  styleUrls: ['./test-delete.component.scss']
})
export class TestDeleteComponent implements OnInit {
  selectedTest;
  testList;

  constructor(
    private config: ConfigService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getAllTests();
  }

  getAllTests = () => {
    this.config.findAll()
      .subscribe(data => {
        this.testList = data;
      })
  }

  onDeleteTest = async () => {
    if (this.selectedTest) {
      await this.config.deleteTest(this.selectedTest.id);
      this.router.navigateByUrl('/');
    }
  }

  onSelectTest(event) {
    this.selectedTest = event;
  }

}
