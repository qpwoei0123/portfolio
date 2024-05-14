window.onload = function () {
  const menuOpen = document.querySelector(".gnb .menuOpen");
  const menuBox = document.querySelector(".gnb .menuBox");

  menuOpen.addEventListener("click", function () {
    menuBox.classList.toggle("on");
  });

  gsap.registerPlugin(ScrollTrigger); // ScrollTrigger 사용 준비

  // gsap.to(요소, 옵션)
  gsap
    .timeline({
      scrollTrigger: {
        trigger: ".visual",
        start: "100% 100%", // trigger와 viewport의 어느 지점에서 시작할지
        end: "100% 0%", // trigger와 viewport의 어느 지점에서 끝낼지
        scrub: 1, //  스크롤 속도에 따라 애니메이션 속도가 조절됨
      },
    })
    .to("h1", { opacity: 0, duration: 1 }, 0) // 0초에 h1의 투명도를 0으로 변경
    .to("h2", { opacity: 0, duration: 1 }, 1) // 1초에 h2의 투명도를 0으로 변경
    .to("h2 span", { color: "white", duration: 1 }, 0) // 1초에 h2의 span의 x값을 100으로 변경
    .to(
      ".logoWrap #y",
      { x: -150, y: 350, rotate: 20, ease: "none", duration: 5 },
      0
    )
    .to(
      ".logoWrap #o",
      { x: -50, y: 250, rotate: -50, ease: "none", duration: 5 },
      0
    )
    .to(
      ".logoWrap #u",
      { x: 0, y: 400, rotate: -5, ease: "none", duration: 5 },
      0
    )
    .to(
      ".logoWrap #n",
      { x: 100, y: 300, rotate: -10, ease: "none", duration: 5 },
      0
    )
    .to(
      ".logoWrap #g",
      {
        x: 150,
        y: 450,
        rotate: 150,
        ease: "none",
        duration: 5,
      },
      0
    );

  gsap.utils.toArray(".mainTextBox .title i").forEach((el) => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: el,
          start: "100% 100%",
          end: "100% 100%",
          scrub: 1,
        },
      })
      .fromTo(
        el,
        { overflow: "hidden", y: 150 },
        { overflow: "hidden", y: 0 },
        0
      );
  });

  gsap.utils.toArray(".subText p").forEach((el) => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: el,
          start: "100% 100%",
          end: "100% 100%",
          scrub: 1,
        },
      })
      .fromTo(
        el,
        { opacity: 0, y: 100 },
        { opacity: 1, y: 0, ease: "none", duration: 1 },
        0
      );
  });
};
