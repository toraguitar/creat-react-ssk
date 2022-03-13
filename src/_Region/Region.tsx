import React from 'react';

function Region() {
  return (
    <section
      className="pokeIntroduce__sectionArea"
      data-fade-target="region"
      data-fade-trigger="region"
    >
      <h2
        className="pokeIntroduce__phaseTitle"
        data-smooth-scroll-target="region"
      >
        冒険の舞台「ヒスイ地方」
      </h2>
      <div className="pokeIntroduce__mapPhotoArea">
        <figure className="pokeIntroduce__photoList">
          <img
            className="pokeIntroduce__photo"
            src="image/hisui.jpeg"
            alt="ヒスイ地方の画像"
          />
          <figcaption className="pokeIntroduce__figureText">
            ヒスイ地方
          </figcaption>
        </figure>
        <figure className="pokeIntroduce__photoList">
          <img
            className="pokeIntroduce__photo"
            src="../image/Sinnoh.png"
            alt="シンオウ地方の画像"
          />
          <figcaption className="pokeIntroduce__figureText">
            シンオウ地方
          </figcaption>
        </figure>
      </div>
      <p className="pokeIntroduce__descText">
        「ポケットモンスターダイヤモンド・パール」の舞台となっている「シンオウ地方」の過去の姿。
      </p>
      <p className="pokeIntroduce__descText">
        「ダイヤモンド・パール」は2006年に発売され、2021年にリメイク作品が発売されている。
      </p>
    </section>
  );
}

export default Region;
