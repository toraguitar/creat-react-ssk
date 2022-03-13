import React from 'react';

function System() {
  return (
    <section
      className="pokeIntroduce__sectionArea"
      data-fade-target="system"
      data-fade-trigger="system"
    >
      <h2
        className="pokeIntroduce__phaseTitle"
        data-smooth-scroll-target="system"
      >
        本作のゲームシステムについて
      </h2>
      <h3 className="pokeIntroduce__phaseMidTitle">オープンワールド</h3>
      <div>
        <div className="pokeIntroduce__phaseMinArea">
          <h4 className="pokeIntroduce__phaseMinTitle">
            ・オープンワールドとは
          </h4>
          <figure className="pokeIntroduce__photoList">
            <img
              className="pokeIntroduce__photo"
              src="image/zerda1.jpeg"
              alt=" ブレスオブザワイルドの画像1"
            />
            <img
              className="pokeIntroduce__photo"
              src="image/zerda2.jpg"
              alt=" ブレスオブザワイルドの画像2"
            />
            <img
              className="pokeIntroduce__photo"
              src="image/zerda3.jpeg"
              alt=" ブレスオブザワイルドの画像3"
            />
            <figcaption className="pokeIntroduce__figureText">
              オープンワールドの代表作「ゼルダの伝説 -ブレスオブザワイルド-」
            </figcaption>
          </figure>
          <p className="pokeIntroduce__descText">
            英語におけるコンピュータゲーム用語で、舞台となる仮想世界を自由に動き回って探索・攻略できるように設計されたレベルデザインを指す言葉である。(参考：wikipedia)
          </p>
          <p className="pokeIntroduce__descText">
            これまでのポケモンは、マップの端に到達したら別のマップに切り替わるなど、一度に表示できるマップの大きさに制限があった。
          </p>
          <p className="pokeIntroduce__descText">
            アルセウスは、マップの切り替えやデータロードに伴う画面の静止や暗転をせずシームレスに表現されている。
          </p>
        </div>
      </div>
      <div>
        <h3 className="pokeIntroduce__phaseMidTitle">
          モードの切り替えがスムーズ
        </h3>
        <div className="pokeIntroduce__phaseMinArea">
          <h4 className="pokeIntroduce__phaseMinTitle">
            ・これまでの作品：モーダルな設計
          </h4>
          <figure className="pokeIntroduce__photoList">
            <img
              className="pokeIntroduce__photo"
              src="image/mode_koremade.png"
              alt="モーダルなこれまでのポケモンの画像説明"
            />
          </figure>
          <p className="pokeIntroduce__descText">
            例えば対戦画面であれば、「戦う」「ポケモン」「道具」「逃げる」から選択。
          </p>
          <p className="pokeIntroduce__descText">
            それぞれのモードを選ぶことで画面が切り替わり、次のモードへ移行する。
          </p>
        </div>
        <div className="pokeIntroduce__phaseMinArea">
          <h4 className="pokeIntroduce__phaseMinTitle">
            ・今作：モードレスな設計
          </h4>
          <figure className="pokeIntroduce__photoList">
            <img
              className="pokeIntroduce__photo"
              src="image/mode_aruseus.png"
              alt="モードレスな画面の説明"
            />
          </figure>
          <p className="pokeIntroduce__descText">
            多くのモードが画面端の通知のみで終了し、画面の切り替わりがない。
          </p>
          <p className="pokeIntroduce__descText">
            モードが終わるのを待つ必要がないため、すぐに次の行動に移ることができる。
          </p>
        </div>
      </div>
    </section>
  );
}

export default System;
