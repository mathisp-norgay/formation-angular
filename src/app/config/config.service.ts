import { environment } from './../../environments/environment';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { async } from '@angular/core/testing';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  testUrl = environment.api + "/tests/"

  public findAll() {
    return this._httpClient.get(this.testUrl);
  }

  public findById = async (id: number) => {
    return this._httpClient.get(this.testUrl + id);
  }

  async addTest(testData: Object): Promise<[]> {
    try {
      let response = await this._httpClient
        .post(this.testUrl, testData)
        .toPromise();
      return response as [];
    } catch (error) {
      await console.error("updateTest ==> " + error)
    }
  }

  async updateTest(testData: Object): Promise<[]> {
    try {
      let response = await this._httpClient
        .put(this.testUrl, testData)
        .toPromise();
      return response as [];
    } catch (error) {
      await console.error("updateTest ==> " + error)
    }
  }

  async deleteTest(id: number): Promise<[]> {
    try {
      let response = await this._httpClient
        .delete(this.testUrl + id)
        .toPromise();
      return response as [];
    } catch (error) {
      await console.error("deleteTest ==> " + error)
    }
  }


  constructor(private _httpClient: HttpClient) { }


}