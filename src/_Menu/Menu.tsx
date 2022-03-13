import React from 'react';

const smoothScroll = (): void => {
  const triggerTitleList = document.querySelectorAll(
    '[data-smooth-scroll-trigger]',
  );
  if (triggerTitleList.length === 0) return;
  for (let i = 0; i < triggerTitleList.length; i += 1) {
    triggerTitleList[i].addEventListener('click', (e) => {
      e.preventDefault();
      const triggerDataName = triggerTitleList[i].getAttribute(
        'data-smooth-scroll-trigger',
      );
      if (triggerDataName === null) return;
      const targetAreaTitle = document.querySelector(
        `[data-smooth-scroll-target="${triggerDataName}"]`,
      );
      if (targetAreaTitle === null) return;
      const targetAreaPosition = targetAreaTitle.getBoundingClientRect().top;
      const currentScrollNum = window.scrollY;
      const target = targetAreaPosition + currentScrollNum;
      window.scrollTo({
        top: target,
        behavior: 'smooth',
      });
    });
  }
};

window.addEventListener('DOMContentLoaded', () => {
  smoothScroll();
});

function Menu() {
  return (
    <section className="pokeIntroduce__menuArea">
      <h2 className="pokeIntroduce__menuTitle">目次</h2>
      <ul className="pokeIntroduce__menuList">
        <li className="pokeIntroduce__subMenu">
          <button
            type="button"
            onClick={smoothScroll}
            className="pokeIntroduce__subMenuTitle"
            data-smooth-scroll-trigger="titleDesc"
          >
            「ポケモンLEGENDS アルセウス」とは？
          </button>
        </li>
        <li className="pokeIntroduce__subMenu">
          <button
            type="button"
            onClick={smoothScroll}
            className="pokeIntroduce__subMenuTitle"
            data-smooth-scroll-trigger="region"
          >
            冒険の舞台「ヒスイ地方」
          </button>
        </li>
        <li className="pokeIntroduce__subMenu">
          <button
            type="button"
            onClick={smoothScroll}
            className="pokeIntroduce__subMenuTitle"
            data-smooth-scroll-trigger="differences"
          >
            これまでのポケモンシリーズとの違い
          </button>
          <ul className="pokeIntroduce__subMenuList">
            <li>最初に出会えるポケモン</li>
            <li>ポケモンとの距離感</li>
            <li>シリーズ初のアクションRPG</li>
          </ul>
        </li>
        <li className="pokeIntroduce__subMenu">
          <button
            type="button"
            onClick={smoothScroll}
            className="pokeIntroduce__subMenuTitle"
            data-smooth-scroll-trigger="system"
          >
            本作のゲームシステムについて
          </button>
          <ul className="pokeIntroduce__subMenuList">
            <li>オープンワールドとは</li>
            <li>モードの切り替えがスムーズ</li>
          </ul>
        </li>
        <li className="pokeIntroduce__subMenu">
          <button
            type="button"
            onClick={smoothScroll}
            className="pokeIntroduce__subMenuTitle"
            data-smooth-scroll-trigger="sumUp"
          >
            まとめ
          </button>
        </li>
        <li className="pokeIntroduce__subMenu">
          <button
            type="button"
            onClick={smoothScroll}
            className="pokeIntroduce__subMenuTitle"
            data-smooth-scroll-trigger="last"
          >
            最後に
          </button>
        </li>
      </ul>
    </section>
  );
}

export default Menu;
