import React from 'react';
import {
  IconButton, List, ListIcon, ListItem,
} from '@chakra-ui/react';
import { BsFillArrowDownCircleFill } from 'react-icons/bs';
import { VscCircleFilled } from 'react-icons/vsc';
import { MdArrowRight } from 'react-icons/md';

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
      <List
        className="pokeIntroduce__menuList"
        spacing={3}
      >
        <ListItem className="pokeIntroduce__subMenu">
          <ListIcon as={VscCircleFilled} color="#2d5770" />
          <span
            className="pokeIntroduce__subMenuTitle"
          >
            「ポケモンLEGENDS アルセウス」とは？
          </span>
          <IconButton
            className="poke-button__scrollTo"
            aria-label="Search database"
            icon={<BsFillArrowDownCircleFill />}
            data-smooth-scroll-trigger="titleDesc"
            onClick={smoothScroll}
          />
        </ListItem>
        <ListItem className="pokeIntroduce__subMenu">
          <ListIcon as={VscCircleFilled} color="#2d5770" />
          <span
            className="pokeIntroduce__subMenuTitle"
          >
            冒険の舞台「ヒスイ地方」
          </span>
          <IconButton
            className="poke-button__scrollTo"
            aria-label="Search database"
            icon={<BsFillArrowDownCircleFill />}
            data-smooth-scroll-trigger="region"
            onClick={smoothScroll}
          />
        </ListItem>
        <ListItem className="pokeIntroduce__subMenu">
          <ListIcon as={VscCircleFilled} color="#2d5770" />
          <span
            className="pokeIntroduce__subMenuTitle"
          >
            これまでのポケモンシリーズとの違い
          </span>
          <IconButton
            className="poke-button__scrollTo"
            aria-label="Search database"
            icon={<BsFillArrowDownCircleFill />}
            data-smooth-scroll-trigger="differences"
            onClick={smoothScroll}
          />
          <List className="pokeIntroduce__subMenuList">
            <ListItem>
              <ListIcon as={MdArrowRight} color="#2d5770" />
              最初に出会えるポケモン
            </ListItem>
            <ListItem>
              <ListIcon as={MdArrowRight} color="#2d5770" />
              ポケモンとの距離感
            </ListItem>
            <ListItem>
              <ListIcon as={MdArrowRight} color="#2d5770" />
              シリーズ初のアクションRPG
            </ListItem>
          </List>
        </ListItem>
        <ListItem className="pokeIntroduce__subMenu">
          <ListIcon as={VscCircleFilled} color="#2d5770" />
          <span
            className="pokeIntroduce__subMenuTitle"
          >
            本作のゲームシステムについて
          </span>
          <IconButton
            className="poke-button__scrollTo"
            aria-label="Search database"
            icon={<BsFillArrowDownCircleFill />}
            data-smooth-scroll-trigger="system"
            onClick={smoothScroll}
          />
          <List className="pokeIntroduce__subMenuList">
            <ListItem>
              <ListIcon as={MdArrowRight} color="#2d5770" />
              オープンワールドとは
            </ListItem>
            <ListItem>
              <ListIcon as={MdArrowRight} color="#2d5770" />
              モードの切り替えがスムーズ
            </ListItem>
          </List>
        </ListItem>
        <ListItem className="pokeIntroduce__subMenu">
          <ListIcon as={VscCircleFilled} color="#2d5770" />
          <span
            className="pokeIntroduce__subMenuTitle"
          >
            まとめ
          </span>
          <IconButton
            className="poke-button__scrollTo"
            aria-label="Search database"
            icon={<BsFillArrowDownCircleFill />}
            data-smooth-scroll-trigger="sumUp"
            onClick={smoothScroll}
          />
        </ListItem>
        <ListItem className="pokeIntroduce__subMenu">
          <ListIcon as={VscCircleFilled} color="#2d5770" />
          <span
            className="pokeIntroduce__subMenuTitle"
          >
            最後に
          </span>
          <IconButton
            className="poke-button__scrollTo"
            aria-label="Search database"
            icon={<BsFillArrowDownCircleFill />}
            data-smooth-scroll-trigger="last"
            onClick={smoothScroll}
          />
        </ListItem>
      </List>
    </section>
  );
}

export default Menu;
