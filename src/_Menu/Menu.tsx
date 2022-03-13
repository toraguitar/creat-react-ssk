import React from 'react';

function Menu() {
  return (
    <section className="pokeIntroduce__menuArea">
      <h2 className="pokeIntroduce__menuTitle">目次</h2>
      <ul className="pokeIntroduce__menuList">
        <li className="pokeIntroduce__subMenu">
          <span
            className="pokeIntroduce__subMenuTitle"
            data-smooth-scroll-trigger="titleDesc"
          >
            「ポケモンLEGENDS アルセウス」とは？
          </span>
        </li>
        <li className="pokeIntroduce__subMenu">
          <span
            className="pokeIntroduce__subMenuTitle"
            data-smooth-scroll-trigger="region"
          >
            冒険の舞台「ヒスイ地方」
          </span>
        </li>
        <li className="pokeIntroduce__subMenu">
          <span
            className="pokeIntroduce__subMenuTitle"
            data-smooth-scroll-trigger="differences"
          >
            これまでのポケモンシリーズとの違い
          </span>
          <ul className="pokeIntroduce__subMenuList">
            <li>最初に出会えるポケモン</li>
            <li>ポケモンとの距離感</li>
            <li>シリーズ初のアクションRPG</li>
          </ul>
        </li>
        <li className="pokeIntroduce__subMenu">
          <span
            className="pokeIntroduce__subMenuTitle"
            data-smooth-scroll-trigger="system"
          >
            本作のゲームシステムについて
          </span>
          <ul className="pokeIntroduce__subMenuList">
            <li>オープンワールドとは</li>
            <li>モードの切り替えがスムーズ</li>
          </ul>
        </li>
        <li className="pokeIntroduce__subMenu">
          <span
            className="pokeIntroduce__subMenuTitle"
            data-smooth-scroll-trigger="sumUp"
          >
            まとめ
          </span>
        </li>
        <li className="pokeIntroduce__subMenu">
          <span
            className="pokeIntroduce__subMenuTitle"
            data-smooth-scroll-trigger="last"
          >
            最後に
          </span>
        </li>
      </ul>
    </section>
  );
}

export default Menu;
