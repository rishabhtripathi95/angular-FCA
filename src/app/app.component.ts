import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormControl, Validator, Validators } from "@angular/forms";

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  @ViewChild('multiSelect') multiSelect;
  public form: FormGroup;
  public loadContent: boolean = false;
  public name = 'Countries';
  public data = [];
  public settings :any= {};
  public selectedItems:any = [];
  public onSelect:any=[];

  ngOnInit() {
    this.data = [
      { id: 1, itemName: 'Australia' },
      { id: 2, itemName: 'india' },
      { id: 3, itemName: 'United States' },
      { id: 4, itemName: 'China' },
      { id: 5, itemName: 'Japan' }
    ];
    // setting and support i18n
    this.settings = {
      singleSelection: false,
      idField: 'id',
      textField: 'itemName',
      enableCheckAll: true,
      selectAllText: 'Select All',
      unSelectAllText: 'Deselect All',
      allowSearchFilter: true,
      limitSelection: -1,
      clearSearchFilter: true,
      maxHeight: 197,
      itemsShowLimit: 0,
      searchPlaceholderText: 'Countries',
      noDataAvailablePlaceholderText: 'Country NOt listed',
      closeDropDownOnSelection: false,
      showSelectedItemsAtTop: false,
      defaultOpen: false
    };
    this.setForm();
  }

  public setForm() {
    this.form = new FormGroup({
      name: new FormControl(this.data, Validators.required)
    });
    this.loadContent = true;
  }

  get f() { return this.form.controls; }

  public save() {
    console.log(this.form.value);
  }

  public resetForm() {
    // beacuse i need select all countries by default when i click on reset button.
    this.setForm();
    this.multiSelect.toggleSelectAll();
    // i try below variable isAllItemsSelected reference from your  repository but still not working
    // this.multiSelect.isAllItemsSelected = true;
  }

  public onFilterChange(item: any) {
    console.log(item);
  }
  public onDropDownClose(item: any) {
    console.log(item);
  }
  

  public onItemSelect(item: any) {
    console.log(item);
    console.log(this.selectedItems.itemName);
    this.settings.selectAllText='Select All'+this.selectedItems.length
    
  }
  public onDeSelect(item: any) {
    console.log(item);
  }

  public onSelectAll(items: any) {
    console.log('OnSelectAll',items);
    this.settings.selectAllText='Select All'+this.selectedItems.length
  }
  public onDeSelectAll(items: any) {
    console.log(items);
  }
}

