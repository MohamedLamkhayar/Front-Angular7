import { Address } from './../../models/address';
import { AddressService } from './../../services/address.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-address',
  templateUrl: './list-address.component.html',
  styleUrls: ['./list-address.component.css']
})
export class ListAddressComponent implements OnInit {

  addresses: Address[] = [];
  constructor(private addressService: AddressService) { }

  ngOnInit(): void {
    this.getAllAdresses();
  }
  getAllAdresses() {
    this.addressService.getAll().subscribe((res: Address[]) => this.addresses = res
     );
     this.addressService.getAll().subscribe(res => console.log(res));
  }
}
