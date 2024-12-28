import React from 'react'
import aboutUs from '../img/about/about-us.jpg'
import { useLocation } from 'react-router-dom';

const AboutUs = () => {
const location = useLocation();
const currentLanguage = location.pathname.split('/')[1] || 'en';
const isKhmer = location.pathname.startsWith('/kh');
  return (
    <div>
    {/* <!-- About Section Begin --> */}
    <section class="about spad">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="about__pic">
                        <img src={aboutUs} alt=""/>
                    </div>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-4 col-md-4 col-sm-6">
                    <div class="about__item">
                        <h4>{isKhmer ? 'តើយើងជានរណា?' : 'Who We Are ?'}</h4>
                        <p>
                        {isKhmer ? 'កម្មវិធីផ្សាយពាណិជ្ជកម្មតាមបរិបទ ជួនកាលមានគោលការណ៍តឹងរ៉ឹង ដែលត្រូវប្រកាន់ខ្ជាប់ផងដែរ។ ចូរយក Google ជាឧទាហរណ៍។' : 'Contextual advertising programs sometimes have strict policies that need to be adhered too. Let’s take Google as an example.'}</p>
                    </div>
                </div>
                <div class="col-lg-4 col-md-4 col-sm-6">
                    <div class="about__item">
                        <h4>{isKhmer ? 'តើយើងធ្វើអ្វី?' : 'Who We Do ?'}</h4>
                        <p>{isKhmer ? 'នៅក្នុងជំនាន់ឌីជីថលនេះ ដែលព័ត៌មានអាចទទួលបានយ៉ាងងាយស្រួលក្នុងរយៈពេលប៉ុន្មានវិនាទី នាមប័ណ្ណនៅតែរក្សាបាននូវសារៈសំខាន់របស់វា។' : 'In this digital generation where information can be easily obtained within seconds, business​cards still have retained their importance.'}</p>
                    </div>
                </div>
                <div class="col-lg-4 col-md-4 col-sm-6">
                    <div class="about__item">
                        <h4>{isKhmer ? 'ហេតុអ្វីអ្នកត្រូវជ្រើសរើសយើង?' : 'Why Choose Us'}</h4>
                        <p>{isKhmer ? 'ផ្ទះពីរ ឬបីជាន់ គឺជាវិធីដ៏ល្អមួយក្នុងការពង្រីកផ្ទៃដីដែលផ្ទះរបស់យើងអង្គុយ ប៉ុន្តែសម្រាប់មនុស្សចាស់ ឬមនុស្សទន់ខ្សោយ។' : 'A two or three storey house is the ideal way to maximise the piece of earth on which our home sits, but for older or infirm people.'}</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- About Section End --> */}
    </div>
  )
}

export default AboutUs