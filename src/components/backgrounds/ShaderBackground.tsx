import { useEffect, useRef } from 'react';

export default function ShaderBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const gl = canvas.getContext('webgl');
        if (!gl) return;

        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        // Простой GLSL-шедер (фон типа «пульсирующая радуга»)
        const fragShaderSrc = `
      precision mediump float;
      uniform float iTime;
      uniform vec2 iResolution;

      void main() {
        vec2 uv = gl_FragCoord.xy / iResolution;
        float color = 0.5 + 0.5 * cos(iTime + uv.xyx + vec3(0, 2, 4));
        gl_FragColor = vec4(color, 1.0);
      }
    `;

        const vertShaderSrc = `
      attribute vec4 a_position;
      void main() {
        gl_Position = a_position;
      }
    `;

        function createShader(type: number, source: string) {
            const shader = gl.createShader(type)!;
            gl.shaderSource(shader, source);
            gl.compileShader(shader);
            return shader;
        }

        const vertShader = createShader(gl.VERTEX_SHADER, vertShaderSrc);
        const fragShader = createShader(gl.FRAGMENT_SHADER, fragShaderSrc);

        const program = gl.createProgram()!;
        gl.attachShader(program, vertShader);
        gl.attachShader(program, fragShader);
        gl.linkProgram(program);
        gl.useProgram(program);

        const positionBuffer = gl.createBuffer();
        gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
        gl.bufferData(
            gl.ARRAY_BUFFER,
            new Float32Array([
                -1, -1,
                1, -1,
                -1, 1,
                -1, 1,
                1, -1,
                1, 1,
            ]),
            gl.STATIC_DRAW
        );

        const positionLocation = gl.getAttribLocation(program, 'a_position');
        gl.enableVertexAttribArray(positionLocation);
        gl.vertexAttribPointer(positionLocation, 2, gl.FLOAT, false, 0, 0);

        const iTimeLoc = gl.getUniformLocation(program, 'iTime');
        const iResLoc = gl.getUniformLocation(program, 'iResolution');

        function render(time: number) {
            gl.viewport(0, 0, canvas.width, canvas.height);
            gl.uniform1f(iTimeLoc, time * 0.001);
            gl.uniform2f(iResLoc, canvas.width, canvas.height);
            gl.drawArrays(gl.TRIANGLES, 0, 6);
            requestAnimationFrame(render);
        }

        requestAnimationFrame(render);
    }, []);

    return (
        <canvas
            ref={canvasRef}
            style={{
                position: 'fixed',
                    top: 0,
                    left: 0,
                    zIndex: -1,
                    width: '100%',
                    height: '100%',
                    pointerEvents: 'none',
            }}
        />
    );
}
