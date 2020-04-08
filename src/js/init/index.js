import GLC from "../GL/index";
import ModelRenderer from "../Render/ModelRenderer/index";
import ModelType from "../Models/ModelType/index";

export default id => {
  const canvas = document.querySelector(`#${id}`);

  console.log("canvas", canvas);

  if (!canvas) {
    return;
  }

  const gl = canvas.getContext("webgl");

  if (!gl) {
  }

  console.log("get GL success", gl);

  GLC.init(gl);

  const vertices = [0.0, 0.5, 0.0, -0.5, -0.5, 0.0, 0.5, -0.5, 0.0];

  const indices = [0, 1, 2];
  // debugger;
  const modelRender = new ModelRenderer();
  // debugger;
  modelRender.registerNewModel(new ModelType(vertices, indices), "triangle");
  // debugger;
  modelRender.addInstance("instance1", "triangle");
  GLC.clear(1.0, 1.0, 1.0, 1.0);

  modelRender.render();
};
