import React from 'react';

function SumUp() {
  return (
    <section
      className="pokeIntroduce__sectionArea"
      data-fade-target="sumUp"
      data-fade-trigger="sumUp"
    >
      <h2
        className="pokeIntroduce__phaseTitle"
        data-smooth-scroll-target="sumUp"
      >
        まとめ
      </h2>
      <p className="pokeIntroduce__descText">
        過去作のポケモンを最初に選ぶポケモンに選定している点、前作までに比べやや複雑で繊細な操作を求められる点から、ターゲットとなる年齢層は過去作品よりも高いと思われる。
      </p>
      <p className="pokeIntroduce__descText">
        モーダルな設計からモードレス・シームレスな設計へと変わり、操作の自由度が格段に増したため、ゲームへの没入感・快適性を感じやすくなった。
      </p>
      <p className="pokeIntroduce__descText">
        <span className="pokeIntroduce__descText -strong">
          「幼少期を共に過ごしたポケモンたちと、広い世界で自由に冒険・交流ができる」
        </span>
        という点に、今の大人世代は心を奪われているのではないだろうか。
      </p>
    </section>
  );
}

export default SumUp;
