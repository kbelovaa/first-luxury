import React, { useEffect, useRef, useState } from 'react';
import sendData from '../../http/sendData';
import img1 from '../../images/image1.png';
import img2 from '../../images/image2.png';
import img3 from '../../images/image3.png';
import image1 from '../../images/gallery_img1.png';
import image2 from '../../images/gallery_img2.png';
import image3 from '../../images/gallery_img3.png';
import image4 from '../../images/gallery_img4.png';
import image5 from '../../images/gallery_img5.png';
import image6 from '../../images/gallery_img6.png';
import image7 from '../../images/gallery_img7.png';
import image8 from '../../images/gallery_img8.png';
import image9 from '../../images/gallery_img9.png';
import image10 from '../../images/gallery_img10.png';
import image11 from '../../images/gallery_img11.png';
import image12 from '../../images/gallery_img12.png';
import image13 from '../../images/gallery_img13.png';
import image14 from '../../images/gallery_img14.png';
import image15 from '../../images/gallery_img15.png';
import image16 from '../../images/gallery_img16.png';
import image17 from '../../images/gallery_img17.png';
import image18 from '../../images/gallery_img18.png';
import image19 from '../../images/gallery_img19.png';
import image20 from '../../images/gallery_img20.png';
import image21 from '../../images/gallery_img21.png';
import './Main.scss';

const Main = () => {
  const [showMore, setShowMore] = useState(false);
  const [name, setName] = useState('');
  const [isNameActive, setIsNameActive] = useState(false);
  const [email, setEmail] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [isEmailActive, setIsEmailActive] = useState(false);
  const [phone, setPhone] = useState('');
  const [isPhoneActive, setIsPhoneActive] = useState(false);
  const [text, setText] = useState('');
  const [isTextActive, setIsTextActive] = useState(false);
  const [isFormValid, setIsFormValid] = useState(true);
  const [loading, setLoading] = useState(false);
  const [isFormSended, setIsFormSended] = useState(false);
  const [choosedHorImage, setChoosedHorImage] = useState(image1);
  const [choosedVerImages, setChoosedVerImages] = useState([
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
  ]);
  const [imgIndex, setImgIndex] = useState();
  const refs = [useRef(null), useRef(null), useRef(null), useRef(null), useRef(null), useRef(null), useRef(null)];

  const horImages = [image1, image8, image9];
  const verImages = [
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image10,
    image11,
    image12,
    image13,
    image14,
    image15,
    image16,
    image17,
    image18,
    image19,
    image20,
    image21,
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      let randomImgIndex = Math.floor(Math.random() * 7);

      setImgIndex((prevImgIndex) => {
        while (prevImgIndex === randomImgIndex) {
          randomImgIndex = Math.floor(Math.random() * 7);
        }
        return randomImgIndex;
      });
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (imgIndex === 0) {
      setChoosedHorImage((prevHorImage) => {
        let randomHorImgIndex = Math.floor(Math.random() * horImages.length);
        while (horImages[randomHorImgIndex] === prevHorImage) {
          randomHorImgIndex = Math.floor(Math.random() * horImages.length);
        }
        return horImages[randomHorImgIndex];
      });
    } else {
      setChoosedVerImages((prevVerImages) => {
        let randomVerImgIndex = Math.floor(Math.random() * verImages.length);
        while (prevVerImages.includes(verImages[randomVerImgIndex])) {
          randomVerImgIndex = Math.floor(Math.random() * verImages.length);
        }
        const updatedVerImages = [...prevVerImages];
        updatedVerImages[imgIndex - 1] = verImages[randomVerImgIndex];
        return updatedVerImages;
      });
    }
  }, [imgIndex]);

  useEffect(() => {
    if (imgIndex || imgIndex === 0) {
      const element = refs[imgIndex].current;

      element.classList.add('hidden');

      setTimeout(() => {
        element.classList.remove('hidden');
      }, 100);
    }
  }, [imgIndex]);

  const handleEmailChange = (email) => {
    setEmail(email);

    const isEmailValid = email === '' || /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$/.test(email);
    setIsEmailValid(isEmailValid);
  };

  const checkIsFormValid = () => {
    if (name && email && isEmailValid && phone) {
      return true;
    }

    return false;
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();

    if (checkIsFormValid()) {
      const data = new FormData();
      data.append('Name', name);
      data.append('Email', email);
      data.append('Mobile', phone);
      data.append('Text', text);

      setLoading(true);

      const result = await sendData(data);

      if (result.status === 200) {
        setIsFormSended(true);
        setIsFormValid(true);
        setName('');
        setEmail('');
        setPhone('');
        setText('');
        setLoading(false);
      }
    } else {
      setIsFormValid(false);
    }
  };

  return (
    <div className="main">
      <section className="info-section">
        <div className="container">
          <div className="info">
            <div className="info__img">
              <img src={img1} alt="View" />
              <div className="pantone">
                <div className="pantone__square"></div>
                <div className="pantone__info">
                  <span className="pantone__name">Marlin blue</span>
                  <span className="pantone__tone">Pantone 285</span>
                </div>
              </div>
            </div>
            <div className="info__wrap">
              <h1 className="info__title">Marbella</h1>
              <div className={`info__text-wrap ${showMore ? 'expanded' : ''}`}>
                <p className="info__text">
                  Welcome to Marbella, where the perfect climate meets living at its finest.
                  <br />
                  In the heart of southern Spain, Marbella is renowned and celebrated
                  <br />
                  for its Mediterranean charm, vibrant culture, and unparalleled lifestyle. Beyond its stunning
                  coastline, it offers a wealth of activities, from world-class golf courses and glamorous marinas to
                  chic beach clubs
                  <br />
                  and Michelin-starred restaurants. Whether you seek relaxation under
                  <br />
                  the Andalusian sun or adventures, Marbella has it all and offers the perfect ingredients for fantastic
                  living.
                </p>
                <span className="show-more" onClick={() => setShowMore((state) => !state)}>
                  {showMore ? 'Show less' : 'Show more'}
                </span>
                <p className="info__text">
                  With its mild climate year-round, 315 days per year with sun, an average yearly temperature of 19°C,
                  Marbella is an idyllic escape no matter
                  <br />
                  the season, and with a large number of direct flights, it is easy to see
                  <br />
                  its popularity.
                </p>
                <p className="info__text">
                  Moreover, Marbella is experiencing unprecedented growth, making
                  <br />
                  it an attractive investment opportunity. With new developments, infrastructure improvements, and a
                  thriving economy, the region is poised for continued prosperity.
                </p>
                <p className="info__text">
                  We only offer a few selected properties exclusively listed with us
                  <br />
                  in the price range of €750,000 to €2,000,000 providing discerning buyers with opportunities for
                  upscale living.
                </p>
              </div>
              <div className="info__img_small">
                <img src={img2} alt="View" />
                <div className="pantone">
                  <div className="pantone__square"></div>
                  <div className="pantone__info">
                    <span className="pantone__name">Teapot blue</span>
                    <span className="pantone__tone">Pantone 284</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="data-section">
        <div className="container">
          <div className="data">
            <div className="data__line">
              <span className="data__label">Full name</span>
              <p className="data__info">First luxury realty marbella sl</p>
            </div>
            <div className="data__line">
              <span className="data__label">Phone nr</span>
              <p className="data__info">(+34) 695 963 500</p>
            </div>
            <div className="data__line">
              <span className="data__label">Email</span>
              <p className="data__info">info@first-luxury.es</p>
            </div>
            <div className="data__line">
              <span className="data__label">Address</span>
              <p className="data__info">
                Carretera de Cadiz, km 176, Centro de Negocios
                <br />
                Oasis, local 9, 29602, Marbella (Málaga)
                <br />
                NIF72522485
              </p>
            </div>
            <div className="data__line">
              <span className="data__label">Palette</span>
              <p className="data__info">Sky colors in Marbella's captivating expanse</p>
            </div>
          </div>
        </div>
      </section>
      <section className="gallery-section">
        <div className="container">
          <div className="gallery">
            <div className="gallery__img_big">
              <img ref={refs[0]} src={choosedHorImage} alt="Photo" />
            </div>
            <div className="gallery__img">
              <img ref={refs[1]} src={choosedVerImages[0]} alt="Photo" />
            </div>
            <div className="gallery__img"></div>
            <div className="gallery__img">
              <img ref={refs[2]} src={choosedVerImages[1]} alt="Photo" />
            </div>
            <div className="gallery__img">
              <img ref={refs[3]} src={choosedVerImages[2]} alt="Photo" />
            </div>
            <div className="gallery__img"></div>
            <div className="gallery__img">
              <img ref={refs[4]} src={choosedVerImages[3]} alt="Photo" />
            </div>
            <div className="gallery__img">
              <img ref={refs[5]} src={choosedVerImages[4]} alt="Photo" />
            </div>
            <div className="gallery__img">
              <img ref={refs[6]} src={choosedVerImages[5]} alt="Photo" />
            </div>
          </div>
        </div>
      </section>
      <section className="contact-us-section">
        <div className="container">
          <div className="contact-us">
            {isFormSended ? (
              <div className="contact-us__confirmation">
                <svg xmlns="http://www.w3.org/2000/svg" width="100" height="101" viewBox="0 0 100 101" fill="none">
                  <path d="M16.667 54.6665L37.5003 75.4998L83.3337 29.6665" stroke="white" strokeWidth="2" strokeLinecap="round"/>
                </svg>
                <h2 className="contact-us__title">Message sent</h2>
              </div>
            ) : (
              <div className="contact-us__form">
                <h2 className="contact-us__title">Contact us</h2>
                <form className={isFormValid ? '' : 'invalid'} onSubmit={handleFormSubmit}>
                  <div className={`input-wrap ${isNameActive || name ? 'active' : ''}`}>
                    <input
                      type="text"
                      className={`input ${!isFormValid && !name && 'invalid-field'}`}
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      onFocus={() => setIsNameActive(true)}
                      onBlur={() => setIsNameActive(false)}
                    />
                    <label className="label">Name</label>
                  </div>
                  <div className={`input-wrap ${isEmailActive || email ? 'active' : ''}`}>
                    <input
                      type="email"
                      className={`input ${!isFormValid && (!email || !isEmailValid) && 'invalid-field'}`}
                      value={email}
                      onChange={(e) => handleEmailChange(e.target.value)}
                      onFocus={() => setIsEmailActive(true)}
                      onBlur={() => setIsEmailActive(false)}
                    />
                    <label className="label">Email</label>
                    {!isEmailValid && <p className="message">Please enter a valid email address</p>}
                  </div>
                  <div className={`input-wrap ${isPhoneActive || phone ? 'active' : ''}`}>
                    <input
                      type="text"
                      className={`input ${!isFormValid && !phone && 'invalid-field'}`}
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      onFocus={() => setIsPhoneActive(true)}
                      onBlur={() => setIsPhoneActive(false)}
                    />
                    <label className="label">Mobile nr</label>
                  </div>
                  <div className={`input-wrap ${isTextActive || text ? 'active' : ''}`}>
                    <textarea
                      rows="1"
                      className="input"
                      value={text}
                      onChange={(e) => setText(e.target.value)}
                      onInput={(e) => {
                        e.target.style.height = 'auto';
                        e.target.style.height = `${e.target.scrollHeight + 2}px`;
                      }}
                      onFocus={() => setIsTextActive(true)}
                      onBlur={() => setIsTextActive(false)}
                    ></textarea>
                    <label className="label">Text</label>
                    {!isFormValid && (!name || !email || !phone) && <p className="message">Please fill in all fields</p>}
                  </div>
                  {loading ? (
                    <div className="spinner spinner_small"></div>
                  ) : (
                    <button className={`btn contact-us__btn ${checkIsFormValid() ? '' : 'inactive'}`} type="submit">
                      Submit
                    </button>
                  )}
                </form>
              </div>
            )}
            <div className="contact-us__img">
              <img src={img3} alt="View" />
              <div className="pantone">
                <div className="pantone__square"></div>
                <div className="pantone__info">
                  <span className="pantone__name">Columbia blue</span>
                  <span className="pantone__tone">Pantone 290</span>
                </div>
              </div>
            </div>
          </div>
          <div className="footer">
            <span className="footer__text">Copyright First, S.L.© 2024. All rights reserved</span>
            <div className="footer__text-wrap">
              <span className="footer__text">Terms of Use</span>
              <span className="footer__text">Cookies</span>
              <span className="footer__text">Privacy Policy</span>
              <span className="footer__text">Legal Notice</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Main;
