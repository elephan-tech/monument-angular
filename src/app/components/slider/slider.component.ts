import { Component, OnInit, ViewEncapsulation } from '@angular/core';

// import Swiper core and required modules
import SwiperCore, {
  Navigation,
  Pagination,
  Mousewheel,
  Keyboard,
  Autoplay,
} from 'swiper';

// install Swiper modules
SwiperCore.use([Autoplay, Navigation, Pagination, Mousewheel, Keyboard]);

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SliderComponent implements OnInit {
  public slides = [
    'https://monument-academy.s3.amazonaws.com/IMG_9978_9404bbc593.JPG',
    'https://monument-academy.s3.amazonaws.com/IMG_9985_f0422b29c4.JPG',
    'https://monument-academy.s3.amazonaws.com/IMG_9964_1_c0f233b2ea.JPG',
    'https://monument-academy.s3.amazonaws.com/IMG_9968_b300664c4f.JPG',
    'https://monument-academy.s3.amazonaws.com/IMG_7828_06cdae19a7.JPG',
    'https://monument-academy.s3.amazonaws.com/IMG_9890_39299ceda9.JPG',
    'https://monument-academy.s3.amazonaws.com/IMG_9956_d4c2ae4928.JPG',
    'https://monument-academy.s3.amazonaws.com/IMG_7980_b7896e1871.JPG',
    'https://monument-academy.s3.amazonaws.com/IMG_7908_20c0afe9dd.JPG',
    'https://monument-academy.s3.amazonaws.com/IMG_8552_1_a70d8fdeda.jpg',
    'https://monument-academy.s3.amazonaws.com/IMG_8551_c24e3e9c50.jpg',
    'https://monument-academy.s3.amazonaws.com/IMG_7983_930abcef9d.JPG',
    'https://monument-academy.s3.amazonaws.com/IMG_7951_a88bda143c.JPG',
    'https://monument-academy.s3.amazonaws.com/IMG_7944_3932f0ce1c.JPG',
    'https://monument-academy.s3.amazonaws.com/IMG_7461_4bd827d474.JPG',
    'https://monument-academy.s3.amazonaws.com/IMG_7909_4e30eda1bf.JPG',
    'https://monument-academy.s3.amazonaws.com/IMG_7921_92968034a3.JPG',
    'https://monument-academy.s3.amazonaws.com/IMG_7889_ec9ee08334.JPG',
    'https://monument-academy.s3.amazonaws.com/IMG_7846_8058e42e98.JPG',
    'https://monument-academy.s3.amazonaws.com/IMG_7681_b164dd2d07.JPG',
    'https://monument-academy.s3.amazonaws.com/IMG_4080_ba26a779cc.JPG',
    'https://monument-academy.s3.amazonaws.com/IMG_7858_43c512552a.JPG',
    'https://monument-academy.s3.amazonaws.com/IMG_7475_cf2754c94d.JPG',
    'https://monument-academy.s3.amazonaws.com/IMG_7437_f43cfcfeb1.jpeg',
    'https://monument-academy.s3.amazonaws.com/IMG_4078_8684d8fea9.JPG',
    'https://monument-academy.s3.amazonaws.com/IMG_4079_ba778e6742.JPG',
    'https://monument-academy.s3.amazonaws.com/IMG_7449_c4e7abec81.jpg',
    'https://monument-academy.s3.amazonaws.com/IMG_5489_b7dd7ae23f.jpg',
    'https://monument-academy.s3.amazonaws.com/IMG_4077_3d2f7a4f57.JPG',
    'https://monument-academy.s3.amazonaws.com/IMG_5490_9034a584c5.jpg',
    'https://monument-academy.s3.amazonaws.com/IMG_4076_6b32e35708.JPG',
    'https://monument-academy.s3.amazonaws.com/IMG_4064_03c97571ea.JPG',
    'https://monument-academy.s3.amazonaws.com/IMG_4037_3efea26087.JPG',
    'https://monument-academy.s3.amazonaws.com/IMG_4063_80db698d36.JPG',
    'https://monument-academy.s3.amazonaws.com/IMG_4033_5fd5b3ec45.JPG',
    'https://monument-academy.s3.amazonaws.com/IMG_4013_9b1217c0a8.JPG',
    'https://monument-academy.s3.amazonaws.com/IMG_3979_21c466c72c.JPG',
    'https://monument-academy.s3.amazonaws.com/IMG_4003_dd2548a6c7.JPG',
    'https://monument-academy.s3.amazonaws.com/IMG_3987_e8a756ce27.JPG',
    'https://monument-academy.s3.amazonaws.com/IMG_3949_44e2159751.JPG',
    'https://monument-academy.s3.amazonaws.com/IMG_3905_d71ef7e0f9.JPG',
    'https://monument-academy.s3.amazonaws.com/IMG_3863_58767697e1.JPG',
    'https://monument-academy.s3.amazonaws.com/IMG_3874_2b54599cd0.JPG',
    'https://monument-academy.s3.amazonaws.com/IMG_3953_ef4c89e6c9.JPG',
    'https://monument-academy.s3.amazonaws.com/IMG_3822_7232b4a6bb.JPG',
    'https://monument-academy.s3.amazonaws.com/IMG_3814_b861e0bdb4.JPG',
    'https://monument-academy.s3.amazonaws.com/IMG_3804_3c8ce8a684.JPG',
    'https://monument-academy.s3.amazonaws.com/IMG_3777_a9a09a5557.JPG',
    'https://monument-academy.s3.amazonaws.com/IMG_3787_648e10e5da.JPG',
    'https://monument-academy.s3.amazonaws.com/IMG_1451_61cad6c1a9.JPG',
    'https://monument-academy.s3.amazonaws.com/IMG_1442_cb5d4d3a51.JPG',
    'https://monument-academy.s3.amazonaws.com/IMG_1453_e2dae2e2de.JPG',
    'https://monument-academy.s3.amazonaws.com/IMG_1516_84519eafca.jpg',
    'https://monument-academy.s3.amazonaws.com/IMG_1447_d655c2e5a6.JPG',
    'https://monument-academy.s3.amazonaws.com/IMG_0089_a6bfc9f938.JPG',
    'https://monument-academy.s3.amazonaws.com/Copy_of_IMG_1915_94c729ca36.JPG',
    'https://monument-academy.s3.amazonaws.com/IMG_0920_c43106110a.jpg',
    'https://monument-academy.s3.amazonaws.com/IMG_0433_1_cdf2f6978f.jpg',
    'https://monument-academy.s3.amazonaws.com/IMG_0027_d30bff82a7.JPG',
    'https://monument-academy.s3.amazonaws.com/Copy_of_IMG_1846_8c03836a4d.JPG',
    'https://monument-academy.s3.amazonaws.com/Copy_of_IMG_1893_994c7a9f16.JPG',
    'https://monument-academy.s3.amazonaws.com/Copy_of_IMG_1860_da198054f7.JPG',
    'https://monument-academy.s3.amazonaws.com/Copy_of_IMG_1889_64183cdc85.JPG',
    'https://monument-academy.s3.amazonaws.com/Copy_of_IMG_1839_4356a5366a.JPG',
    'https://monument-academy.s3.amazonaws.com/Copy_of_IMG_1834_b35126ca3b.JPG',
    'https://monument-academy.s3.amazonaws.com/Copy_of_IMG_1822_1c3a90500f.JPG',
    'https://monument-academy.s3.amazonaws.com/Copy_of_IMG_1139_930e53daf9.JPG',
    'https://monument-academy.s3.amazonaws.com/Copy_of_IMG_1831_301c18e984.JPG',
    'https://monument-academy.s3.amazonaws.com/Copy_of_IMG_1821_53aa379dd3.JPG',
    'https://monument-academy.s3.amazonaws.com/Copy_of_IMG_1789_ed2679e516.JPG',
    'https://monument-academy.s3.amazonaws.com/Copy_of_IMG_1796_4ca282d46c.JPG',
    'https://monument-academy.s3.amazonaws.com/Copy_of_IMG_1806_e387810e6f.JPG',
    'https://monument-academy.s3.amazonaws.com/Copy_of_IMG_1801_8526f54f16.JPG',
    'https://monument-academy.s3.amazonaws.com/Copy_of_IMG_1617_ca0d2bd805.JPG',
    'https://monument-academy.s3.amazonaws.com/Copy_of_IMG_1661_78cc1b6a42.JPG',
    'https://monument-academy.s3.amazonaws.com/Copy_of_IMG_1630_dd0a2e3315.JPG',
    'https://monument-academy.s3.amazonaws.com/Copy_of_IMG_1614_b362642ac1.JPG',
    'https://monument-academy.s3.amazonaws.com/Copy_of_IMG_1608_2f26e03c28.JPG',
    'https://monument-academy.s3.amazonaws.com/Copy_of_IMG_0985_65602b6e6f.JPG',
    'https://monument-academy.s3.amazonaws.com/Copy_of_IMG_1600_2e6f9556dc.JPG',
    'https://monument-academy.s3.amazonaws.com/Copy_of_IMG_0923_7b6b3fc6f5.JPG',
    'https://monument-academy.s3.amazonaws.com/Copy_of_IMG_0873_06e341bb7c.JPG',
    'https://monument-academy.s3.amazonaws.com/Copy_of_IMG_0790_12db2c6d5d.JPG',
    'https://monument-academy.s3.amazonaws.com/Copy_of_IMG_0900_1b08886b75.JPG',
    'https://monument-academy.s3.amazonaws.com/Copy_of_IMG_0929_afc5e6c3e7.JPG',
    'https://monument-academy.s3.amazonaws.com/Copy_of_IMG_0860_def3af202c.JPG',
    'https://monument-academy.s3.amazonaws.com/Copy_of_IMG_0895_e0f3860b66.JPG',
    'https://monument-academy.s3.amazonaws.com/Copy_of_IMG_0749_caf29fe0ea.JPG',
    'https://monument-academy.s3.amazonaws.com/Copy_of_IMG_0844_b95ea42db1.JPG',
    'https://monument-academy.s3.amazonaws.com/Copy_of_IMG_0796_f6d6b26502.JPG',
    'https://monument-academy.s3.amazonaws.com/Copy_of_IMG_0769_05084dac52.JPG',
    'https://monument-academy.s3.amazonaws.com/Copy_of_IMG_0748_a7f73d01cd.JPG',
    'https://monument-academy.s3.amazonaws.com/Copy_of_IMG_0755_2afe2a7c14.JPG',
    'https://monument-academy.s3.amazonaws.com/Copy_of_IMG_0783_33643ea4f1.JPG',
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
