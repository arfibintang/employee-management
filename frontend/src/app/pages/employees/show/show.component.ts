import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import axios from 'axios';
import { NzMessageService } from 'ng-zorro-antd/message';
import { ActivatedRoute, Router } from '@angular/router';
import * as moment from 'moment';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.scss']
})
export class ShowComponent implements OnInit {

  loading = false;
  firstLoad = true;
  formData = {
    user_name: '',
    first_name: '',
    last_name: '',
    email: '',
    birthdate: '',
    basic_salary: '',
    status: '',
    group: '',
    description: ''
  };
 
  statusOptions: any = [
  'Karyawan Tetap',
  'Magang'
  ]
  groupOptions: any = [
    'A',
    'B',
    'C'
  ]

  objectId: number = 0;

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private nzMessageService: NzMessageService
  ) { 
  }

  navigateTo(url: string) {
    this.router.navigateByUrl(url);
  }

  formatNumber(num: number): string {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  }

  async getEmployee(id: number) {
    this.loading = true;
    try {
      const res = await axios.get(`${environment.api_url}/employees/show/${id}`);
      const data = await res.data;
      console.log(data);
      if (data.error) {
        this.nzMessageService.error(data.error_message);
        return;
      }
      this.formData = {
        user_name: data.employee.user_name,
        first_name: data.employee.first_name,
        last_name: data.employee.last_name,
        email: data.employee.email,
        birthdate: moment(data.employee.birthdate).format('YYYY-MM-DD'), 
        basic_salary: this.formatNumber(data.employee.basic_salary),
        status: data.employee.status,
        group: data.employee.group,
        description: data.employee.description
      };
      this.firstLoad = false;
    } catch (error) {
      this.firstLoad = false;
      console.error(error);
    }
    
  }

  async update(){
    this.loading = true;
    try {
      const res = await axios.put(`${environment.api_url}/employees/update/${this.objectId}`, this.formData)
      const data = await res.data;
      console.log(data);
      if (data.error) {
        this.loading = false;
        this.nzMessageService.error(data.error_message);
        return;
      }

      this.loading = false;
      this.nzMessageService.success('Successfully updated employee!');
    } catch (error: any) {
      this.loading = false;
      console.log(error);

      if (error.response.status === 422 || error.response.status === '422') {
        const errorData = error.response.data.errors;

        let firstError = '';
        Object.keys(errorData).forEach(errorKey => {
          if (firstError.length <= 0) {
            firstError = errorData[errorKey][0];
          }
        });

        this.nzMessageService.error(firstError);
      } else {
        this.nzMessageService.error('Sorry, something went wrong. Please try again later.');
      }
    }
  }
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.objectId = params['id'];
      // Use the id to get data from API or perform other actions
      this.getEmployee(this.objectId);
    });
  }

}
