var tl = new TimelineLite();

tl.fromTo(
  ".img",
  0.3,
  {
    x: -80,
    opacity: 0,
    ease: Power2.ease,
  },
  {
    x: 0,
    opacity: 0.6,
    stagger: 0.09,
    onComplete: () => {
      scaleOut.play();
    },
  }
).fromTo(
  ".down",
  0.7,
  {
    x: -60,
    opacity: 0,
    ease: Power2.easeOut,
  },
  {
    x: 0,
    opacity: 1,
  },
  "-=.3"
);

var scaleOut = new TimelineLite().pause();
scaleOut
  .to(".img", 0.2, {
    scale: 0,
    ease: Power2.ease,
    stagger: 0.07,
    delay: 1,
  })
  .to(".down", 0.2, {
    x: 60,
    opacity: 0,
    ease: Power2.ease,
    onComplete: () => {
      layerTl.play();
    },
  });

var layerTl = new TimelineLite().pause();

layerTl
  .to(".layer", 0.7, {
    y: "0%",
    ease: Power2.easeOut,
  })
  .fromTo(
    "h1",
    0.4,
    {
      //   skewY: -10,
      translateY: 10,
      translateZ: 0,
      opacity: 0,
      ease: Power2.easeOut,
    },
    {
      //   skewY: 0,
      translateY: 0,
      translateZ: 0,
      opacity: 1,
    }
  );
