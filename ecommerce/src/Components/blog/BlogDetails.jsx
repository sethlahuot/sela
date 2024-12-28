import React from 'react'
import { useLocation,Link } from 'react-router-dom'
import calendar from '../img/icon/calendar.png'
import blog1 from '../img/blog/blog-1.jpg'
import blog2 from '../img/blog/blog-2.jpg'
import blog3 from '../img/blog/blog-3.jpg'
import blog4 from '../img/blog/blog-4.jpg'
import blog5 from '../img/blog/blog-5.jpg'
import blog6 from '../img/blog/blog-6.jpg'
import blog7 from '../img/blog/blog-7.jpg'
import blog8 from '../img/blog/blog-8.jpg'
import blog9 from '../img/blog/blog-9.jpg'

const BlogDetails = () => {
    const location = useLocation();
    const currentLanguage = location.pathname.split('/')[1] || 'en';
    const isKhmer = location.pathname.startsWith('/kh');
  return (
    <div>
        {/* <!-- Blog Section Begin --> */}
        <section class="blog spad">
        <div class="container">
            <div class="row">
                <div class="col-lg-4 col-md-6 col-sm-6">
                    <div class="blog__item">
                    <div class="blog__item__pic set-bg" style={{ backgroundImage: `url(${blog1})`, backgroundSize: 'cover', backgroundPosition: 'center'}}></div>
                        <div class="blog__item__text">
                            <span><img src={calendar} alt=""/>{isKhmer? 'ថ្ងៃទី ១៦ ខែកុម្ភៈ ឆ្នាំ ២០២០':'16 February 2020'}</span>
                             
                            <h5>{isKhmer? 'អ្វី​ដែល​ដែក​កេះ​គឺ​ជា​ដែក​ដែល​ល្អ​បំផុត​':'What Curling Irons Are The Best Ones'}</h5>
                            <Link to={`/${currentLanguage}/blog-details`}>{isKhmer? 'អានបន្ថែម':'Read More'}</Link>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-6">
                    <div class="blog__item">
                    <div class="blog__item__pic set-bg" style={{ backgroundImage: `url(${blog2})`, backgroundSize: 'cover', backgroundPosition: 'center'}}></div>
                        <div class="blog__item__text">
                            <span><img src={calendar} alt=""/>{isKhmer? 'ថ្ងៃទី ១៦ ខែកុម្ភៈ ឆ្នាំ ២០២០':'16 February 2020'}</span>
                            <h5>{isKhmer? 'ក្រុមតន្រ្តីអស់កល្បជានិច្ចធ្វើចុងក្រោយជារៀងរហូត':'Eternity Bands Do Last Forever'}</h5>
                            <Link to={`/${currentLanguage}/blog-details`}>{isKhmer? 'អានបន្ថែម':'Read More'}</Link>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-6">
                    <div class="blog__item">
                    <div class="blog__item__pic set-bg" style={{ backgroundImage: `url(${blog3})`, backgroundSize: 'cover', backgroundPosition: 'center'}}></div>
                        <div class="blog__item__text">
                            <span><img src={calendar} alt=""/>{isKhmer? 'ថ្ងៃទី ១៦ ខែកុម្ភៈ ឆ្នាំ ២០២០':'16 February 2020'}</span>
                            <h5>{isKhmer? 'អត្ថប្រយោជន៍សុខភាពរបស់វ៉ែនតា':'The Health Benefits Of Sunglasses'}</h5>
                            <Link to={`/${currentLanguage}/blog-details`}>{isKhmer? 'អានបន្ថែម':'Read More'}</Link>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-6">
                    <div class="blog__item">
                    <div class="blog__item__pic set-bg" style={{ backgroundImage: `url(${blog4})`, backgroundSize: 'cover', backgroundPosition: 'center'}}></div>                        <div class="blog__item__text">
                            <span><img src={calendar} alt=""/>{isKhmer? 'ថ្ងៃទី ១៦ ខែកុម្ភៈ ឆ្នាំ ២០២០':'16 February 2020'}</span>
                            <h5>{isKhmer? 'គោលបំណងសម្រាប់ Mastopexy ខ្ពស់ជាងនេះ។':'Aiming For Higher The Mastopexy'}</h5>
                            <Link to={`/${currentLanguage}/blog-details`}>{isKhmer? 'អានបន្ថែម':'Read More'}</Link>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-6">
                    <div class="blog__item">
                    <div class="blog__item__pic set-bg" style={{ backgroundImage: `url(${blog5})`, backgroundSize: 'cover', backgroundPosition: 'center'}}></div>                        <div class="blog__item__text">
                            <span><img src={calendar} alt=""/>{isKhmer? 'ថ្ងៃទី ២១ ខែកុម្ភៈ ឆ្នាំ ២០២០':'21 February 2020'}</span>
                            <h5>{isKhmer? 'ចិញ្ចៀនអាពាហ៍ពិពាហ៍ជាអំណោយមួយជីវិត':'Wedding Rings A Gift For A Lifetime'}</h5>
                            <Link to={`/${currentLanguage}/blog-details`}>{isKhmer? 'អានបន្ថែម':'Read More'}</Link>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-6">
                    <div class="blog__item">
                    <div class="blog__item__pic set-bg" style={{ backgroundImage: `url(${blog6})`, backgroundSize: 'cover', backgroundPosition: 'center'}}></div>                        <div class="blog__item__text">
                            <span><img src={calendar} alt=""/>{isKhmer? 'ថ្ងៃទី ២៨ ខែកុម្ភៈ ឆ្នាំ ២០២០':'28 February 2020'}</span>
                            <h5>{isKhmer? 'វិធីសាស្រ្តផ្សេងគ្នានៃការដកសក់':'The Different Methods Of Hair Removal'}</h5>
                            <Link to={`/${currentLanguage}/blog-details`}>{isKhmer? 'អានបន្ថែម':'Read More'}</Link>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-6">
                    <div class="blog__item">
                    <div class="blog__item__pic set-bg" style={{ backgroundImage: `url(${blog7})`, backgroundSize: 'cover', backgroundPosition: 'center'}}></div>                        <div class="blog__item__text">
                            <span><img src={calendar} alt=""/>{isKhmer? 'ថ្ងៃទី ១៦ ខែកុម្ភៈ ឆ្នាំ ២០២០':'16 February 2020'}</span>
                            <h5>{isKhmer? 'ក្រវិល Hoop រចនាប័ទ្មពីប្រវត្តិសាស្ត្រ':'Hoop Earrings A Style From History'}</h5>
                            <Link to={`/${currentLanguage}/blog-details`}>{isKhmer? 'អានបន្ថែម':'Read More'}</Link>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-6">
                    <div class="blog__item">
                    <div class="blog__item__pic set-bg" style={{ backgroundImage: `url(${blog8})`, backgroundSize: 'cover', backgroundPosition: 'center'}}></div>                        <div class="blog__item__text">
                            <span><img src={calendar} alt=""/> {isKhmer? 'ថ្ងៃទី ២១ ខែកុម្ភៈ ឆ្នាំ ២០២០':'21 February 2020'}</span>
                            <h5>{isKhmer? 'ការវះកាត់ភ្នែក Lasik រួចរាល់ហើយឬនៅ?':'Lasik Eye Surgery Are You Ready'}</h5>
                            <Link to={`/${currentLanguage}/blog-details`}>{isKhmer? 'អានបន្ថែម':'Read More'}</Link>
                        </div>
                    </div>
                </div>
                <div class="col-lg-4 col-md-6 col-sm-6">
                    <div class="blog__item">
                    <div class="blog__item__pic set-bg" style={{ backgroundImage: `url(${blog9})`, backgroundSize: 'cover', backgroundPosition: 'center'}}></div>                        <div class="blog__item__text">
                            <span><img src={calendar} alt=""/>{isKhmer? 'ថ្ងៃទី ២៨ ខែកុម្ភៈ ឆ្នាំ ២០២០':'28 February 2020'}</span>
                            <h5>{isKhmer? 'ការវះកាត់ភ្នែក Lasik រួចរាល់ហើយឬនៅ?':'Lasik Eye Surgery Are You Ready'}</h5>
                            <Link to={`/${currentLanguage}/blog-details`}>{isKhmer? 'អានបន្ថែម':'Read More'}</Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- Blog Section End --> */}
    </div>
  )
}

export default BlogDetails