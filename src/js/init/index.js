import GLC from "../GL/index";

let r = 0;
const render = () => {
  // console.log("emm");
  GLC.clear(1.0, 0.0, 0.0, 1.0);
  GLC.clear(r, 0.0, 0.0, 1.0);
  r = r + 0.01;
  window.requestAnimationFrame(render);
};

export default id => {
  const canvas = document.querySelector(`#${id}`);

  console.log(canvas);

  if (!canvas) {
    return;
  }

  const gl = canvas.getContext("webgl");

  if (!gl) {
  }

  GLC.init(gl);
  window.requestAnimationFrame(render);
};
