import { ScreensizeService } from './../../services/screen-size/screensize.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-family-resources',
  templateUrl: './family-resources.component.html',
  styleUrls: ['./family-resources.component.scss'],
})
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

  resources = [
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
      url: 'https://monumentacademy.org/about-us/partnerships/',
    },
    {
      title: 'Family and Student Handbook',
      subtitle: '',
      description: '',
      image: '',
      url:
        'https://monumentacademy.org/wp-content/uploads/2020/09/SY20-21_-Family-and-Student-Handbook.pdf',
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
      url:
        'https://drive.google.com/file/d/1QS8yFw8KWe1FuPCdVSMkpjTX6m3P2MDB/view?usp=sharing',
    },
    {
      title: 'Bullying Prevention Policy',
      subtitle: '',
      description: '',
      image: '',
      url:
        'https://monumentacademy.org/wp-content/uploads/2019/06/MA-Bullying-Prevention-Policy-SY-19-20.pdf',
    },
    {
      title: 'Meeting/ School Visit Request Form',
      subtitle: '',
      description: '',
      image: '',
      url:
        'https://docs.google.com/forms/d/e/1FAIpQLSfr5g3k6rr2MdN1j-LMhxWRNqljh28Z76H7CiiDkmbo1lw9ag/viewform?usp=sf_link',
    },
    {
      title: 'Special Education Handbook 2020-2021',
      subtitle: '',
      description: '',
      image: '',
      url:
        'https://monumentacademy.org/wp-content/uploads/2020/09/Special-Ed-Handbook-2020-2021-Monument-Academy.pdf',
    },
    {
      title: 'School Health Profile 2019-2020',
      subtitle: '',
      description: '',
      image: '',
      url:
        'https://monumentacademy.org/wp-content/uploads/2020/07/2020HSAMonument-Academy-PCS_Monument-Academy-PCS.pdf',
    },
    {
      title: 'Local Wellness Policy 2019-2020',
      subtitle: '',
      description: '',
      image: '',
      url:
        'https://monumentacademy.org/wp-content/uploads/2019/12/MAPCS-Wellness-Policy-SY19-20.pdf',
    },
    {
      title: 'PCSB Lead Test Results',
      subtitle: '',
      description: 'our water is completely safe for students and staff',
      image: '',
      url:
        'https://monumentacademy.org/wp-content/uploads/2020/01/DC-PCSB-2020-Sampling-Monument-Academy-PCS-web-posting.pdf',
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
