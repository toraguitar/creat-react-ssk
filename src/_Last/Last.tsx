import React from 'react';

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
          <div className="arrow-left" data-slide-carousel="prev">
            <button className="arrow-btn btn-prev" type="button"> </button>
          </div>
          <div className="arrow-right" data-slide-carousel="next">
            <button className="arrow-btn btn-next" type="button"> </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Last;
