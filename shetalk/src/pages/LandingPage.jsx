import React, { useState } from 'react';
import { Modal, Button} from 'react-bootstrap';
import CreateUserGeneral from '../components/molecules/CreateUserGeneral';
import Logo from '../components/atoms/Logo';
import tagbrand from '../assets/img/tag-brand.svg';
import shetalk from '../assets/img/shetalk.svg';
import email from '../assets/img/email.svg';
import instagram from '../assets/img/instagram.svg';
import tiktok from '../assets/img/tiktok.svg';


function LandingPage() {
    const [showModal, setShowModal] = useState(false);

    const handleModalShow = () => setShowModal(true);
    const handleModalClose = () => setShowModal(false);

    return (
        <>
            {/*Navbar*/}
            <div className= "d-flex shadow-sm  px-md-5 py-md-4 px-4 py-2 bg-body-tertiary rounded">
                <Logo/>
            </div>

            {/*Part 1*/}
            <div className="container-fluid">
                <div className='row'>
                    <div className='col align-self-center'>
                        <figure className="text-center">
                            <blockquote className="blockquote" data-aos="zoom-in-up">
                            <h1 className="text1">Selamat datang di SheTalk</h1>
                            <p className="text2">Platform yang didedikasikan untuk menyediakan</p>
                            <p className="text2">ruang diskusi terpercaya bagi perempuan untuk curhat seputar</p>
                            <p className="text3">kesehatan reproduksi dan seksual</p>
                            </blockquote> 
                        </figure>
                    </div>
                </div>

                {/*Part 2 - Tag brand*/}
                <div className='row justify-content-center'>
                    <img className='img-fluid' src={tagbrand} style={{ width:'60rem' , height:'60rem'}} data-aos="fade-left" />
                </div>

                {/*Promo*/}
                <figure class="text-center">
                    <blockquote class="blockquote">
                    <h1 class="text4">Mengapa SheTalk?</h1>
                    </blockquote> 
                </figure>

                <div class="row align-items-start text-center " style={{margin: '1rem', padding:'1rem'}}>
                    <div class="col-sm border rounded" data-aos="fade-left">
                        <h5 class="text5">Anonim dan Aman</h5>
                        <p class="text6">Privasimu adalah prioritas kami. Berdiskusi tanpa perlu khawatir tentang identitas terungkap.</p>
                    </div>
                    <div class="col-sm border rounded" data-aos="fade-left">
                        <h5 class="text5">Diskusi Terbuka dan Beragam</h5>
                        <p class="text6">Temukan solusi, bagikan pengalaman, dan berdialog secara positif untuk membangun pengetahuan.</p>
                    </div>
                    <div class="col-sm border rounded" data-aos="fade-left">
                        <h5 class="text5">Sertifikat Penghargaan</h5>
                        <p class="text6">Jadilah volunteer kesehatan yang aktif berinteraksi dan membangun dampak positif.</p>
                    </div>
                </div>
            </div>

            <div class="row justify-content-center align-items-center">
                <div class="col-md">
                    <div class="card-img text-center" >
                        <img class="img-fluid" data-aos="zoom-in" style={{height:'200px', width:'200px', borderRadius:'50%', padding: '16px'}} src="https://production.listennotes.com/podcasts/riri-cerita-anak/legenda-roro-jonggrang-Dv-rF2UiX87-uAxS5F-J_0n.300x300.jpg"/>
                        <img class="img-fluid" data-aos="zoom-in" style={{height:'180px', width:'180px', borderRadius:'50%', padding: '16px'}} src="https://i.pinimg.com/736x/fa/a8/96/faa8960cfe14a5339c70aa663ccb52e5.jpg" />
                        <img class="img-fluid" data-aos="zoom-in" style={{height:'200px', width:'200px', borderRadius:'50%', padding: '16px'}} src="https://i.pinimg.com/originals/84/2b/fe/842bfe22986d9f51671407cb6912e053.jpg" />
                        <img class="img-fluid" data-aos="zoom-in" style={{height:'180px', width:'180px', borderRadius:'50%', padding: '16px'}} src="https://i0.wp.com/catatanbunda.id/wp-content/uploads/2021/06/Sangkuriang-1.jpg?resize=1000%2C562&ssl=1" />
                        <img class="img-fluid" data-aos="zoom-in" style={{height:'200px', width:'200px', borderRadius:'50%', padding: '16px'}} src="https://e7.pngegg.com/pngimages/606/242/png-clipart-keong-emas-fairy-tale-child-legend-folklore-ma-am-child-leaf.png" />
                        <img class="img-fluid" data-aos="zoom-in" style={{height:'180px', width:'180px', borderRadius:'50%', padding: '16px'}} src="https://production.listennotes.com/podcasts/riri-cerita-anak/legenda-roro-jonggrang-Dv-rF2UiX87-uAxS5F-J_0n.300x300.jpg" />
                        <img class="img-fluid" data-aos="zoom-in" style={{height:'200px', width:'200px', borderRadius:'50%', padding: '16px'}} src="https://i.pinimg.com/originals/84/2b/fe/842bfe22986d9f51671407cb6912e053.jpg"  />
                        <img class="img-fluid" data-aos="zoom-in" style={{height:'200px', width:'200px', borderRadius:'50%', padding: '16px'}} src="https://i.pinimg.com/736x/fa/a8/96/faa8960cfe14a5339c70aa663ccb52e5.jpg"  />
                        <img class="img-fluid" data-aos="zoom-in" style={{height:'180px', width:'180px', borderRadius:'50%', padding: '16px'}} src="https://e7.pngegg.com/pngimages/606/242/png-clipart-keong-emas-fairy-tale-child-legend-folklore-ma-am-child-leaf.png" />
                    </div>
                </div>
                <div class="col-md">
                <div class="card-text text-center">
                    <p class="fs-5" data-aos="fade-left">Jadilah bagian dari SheTalk dan mulai perjalanan kamu menuju pemahaman yang lebih baik tentang kesehatan reproduksi dan seksual.</p>
                    <p class="fs-5" data-aos="fade-left">Bergabunglah sekarang untuk diskusi, belajar, dan berbagi pengalaman. Mari kita jaga kesehatan reproduksi dan seksual kita bersama-sama!</p>
                </div>
                </div>
            </div>
            
            <div class="card" data-aos="zoom-in">
                <div class="row align-content-auto justify-content-center">
                    <div class="col-md text-center" style={{padding: '46px'}}>
                    <h3 class="card-text fs-2" >Curhat Aman Sehat</h3>
                    </div>
                    <div class="col-md text-center" style={{padding: '46px'}}>
                        <Button variant="danger" className='fs-6' size='lg' onClick={handleModalShow}>
                            Gabung
                        </Button> 
                    </div>
                </div>
            </div>

            <div className='card-footer' style={{margin:'12px'}}>
                <div class="row">
                    <div class="col">
                        <div class="card-body">
                        <img class="img-fluid" src={shetalk}/>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card-body">
                        <img class="img-fluid" src={email}/>
                        <small class="card-text text-muted">shetalkinfo@gmail.com</small>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card-body">
                        <img class="img-fluid" src={instagram}/>
                        <small class="card-text text-muted">@shetalk</small>
                        </div>
                    </div>
                    <div class="col">
                        <div class="card-body">
                        <img class="img-fluid" src={tiktok}/>
                        <small class="card-text text-muted">SheTalk</small>
                        </div>
                    </div>
                </div>
            </div>

            <Modal show={showModal} onHide={handleModalClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Avatar</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <CreateUserGeneral closeModal={handleModalClose} />
                </Modal.Body>
            </Modal>

            
        </>
    );
}

export default LandingPage;
