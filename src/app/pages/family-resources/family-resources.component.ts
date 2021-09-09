import { environment } from './../../../environments/environment';
import { isEmpty } from 'lodash';
import { ApiService } from 'src/app/services/api/api.service';
import { BehaviorSubject } from 'rxjs';
import { Component, Injectable, OnInit } from '@angular/core';

@Component({
  selector: 'app-family-resources',
  templateUrl: './family-resources.component.html',
  styleUrls: ['./family-resources.component.scss'],
})
@Injectable({ providedIn: 'root' })
export class FamilyResourcesComponent implements OnInit {
  images = '../../../assets/images/';
  items = [
    'Home visits',
    'Sunday evening drop-offs and exchanges with Houseparents',
    'Friday afternoon pickups and exchanges with teachers',
    'Family days and family dinners',
    'Video-conferencing',
    'Volunteering',
  ];

  uploadUrl = environment.apiUrl;

  resourcesHC = [
    {
      title: 'Monument Academy Parent Portal',
      subtitle: '',
      description: '',
      image: '',
      url: 'https://sites.google.com/monumentacademydc.org/maparentportal/home',
    },
    {
      title: 'Monument Partnerships',
      subtitle: '',
      description: '',
      image: '',
      url: '/partnerships',
    },
    {
      title: 'Family and Student Handbook',
      subtitle: '',
      description: '',
      image: '',
      url: 'assets/documents/family-resources/SY20-21_Family-and-Student-Handbook.pdf',
    },
    {
      title: 'Home Access Center',
      subtitle: '',
      description: 'Portal for scholar grades and attendance',
      image: '',
      url: 'https://oss-hac.eschoolplus.powerschool.com/HomeAccess',
    },
    {
      title: 'Instruction Video for using Home Access Center',
      subtitle: '',
      description: '',
      image: '',
      url: 'https://drive.google.com/file/d/1QS8yFw8KWe1FuPCdVSMkpjTX6m3P2MDB/view?usp=sharing',
    },
    {
      title: 'Bullying Prevention Policy',
      subtitle: '',
      description: '',
      image: '',
      url: 'assets/documents/family-resources/MA-Bullying-Prevention-Policy-SY19-20.pdf',
    },
    {
      title: 'Meeting/School Visit Request Form',
      subtitle: '',
      description: '',
      image: '',
      url: 'https://docs.google.com/forms/d/e/1FAIpQLSfr5g3k6rr2MdN1j-LMhxWRNqljh28Z76H7CiiDkmbo1lw9ag/viewform?usp=sf_link',
    },
    {
      title: 'Special Education Handbook 2020-2021',
      subtitle: '',
      description: '',
      image: '',
      url: 'assets/documents/family-resources/Special-Ed-Handbook-2020-2021-Monument-Academy.pdf',
    },
    {
      title: 'School Health Profile 2019-2020',
      subtitle: '',
      description: '',
      image: '',
      url: 'https://osse.dc.gov/sites/default/files/dc/sites/osse/page_content/attachments/2020HSA_Monument%20Academy%20PCS_Monument%20Academy%20PCS.pdf',
    },
    {
      title: 'Local Wellness Policy 2020-2021',
      subtitle: '',
      description: '',
      image: '',
      url: 'assets/documents/family-resources/MAPCS LWP 21-22.pdf',
    },
    {
      title: 'PCSB Lead Test Results',
      subtitle: '',
      description: 'Our water is completely safe for students and staff',
      image: '',
      url: 'assets/documents/family-resources/FY21-DCPCSB-Lead-in-Water-Sampling-Results-Monument-Academy-PCS.pdf',
    },
  ];

  resources: any;
  resourcesSub = new BehaviorSubject([]);

  constructor(private api: ApiService) {}

  ngOnInit(): void {
    this.resources = this.api.getData('familyResources').subscribe(result => {
      if (!isEmpty(result)) {
        this.resources = result?.data.sort((a: any, b: any)  => a.id.value - b.id.value);
      }
    });

    this.uploadUrl = environment.apiUrl;
  }
}
