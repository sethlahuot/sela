import React, {useEffect} from 'react'
import { useLocation } from 'react-router-dom';
import breadcrumbbg from '../img/breadcrumb-bg.jpg'
const BlogSection = () => {
  const location = useLocation();
  const isKhmer = location.pathname.startsWith('/kh');
  useEffect(() => {
    document.querySelectorAll('.set-bg').forEach((element) => {
        const bg = element.getAttribute('data-setbg');
        element.style.backgroundImage = `url(${bg})`;
    });
  }, []);
  return (
    <div>
    {/* <!-- Breadcrumb Section Begin --> */}
    <section class="breadcrumb-blog set-bg" style={{ backgroundImage: `url(${breadcrumbbg})`, backgroundSize: 'cover', backgroundPosition: 'center'}}>
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <h2>{isKhmer? 'កំណត់ហេតុរបស់យើង':'Our Blog'}</h2>
                </div>
            </div>
        </div>
    </section>
    {/* <!-- Breadcrumb Section End --> */}
    </div>
  )
}

export default BlogSection
