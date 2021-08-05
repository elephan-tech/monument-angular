import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss'],
})
export class AboutUsComponent implements OnInit {
  public guidingPrinciples = [
    {
      title: 'Equip for Life.',
      description:
        'Everyone fails sometimes, and this is an opportunity for growth. For students, structure and discipline is caring and prioritizes their ability to self-regulate, learn, make academic progress, and maintain permanency in their homes.',
    },
    {
      title: 'Own It.',
      description:
        'Students will succeed when they are given the tools and support to question and engage deeply in their learning from trusted, caring adults in a safe and healthy environment.',
    },
    {
      title: 'Sustain Staff.',
      description:
        'Staff should have the time and space to learn, collaborate with each other, reflect, and celebrate. ',
    },
    {
      title: 'Embrace Families and Communities',
      description:
        'Caregivers are engaged, valued members of the team; school includes the workplace, other schools, universities, community organizations, and a diversity of people, backgrounds, and experiences. ',
    },
    {
      title: 'It’s “And” not “Or”.',
      description:
        'The debate over whether education OR well-being OR life skills OR connection matters most to students is false. Each is equally important and should be seamlessly integrated in the life of the school.',
    },
  ];

  public coreValues = [
    {
      title: 'Kindness',
      spelling: '/ˈkīn(d)nəs/',
      icon: '',
      description: 'The quality of being friendly, generous, and considerate.'

    },
    {
      title: 'Integrity',
      spelling: '/inˈteɡrədē/',
      icon: '',
      description: 'The quality of being honest and having strong moral principles; moral uprightness.'
    },
    {
      title: 'Excellence',
      spelling: '/ˈeks(ə)ləns/',
      icon: '',
      description: 'The quality of being outstanding or extremely good.'
    },
    {
      title: 'Positivity',
      spelling: '/ˌpäzəˈtivədē/',
      icon: '',
      description: 'The practice of being or tendency to be positive or optimistic in attitude.'
    },
    {
      title: 'Mindfulness',
      spelling: '/ˈmīn(d)f(ə)lnəs/',
      icon: '',
      description: 'The quality or state of being conscious or aware of something.'
    },
  ];

  constructor() {}

  ngOnInit(): void {}
}
