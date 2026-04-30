import React from 'react'

export default function Gallery() {
  return (
    <>
    <p className="section-title" style={{textAlign:'center',margin:'auto'}}>Gallery</p> 
    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
      <div className="home-image-container" style={{ backgroundColor: 'grey',width:'100%',height:'70vh' }}>
        <div id="carouselExampleCaptions" class="carousel slide" style={{ height: '100%' }}>
          <div class="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" aria-label="Slide 5"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="5" aria-label="Slide 6"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="6" aria-label="Slide 7"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="7" aria-label="Slide 8"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="8" aria-label="Slide 9"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="9" aria-label="Slide 10"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="10" aria-label="Slide 11"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="11" aria-label="Slide 12"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="12" aria-label="Slide 13"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="13" aria-label="Slide 14"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="14" aria-label="Slide 15"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="15" aria-label="Slide 16"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="16" aria-label="Slide 17"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="17" aria-label="Slide 18"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="18" aria-label="Slide 19"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="19" aria-label="Slide 20"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="20" aria-label="Slide 21"></button>
            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="21" aria-label="Slide 22"></button>

          </div>
          <div class="carousel-inner" style={{ height: '100%' }}>
            <div class="carousel-item active" style={{ height: '100%' }}>
              <img style={{ borderRadius: '20px', margin: 'auto' }} height='100%' src={require('../assets/gallery-images/img-1.jpg')} class="d-block" alt="..." />
              <div class="carousel-caption d-none d-md-block">
              </div>
            </div>
            <div class="carousel-item" style={{ height: '100%' }}>
              <img style={{ borderRadius: '20px', margin: 'auto' }} height='100%' src={require('../assets/gallery-images/img-2.jpg')} class="d-block" alt="..." />
              <div class="carousel-caption d-none d-md-block">
              </div>
            </div>
            <div class="carousel-item" style={{ height: '100%' }}>
              <img style={{ borderRadius: '20px', margin: 'auto' }} height='100%' src={require('../assets/gallery-images/img-3.jpg')} class="d-block" alt="..." />
              <div class="carousel-caption d-none d-md-block">
              </div>
            </div>
            <div class="carousel-item" style={{ height: '100%' }}>
              <img style={{ borderRadius: '20px', margin: 'auto' }} height='100%' src={require('../assets/gallery-images/img-2.jpg')} class="d-block" alt="..." />
              <div class="carousel-caption d-none d-md-block">
              </div>
            </div>
            <div class="carousel-item" style={{ height: '100%' }}>
              <img style={{ borderRadius: '20px', margin: 'auto' }} height='100%' src={require('../assets/gallery-images/img-5.jpg')} class="d-block" alt="..." />
              <div class="carousel-caption d-none d-md-block">
              </div>
            </div>
            <div class="carousel-item" style={{ height: '100%' }}>
              <img style={{ borderRadius: '20px', margin: 'auto' }} height='100%' src={require('../assets/gallery-images/img-6.jpg')} class="d-block" alt="..." />
              <div class="carousel-caption d-none d-md-block">
              </div>
            </div>
            <div class="carousel-item" style={{ height: '100%' }}>
              <img style={{ borderRadius: '20px', margin: 'auto' }} height='100%' src={require('../assets/gallery-images/img-7.jpg')} class="d-block" alt="..." />
              <div class="carousel-caption d-none d-md-block">
              </div>
            </div>
            <div class="carousel-item" style={{ height: '100%' }}>
              <img style={{ borderRadius: '20px', margin: 'auto' }} height='100%' src={require('../assets/gallery-images/img-8.jpg')} class="d-block" alt="..." />
              <div class="carousel-caption d-none d-md-block">
              </div>
            </div>
            <div class="carousel-item" style={{ height: '100%' }}>
              <img style={{ borderRadius: '20px', margin: 'auto' }} height='100%' src={require('../assets/gallery-images/img-9.jpg')} class="d-block" alt="..." />
              <div class="carousel-caption d-none d-md-block">
              </div>
            </div>
            <div class="carousel-item" style={{ height: '100%' }}>
              <img style={{ borderRadius: '20px', margin: 'auto' }} height='100%' src={require('../assets/gallery-images/img-10.jpg')} class="d-block" alt="..." />
              <div class="carousel-caption d-none d-md-block">
              </div>
            </div>
            <div class="carousel-item" style={{ height: '100%' }}>
              <img style={{ borderRadius: '20px', margin: 'auto' }} height='100%' src={require('../assets/gallery-images/img-11.jpg')} class="d-block" alt="..." />
              <div class="carousel-caption d-none d-md-block">
              </div>
            </div>
            <div class="carousel-item" style={{ height: '100%' }}>
              <img style={{ borderRadius: '20px', margin: 'auto' }} height='100%' src={require('../assets/gallery-images/img-12.jpg')} class="d-block" alt="..." />
              <div class="carousel-caption d-none d-md-block">
              </div>
            </div>
            <div class="carousel-item" style={{ height: '100%' }}>
              <img style={{ borderRadius: '20px', margin: 'auto' }} height='100%' src={require('../assets/gallery-images/img-13.jpg')} class="d-block" alt="..." />
              <div class="carousel-caption d-none d-md-block">
              </div>
            </div>
            <div class="carousel-item" style={{ height: '100%' }}>
              <img style={{ borderRadius: '20px', margin: 'auto' }} height='100%' src={require('../assets/gallery-images/img-14.png')} class="d-block" alt="..." />
              <div class="carousel-caption d-none d-md-block">
              </div>
            </div>
            <div class="carousel-item" style={{ height: '100%' }}>
              <img style={{ borderRadius: '20px', margin: 'auto' }} height='100%' src={require('../assets/gallery-images/img-15.png')} class="d-block" alt="..." />
              <div class="carousel-caption d-none d-md-block">
              </div>
            </div>
            <div class="carousel-item" style={{ height: '100%' }}>
              <img style={{ borderRadius: '20px', margin: 'auto' }} height='100%' src={require('../assets/gallery-images/img-16.png')} class="d-block" alt="..." />
              <div class="carousel-caption d-none d-md-block">
              </div>
            </div>
            <div class="carousel-item" style={{ height: '100%' }}>
              <img style={{ borderRadius: '20px', margin: 'auto' }} height='100%' src={require('../assets/gallery-images/img-17.png')} class="d-block" alt="..." />
              <div class="carousel-caption d-none d-md-block">
              </div>
            </div>
            <div class="carousel-item" style={{ height: '100%' }}>
              <img style={{ borderRadius: '20px', margin: 'auto' }} height='100%' src={require('../assets/gallery-images/img-18.png')} class="d-block" alt="..." />
              <div class="carousel-caption d-none d-md-block">
              </div>
            </div>
            <div class="carousel-item" style={{ height: '100%' }}>
              <img style={{ borderRadius: '20px', margin: 'auto' }} height='100%' src={require('../assets/gallery-images/img-19.png')} class="d-block" alt="..." />
              <div class="carousel-caption d-none d-md-block">
              </div>
            </div>
            <div class="carousel-item" style={{ height: '100%' }}>
              <img style={{ borderRadius: '20px', margin: 'auto' }} height='100%' src={require('../assets/gallery-images/img-20.png')} class="d-block" alt="..." />
              <div class="carousel-caption d-none d-md-block">
              </div>
            </div>
            <div class="carousel-item" style={{ height: '100%' }}>
              <img style={{ borderRadius: '20px', margin: 'auto' }} height='100%' src={require('../assets/gallery-images/img-21.png')} class="d-block" alt="..." />
              <div class="carousel-caption d-none d-md-block">
              </div>
            </div>
            <div class="carousel-item" style={{ height: '100%' }}>
              <img style={{ borderRadius: '20px', margin: 'auto' }} height='100%' src={require('../assets/gallery-images/img-22.png')} class="d-block" alt="..." />
              <div class="carousel-caption d-none d-md-block">
              </div>
            </div>
          </div>
          <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div>

      </div>
      
    </div>
    </>
  )
}
