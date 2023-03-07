const menuItem = document.querySelectorAll(".menuitem");
const messagesNotification = document.querySelector("#messages-notification");
const messages = document.querySelector(".messages");
const message = messages.querySelectorAll(".message");
const messageSearch = messages.querySelector("#message-search");
const theme = document.querySelector("#theme");
const themeCustomize = document.querySelector(".customize-theme");
const fontSizes = document.querySelectorAll(".choose-size span");
const root = document.querySelector(":root");
const colorPalette = document.querySelectorAll(".choose-color span");
const Bg1 = document.querySelector(".bg-1");
const Bg2 = document.querySelector(".bg-2");
const Bg3 = document.querySelector(".bg-3");
const chooseBg = document.querySelectorAll(".choose-bg div");

// ...................................slider....................................
const changeActiveItem = () => {
  menuItem.forEach((item) => {
    item.classList.remove("active");
  });
};

menuItem.forEach((item) => {
  item.addEventListener("click", () => {
    changeActiveItem();
    item.classList.add("active");

    if (item.id != "notifications") {
      document.querySelector(".notification-popup").style.display = "none";
    } else {
      document.querySelector(".notification-popup").style.display = "block";
      document.querySelector(
        "#notifications .notification-count"
      ).style.display = "none";
    }
  });
});

// ...................................messages box highlight................................

messagesNotification.addEventListener("click", () => {
  document.querySelector(
    "#messages-notification .notification-count"
  ).style.display = "none";
  messages.style.boxShadow = "0 0 1rem var(--color-primary)";
  setTimeout(() => {
    messages.style.boxShadow = "none";
  }, 2000);
});

// ...................................search messages ....................................

const searchMessage = () => {
  const val = messageSearch.value.toLowerCase();
  console.log(val);
  message.forEach((user) => {
    let name = user.querySelector("h5").textContent.toLowerCase();
    if (name.indexOf(val) != -1) {
      user.style.display = "flex";
    } else {
      user.style.display = "none";
    }
  });
};

messageSearch.addEventListener("keyup", searchMessage);

// ...................................Theme Customization ....................................

// .....................open theme box ........................

theme.addEventListener("click", () => {
  themeCustomize.style.display = "grid";
});

// .....................close theme box ........................

const closeThemeModel = (e) => {
  if (e.target.classList.contains("customize-theme")) {
    themeCustomize.style.display = "none";
  }
};

themeCustomize.addEventListener("click", closeThemeModel);

// .........................change font ..........................
const changeFontActive = () => {
  fontSizes.forEach((item) => {
    item.classList.remove("active");
  });
};

fontSizes.forEach((size) => {
  let fontSize;
  size.addEventListener("click", () => {
    if (size.classList.contains("font-size-1")) {
      fontSize = "10px";
      root.style.setProperty(" --sticky-top-left: ", "5.4rem");
      root.style.setProperty(" --sticky-top-right: ", "5.4rem");
      changeFontActive();
      size.classList.add("active");
    } else if (size.classList.contains("font-size-2")) {
      fontSize = "13px";
      root.style.setProperty(" --sticky-top-left: ", "5.4rem");
      root.style.setProperty(" --sticky-top-right: ", "-7rem");
      changeFontActive();
      size.classList.add("active");
    } else if (size.classList.contains("font-size-3")) {
      fontSize = "16px";
      root.style.setProperty(" --sticky-top-left: ", "-2rem");
      root.style.setProperty(" --sticky-top-right: ", "-17rem");
      changeFontActive();
      size.classList.add("active");
    } else if (size.classList.contains("font-size-4")) {
      fontSize = "19px";
      root.style.setProperty(" --sticky-top-left: ", "-5rem");
      root.style.setProperty(" --sticky-top-right: ", "-25rem");
      changeFontActive();
      size.classList.add("active");
    } else if (size.classList.contains("font-size-5")) {
      fontSize = "22px";
      root.style.setProperty(" --sticky-top-left: ", "-12rem");
      root.style.setProperty(" --sticky-top-right: ", "-35rem");
      changeFontActive();
      size.classList.add("active");
    }
    document.querySelector("html").style.fontSize = fontSize;
  });
});

// ...................colors.......................

const changeColorActive = () => {
  colorPalette.forEach((item) => {
    item.classList.remove("active");
  });
};

colorPalette.forEach((color) => {
  color.addEventListener("click", () => {
    let primary;
    changeColorActive();

    if (color.classList.contains("color-1")) {
      primaryHue = 252;
      color.classList.add("active");
    } else if (color.classList.contains("color-2")) {
      primaryHue = 52;
      color.classList.add("active");
    } else if (color.classList.contains("color-3")) {
      primaryHue = 352;
      color.classList.add("active");
    } else if (color.classList.contains("color-4")) {
      primaryHue = 152;
      color.classList.add("active");
    } else if (color.classList.contains("color-5")) {
      primaryHue = 202;
      color.classList.add("active");
    }
    root.style.setProperty("--primary-color-hue", primaryHue);
  });
});

// .....................background.......................

let lightColorLightness;
let whiteColorLightness;
let darkColorLightness;

// chooseBg.forEach((bg) => {
//   bg.addEventListener("click", () => {
//     if (bg.classList.contains("bg-1")) {
//       Bg1.classList.add("active");
//     } else if (bg.classList.contains("bg-2")) {
//       Bg2.classList.add("active");
//       darkColorLightness = "95%";
//       whiteColorLightness = "20%";
//       lightColorLightness = "15%";

//       root.style.setProperty("--light-color-lightness", lightColorLightness);
//       root.style.setProperty("--white-color-lightness", whiteColorLightness);
//       root.style.setProperty("--dark-color-lightness", darkColorLightness);
//     }
//   });
// });

const changeBG = () => {
  root.style.setProperty("--light-color-lightness", lightColorLightness);
  root.style.setProperty("--white-color-lightness", whiteColorLightness);
  root.style.setProperty("--dark-color-lightness", darkColorLightness);
};

Bg1.addEventListener =
  ("click",
  () => {
    Bg1.classList.add("active");
    Bg2.classList.remove("active");
    Bg3.classList.remove("active");
    window.location.reload();
  });

Bg2.addEventListener =
  ("click",
  () => {
    darkColorLightness = "95%";
    whiteColorLightness = "20%";
    lightColorLightness = "15%";

    Bg2.classList.add("active");
    Bg1.classList.remove("active");
    Bg3.classList.remove("active");
    changeBG();
  });

Bg3.addEventListener =
  ("click",
  () => {
    darkColorLightness = "95%";
    whiteColorLightness = "10%";
    lightColorLightness = "0%";

    Bg3.classList.add("active");
    Bg1.classList.remove("active");
    Bg2.classList.remove("active");
    changeBG();
  });
