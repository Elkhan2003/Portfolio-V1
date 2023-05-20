import gsap from "gsap";
import { useEffect } from "react";

interface Point {
	x: number;
	y: number;
	originX: number;
	originY: number;
	closest: Point[];
	active?: number;
	circle?: Circle;
}

interface Circle {
	pos: Point | null;
	radius: number | null;
	color: string | null;
	active?: number;
	draw: () => void;
}

const useScript_V2 = (url: string): void => {
	useEffect(() => {
		(function () {
			let width: number,
				height: number,
				canvas: HTMLCanvasElement,
				ctx: CanvasRenderingContext2D,
				points: Point[],
				target: any,
				animateHeader = true,
				mouseX = 0,
				mouseY = 0;

			// Main
			initHeader();
			initAnimation();
			addListeners();

			function initHeader() {
				width = window.innerWidth;
				height = window.innerHeight;
				target = { x: width / 2, y: height / 2 };

				// ! position center
				if (width > 500) {
					// Проверяем ширину экрана
					mouseX = target.x;
					mouseY = target.y;
				}

				canvas = document.getElementById("canvas") as HTMLCanvasElement;
				canvas.width = width;
				canvas.height = height;
				ctx = canvas.getContext("2d") as CanvasRenderingContext2D;

				// create points
				points = [];
				for (let x = 0; x < width; x = x + width / 20) {
					for (let y = 0; y < height; y = y + height / 20) {
						const px = x + (Math.random() * width) / 20;
						const py = y + (Math.random() * height) / 20;
						const p: Point = {
							x: px,
							originX: px,
							y: py,
							originY: py,
							closest: []
						};
						points.push(p);
					}
				}

				// for each point find the 5 closest points
				for (let i = 0; i < points.length; i++) {
					const closest: Point[] = [];
					const p1 = points[i];
					for (let j = 0; j < points.length; j++) {
						const p2 = points[j];
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
					}
					p1.closest = closest;
				}

				// assign a circle to each point
				for (const point of points) {
					const c: Circle = {
						pos: point,
						radius: 2 + Math.random() * 2,
						color: "rgba(255,255,255,0.3)",
						draw: function () {
							if (!this.active) return;
							ctx.beginPath();
							ctx.arc(
								this.pos !== null ? this.pos.x : 0,
								this.pos !== null ? this.pos.y : 0,
								this.radius !== null ? this.radius : 0,
								0,
								2 * Math.PI,
								false
							);
							ctx.fillStyle = "rgba(255,255,255," + this.active + ")";
							ctx.fill();
						}
					};
					point.circle = c;
				}
			}

			// Event handling
			function addListeners() {
				if (!("ontouchstart" in window)) {
					window.addEventListener("mousemove", mouseMove);
				}
				window.addEventListener("resize", resize);
			}

			function mouseMove(e: MouseEvent) {
				mouseX = e.clientX;
				mouseY = e.clientY;
			}

			function resize() {
				width = window.innerWidth;
				height = window.innerHeight;
				canvas.width = width;
				canvas.height = height;

				// ! position center
				if (width > 500) {
					// Проверяем ширину экрана
					target.x = width / 2;
					target.y = height / 2;
					mouseX = target.x;
					mouseY = target.y;
				}
			}

			// animation
			function initAnimation() {
				animate();
				for (const point of points) {
					shiftPoint(point);
				}
			}

			function animate() {
				if (animateHeader) {
					target.x = mouseX;
					target.y = mouseY;

					ctx.clearRect(0, 0, width, height);
					for (const point of points) {
						// detect points in range
						if (Math.abs(getDistance(target, point)) < 4000) {
							point.active = 0.3;
							point.circle!.active = 0.6;
						} else if (Math.abs(getDistance(target, point)) < 20000) {
							point.active = 0.1;
							point.circle!.active = 0.3;
						} else if (Math.abs(getDistance(target, point)) < 40000) {
							point.active = 0.02;
							point.circle!.active = 0.1;
						} else {
							point.active = 0;
							point.circle!.active = 0;
						}

						drawLines(point);
						point.circle!.draw();
					}
				}
				requestAnimationFrame(animate);
			}

			function shiftPoint(p: Point) {
				gsap.to(p, {
					duration: 1 + 1 * Math.random(),
					x: p.originX - 50 + Math.random() * 100,
					y: p.originY - 50 + Math.random() * 100,
					ease: "power2.inOut",
					onComplete: function () {
						shiftPoint(p);
					}
				});
			}

			// Canvas manipulation
			function drawLines(p: Point) {
				if (!p.active) return;
				for (const closestPoint of p.closest) {
					ctx.beginPath();
					ctx.moveTo(p.x, p.y);
					ctx.lineTo(closestPoint.x, closestPoint.y);
					ctx.strokeStyle = "rgba(255,255,255," + p.active + ")";
					ctx.stroke();
				}
			}

			// Util
			function getDistance(p1: Point, p2: Point) {
				return Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2);
			}
		})();
	}, [url]);
};

export default useScript_V2;
