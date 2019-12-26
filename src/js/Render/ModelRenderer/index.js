import GLC from "../../GL/index";
import Shader from "../../Shaders/ModelShader/index";

export default class ModelRenderer {
  constructor() {
    this.shader = new Shader();
  }

  registerNewModel = (model, id) => {
    if (!this.models[id]) {
      this.models[id] = {
        type: model,
        instances: []
      };
    }
  };

  addInsrance = (instance, id) => {
    this.models[id].instances.push(instance);
  };

  preRender = () => {
    GLC.viewPort();
    GLC.depthTest(true);
  };

  render = () => {
    this.preRender();
    this.shader.use();
    Object.keys(this.models).forEach(model => {
      this.models[model].type.use();
      this.models[model].instance.forEach(instance => {
        GLC.drawTriangles(this.model[model].type.instance.length);
      });
    });
  };
}
