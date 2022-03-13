import React from 'react';

function Diff() {
  return (
    <section
      className="pokeIntroduce__sectionArea"
      data-fade-target="differences"
      data-fade-trigger="differences"
    >
      <h2
        className="pokeIntroduce__phaseTitle"
        data-smooth-scroll-target="differences"
      >
        これまでのポケモンシリーズとの違い
      </h2>
      <div>
        <h3 className="pokeIntroduce__phaseMidTitle">最初にもらえるポケモン</h3>
        <div className="pokeIntroduce__phaseMinArea">
          <h4 className="pokeIntroduce__phaseMinTitle">・これまでの作品</h4>
          <figure className="pokeIntroduce__photoList">
            <img
              className="pokeIntroduce__photo -width600"
              src="image/gen7.jpeg"
              alt="これまでの御三家"
            />
            <figcaption className="pokeIntroduce__figureText">
              「ポケットモンスターソード・シールド」で選べるサルノリ(右)、ヒバニー(中央)、メッソン(左)
            </figcaption>
          </figure>
          <p className="pokeIntroduce__descText">
            シリーズごとに完全新規のポケモンが登場していた。
          </p>
        </div>
        <div className="pokeIntroduce__phaseMinArea">
          <h4 className="pokeIntroduce__phaseMinTitle">・今作</h4>
          <figure className="pokeIntroduce__photoList">
            <img
              className="pokeIntroduce__photo -width600"
              src="image/genAru.jpeg"
              alt="今作の御三家"
            />
            <figcaption className="pokeIntroduce__figureText">
              右からヒノアラシ(金銀)、モクロー(サンムーン)、ミジュマル(ブラックホワイト)
            </figcaption>
          </figure>
          <p className="pokeIntroduce__descText">
            これまでに登場したポケモンが最初に選べる3匹のポケモンとして登場する。
          </p>
        </div>
        <span className="pokeIntroduce__onePointText">
          幅広い世代に懐かしさを感じてもらえるポケモンの設定。
        </span>
      </div>
      <div>
        <h3 className="pokeIntroduce__phaseMidTitle">ポケモンとの距離感</h3>
        <div className="pokeIntroduce__phaseMinArea">
          <h4 className="pokeIntroduce__phaseMinTitle">・これまでの作品</h4>
          <figure className="pokeIntroduce__photoList">
            <img
              className="pokeIntroduce__photo -width450"
              src="image/img_howtoplay02_02.jpeg"
              alt="ポケモンバトル"
            />
            <img
              className="pokeIntroduce__photo -width450"
              src="image/img_story01_03.jpeg"
              alt="受付にいるスボミー"
            />
            <img
              className="pokeIntroduce__photo -width450"
              src="image/pokemon_190605_09_02.jpeg"
              alt="アーマーガアが「空飛ぶタクシー」として利用されている"
            />
            <figcaption className="pokeIntroduce__figureText">
              ポケモンバトルはもちろん、マスコットや移動手段にもなるなど、生活に溶け込んでいる。
            </figcaption>
          </figure>
          <p className="pokeIntroduce__descText">
            ポケモンと人間は共存し、協力し合い、仲良く暮らしている。
          </p>
        </div>
        <div className="pokeIntroduce__phaseMinArea">
          <h4 className="pokeIntroduce__phaseMinTitle">・今作</h4>
          <figure className="pokeIntroduce__photoList">
            <img
              className="pokeIntroduce__photo -width450"
              src="image/FKINQyIVQAE21t1.jpg"
              alt="劇中のセリフ1"
            />
            <img
              className="pokeIntroduce__photo -width450"
              src="image/pokemonosorosi.jpeg"
              alt="劇中のセリフ2"
            />
            <figcaption className="pokeIntroduce__figureText">
              「ポケモンは怖い生き物」というセリフも劇中で登場する。
            </figcaption>
          </figure>
          <p className="pokeIntroduce__descText">
            ポケモンと共存するという考え自体が少数派であり、人間とポケモンが一緒に暮らす頃が稀な時代。
          </p>
        </div>
      </div>
      <div>
        <h3 className="pokeIntroduce__phaseMidTitle">ゲームシステム</h3>
        <div className="pokeIntroduce__phaseMinArea">
          <h4 className="pokeIntroduce__phaseMinTitle">・これまでの作品</h4>
          <figure className="pokeIntroduce__photoList">
            <img
              className="pokeIntroduce__photo -height200"
              src="image/56519d2f.jpeg"
              alt="ミナモシティ"
            />
            <img
              className="pokeIntroduce__photo -height200"
              src="image/21817ad8.jpeg"
              alt="俺が一番、世界で強いってことなんだよ！！"
            />
            <img
              className="pokeIntroduce__photo -height200"
              src="image/show.png"
              alt="剣盾ジムリーダー"
            />
            <figcaption className="pokeIntroduce__figureText"> </figcaption>
          </figure>
          <p className="pokeIntroduce__descText">
            ポケモンを連れて旅をし、ポケモンジムやポケモンリーグへの挑戦、ポケモン図鑑の完成を目指すロールプレイングゲーム。
          </p>
          <p className="pokeIntroduce__descText">
            主人公はさまざまな場所に赴いたり、ポケモンに指示をしてバトルをする存在。
          </p>
        </div>
        <div className="pokeIntroduce__phaseMinArea">
          <h4 className="pokeIntroduce__phaseMinTitle">・今作</h4>
          <figure className="pokeIntroduce__photoList">
            <img
              className="pokeIntroduce__photo -width450"
              src="image/20220209-191528-header-696x392.jpeg"
              alt="ポケモンに向かって直接ボールを投げている1"
            />
            <img
              className="pokeIntroduce__photo -width450"
              src="image/20220128-00000003-isd-000-2-view.jpeg"
              alt="島キングとの戦い"
            />
            <figcaption className="pokeIntroduce__figureText">
              野生のポケモンに狙いを定め、ボールを投げる。
            </figcaption>
            <figcaption className="pokeIntroduce__figureText">
              「島キング」と呼ばれる巨大なポケモンとの戦闘に挑むことも。
            </figcaption>
          </figure>
          <p className="pokeIntroduce__descText">
            トレーナー自身にアクション要素が追加されている。
          </p>
          <p className="pokeIntroduce__descText">
            マップを移動しながら直接ポケモンにボールを投げたり、ポケモンとの戦闘を行うこともある。
          </p>
          <p className="pokeIntroduce__descText">
            ポケモンに襲われ、ゲームオーバーとなることも…。
          </p>
          <p className="pokeIntroduce__descText">
            ポケモン同士を戦わせるなど、これまでにあった要素も健在。
          </p>
        </div>
      </div>
    </section>
  );
}

export default Diff;
