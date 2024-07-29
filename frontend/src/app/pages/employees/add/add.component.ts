import { Component, OnInit } from '@angular/core';
import axios from 'axios';
import { environment } from 'src/environments/environment';
import { NzMessageService } from 'ng-zorro-antd/message';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.scss']
})
export class AddComponent implements OnInit {
  loading = true
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
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private nzMessageService: NzMessageService
  ) { 

  }
  navigateTo(url: string) {
    this.router.navigateByUrl(url);
  }

  async submit() {
    this.loading = true;

    try {
      const res = await axios.post(`${environment.api_url}/employees/store`,this.formData)
      const data = await res.data;
      console.log(data);
      if (data.error) {
        this.nzMessageService.error(data.error_message);
        this.loading = false;
        return;
      }
      // Success, return to the main page
      this.router.navigateByUrl('/home');
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
  }

}
