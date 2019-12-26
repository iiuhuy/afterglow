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

  // shader functions
  createVertexShader = () => {
    this.gl.createShader(this.gl.VERTEX_SHADER);
  };
  createFragmentShader = () => {
    this.gl.createShader(this.gl.FRAGMENT_SHADER);
  };
  addShaderSource = (shader, source) => {
    this.gl.shaderSource(shader, source);
  };
  compileShader = shader => {
    this.gl.compileShader(shader);
  };
  createShaderProgram = () => {
    this.gl.createProgram();
  };
  attachShaderProgram = (program, shader) => {
    this.gl.attachShader(program, shader);
  };
  linkProgram = program => {
    this.gl.linkProgram(program);
  };
  useProgram = program => {
    this.gl.useProgram(program);
  };

  getAttribLocation = (program, attribute) => {
    this.gl.getAttribLocation(program, attribute);
  };
  enableVertexAttribArray = attribute => {
    this.gl.enableVertexAttribArray(attribute);
  };
  pointToAttribute = (data, dimensions) => {
    this.gl.vertexAttribPointer(data, dimensions, this.gl.FLOAT, false, 0, 0);
  };
}

const GLC = new GLCommander();

export default GLC;
