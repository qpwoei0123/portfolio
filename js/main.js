window.onload = function () {
  const menuOpen = document.querySelector(".gnb .menuOpen");
  const menuBox = document.querySelector(".gnb .menuBox");

  menuOpen.addEventListener("click", function () {
    menuBox.classList.toggle("on");
  });

  gsap.registerPlugin(ScrollTrigger); // ScrollTrigger 사용 준비

  // 비주얼 섹션 애니메이션
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
      ".logoWrap .y",
      { x: -150, y: 350, rotate: 20, ease: "none", duration: 5 },
      0
    )
    .to(
      ".logoWrap .o",
      { x: -50, y: 250, rotate: -50, ease: "none", duration: 5 },
      0
    )
    .to(
      ".logoWrap .u",
      { x: 0, y: 400, rotate: -5, ease: "none", duration: 5 },
      0
    )
    .to(
      ".logoWrap .n",
      { x: 100, y: 300, rotate: -10, ease: "none", duration: 5 },
      0
    )
    .to(
      ".logoWrap .g",
      {
        x: 150,
        y: 450,
        rotate: 150,
        ease: "none",
        duration: 5,
      },
      0
    );

  // 메인텍스트 애니메이션
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

  // 서브텍스트 애니메이션
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

  // con1 textAni 애니메이션
  let textAniList = document.querySelectorAll(".con1 .textAni li");
  let textAni = gsap.timeline({ repeat: -1 });
  for (let i = 0; i < textAniList.length; i++) {
    textAni.to(textAniList[i], 2, {
      opacity: 1,
      repeat: 1,
      yoyo: true,
      ease: "power4.out",
      delay: 0,
      x: 0,
    });
  }

  // con4 listBox 스크롤 애니메이션
  gsap.utils.toArray(".con4 .listBox .box").forEach((el, idx) => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: el,
          start: "0% 20%",
          end: "00% 0%",
          scrub: 1,
        },
      })
      .to(
        el,
        {
          y: (idx % 2) * 20,
          scale: 0.8 + idx * 0.1,
          transform: "rotateX(-10deg) scale(0.9)",
          transformOrigin: "top",
          filter: "brightness(0.7)",
        },
        0
      );
  });

  // con3 listBox 스크롤 애니메이션
  gsap.utils.toArray(".con3 .listBox li").forEach((el, idx) => {
    gsap
      .timeline({
        scrollTrigger: {
          trigger: el,
          start: "top bottom",
          end: "50% bottom",
          scrub: 1,
        },
      })
      .fromTo(
        el,
        { opacity: 0, rotationY: "45deg" },
        {
          opacity: 1,
          rotationY: "0deg",
          ease: "none",
          delay: (idx % 3) * 1,
        },
        0
      );
  });
  // con5 listBox li 호버 이미지 애니메이션
  let listBox = document.querySelectorAll(".con5 .listBox li");
  let imgBox = document.querySelector(".con5 .imgBox");
  let img = document.querySelector(".con5 .imgBox img");

  for (let i = 0; i < listBox.length; i++) {
    listBox[i].addEventListener("mouseover", () => {
      img.src = `images/img${i}.jpg`;
      gsap.set(imgBox, { scale: 0, opacity: 0, duration: 0.3 }),
        gsap.to(imgBox, { scale: 1, opacity: 1, duration: 0.3 });
    });
    listBox[i].addEventListener("mousemove", (e) => {
      let x = e.pageX + 20;
      let y = e.pageY - 20;
      imgBox.style.left = x + "px";
      imgBox.style.top = y + "px";
    });
    listBox[i].addEventListener("mouseout", () => {
      gsap.to(imgBox, { scale: 0, opacity: 0, duration: 0.3 });
    });
  }
  // footer 애니메이션

  gsap
    .timeline({
      scrollTrigger: {
        trigger: "footer",
        start: "top bottom",
        end: "bottom top",
        scrub: 3,
      },
    })

    .to(".logoWrap", { top: "20%", ease: "none", duration: 5 }, 0)
    .to(
      ".logoWrap .y",
      { x: 0, y: 350, rotate: 0, ease: "none", scale: 1.2, duration: 5 },
      0
    )
    .to(
      ".logoWrap .o",
      { x: 0, y: 250, rotate: 0, ease: "none", scale: 1.2, duration: 5 },
      0
    )
    .to(
      ".logoWrap .u",
      { x: 0, y: 400, rotate: 0, ease: "none", scale: 1.2, duration: 5 },
      0
    )
    .to(
      ".logoWrap .n",
      { x: 0, y: 300, rotate: 0, ease: "none", scale: 1.2, duration: 5 },
      0
    )
    .to(
      ".logoWrap .g",
      {
        x: 0,
        y: 400,
        rotate: 0,
        ease: "none",
        scale: 1.2,
        duration: 5,
      },
      0
    );

  // loading 애니메이션
  let loading = document.querySelector(".loading");
  let rotate = document.querySelectorAll(".rotate");
  let opacity = document.querySelectorAll(".opacity");

  setTimeout(() => {
    loading.classList.add("scene1");
  }, 0);
  setTimeout(() => {
    loading.classList.add("scene2");
  }, 1000);
  setTimeout(() => {
    loading.classList.remove("scene1", "scene2");
  }, 2000);
  setTimeout(() => {
    rotate.forEach((el) => {
      el.classList.add("on");
    });
  }, 2000);
  setTimeout(() => {
    opacity.forEach((el) => {
      el.classList.add("on");
    });
  }, 2000);

  // 페이지 로드 시에 바로 스크롤바를 숨깁니다.
  document.body.classList.add("hide-scrollbar");

  // 2.5초 후에 스크롤바를 다시 보여줍니다.
  setTimeout(function () {
    document.body.classList.remove("hide-scrollbar");
  }, 3000);
  // 페이지 이동 시 스크롤바를 맨 위로 이동시킵니다.
  window.onbeforeunload = function () {
    window.scrollTo(0, 0);
  };
};
