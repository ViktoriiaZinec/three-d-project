import { proxy } from "valtio";

const state = proxy({
  intro: true,
  color: "#EFBD48",
  // color2: "#ffffff",
  isLogoTexture: true,
  isFullTexture: false,
  logoDecal: "./threejs.png",
  fullDecal: "./threejs.png",
});

export default state;
