import GLC from "../../GL/index";
import VertexSource from "./vertex";
import FragmentSource from "./fragment";
import Location from "./locations";

export default class ModelShader {
  constructor() {
    const vertexShader = GLC.createVertexShader();
    GLC.addShaderSource(vertexShader, VertexSource);
    GLC.compileShader(vertexShader);

    const fragmentShader = GLC.createFragmentShader();
    GLC.addShaderSource(fragmentShader, FragmentSource);
    GLC.compileShader(fragmentShader);

    const program = GLC.createShaderProgram();
    GLC.attachShaderToProgram(program, vertexShader);
    GLC.attachShaderToProgram(program, fragmentShader);
    GLC.linkProgram(program);

    this.program = program;
  }
}
