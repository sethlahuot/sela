import React from 'react'
import { useLocation } from 'react-router-dom'
import Blogdetail from '../img/blog/details/blog-details.jpg'
import blogauthor from '../img/blog/details/blog-author.jpg'
const BlogDetailSection = () => {
    
    const location = useLocation();
    const currentLanguage = location.pathname.split('/')[1] || 'en';
    const isKhmer = location.pathname.startsWith('/kh');
  return (
    <div>
    {/* <!-- Blog Details Section Begin --> */}
    <section class="blog-details spad">
        <div class="container">
            <div class="row d-flex justify-content-center">
                <div class="col-lg-12">
                    <div class="blog__details__pic">
                        <img src={Blogdetail} alt=""/>
                    </div>
                </div>
                <div class="col-lg-8">
                    <div class="blog__details__content">
                        <div class="blog__details__share">
                            <span>{isKhmer? 'ចែករំលែក':'share'}</span>
                            <ul>
                                <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                                <li><a href="#" class="twitter"><i class="fa fa-twitter"></i></a></li>
                                <li><a href="#" class="youtube"><i class="fa fa-youtube-play"></i></a></li>
                                <li><a href="#" class="linkedin"><i class="fa fa-linkedin"></i></a></li>
                            </ul>
                        </div>
                        <div class="blog__details__text">
                            <p>{isKhmer
                            ? 'Hydroderm គឺជាក្រែមប្រឆាំងនឹងភាពចាស់ដែលចង់បានយ៉ាងខ្លាំងនៅលើប្លុក។ សេរ៉ូមនេះរឹតត្បិតការកើតឡើងនៃភាពចាស់មុនអាយុនៅលើស្បែក និងរក្សាស្បែកឱ្យក្មេងជាងវ័យ តឹង និងមានសុខភាពល្អ។ វាជួយកាត់បន្ថយភាពជ្រីវជ្រួញ និងបន្ធូរស្បែក។ ក្រែមនេះចិញ្ចឹមស្បែក និងនាំយកមកវិញនូវភាពភ្លឺរលោងដែលបានបាត់បង់ក្នុងរយៈពេលជាច្រើនឆ្នាំដ៏មមាញឹក។'
                            :'Hydroderm is the highly desired anti-aging cream on the block. This serum restricts the occurrence of early aging sings on the skin and keeps the skin younger, tighter and  healthier. It reduces the wrinkles and loosening of skin. This cream nourishes the skin and brings back the glow that had lost in the run of hectic years.'}</p>
                            <p>
                                {isKhmer? 'សារធាតុផ្សំដ៏សំខាន់បំផុតដែលធ្វើឱ្យ hydroderm មានប្រសិទ្ធភាពគឺ Vyo-Serum ដែលជាផលិតផលនៃប្រូតេអ៊ីនធម្មជាតិដែលបានជ្រើសរើស។ ការផ្តោតអារម្មណ៍នេះធ្វើការយ៉ាងសកម្មក្នុងការនាំមកនូវភាពក្មេងជាងវ័យតាមធម្មជាតិនៃស្បែក។ វារឹតបន្តឹងស្បែករួមជាមួយនឹងឥទ្ធិពលសំណើមរបស់វានៅលើស្បែក។ សារធាតុសំខាន់មួយទៀតដែលធ្វើអោយ hydroderm មានប្រសិទ្ធភាពគឺ "marine collagen" ដែលរួមជាមួយនឹង Vyo-Serum ជួយធ្វើឱ្យស្បែករស់ឡើងវិញ។'
                                :'The most essential ingredient that makes hydroderm so effective is Vyo-Serum, which is a product of natural selected proteins. This concentrate works actively in bringing about  the natural youthful glow of the skin. It tightens the skin along with its moisturizing  effect on the skin. The other important ingredient, making hydroderm so effective is “marine collagen” which along with Vyo-Serum helps revitalize the skin.'}</p>
                        </div>
                        <div class="blog__details__quote">
                            <i class="fa fa-quote-left"></i>
                            <p>{isKhmer? '"នៅពេលរចនាការផ្សាយពាណិជ្ជកម្មសម្រាប់ផលិតផលជាក់លាក់មួយ អ្វីៗជាច្រើនគួរតែត្រូវបានស្រាវជ្រាវ ដូចជាកន្លែងដែលវាគួរតែត្រូវបានបង្ហាញ។"'
                            :'“When designing an advertisement for a particular product many things should be  researched like where it should be displayed.”'}</p>
                            <h6>_ John Smith _</h6>
                        </div>
                        <div class="blog__details__text">
                            <p>{isKhmer? 'Vyo-Serum រួមជាមួយនឹងការរឹតបន្តឹងស្បែកក៏ជួយកាត់បន្ថយស្នាមជ្រួញដែលបង្ហាញពីភាពចាស់នៃស្បែក។ បញ្ហាដូចជារង្វង់ខ្មៅ ហើម និងជើងក្អែក អាចគ្រប់គ្រងបានពីឥទ្ធិពលខ្លាំងនៃសេរ៉ូមនេះ។'
                                :'Vyo-Serum along with tightening the skin also reduces the fine lines indicating aging of skin. Problems like dark circles, puffiness, and crow’s feet can be control from the strong effects of this serum.'}</p>
                            <p>{isKhmer? 'Hydroderm ជាផលិតផលពហុមុខងារដែលជួយកាត់បន្ថយ cellulite និងផ្តល់ឱ្យរាងកាយនូវរូបរាងតឹងណែន ថែមទាំងជួយសម្អាតស្បែកពីឫសគល់ និងមិនអនុញ្ញាតឱ្យរន្ធញើសស្ទះ ទោះជាយ៉ាងណាក៏សូមឱ្យការលុបបំបាត់ភាពជ្រីវជ្រួញ និងសញ្ញានៃភាពចាស់ពី រសើបនៅជិតភ្នែក។'
                                :'Hydroderm is a multi-functional product that helps in reducing the cellulite and giving the body a toned shape, also helps in cleansing the skin from the root and not letting  the pores clog, nevertheless also let’s sweeps out the wrinkles and all signs of aging from the sensitive near the eyes.'}</p>
                        </div>
                        <div class="blog__details__option">
                            <div class="row">
                                <div class="col-lg-6 col-md-6 col-sm-6">
                                    <div class="blog__details__author">
                                        <div class="blog__details__author__pic">
                                            <img src={blogauthor} alt=""/>
                                        </div>
                                        <div class="blog__details__author__text">
                                            <h5>Aiden Blair</h5>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-6 col-md-6 col-sm-6">
                                    <div class="blog__details__tags">
                                        <a href="#">#Fashion</a>
                                        <a href="#">#Trending</a>
                                        <a href="#">#2020</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="blog__details__btns">
                            <div class="row">
                                <div class="col-lg-6 col-md-6 col-sm-6">
                                    <a href="" class="blog__details__btns__item">
                                        <p><span class="arrow_left"></span> Previous Pod</p>
                                        <h5>{isKhmer? 'វាត្រូវបានចាត់ថ្នាក់ របៀបប្រើប្រាស់គេហទំព័រផ្សាយពាណិជ្ជកម្មឥតគិតថ្លៃ'
                                        :'It s Classified How To Utilize Free Classified Ad Sites'}</h5>
                                    </a>
                                </div>
                                <div class="col-lg-6 col-md-6 col-sm-6">
                                    <a href="" class="blog__details__btns__item blog__details__btns__item--next">
                                        <p>Next Pod<span class="arrow_right"></span></p>
                                        <h5>
                                        {isKhmer? 'គន្លឹះ​ជ្រើសរើស​ក្រែម​លាបមាត់​ដ៏​ល្អឥតខ្ចោះ​សម្រាប់​បបូរមាត់​របស់អ្នក។'
                                        :'Tips For Choosing The Perfect Gloss For Your Lips'}
                                        </h5>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="blog__details__comment">
                            <h4> 
                            {isKhmer
                            ? 'ទុកមតិយោបល់'
                            :'Leave A Comment'}
                            </h4>
                            <form action="#">
                                <div class="row">
                                    <div class="col-lg-4 col-md-4">
                                        <input type="text" placeholder="Name"/>
                                    </div>
                                    <div class="col-lg-4 col-md-4">
                                        <input type="text" placeholder="Email"/>
                                    </div>
                                    <div class="col-lg-4 col-md-4">
                                        <input type="text" placeholder="Phone"/>
                                    </div>
                                    <div class="col-lg-12 text-center">
                                        <textarea placeholder="Comment"></textarea>
                                        <button type="submit" class="site-btn">Post Comment</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- Blog Details Section End --> */}

    </div>
  )
}

export default BlogDetailSection