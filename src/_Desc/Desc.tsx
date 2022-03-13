import React from 'react';

function Desc() {
  return (
    <section
      className="pokeIntroduce__sectionArea"
      data-fade-target="titleDesc"
      data-fade-trigger="titleDesc"
    >
      <h2
        className="pokeIntroduce__phaseTitle"
        data-smooth-scroll-target="titleDesc"
      >
        ポケモンLEGENDS アルセウス」とは？
      </h2>
      <div className="pokeIntroduce__imgArea">
        <img
          className="pokeIntroduce__photo"
          src="image/aruseusPackage.jpeg"
          alt="ポケモンレジェンズアルセウスパッケージ画像"
          width="600vw"
        />
      </div>
      <p className="pokeIntroduce__descText">
        2022年1月28日に発売した、ポケットモンスターシリーズ最新作。
      </p>
    </section>
  );
}

export default Desc;
