import { Router } from '@angular/router';
import { ConfigService } from './../config/config.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-update',
  templateUrl: './test-update.component.html',
  styleUrls: ['./test-update.component.scss']
})
export class TestUpdateComponent implements OnInit {
  testList;
  selectedTest;
  titre;
  description;

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

  onSelectTest(event) {
    this.selectedTest = event;
  }

  onUpdateTest = async () => {
    try {
      let test = {
        id: this.selectedTest.id,
        titre: this.titre,
        description: this.description
      }
      await this.config.updateTest(test);
      this.router.navigateByUrl('/');
    } catch (error) {
      console.error(error)
    }
  }

  onChangeTitre(event) {
    this.titre = event;
  }

  onChangeDescription(event) {
    this.description = event;
  }

}
