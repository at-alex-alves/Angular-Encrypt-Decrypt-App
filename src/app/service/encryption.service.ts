import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Data {
  'data': string,
  'key': string
}

@Injectable({
  providedIn: 'root'
})
export class EncryptionService {

  private baseUrl: string = 'https://classify-web.herokuapp.com/api';

  constructor(private http: HttpClient) { }

  /**
   * Sends a POST request with the cryptography key and the data that is going to be encrypted.
   * @param {Data} passedBody - Text that is going to be encrypted
   * @returns The encrypted data.
   */
  public encrypt(passedBody: Data) {
    return this.http.post(`${this.baseUrl}/encrypt`, passedBody)
  }

  /**
   * Sends a POST request with the cryptography key and the data that is going to be decrypted.
   * @param {Data} passedBody - Text that is going to be decrypted
   * @returns The decrypted data.
   */
  public decrypt(passedBody: Data) {
    return this.http.post(`${this.baseUrl}/decrypt`, passedBody)
  }
}
