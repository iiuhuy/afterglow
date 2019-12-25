import Locations from "./locations";

export default `
  attribute vec3 ${Locations.POSITION};
  void main() {
    gl_Position = vec4(position, 1.0)
  }
`;
