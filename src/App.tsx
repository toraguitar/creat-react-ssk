import React from 'react';
import { Button, Stack } from '@chakra-ui/react';
import { BiArrowToTop } from 'react-icons/bi';
import Title from './_Title/Title';
import Menu from './_Menu/Menu';
import Desc from './_Desc/Desc';
import Region from './_Region/Region';
import Diff from './_Diff/Diff';
import System from './_System/System';
import SumUp from './_SumUp/SumUp';
import Last from './_Last/Last';
import './css/App.css';

const fadeInClass = 'is-fadeIn';

const fadeInSectionArea = (): void => {
  const sectionTitles = document.querySelectorAll('[data-fade-trigger]');
  const sectionOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0,
  };
  const sectionCallback = (entries: Array<IntersectionObserverEntry>) => {
    for (let i = 0; i < entries.length; i += 1) {
      const entry: IntersectionObserverEntry = entries[i];
      if (entry.isIntersecting) {
        const triggerData = entry.target.getAttribute('data-fade-trigger');
        if (triggerData === null) return;
        const targetSection = document.querySelector(
          `[data-fade-target="${triggerData}"]`,
        );
        targetSection?.classList.add(fadeInClass);
      }
    }
  };
  const sectionObserver = new IntersectionObserver(
    sectionCallback,
    sectionOptions,
  );
  for (let i = 0; i < sectionTitles.length; i += 1) {
    sectionObserver.observe(sectionTitles[i]);
  }
};

const backToTop = () => {
  const targetArea = document.querySelector('[data-back-top="trigger"]');
  if (targetArea === null) return;
  const targetTop = targetArea.scrollTop;
  window.scrollTo({
    top: targetTop,
    behavior: 'smooth',
  });
};

window.addEventListener('DOMContentLoaded', () => {
  fadeInSectionArea();
});

function App() {
  return (
    <div className="pokeIntroduce">
      <Title />
      <Menu />
      <Desc />
      <Region />
      <Diff />
      <System />
      <SumUp />
      <Last />
      <Stack className="poke-button__backTop" direction="row" spacing={4}>
        <Button rightIcon={<BiArrowToTop />} colorScheme="teal" variant="outline" data-back-top="trigger" onClick={backToTop}>
          Back to Top
        </Button>
      </Stack>
    </div>
  );
}

export default App;
