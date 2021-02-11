import { Router } from '@angular/router';
import { ConfigService } from './../config/config.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-add',
  templateUrl: './test-add.component.html',
  styleUrls: ['./test-add.component.scss']
})
export class TestAddComponent implements OnInit {
  titre: string;
  description: string;

  constructor(
    private config: ConfigService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  onAddTest = async () => {
    try {
      let test = {
        id: 0,
        titre: this.titre,
        description: this.description
      }
      await this.config.addTest(test);
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
