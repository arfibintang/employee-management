  import { Component, OnInit } from '@angular/core';
  import { ActivatedRoute, Router } from '@angular/router';
  import { environment } from 'src/environments/environment';
  import axios from 'axios';
  import { NzMessageService } from 'ng-zorro-antd/message';
  import { NzModalService } from 'ng-zorro-antd/modal';
  import { NzTableQueryParams } from 'ng-zorro-antd/table';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.scss']
})
export class EmployeesComponent implements OnInit {
 loading = true;
 public employees: any = [];
 total = this.employees.length;
 pageIndex = 1;
 pageSize = 10;
 name = '';
 success = false;
 successState = '';
 selectedStatus = '';
 statusOptions: any = [
  'karyawan tetap',
  'magang'
 ]

  constructor(
    private _router: Router,
    private nzMessageService: NzMessageService,
    private nzModalService: NzModalService,
    private _route: ActivatedRoute
  ) { }
  searchForm() {
    this.pageIndex = 1;
    this.getEmployee();
  }

  clearForm() {
    this.name = '';
    this.selectedStatus = '';
    this.getEmployee();
  }

  async getEmployee() {
    this.loading = true;
    try {
      const res = await axios.get(`${environment.api_url}/employees`);
      const data = await res.data;
      if (data.error) {
        this.nzMessageService.error(data.error_message);
      } else {
        this.employees = [...data.employees];
        let filteredData = this.employees;

        if (this.name && this.name.length > 0) {
            filteredData = filteredData.filter((item: any) => {
            let fullName = item.first_name + ' ' + item.last_name;
            return fullName.toLowerCase().indexOf(this.name.toLowerCase()) !== -1;
          });
        }

        if (this.selectedStatus && this.selectedStatus.length > 0) {
          filteredData = filteredData.filter((item: any) =>
            item.status.toLowerCase().indexOf(this.selectedStatus.toLowerCase()) !== -1);
        }

        this.total = filteredData.length;
        this.employees = filteredData.slice((this.pageIndex - 1) * this.pageSize, this.pageIndex * this.pageSize);
        this.loading = false;
      }
    } catch (error) {
      this.loading = false;
      console.error(error);
    }
    
  }

  create() {
    this._router.navigateByUrl('/employees/create');
  }

  show(employee: any) {
    this._router.navigateByUrl('/employees/show/' + employee.id);
    console.log(employee.id);
  }

  delete(employee: any) {
    this.nzModalService.confirm({
      nzTitle: 'Confirm Deletion',
      nzContent: 'Are you sure you want to delete this user?',
      nzIconType: 'close-circle',
      nzOnOk: () => {
        this.loading = true;
        this.actionDelete(employee);
      }
    });
  }

  async actionDelete(employee: any) {
    try {
      const res = await axios.delete(`${environment.api_url}/employees/delete/${employee.id}`)
      const data = await res.data;
      console.log(data);
      if (data.error) {
        this.loading = false;
        this.nzMessageService.error(data.error_message);
      } else {
        this.nzMessageService.success('Successfully deleted employee!');
        this.success = true;
        this.successState = 'd';

        const component = this;
        setTimeout(() => {
          component.success = false;
          component.successState = '';
        }, 3000);
      }

      this.getEmployee();
    } catch (error) {
      this.loading = false;
      this.nzMessageService.error("Sorry, something went wrong. Please try again later.");
    }
  }

  onQueryParamsChange(params: NzTableQueryParams) {
    const { pageSize, pageIndex } = params;
    this.pageIndex = pageIndex;
    this.pageSize = pageSize;
    this.getEmployee();
  }

  ngOnInit(): void {
    this.getEmployee();
  }

}
