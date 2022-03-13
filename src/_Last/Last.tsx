import React from 'react';

let currentSlide = 0;
const hiddenClass = 'is-hidden';

const setCarouselWidth = (): void => {
  const carouselSlide = document.querySelector<HTMLElement>(
    '.pokeIntroduce__carouselList',
  );
  const carouselSlides = document.querySelectorAll(
    '.pokeIntroduce__carouselList',
  );
  const carouselSlideArea = document.querySelector<HTMLElement>(
    '.pokeIntroduce__carouselArea',
  );
  if (
    carouselSlide === null
    || carouselSlides.length === 0
    || carouselSlideArea === null
  ) return;
  const slideLength = carouselSlides.length;
  const slideWidth = carouselSlide.offsetWidth;
  const slideAreaWidth = slideWidth * slideLength;
  carouselSlideArea.style.width = `${slideAreaWidth}px`;
};

const changeSlide = (index: number) => {
  const carouselSlideArea = document.querySelector<HTMLElement>(
    '.pokeIntroduce__carouselArea',
  );
  const carouselSlide = document.querySelector<HTMLElement>(
    '.pokeIntroduce__carouselList',
  );
  if (carouselSlide === null || carouselSlideArea === null) return;
  const slideWidth = carouselSlide.offsetWidth;
  carouselSlideArea.style.transform = `translateX(-${slideWidth * index}px)`;
  currentSlide = index;
};

const controlButton = (): void => {
  const carouselSlides = document.querySelectorAll(
    '.pokeIntroduce__carouselList',
  );
  const carouselButtonPrev = document.querySelector(
    '[data-slide-carousel="prev"]',
  );
  const carouselButtonNext = document.querySelector(
    '[data-slide-carousel="next"]',
  );
  const carouselArrowPrev = document.querySelector('.arrow-left');
  const carouselArrowNext = document.querySelector('.arrow-right');
  if (
    carouselSlides.length === 0
    || carouselButtonPrev === null
    || carouselButtonNext === null
    || carouselArrowPrev === null
    || carouselArrowNext === null
  ) return;
  const slideLength = carouselSlides.length;
  if (slideLength - 1 === currentSlide) {
    carouselButtonNext.classList.add(hiddenClass);
    carouselArrowNext.classList.add(hiddenClass);
  } else if (currentSlide < slideLength) {
    carouselButtonNext.classList.remove(hiddenClass);
    carouselArrowNext.classList.remove(hiddenClass);
  }
  if (currentSlide === 0) {
    carouselButtonPrev.classList.add(hiddenClass);
    carouselArrowPrev.classList.add(hiddenClass);
  } else {
    carouselButtonPrev.classList.remove(hiddenClass);
    carouselArrowPrev.classList.remove(hiddenClass);
  }
};

const setClickButtonPrev = (): void => {
  changeSlide(currentSlide - 1);
  controlButton();
};

const setClickButtonNext = (): void => {
  changeSlide(currentSlide + 1);
  controlButton();
};

window.addEventListener('DOMContentLoaded', () => {
  setCarouselWidth();
  changeSlide(currentSlide);
  setClickButtonPrev();
  setClickButtonNext();
});

function Last() {
  return (
    <section
      className="pokeIntroduce__sectionArea"
      data-fade-target="last"
      data-fade-trigger="last"
    >
      <h2
        className="pokeIntroduce__phaseTitle"
        data-smooth-scroll-target="last"
      >
        最後に
      </h2>
      <p className="pokeIntroduce__descText">
        私が撮影したプレイ画面の一部をご紹介。(若干のネタバレあり)
      </p>
      <div className="pokeIntroduce__carousel">
        <ul className="pokeIntroduce__carouselArea">
          <li className="pokeIntroduce__carouselList">
            <img
              className="pokeIntroduce__photo"
              src="image/2022012903064600-7CBCCE282CD36658AB28471FB4791102.jpg"
              alt="フィールド画像1"
            />
            <p className="pokeIntroduce__carouselText">
              寝ている野生のケムッソ
            </p>
          </li>
          <li className="pokeIntroduce__carouselList">
            <img
              className="pokeIntroduce__photo"
              src="image/2022030623414400-7CBCCE282CD36658AB28471FB4791102.jpg"
              alt="フィールド画像1"
            />
            <p className="pokeIntroduce__carouselText">吠える野生のサイドン</p>
          </li>
          <li className="pokeIntroduce__carouselList">
            <img
              className="pokeIntroduce__photo"
              src="image/2022013006260400-7CBCCE282CD36658AB28471FB4791102.jpg"
              alt="フィールド画像1"
            />
            <p className="pokeIntroduce__carouselText">この壁画は一体…？</p>
          </li>
          <li className="pokeIntroduce__carouselList">
            <img
              className="pokeIntroduce__photo"
              src="image/oyabunBattle.jpeg"
              alt="フィールド画像1"
            />
            <p className="pokeIntroduce__carouselText">
              赤く目を光らせるこのポケモンは…
            </p>
          </li>
          <li className="pokeIntroduce__carouselList">
            <img
              className="pokeIntroduce__photo"
              src="image/2022030300443300-7CBCCE282CD36658AB28471FB4791102.jpg"
              alt="フィールド画像1"
            />
            <p className="pokeIntroduce__carouselText">新たな姿への進化…！！</p>
          </li>
          <li className="pokeIntroduce__carouselList">
            <img
              className="pokeIntroduce__photo"
              src="image/2022030300580800-7CBCCE282CD36658AB28471FB4791102.jpg"
              alt="フィールド画像1"
            />
            <p className="pokeIntroduce__carouselText">
              ポケモンとの一時も悪くないね
            </p>
          </li>
          <li className="pokeIntroduce__carouselList">
            <img
              className="pokeIntroduce__photo"
              src="image/2022030623591000-7CBCCE282CD36658AB28471FB4791102.jpg"
              alt="フィールド画像1"
            />
            <p className="pokeIntroduce__carouselText">オオニューラで壁登り</p>
          </li>
          <li className="pokeIntroduce__carouselList">
            <img
              className="pokeIntroduce__photo"
              src="image/2022030700033600-7CBCCE282CD36658AB28471FB4791102.jpg"
              alt="フィールド画像1"
            />
            <p className="pokeIntroduce__carouselText">
              ゴリゴリミネラルとカチコール
            </p>
          </li>
          <li className="pokeIntroduce__carouselList">
            <img
              className="pokeIntroduce__photo"
              src="image/2022030623462700-7CBCCE282CD36658AB28471FB4791102.jpg"
              alt="フィールド画像1"
            />
            <p className="pokeIntroduce__carouselText">
              ビリリダマがたくさん…！
            </p>
          </li>
          <li className="pokeIntroduce__carouselList">
            <img
              className="pokeIntroduce__photo"
              src="image/2022030700075100-7CBCCE282CD36658AB28471FB4791102.jpg"
              alt="フィールド画像1"
            />
            <p className="pokeIntroduce__carouselText">雪に惑うブニャット</p>
          </li>
        </ul>
        <div className="arrow-wrap">
          <div className="arrow-left">
            <button
              className="arrow-btn btn-prev"
              type="button"
              data-slide-carousel="prev"
              onClick={setClickButtonPrev}
            >
              {' '}
            </button>
          </div>
          <div className="arrow-right">
            <button
              className="arrow-btn btn-next"
              type="button"
              data-slide-carousel="next"
              onClick={setClickButtonNext}
            >
              {' '}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Last;
