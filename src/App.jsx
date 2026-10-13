import { NavLink, Route, Routes, Link, useLocation, Outlet } from 'react-router-dom';

const topbarLinks = [
  { icon: 'fa-map-marker-alt', label: 'Find A Location', href: '#', variant: 'me-4' },
  { icon: 'fa-phone-alt', label: '+01234567890', href: 'tel:+01234567890', variant: 'me-4' },
  { icon: 'fa-envelope', label: 'Example@gmail.com', href: 'mailto:example@gmail.com', variant: '' },
];

const socialLinks = [
  { icon: 'fa-facebook-f', href: '#' },
  { icon: 'fa-twitter', href: '#' },
  { icon: 'fa-instagram', href: '#' },
  { icon: 'fa-linkedin-in', href: '#' },
];

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/service', label: 'Service' },
  { to: '/blog', label: 'Blog' },
  { to: '/feature', label: 'Our Feature', isDropdown: true },
  { to: '/cars', label: 'Our Cars', isDropdown: true },
  { to: '/team', label: 'Our Team', isDropdown: true },
  { to: '/testimonial', label: 'Testimonial', isDropdown: true },
  { to: '/contact', label: 'Contact' },
];

const featureCards = [
  { icon: 'fa-trophy', title: 'First Class services', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, in illum aperiam ullam magni eligendi?' },
  { icon: 'fa-road', title: '24/7 road assistance', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, in illum aperiam ullam magni eligendi?' },
  { icon: 'fa-map-marker-alt', title: 'Smart route planning', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, in illum aperiam ullam magni eligendi?' },
  { icon: 'fa-shield-alt', title: 'Safe & secure booking', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur, in illum aperiam ullam magni eligendi?' },
];

const serviceCards = [
  { icon: 'fa-phone-alt', title: 'Phone Reservation', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit ipsam quasi quibusdam ipsa perferendis iusto?' },
  { icon: 'fa-money-bill-alt', title: 'Special Rates', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit ipsam quasi quibusdam ipsa perferendis iusto?' },
  { icon: 'fa-road', title: 'One Way Rental', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit ipsam quasi quibusdam ipsa perferendis iusto?' },
  { icon: 'fa-umbrella', title: 'Life Insurance', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit ipsam quasi quibusdam ipsa perferendis iusto?' },
  { icon: 'fa-building', title: 'City to City', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit ipsam quasi quibusdam ipsa perferendis iusto?' },
  { icon: 'fa-car-alt', title: 'Free Rides', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit ipsam quasi quibusdam ipsa perferendis iusto?' },
];

const vehicleCards = [
  { image: '/img/car-1.png', name: 'Hyundai Kona Electric', price: '$187:00/Day', rating: 5, seats: '4 Seat', transmission: 'AT/MT', fuel: 'Petrol', year: '2015', gear: 'AUTO', mileage: '27K' },
  { image: '/img/car-2.png', name: 'BMW 5 Series', price: '$240:00/Day', rating: 5, seats: '5 Seat', transmission: 'Auto', fuel: 'Diesel', year: '2022', gear: 'AUTO', mileage: '12K' },
  { image: '/img/car-3.png', name: 'Mercedes Benz', price: '$310:00/Day', rating: 5, seats: '5 Seat', transmission: 'Auto', fuel: 'Petrol', year: '2021', gear: 'AUTO', mileage: '18K' },
  { image: '/img/car-4.png', name: 'Audi A8', price: '$280:00/Day', rating: 5, seats: '5 Seat', transmission: 'Auto', fuel: 'Hybrid', year: '2023', gear: 'AUTO', mileage: '9K' },
];

const processSteps = [
  { number: '01.', title: 'Come In Contact', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, dolorem!' },
  { number: '02.', title: 'Choose A Car', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, dolorem!' },
  { number: '03.', title: 'Enjoy Driving', text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, dolorem!' },
];

const blogPosts = [
  { image: '/img/blog-1.jpg', date: '30 Dec 2025', author: 'Martin.C', comments: '6 Comments', title: 'Rental Cars how to check driving fines?', text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius libero soluta impedit eligendi? Quibusdam, laudantium.' },
  { image: '/img/blog-2.jpg', date: '25 Dec 2025', author: 'Martin.C', comments: '6 Comments', title: 'Rental cost of sport and other cars', text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius libero soluta impedit eligendi? Quibusdam, laudantium.' },
  { image: '/img/blog-3.jpg', date: '20 Dec 2025', author: 'Martin.C', comments: '6 Comments', title: 'The safety features you should check before rent', text: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eius libero soluta impedit eligendi? Quibusdam, laudantium.' },
];

const teamMembers = [
  { name: 'Adam Smith', role: 'General Manager', image: '/img/team-1.jpg' },
  { name: 'Rina Mistry', role: 'Senior Driver', image: '/img/team-2.jpg' },
  { name: 'John Doe', role: 'Fleet Specialist', image: '/img/team-3.jpg' },
  { name: 'Sarah Lee', role: 'Operations Lead', image: '/img/team-4.jpg' },
];

const testimonials = [
  { name: 'Client Name', quote: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos sed earum natus minima distinctio necessitatibus, provident cupiditate corrupti! Tempore blanditiis perspiciatis fugit repellat sequi.', image: '/img/testimonial-1.jpg' },
  { name: 'Client Name', quote: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos sed earum natus minima distinctio necessitatibus, provident cupiditate corrupti! Tempore blanditiis perspiciatis fugit repellat sequi.', image: '/img/testimonial-2.jpg' },
  { name: 'Client Name', quote: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos sed earum natus minima distinctio necessitatibus, provident cupiditate corrupti! Tempore blanditiis perspiciatis fugit repellat sequi.', image: '/img/testimonial-3.jpg' },
];

const contactCards = [
  { icon: 'fa-map-marker-alt', title: 'Address', text: '123 Street New York.USA' },
  { icon: 'fa-phone-alt', title: 'Phone', text: '+012 345 67890' },
  { icon: 'fa-envelope', title: 'Email', text: 'info@example.com' },
  { icon: 'fa-clock', title: 'Open Time', text: 'Mon - Sat, 9 AM - 7 PM' },
];

function Topbar() {
  return (
    <div className="container-fluid topbar bg-secondary d-none d-xl-block w-100">
      <div className="container">
        <div className="row gx-0 align-items-center" style={{ height: '45px' }}>
          <div className="col-lg-6 text-center text-lg-start mb-lg-0">
            <div className="d-flex flex-wrap">
              {topbarLinks.map(({ icon, label, href, variant }) => (
                <a key={label} href={href} className={`text-muted ${variant}`}>
                  <i className={`fas ${icon} text-primary me-2`}></i>
                  {label}
                </a>
              ))}
            </div>
          </div>
          <div className="col-lg-6 text-center text-lg-end">
            <div className="d-flex align-items-center justify-content-end">
              {socialLinks.map(({ icon, href }) => (
                <a key={icon} href={href} className="btn btn-light btn-sm-square rounded-circle me-3">
                  <i className={`fab ${icon}`}></i>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function PageHeader({ title, crumbText }) {
  return (
    <div className="container-fluid bg-breadcrumb">
      <div className="container text-center py-5" style={{ maxWidth: '900px' }}>
        <h4 className="text-white display-4 mb-4 wow fadeInDown" data-wow-delay="0.1s">{title}</h4>
        <ol className="breadcrumb d-flex justify-content-center mb-0 wow fadeInDown" data-wow-delay="0.3s">
          <li className="breadcrumb-item"><Link to="/">Home</Link></li>
          <li className="breadcrumb-item"><a href="#">Pages</a></li>
          <li className="breadcrumb-item active text-primary">{crumbText}</li>
        </ol>
      </div>
    </div>
  );
}

function SiteNav() {
  return (
    <div className="container-fluid nav-bar sticky-top px-0 px-lg-4 py-2 py-lg-0">
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light">
          <Link to="/" className="navbar-brand p-0">
            <img src="/img/logo.png" alt="Logo" />
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span className="fa fa-bars"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <div className="navbar-nav mx-auto py-0">
              {navItems.map(({ to, label, isDropdown }) =>
                isDropdown ? (
                  <div key={label} className="nav-item dropdown">
                    <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">{label}</a>
                    <div className="dropdown-menu m-0">
                      <Link to={to} className="dropdown-item">{label}</Link>
                    </div>
                  </div>
                ) : (
                  <NavLink key={to} to={to} className={({ isActive }) => `nav-item nav-link ${isActive ? 'active' : ''}`}>
                    {label}
                  </NavLink>
                ),
              )}
            </div>
            <button className="btn btn-primary rounded-pill py-2 px-4">Get Started</button>
          </div>
        </nav>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className="container-fluid footer py-5">
      <div className="container py-5">
        <div className="row g-5">
          <div className="col-md-6 col-lg-6 col-xl-3">
            <div className="footer-item d-flex flex-column justify-content-between h-100">
              <a href="/" className="footer-logo">
                <img src="/img/logo.png" alt="Logo" className="img-fluid mb-4" />
              </a>
              <p className="mb-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum obcaecati dignissimos quae quo ad iste.</p>
              <div className="footer-btn d-flex align-items-center gap-2">
                <a href="#" className="btn btn-primary btn-sm-square rounded-circle me-3"><i className="fab fa-facebook-f"></i></a>
                <a href="#" className="btn btn-primary btn-sm-square rounded-circle me-3"><i className="fab fa-twitter"></i></a>
                <a href="#" className="btn btn-primary btn-sm-square rounded-circle me-3"><i className="fab fa-instagram"></i></a>
                <a href="#" className="btn btn-primary btn-sm-square rounded-circle me-0"><i className="fab fa-linkedin-in"></i></a>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-lg-6 col-xl-3">
            <div className="footer-item">
              <h4 className="mb-4 text-white">Company</h4>
              <a href="/about" className="btn-link text-white-50 d-block mb-2">About Us</a>
              <a href="/service" className="btn-link text-white-50 d-block mb-2">Services</a>
              <a href="/cars" className="btn-link text-white-50 d-block mb-2">Our Cars</a>
              <a href="/blog" className="btn-link text-white-50 d-block mb-2">Blog & News</a>
            </div>
          </div>
          <div className="col-md-6 col-lg-6 col-xl-3">
            <div className="footer-item">
              <h4 className="mb-4 text-white">Support</h4>
              <a href="/feature" className="btn-link text-white-50 d-block mb-2">Features</a>
              <a href="/team" className="btn-link text-white-50 d-block mb-2">Our Team</a>
              <a href="/testimonial" className="btn-link text-white-50 d-block mb-2">Testimonial</a>
              <a href="/contact" className="btn-link text-white-50 d-block mb-2">Contact</a>
            </div>
          </div>
          <div className="col-md-6 col-lg-6 col-xl-3">
            <div className="footer-item">
              <h4 className="mb-4 text-white">Contact Info</h4>
              <p className="text-white-50 mb-2"><i className="fas fa-map-marker-alt text-primary me-2"></i>123 Street New York.USA</p>
              <p className="text-white-50 mb-2"><i className="fas fa-phone-alt text-primary me-2"></i>+012 345 67890</p>
              <p className="text-white-50 mb-0"><i className="fas fa-envelope text-primary me-2"></i>example@gmail.com</p>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid copyright bg-secondary py-3">
        <div className="container">
          <div className="row">
            <div className="col-md-6 text-center text-md-start mb-2 mb-md-0">
              <span className="text-white-50">© <a href="/" className="text-white">UATA</a>, All Right Reserved.</span>
            </div>
            <div className="col-md-6 text-center text-md-end">
              <span className="text-white-50">Designed By <a href="https://htmlcodex.com" className="text-white">HTML Codex</a></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function AppShell() {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <>
      <Topbar />
      <SiteNav />
      {!isHome && <div className="page-space" />}
      <Outlet />
      <Footer />
    </>
  );
}

function HomePage() {
  return (
    <>
      <div id="homeCarousel" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          {['0', '1', '2'].map((index) => (
            <button key={index} type="button" data-bs-target="#homeCarousel" data-bs-slide-to={index} className={index === '0' ? 'active' : ''} aria-current={index === '0' ? 'true' : undefined} aria-label={`Slide ${Number(index) + 1}`} />
          ))}
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="/img/banner-1.jpg" className="d-block w-100" alt="Car" />
            <div className="carousel-caption d-flex justify-content-center">
              <div className="text-center" style={{ maxWidth: '900px' }}>
                <span className="text-primary text-uppercase fw-bold d-block mb-3">Drive More, Earn More</span>
                <h1 className="display-2 fw-bold text-white mb-4">Quality <span className="text-primary">Car Rental</span> For Every Journey</h1>
                <p className="text-white-50 mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga eligendi sed fugiat inventore qui recusandae necessitatibus.</p>
                <div className="d-flex justify-content-center gap-3 flex-wrap">
                  <Link to="/cars" className="btn btn-primary rounded-pill py-3 px-5">Explore Cars</Link>
                  <Link to="/contact" className="btn btn-secondary rounded-pill py-3 px-5">Book Now</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid feature py-5">
        <div className="container py-5">
          <div className="text-center mx-auto pb-5 wow fadeInUp" style={{ maxWidth: '800px' }}>
            <h1 className="display-5 text-capitalize mb-3">Central <span className="text-primary">Features</span></h1>
            <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut amet nemo expedita asperiores commodi accusantium at cum harum, excepturi, quia tempora cupiditate! Adipisci facilis modi quisquam quia distinctio.</p>
          </div>
          <div className="row g-4 align-items-center">
            {featureCards.map(({ icon, title, text }, index) => (
              <div key={title} className="col-xl-6 wow fadeInUp" data-wow-delay={`${index * 0.2}s`}>
                <div className="feature-item">
                  <div className="feature-icon"><span className={`fa ${icon} fa-2x`}></span></div>
                  <div className="ms-4">
                    <h5 className="mb-3">{title}</h5>
                    <p className="mb-0">{text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="container-fluid about py-5">
        <div className="container py-5">
          <div className="row g-5 align-items-center">
            <div className="col-xl-6 wow fadeInLeft">
              <div className="about-item">
                <div className="pb-5">
                  <h1 className="display-5 text-capitalize">Cental <span className="text-primary">About</span></h1>
                  <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut amet nemo expedita asperiores commodi accusantium at cum harum, excepturi, quia tempora cupiditate! Adipisci facilis modi quisquam quia distinctio.</p>
                </div>
                <div className="row g-4">
                  <div className="col-lg-6">
                    <div className="about-item-inner border p-4">
                      <div className="about-icon mb-4"><img src="/img/about-icon-1.png" className="img-fluid" alt="Icon" /></div>
                      <h5 className="mb-3">Our Vision</h5>
                      <p className="mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="about-item-inner border p-4">
                      <div className="about-icon mb-4"><img src="/img/about-icon-2.png" className="img-fluid" alt="Icon" /></div>
                      <h5 className="mb-3">Our Mission</h5>
                      <p className="mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6 wow fadeInRight">
              <div className="about-img position-relative">
                <img src="/img/about-img.jpg" className="img-fluid w-100 rounded" alt="About" />
                <img src="/img/about-img-1.jpg" className="img-fluid position-absolute img-2 rounded" alt="About" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid fact py-5">
        <div className="container py-5">
          <div className="row g-4">
            {[
              { icon: 'fa-smile', count: '829', label: 'Happy Clients' },
              { icon: 'fa-car-alt', count: '56', label: 'Number of Cars' },
              { icon: 'fa-building', count: '127', label: 'Car Center' },
              { icon: 'fa-clock', count: '589', label: 'Total kilometers' },
            ].map(({ icon, count, label }, index) => (
              <div key={label} className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp" data-wow-delay={`${index * 0.2}s`}>
                <div className="counter-item text-center">
                  <div className="counter-item-icon mx-auto"><i className={`fas ${icon} fa-2x`}></i></div>
                  <div className="counter-counting my-3">
                    <span className="text-white fs-2 fw-bold">{count}</span>
                    <span className="h1 fw-bold text-white">+</span>
                  </div>
                  <h4 className="text-white mb-0">{label}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="container-fluid service py-5">
        <div className="container py-5">
          <div className="text-center mx-auto pb-5 wow fadeInUp" style={{ maxWidth: '800px' }}>
            <h1 className="display-5 text-capitalize mb-3">Central <span className="text-primary">Services</span></h1>
            <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut amet nemo expedita asperiores commodi accusantium at cum harum, excepturi, quia tempora cupiditate! Adipisci facilis modi quisquam quia distinctio.</p>
          </div>
          <div className="row g-4">
            {serviceCards.map(({ icon, title, text }, index) => (
              <div key={title} className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay={`${index * 0.2}s`}>
                <div className="service-item p-4">
                  <div className="service-icon mb-4"><i className={`fa ${icon} fa-2x`}></i></div>
                  <h5 className="mb-3">{title}</h5>
                  <p className="mb-0">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="container-fluid categories pb-5">
        <div className="container pb-5">
          <div className="text-center mx-auto pb-5 wow fadeInUp" style={{ maxWidth: '800px' }}>
            <h1 className="display-5 text-capitalize mb-3">Vehicle <span className="text-primary">Categories</span></h1>
            <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut amet nemo expedita asperiores commodi accusantium at cum harum, excepturi, quia tempora cupiditate! Adipisci facilis modi quisquam quia distinctio.</p>
          </div>
          <div className="row g-4">
            {vehicleCards.map(({ image, name, price, rating, seats, transmission, fuel, year, gear, mileage }, index) => (
              <div key={name} className="col-lg-6 col-xl-3 wow fadeInUp" data-wow-delay={`${index * 0.15}s`}>
                <div className="categories-item p-4 h-100">
                  <div className="categories-item-inner h-100">
                    <div className="categories-img rounded-top">
                      <img src={image} className="img-fluid w-100 rounded-top" alt={name} />
                    </div>
                    <div className="categories-content rounded-bottom p-4">
                      <h4>{name}</h4>
                      <div className="categories-review mb-4">
                        <div className="me-3">{rating}.8 Review</div>
                        <div className="d-flex justify-content-center text-secondary">
                          {Array.from({ length: rating }).map((_, idx) => <i key={`${name}-${idx}`} className="fas fa-star"></i>)}
                        </div>
                      </div>
                      <div className="mb-4"><h4 className="bg-white text-primary rounded-pill py-2 px-4 mb-0">{price}</h4></div>
                      <div className="row gy-2 gx-0 text-center mb-4">
                        <div className="col-4 border-end border-white"><i className="fa fa-users text-dark"></i> <span className="text-body ms-1">{seats}</span></div>
                        <div className="col-4 border-end border-white"><i className="fa fa-car text-dark"></i> <span className="text-body ms-1">{transmission}</span></div>
                        <div className="col-4"><i className="fa fa-gas-pump text-dark"></i> <span className="text-body ms-1">{fuel}</span></div>
                        <div className="col-4 border-end border-white"><i className="fa fa-car text-dark"></i> <span className="text-body ms-1">{year}</span></div>
                        <div className="col-4 border-end border-white"><i className="fa fa-cogs text-dark"></i> <span className="text-body ms-1">{gear}</span></div>
                        <div className="col-4"><i className="fa fa-road text-dark"></i> <span className="text-body ms-1">{mileage}</span></div>
                      </div>
                      <Link to="/contact" className="btn btn-primary rounded-pill d-flex justify-content-center py-3">Book Now</Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="container-fluid steps py-5">
        <div className="container py-5">
          <div className="text-center mx-auto pb-5 wow fadeInUp" style={{ maxWidth: '800px' }}>
            <h1 className="display-5 text-capitalize text-white mb-3">Central<span className="text-primary"> Process</span></h1>
            <p className="mb-0 text-white">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut amet nemo expedita asperiores commodi accusantium at cum harum, excepturi, quia tempora cupiditate! Adipisci facilis modi quisquam quia distinctio.</p>
          </div>
          <div className="row g-4">
            {processSteps.map(({ number, title, text }, index) => (
              <div key={title} className="col-lg-4 wow fadeInUp" data-wow-delay={`${index * 0.2}s`}>
                <div className="steps-item p-4 mb-4">
                  <h4>{title}</h4>
                  <p className="mb-0">{text}</p>
                  <div className="setps-number">{number}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="container-fluid blog py-5">
        <div className="container py-5">
          <div className="text-center mx-auto pb-5 wow fadeInUp" style={{ maxWidth: '800px' }}>
            <h1 className="display-5 text-capitalize mb-3">Central<span className="text-primary"> Blog & News</span></h1>
            <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut amet nemo expedita asperiores commodi accusantium at cum harum, excepturi, quia tempora cupiditate! Adipisci facilis modi quisquam quia distinctio.</p>
          </div>
          <div className="row g-4">
            {blogPosts.map(({ image, date, author, comments, title, text }, index) => (
              <div key={title} className="col-lg-4 wow fadeInUp" data-wow-delay={`${index * 0.2}s`}>
                <div className="blog-item h-100">
                  <div className="blog-img"><img src={image} className="img-fluid rounded-top w-100" alt={title} /></div>
                  <div className="blog-content rounded-bottom p-4">
                    <div className="blog-date">{date}</div>
                    <div className="blog-comment my-3">
                      <div className="small"><span className="fa fa-user text-primary"></span><span className="ms-2">{author}</span></div>
                      <div className="small"><span className="fa fa-comment-alt text-primary"></span><span className="ms-2">{comments}</span></div>
                    </div>
                    <a href="#" className="h4 d-block mb-3">{title}</a>
                    <p className="mb-3">{text}</p>
                    <a href="#" className="">Read More <i className="fa fa-arrow-right"></i></a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

function AboutPage() {
  return (
    <>
      <PageHeader title="About Us" crumbText="About" />
      <div className="container-fluid overflow-hidden about py-5">
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-xl-6 wow fadeInLeft">
              <div className="about-item">
                <div className="pb-5">
                  <h1 className="display-5 text-capitalize">Cental <span className="text-primary">About</span></h1>
                  <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut amet nemo expedita asperiores commodi accusantium at cum harum, excepturi, quia tempora cupiditate! Adipisci facilis modi quisquam quia distinctio.</p>
                </div>
                <div className="row g-4">
                  <div className="col-lg-6">
                    <div className="about-item-inner border p-4">
                      <div className="about-icon mb-4"><img src="/img/about-icon-1.png" className="img-fluid" alt="Icon" /></div>
                      <h5 className="mb-3">Our Vision</h5>
                      <p className="mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="about-item-inner border p-4">
                      <div className="about-icon mb-4"><img src="/img/about-icon-2.png" className="img-fluid" alt="Icon" /></div>
                      <h5 className="mb-3">Our Mission</h5>
                      <p className="mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xl-6 wow fadeInRight">
              <div className="about-img position-relative">
                <img src="/img/about-img.jpg" className="img-fluid w-100 rounded" alt="About" />
                <img src="/img/about-img-1.jpg" className="img-fluid position-absolute img-2 rounded" alt="About" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function ServicePage() {
  return (
    <>
      <PageHeader title="Our Services" crumbText="Service" />
      <div className="container-fluid service py-5">
        <div className="container py-5">
          <div className="text-center mx-auto pb-5 wow fadeInUp" style={{ maxWidth: '800px' }}>
            <h1 className="display-5 text-capitalize mb-3">Central <span className="text-primary">Services</span></h1>
            <p className="mb-0">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ut amet nemo expedita asperiores commodi accusantium at cum harum, excepturi, quia tempora cupiditate! Adipisci facilis modi quisquam quia distinctio.</p>
          </div>
          <div className="row g-4">
            {serviceCards.map(({ icon, title, text }, index) => (
              <div key={title} className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay={`${index * 0.1}s`}>
                <div className="service-item p-4">
                  <div className="service-icon mb-4"><i className={`fa ${icon} fa-2x`}></i></div>
                  <h5 className="mb-3">{title}</h5>
                  <p className="mb-0">{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

function BlogPage() {
  return (
    <>
      <PageHeader title="Our Blog" crumbText="Blog" />
      <div className="container-fluid blog py-5">
        <div className="container py-5">
          <div className="row g-4">
            {blogPosts.map(({ image, date, author, comments, title, text }, index) => (
              <div key={title} className="col-lg-4 wow fadeInUp" data-wow-delay={`${index * 0.15}s`}>
                <div className="blog-item h-100">
                  <div className="blog-img"><img src={image} className="img-fluid rounded-top w-100" alt={title} /></div>
                  <div className="blog-content rounded-bottom p-4">
                    <div className="blog-date">{date}</div>
                    <div className="blog-comment my-3">
                      <div className="small"><span className="fa fa-user text-primary"></span><span className="ms-2">{author}</span></div>
                      <div className="small"><span className="fa fa-comment-alt text-primary"></span><span className="ms-2">{comments}</span></div>
                    </div>
                    <a href="#" className="h4 d-block mb-3">{title}</a>
                    <p className="mb-3">{text}</p>
                    <a href="#" className="">Read More <i className="fa fa-arrow-right"></i></a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

function FeaturePage() {
  return (
    <>
      <PageHeader title="Our Features" crumbText="Feature" />
      <div className="container-fluid feature py-5">
        <div className="container py-5">
          <div className="row g-4 align-items-center">
            {featureCards.map(({ icon, title, text }, index) => (
              <div key={title} className="col-xl-6 wow fadeInUp" data-wow-delay={`${index * 0.15}s`}>
                <div className="feature-item">
                  <div className="feature-icon"><span className={`fa ${icon} fa-2x`}></span></div>
                  <div className="ms-4">
                    <h5 className="mb-3">{title}</h5>
                    <p className="mb-0">{text}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

function CarsPage() {
  return (
    <>
      <PageHeader title="Our Cars" crumbText="Cars" />
      <div className="container-fluid categories py-5">
        <div className="container py-5">
          <div className="row g-4">
            {vehicleCards.map(({ image, name, price, rating, seats, transmission, fuel, year, gear, mileage }, index) => (
              <div key={name} className="col-lg-6 col-xl-4 wow fadeInUp" data-wow-delay={`${index * 0.15}s`}>
                <div className="categories-item p-4 h-100">
                  <div className="categories-item-inner h-100">
                    <div className="categories-img rounded-top"><img src={image} className="img-fluid w-100 rounded-top" alt={name} /></div>
                    <div className="categories-content rounded-bottom p-4">
                      <h4>{name}</h4>
                      <div className="categories-review mb-4">
                        <div className="me-3">{rating}.8 Review</div>
                        <div className="d-flex justify-content-center text-secondary">
                          {Array.from({ length: rating }).map((_, idx) => <i key={`${name}-${idx}`} className="fas fa-star"></i>)}
                        </div>
                      </div>
                      <div className="mb-4"><h4 className="bg-white text-primary rounded-pill py-2 px-4 mb-0">{price}</h4></div>
                      <div className="row gy-2 gx-0 text-center mb-4">
                        <div className="col-4 border-end border-white"><i className="fa fa-users text-dark"></i> <span className="text-body ms-1">{seats}</span></div>
                        <div className="col-4 border-end border-white"><i className="fa fa-car text-dark"></i> <span className="text-body ms-1">{transmission}</span></div>
                        <div className="col-4"><i className="fa fa-gas-pump text-dark"></i> <span className="text-body ms-1">{fuel}</span></div>
                        <div className="col-4 border-end border-white"><i className="fa fa-car text-dark"></i> <span className="text-body ms-1">{year}</span></div>
                        <div className="col-4 border-end border-white"><i className="fa fa-cogs text-dark"></i> <span className="text-body ms-1">{gear}</span></div>
                        <div className="col-4"><i className="fa fa-road text-dark"></i> <span className="text-body ms-1">{mileage}</span></div>
                      </div>
                      <Link to="/contact" className="btn btn-primary rounded-pill d-flex justify-content-center py-3">Book Now</Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

function TeamPage() {
  return (
    <>
      <PageHeader title="Our Team" crumbText="Team" />
      <div className="container-fluid team py-5">
        <div className="container py-5">
          <div className="row g-4">
            {teamMembers.map(({ name, role, image }, index) => (
              <div key={name} className="col-md-6 col-lg-4 wow fadeInUp" data-wow-delay={`${index * 0.15}s`}>
                <div className="team-item h-100">
                  <div className="team-img"><img src={image} className="img-fluid w-100" alt={name} /></div>
                  <div className="team-content text-center p-4">
                    <h4>{name}</h4>
                    <p>{role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

function TestimonialPage() {
  return (
    <>
      <PageHeader title="Testimonial" crumbText="Testimonial" />
      <div className="container-fluid testimonial py-5">
        <div className="container py-5">
          <div className="row g-4">
            {testimonials.map(({ name, quote, image }, index) => (
              <div key={name} className="col-lg-4 wow fadeInUp" data-wow-delay={`${index * 0.15}s`}>
                <div className="testimonial-item p-4 h-100">
                  <div className="testimonial-quote"><i className="fas fa-quote-right fa-2x"></i></div>
                  <div className="testimonial-inner text-center">
                    <img src={image} className="img-fluid rounded-circle" alt={name} />
                    <p className="mb-3">{quote}</p>
                    <h5 className="mb-1">{name}</h5>
                    <small className="text-primary">Customer</small>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

function ContactPage() {
  return (
    <>
      <PageHeader title="Contact Us" crumbText="Contact" />
      <div className="container-fluid contact py-5">
        <div className="container py-5">
          <div className="text-center mx-auto pb-5 wow fadeInUp" style={{ maxWidth: '800px' }}>
            <h1 className="display-5 text-capitalize text-primary mb-3">Contact Us</h1>
            <p className="mb-0">The contact form is currently inactive. Get a functional and working contact form with Ajax &amp; PHP in a few minutes.</p>
          </div>
          <div className="row g-5">
            <div className="col-12 wow fadeInUp">
              <div className="row g-5">
                {contactCards.map(({ icon, title, text }, index) => (
                  <div key={title} className="col-md-6 col-lg-6 col-xl-3 wow fadeInUp" data-wow-delay={`${index * 0.15}s`}>
                    <div className="contact-add-item p-4">
                      <div className="contact-icon mb-4"><i className={`fas ${icon} fa-2x`}></i></div>
                      <div>
                        <h4>{title}</h4>
                        <p className="mb-0">{text}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="col-lg-6 wow fadeInLeft">
              <div className="contact-form p-4 border rounded">
                <form>
                  <div className="row g-3">
                    <div className="col-md-6"><input type="text" className="form-control py-3" placeholder="Your Name" /></div>
                    <div className="col-md-6"><input type="email" className="form-control py-3" placeholder="Your Email" /></div>
                    <div className="col-12"><input type="text" className="form-control py-3" placeholder="Subject" /></div>
                    <div className="col-12"><textarea className="form-control" rows="5" placeholder="Message"></textarea></div>
                    <div className="col-12"><button className="btn btn-primary w-100 py-3">Send Message</button></div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-lg-6 wow fadeInRight">
              <div className="contact-map h-100 rounded overflow-hidden border">
                <iframe
                  className="w-100 h-100"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.2417497414706!2d-74.005941!3d40.712776!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a9d66b73a4d%3A0x5b5d5b3d5b5d5b3d!2sNew%20York%2C%20NY!5e0!3m2!1sen!2sus!4v1715800000000!5m2!1sen!2sus"
                  style={{ border: 0, minHeight: '430px' }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Map"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function NotFoundPage() {
  return (
    <div className="container-fluid py-5 text-center">
      <div className="container py-5">
        <h1 className="display-1 text-primary">404</h1>
        <h2 className="mb-4">Page Not Found</h2>
        <p className="mb-4">The page you are looking for does not exist.</p>
        <Link to="/" className="btn btn-primary rounded-pill py-3 px-5">Go Home</Link>
      </div>
    </div>
  );
}

export default function App() {
  return (
    <Routes>
      <Route element={<AppShell />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/service" element={<ServicePage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/feature" element={<FeaturePage />} />
        <Route path="/cars" element={<CarsPage />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/testimonial" element={<TestimonialPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
