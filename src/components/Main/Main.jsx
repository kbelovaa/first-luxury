import React, { useEffect, useState } from 'react';
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
  const [horImages, setHorImages] = useState([image1, image8, image9]);
  const [verImages, setVerImages] = useState([
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
  ]);

  const shuffleArray = (array) => {
    const shuffledArray = [...array];
    for (let i = shuffledArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
  };

  const insertNulls = (array) => {
    const arr = [...array];
    const index1 = Math.floor(Math.random() * 8) + 1;
    let index2 = Math.floor(Math.random() * 8) + 1;

    while (Math.abs(index1 - index2) % 2 !== 0 && Math.abs(index1 - index2) === 1) {
      index2 = Math.floor(Math.random() * 8) + 1;
    }

    arr[index1] = null;
    arr[index2] = null;

    return arr.filter((element) => element !== undefined);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setHorImages((images) => shuffleArray(images));
      setVerImages((images) => shuffleArray(images));
    }, 7000);
    return () => clearInterval(interval);
  }, []);

  const handleEmailChange = (email) => {
    setEmail(email);

    const isEmailValid = email === '' || /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$/.test(email);
    setIsEmailValid(isEmailValid);
  };

  const checkIsFormValid = () => {
    if (name && email && isEmailValid) {
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
            <img className="gallery__img_big" src={horImages[0]} alt="Photo" />
            {insertNulls(verImages)
              .slice(0, 8)
              .map((image, index) => (
                <div key={index} className="gallery__img">
                  {image && <img key={index} src={image} alt="Photo" />}
                </div>
              ))}
          </div>
        </div>
      </section>
      <section className="contact-us-section">
        <div className="container">
          <div className="contact-us">
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
                    type="text"
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
                  <button className="btn contact-us__btn" type="submit">
                    Submit
                  </button>
                )}
              </form>
            </div>
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
