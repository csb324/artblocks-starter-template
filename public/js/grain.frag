varying vec2 vertexTextureCoordinate;
uniform sampler2D tex0;
uniform vec2 u_resolution;
uniform float randomIndex;

highp float rand(vec2 co) // we OWE OUR LIFE to aman from the shaders discord! 
// http://byteblacksmith.com/improvements-to-the-canonical-one-liner-glsl-rand-for-opengl-es-2-0/
{
    highp float a = 12.9898;
    highp float b = 78.183;
    highp float c = 43758.5453;
    highp float dt= dot(co.xy ,vec2(a,b));
    highp float sn= mod(dt,3.14);
    return fract(sin(sn) * c);
}
highp vec2 random2Alt(vec2 p) {
  return vec2(rand(p + vec2(1.+(floor(randomIndex * 30.)), 1.)), rand(p));
}

float noise(vec2 st) {
  vec2 st_f = fract(st + randomIndex);
  vec2 st_i = floor(st + randomIndex);
  
  float option1 = rand(st_i);
  float option2 = rand(st_i + vec2(1.0, 0.0));
  float option3 = rand(st_i + vec2(0.0, 1.0));
  float option4 = rand(st_i + vec2(1.0, 1.0));
    
  vec2 u = smoothstep(0., 1. , st_f);
  // Mix 4 coorners percentages
  return mix(option1, option2, u.x) +
          (option3 - option1)* u.y * (1.0 - u.x) +
          (option4 - option2) * u.x * u.y;
}

void main() {
  vec2 uv = vertexTextureCoordinate;
  vec2 st = gl_FragCoord.xy/u_resolution.x;

  gl_FragColor = texture2D(tex0, uv);
}