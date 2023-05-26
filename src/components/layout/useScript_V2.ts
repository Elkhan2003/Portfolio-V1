import gsap from "gsap";
import { useEffect } from "react";

interface Point {
  x: number;
  y: number;
  originX: number;
  originY: number;
  closest: Point[];
  active: number;
  circle: Circle;
}

interface Circle {
  pos: Point;
  radius: number;
  color: string;
  active: number;
  draw: () => void;
}

interface Coordinates {
  x: number;
  y: number;
}

const useScript_V2 = (url: string): void => {
  useEffect(() => {
    (function () {
      let canvas: HTMLCanvasElement | null = null;
      let ctx: CanvasRenderingContext2D | null = null;
      let width: number = window.innerWidth;
      let height: number = window.innerHeight;
      const target = { x: width / 2, y: height / 2 };
      let points: Point[] = [];
      let animateHeader = true;
      let mouseX = 0,
        mouseY = 0;

      function initialize() {
        canvas = document.getElementById("canvas") as HTMLCanvasElement | null;
        if (!canvas) {
          setTimeout(initialize, 100); // Повторный вызов функции через 100 мс
          return;
        }
        ctx = canvas.getContext("2d");
        if (!ctx) {
          setTimeout(initialize, 100); // Повторный вызов функции через 100 мс
          return;
        }

        resize();

        const stepX = width / 20;
        const stepY = height / 20;

        for (let x = 0; x < width; x += stepX) {
          for (let y = 0; y < height; y += stepY) {
            const px = x + Math.random() * stepX;
            const py = y + Math.random() * stepY;
            const point: Point = {
              x: px,
              originX: px,
              y: py,
              originY: py,
              closest: [],
              active: 0,
              circle: {} as Circle,
            };
            points.push(point);
          }
        }

        points.forEach((p1, i) => {
          const closest: Point[] = [];
          points.forEach((p2, j) => {
            if (p1 !== p2) {
              let placed = false;
              for (let k = 0; k < 5; k++) {
                if (!placed) {
                  if (closest[k] === undefined) {
                    closest[k] = p2;
                    placed = true;
                  }
                }
              }
              for (let k = 0; k < 5; k++) {
                if (!placed) {
                  if (getDistance(p1, p2) < getDistance(p1, closest[k])) {
                    closest[k] = p2;
                    placed = true;
                  }
                }
              }
            }
          });
          p1.closest = closest;
        });

        points.forEach((point) => {
          const circle: Circle = {
            pos: point,
            radius: 2 + Math.random() * 2,
            color: "rgba(255,255,255,0.3)",
            active: 0,
            draw: function () {
              ctx!.beginPath();
              ctx!.arc(
                this.pos.x,
                this.pos.y,
                this.radius,
                0,
                2 * Math.PI,
                false
              );
              ctx!.fillStyle =
                "rgba(255,255,255," + this.active.toString() + ")";
              ctx!.fill();
            },
          };
          point.circle = circle;
        });

        if (!("ontouchstart" in window)) {
          window.addEventListener("mousemove", mouseMove);
        }
        window.addEventListener("resize", resize);

        function mouseMove(e: MouseEvent) {
          mouseX = e.clientX;
          mouseY = e.clientY;
        }

        function resize() {
          width = window.innerWidth;
          height = window.innerHeight;
          canvas!.width = width;
          canvas!.height = height;

          target.x = width / 2;
          target.y = height / 2;
          mouseX = target.x;
          mouseY = target.y;
        }

        function animate() {
          if (animateHeader) {
            target.x = mouseX;
            target.y = mouseY;

            ctx!.clearRect(0, 0, width, height);
            for (const point of points) {
              const dist = getDistance(target, point);
              if (dist < 4000) {
                point.active = 0.3;
                point.circle.active = 0.6;
              } else if (dist < 20000) {
                point.active = 0.1;
                point.circle.active = 0.3;
              } else if (dist < 40000) {
                point.active = 0.02;
                point.circle.active = 0.1;
              } else {
                point.active = 0;
                point.circle.active = 0;
              }

              drawLines(point);
              point.circle.draw();
            }
          }
          requestAnimationFrame(animate);
        }

        animate();
        points.forEach(shiftPoint);
      }

      initialize();

      function shiftPoint(p: Point) {
        gsap.to(p, {
          duration: 1 + 1 * Math.random(),
          x: p.originX - 50 + Math.random() * 100,
          y: p.originY - 50 + Math.random() * 100,
          ease: "power2.inOut",
          onComplete: () => {
            shiftPoint(p);
          },
        });
      }

      function drawLines(p: Point) {
        if (!p.active) return;
        for (const closestPoint of p.closest) {
          ctx!.beginPath();
          ctx!.moveTo(p.x, p.y);
          ctx!.lineTo(closestPoint.x, closestPoint.y);
          ctx!.strokeStyle = "rgba(255,255,255," + p.active.toString() + ")";
          ctx!.stroke();
        }
      }

      function getDistance(p1: Coordinates, p2: Coordinates) {
        return (
          Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2)
        );
      }
    })();
  }, [url]);
};

export default useScript_V2;
