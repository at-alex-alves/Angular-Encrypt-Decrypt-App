import { Component } from '@angular/core';
import { EncryptionService } from './service/encryption.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  checkoutForm = this.formBuilder.group({
    typeOfSearch: '',
    data: '',
    key: ''
  });

  constructor(
    private encryptionService: EncryptionService,
    private formBuilder: FormBuilder
  ) { }

  /**
   * Gets the values passed to the form fields and makes the search based on the option chosen.
  */
  search() {
    if (this.checkoutForm.value.typeOfSearch == 'encrypt') {
      this.encryptionService.encrypt({ data: this.checkoutForm.value.data, key: this.checkoutForm.value.key }).subscribe(
        data => {
          Object.values(data).forEach(value => {
            alert(`Your encrypted text is: ${value}`)
          });
        }
      );
    } else {
      this.encryptionService.decrypt({ data: this.checkoutForm.value.data, key: this.checkoutForm.value.key }).subscribe(
        data => {
          Object.values(data).forEach(value => {
            alert(`Your decrypted text is: ${value}`)
          });
        }
      )
    }
  }
}
