import GLC from "../GL/index";

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
  GLC.clear(1.0, 1.0, 1.0, 1.0);
};
