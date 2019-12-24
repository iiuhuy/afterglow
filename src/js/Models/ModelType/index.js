import GLC from "../../GL/index";

export default class ModelType {
  constructor(vertices, indices) {
    this.vertices = vertices;
    this.indices = indices;
    this._genVertextBuffer();
    this._genIndexBuffer();
  }

  _genVertextBuffer = () => {
    this.vertextBuffer = GLC.createBuffer();
    GLC.bindArrayBuffer(this.vertextBuffer);
    GLC.addArrayBufferData(this.vertices);
    GLC.unbindArrayBuffer();
  };

  _genIndexBuffer = () => {
    this.indexBuffer = GLC.createBuffer();
    GLC.bindElementArrayBuffer(this.indexBuffer);
    GLC.addElementArrayBuffer(this.indices);
    GLC.unbindElementArrayBuffer();
  };
}
