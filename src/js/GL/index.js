class GLCommander {
  init(gl) {
    this.gl = gl;
  }

  clear = (r, g, b, a) => {
    this.gl.clearColor(r, g, b, a);
    this.gl.clear(this.gl.COLOR_BUFFER_BIT);
  };

  createBuffer = () => this.gl.createBuffer();

  // float buffer
  bindArrayBuffer = buffer => this.gl.bindBuffer(this.gl.ARRAY_BUFFER, buffer);

  unbindArrayBuffer = () => this.gl.bindBuffer(this.gl.ARRAY_BUFFER, null);

  addArrayBufferData = vertices =>
    this.gl.bufferData(
      this.gl.ARRAY_BUFFER,
      new Float32Array(vertices),
      this.gl.STATIC_DRAW
    );

  // int buffers
  bindElementArrayBuffer = buffer =>
    this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, buffer);

  unbindElementArrayBuffer = () =>
    this.gl.bindBuffer(this.gl.ELEMENT_ARRAY_BUFFER, null);

  addElementArrayBufferData = indices =>
    this.gl.bufferData(
      this.gl.ELEMENT_ARRAY_BUFFER,
      new Uint16Array(indices),
      this.gl.STATIC_DRAW
    );
}

const GLC = new GLCommander();

export default GLC;
