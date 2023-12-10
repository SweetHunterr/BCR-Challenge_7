import React from 'react';
import ImgService from '../images/img_service.png'
import IconCheck from '../images/ceklis.png'
import IconJempol from '../images/tombol_jempol.png'
import IconAward from '../images/award.png'
import IconClock from '../images/jam.png'
import IconSale from '../images/sale.png'
import Profile_1 from '../images/photo_1.png'
import Profile_2 from '../images/photo_2.png'
import IconRate from '../images/rate.png'
import '../style/style-home.css'
import { Link } from 'react-router-dom';

const Content = () => {
  return (
    <>
      {/* Content - 1 */}
      <div class="container-fluid" id="our-services">
        <div class="row">
          <div class="col-6 img-service">
            <img src={ImgService} />
          </div>
          <div class="col-6 description">
            <h2 class="title-desc">Best Car Rental for any kind of trip in <br />(Lokasimu)!</h2>
            <p class="article-desc">Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga lebih
              <br />murah dibandingkan yang lain, kondisi mobil baru, serta kualitas
              <br />pelayanan terbaik untuk
              perjalanan wisata, bisnis, wedding, meeting, dll.
            </p>
            <ul>
              <li><img src={IconCheck} />
                <p>Sewa Mobil Dengan Supir di Bali 12 Jam</p>
              </li>
              <li><img src={IconCheck} />
                <p>Sewa Mobil Lepas Kunci di Bali 24 Jam</p>
              </li>
              <li><img src={IconCheck} />
                <p>Sewa Mobil Jangka Panjang Bulanan</p>
              </li>
              <li><img src={IconCheck} />
                <p>Gratis Antar - Jemput Mobil di Bandara</p>
              </li>
              <li><img src={IconCheck} />
                <p>Layanan Airport Transfer / Drop In Out</p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Content - 2 */}
      <div class="container-fluid" id="why-us">
        <div class="why-us">
          <h3>Why Us?</h3>
          <p>Mengapa harus pilih Binar Car Rental?</p>
        </div>
      </div>

      <div class="container-fluid">
        <div class="desc-why-us">
          <div class="item-1">
            <div class="bg-img-item-1">
              <img src={IconJempol} />
            </div>
            <h6>Mobil Lengkap</h6>
            <p>Tersedia banyak pilihan mobil, <br />kondisi masih baru, bersih dan
              <br />terawat</p>
          </div>
          <div class="item-2">
            <div class="bg-img-item-2">
              <img src={IconSale} />
            </div>
            <h6>Harga Murah</h6>
            <p>Harga murah dan bersaing, bisa <br />bandingkan harga kami dengan
              <br />rental mobil lain</p>
          </div>
          <div class="item-3">
            <div class="bg-img-item-3">
              <img src={IconClock} />
            </div>
            <h6>Layanan 24 Jam</h6>
            <p>Siap melayani kebutuhan Anda <br />selama 24 jam nonstop. Kami juga
              <br />tersedia di akhir minggu
            </p>
          </div>
          <div class="item-4">
            <div class="bg-img-item-4">
              <img src={IconAward} />
            </div>
            <h6>Sopir Profesional</h6>
            <p>Sopir yang profesional, <br />berpengalaman, jujur, ramah dan <br />selalu tepat waktu</p>
          </div>
        </div>
      </div>

      {/* Content - 3 */}
      <div class="container-fluid" id="testimonial">
        <div class="testimonial">
          <h3>Testimonial</h3>
          <p>Berbagai review positif dari para pelanggan kami</p>
        </div>
      </div>

      <div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-inner">
          <div class="carousel-item active" data-bs-interval="3000">
            <div class="row">
              <div class="col-4">
                <div class="box-testimonial">
                  <div class="photo">
                    <img src={Profile_1} />
                  </div>
                  <div class="item-testimonial">
                    <img src={IconRate} />
                    <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br />eiusmod
                      lorem
                      ipsum dolor sit amet, consectetur adipiscing elit, <br />sed do eiusmod lorem
                      ipsum
                      dolor sit amet, consectetur <br />adipiscing elit, sed do eiusmod”</p>
                    <p class="about-me">John Dee 32, Bromo</p>
                  </div>
                </div>
              </div>
              <div class="col-4">
                <div class="box-testimonial">
                  <div class="photo">
                    <img src={Profile_2} />
                  </div>
                  <div class="item-testimonial">
                    <img src={IconRate} />
                    <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br />eiusmod
                      lorem
                      ipsum dolor sit amet, consectetur adipiscing elit, <br />sed do eiusmod lorem
                      ipsum
                      dolor sit amet, consectetur <br />adipiscing elit, sed do eiusmod”</p>
                    <p class="about-me">John Dee 32, Bromo</p>
                  </div>
                </div>
              </div>
              <div class="col-4">
                <div class="box-testimonial">
                  <div class="photo">
                    <img src={Profile_1} />
                  </div>
                  <div class="item-testimonial">
                    <img src={IconRate} />
                    <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br />eiusmod
                      lorem
                      ipsum dolor sit amet, consectetur adipiscing elit, <br />sed do eiusmod lorem
                      ipsum
                      dolor sit amet, consectetur <br />adipiscing elit, sed do eiusmod”</p>
                    <p class="about-me">John Dee 32, Bromo</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item" data-bs-interval="3000">
            <div class="row">
              <div class="col-4">
                <div class="box-testimonial">
                  <div class="photo">
                    <img src={Profile_1} />
                  </div>
                  <div class="item-testimonial">
                    <img src={IconRate} />
                    <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br />eiusmod
                      lorem
                      ipsum dolor sit amet, consectetur adipiscing elit, <br />sed do eiusmod lorem
                      ipsum
                      dolor sit amet, consectetur <br />adipiscing elit, sed do eiusmod”</p>
                    <p class="about-me">John Dee 32, Bromo</p>
                  </div>
                </div>
              </div>
              <div class="col-4">
                <div class="box-testimonial">
                  <div class="photo">
                    <img src={Profile_2} />
                  </div>
                  <div class="item-testimonial">
                    <img src={IconRate} />
                    <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br />eiusmod
                      lorem
                      ipsum dolor sit amet, consectetur adipiscing elit, <br />sed do eiusmod lorem
                      ipsum
                      dolor sit amet, consectetur <br />adipiscing elit, sed do eiusmod”</p>
                    <p class="about-me">John Dee 32, Bromo</p>
                  </div>
                </div>
              </div>
              <div class="col-4">
                <div class="box-testimonial">
                  <div class="photo">
                    <img src={Profile_1} />
                  </div>
                  <div class="item-testimonial">
                    <img src={IconRate} />
                    <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br />eiusmod
                      lorem
                      ipsum dolor sit amet, consectetur adipiscing elit, <br />sed do eiusmod lorem
                      ipsum
                      dolor sit amet, consectetur <br />adipiscing elit, sed do eiusmod”</p>
                    <p class="about-me">John Dee 32, Bromo</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="carousel-item" data-bs-interval="3000">
            <div class="row">
              <div class="col-4">
                <div class="box-testimonial">
                  <div class="photo">
                    <img src={Profile_1} />
                  </div>
                  <div class="item-testimonial">
                    <img src={IconRate} />
                    <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br />eiusmod
                      lorem
                      ipsum dolor sit amet, consectetur adipiscing elit, <br />sed do eiusmod lorem
                      ipsum
                      dolor sit amet, consectetur <br />adipiscing elit, sed do eiusmod”</p>
                    <p class="about-me">John Dee 32, Bromo</p>
                  </div>
                </div>
              </div>
              <div class="col-4">
                <div class="box-testimonial">
                  <div class="photo">
                    <img src={Profile_2} />
                  </div>
                  <div class="item-testimonial">
                    <img src={IconRate} />
                    <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br />eiusmod
                      lorem
                      ipsum dolor sit amet, consectetur adipiscing elit, <br />sed do eiusmod lorem
                      ipsum
                      dolor sit amet, consectetur <br />adipiscing elit, sed do eiusmod”</p>
                    <p class="about-me">John Dee 32, Bromo</p>
                  </div>
                </div>
              </div>
              <div class="col-4">
                <div class="box-testimonial">
                  <div class="photo">
                    <img src={Profile_1} />
                  </div>
                  <div class="item-testimonial">
                    <img src={IconRate} />
                    <p>“Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do <br />eiusmod
                      lorem
                      ipsum dolor sit amet, consectetur adipiscing elit, <br />sed do eiusmod lorem
                      ipsum
                      dolor sit amet, consectetur <br />adipiscing elit, sed do eiusmod”</p>
                    <p class="about-me">John Dee 32, Bromo</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="my-btn-carousel">
        {/* <button class="carousel-control cstm-btn" type="button" data-bs-target="#carouselExampleControls"
          data-bs-slide="prev">
          <span class="carousel-control-prev-icon btn-crsl" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control cstm-btn" type="button" data-bs-target="#carouselExampleControls"
          data-bs-slide="next">
          <span class="carousel-control-next-icon btn-crsl" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button> */}
      </div>

      {/* Content - 4 */}
      <div class="container-fluid">
        <div class="bg-desc-sewa">
          <div class="desc-sewa">
            <h2>Sewa Mobil di (Lokasimu) Sekarang</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
              <br />tempor incididunt ut
              labore et dolore magna aliqua.</p>
            <a><Link to={'/cars'}><button type="button" class="btn btn-limegreen">Mulai Sewa Mobil</button></Link></a>
          </div>
        </div>
      </div>

      {/* Content - 5 */}
      <div class="container-fluid faq" id="faq">
        <div class="row faq-container">
          <div class="col-5 faq-title">
            <h5>Frequently Asked Question</h5>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
          </div>
          <div class="col-7 faq-list">
            <div class="accordion" id="accordionExample">
              <div class="accordion-item my-accordion">
                <h2 class="accordion-header" id="headingOne">
                  <button class="accordion-button collapsed cstm-btn-accordion" type="button"
                    data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true"
                    aria-controls="collapseOne">
                    Apa saja syarat yang dibutuhkan?
                  </button>
                </h2>
                <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne"
                  data-bs-parent="#accordionExample">
                  <div class="accordion-body cstm-body-accordion">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum rem amet sequi ipsa
                    ex, dolorum mollitia exercitationem perspiciatis, cumque quam beatae fugiat rerum
                    quae hic distinctio? Maiores voluptas minus deleniti.
                  </div>
                </div>
              </div>
              <div class="accordion-item my-accordion">
                <h2 class="accordion-header" id="headingTwo">
                  <button class="accordion-button collapsed cstm-btn-accordion" type="button"
                    data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false"
                    aria-controls="collapseTwo">
                    Berapa hari minimal sewa mobil lepas kunci?
                  </button>
                </h2>
                <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo"
                  data-bs-parent="#accordionExample">
                  <div class="accordion-body cstm-body-accordion">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum rem amet sequi ipsa
                    ex, dolorum mollitia exercitationem perspiciatis, cumque quam beatae fugiat rerum
                    quae hic distinctio? Maiores voluptas minus deleniti.
                  </div>
                </div>
              </div>
              <div class="accordion-item my-accordion">
                <h2 class="accordion-header" id="headingThree">
                  <button class="accordion-button collapsed cstm-btn-accordion" type="button"
                    data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false"
                    aria-controls="collapseThree">
                    Berapa hari sebelumnya sebaiknya booking sewa mobil?
                  </button>
                </h2>
                <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree"
                  data-bs-parent="#accordionExample">
                  <div class="accordion-body cstm-body-accordion">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum rem amet sequi ipsa
                    ex, dolorum mollitia exercitationem perspiciatis, cumque quam beatae fugiat rerum
                    quae hic distinctio? Maiores voluptas minus deleniti.
                  </div>
                </div>
              </div>
              <div class="accordion-item my-accordion">
                <h2 class="accordion-header" id="headingFour">
                  <button class="accordion-button collapsed cstm-btn-accordion" type="button"
                    data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false"
                    aria-controls="collapseFour">
                    Apakah ada biaya antar-jemput?
                  </button>
                </h2>
                <div id="collapseFour" class="accordion-collapse collapse" aria-labelledby="headingFour"
                  data-bs-parent="#accordionExample">
                  <div class="accordion-body cstm-body-accordion">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum rem amet sequi ipsa
                    ex, dolorum mollitia exercitationem perspiciatis, cumque quam beatae fugiat rerum
                    quae hic distinctio? Maiores voluptas minus deleniti.
                  </div>
                </div>
              </div>
              <div class="accordion-item my-accordion">
                <h2 class="accordion-header" id="headingFive">
                  <button class="accordion-button collapsed cstm-btn-accordion" type="button"
                    data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false"
                    aria-controls="collapseFive">
                    Bagaimana jika terjadi kecelakaan?
                  </button>
                </h2>
                <div id="collapseFive" class="accordion-collapse collapse" aria-labelledby="headingFive"
                  data-bs-parent="#accordionExample">
                  <div class="accordion-body cstm-body-accordion">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum rem amet sequi ipsa
                    ex, dolorum mollitia exercitationem perspiciatis, cumque quam beatae fugiat rerum
                    quae hic distinctio? Maiores voluptas minus deleniti.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Content;
