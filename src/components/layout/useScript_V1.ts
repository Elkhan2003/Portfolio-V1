import { useEffect } from "react";

const useScript_V1 = (url: string): void => {
	useEffect(() => {
		const canvas = document.getElementById(
			"canvas"
		) as HTMLCanvasElement | null;
		if (!canvas) {
			console.error("Canvas element with ID 'canvas' not found.");
			return;
		}

		const ctx = canvas.getContext("2d")!;
		if (!ctx) {
			console.error("2D context not available.");
			return;
		}

		canvas.width = window.innerWidth;
		canvas.height = window.innerHeight;
		let spots: Particle[] = [];
		let hue = 0;
		const mouse = { x: undefined, y: undefined };

		canvas.addEventListener("mousemove", function (event: any) {
			mouse.x = event.x;
			mouse.y = event.y;
			for (let i = 0; i < 3; i++) {
				spots.push(new Particle());
			}
		});

		class Particle {
			x: any;
			y: any;
			size: number;
			speedx: number;
			speedY: number;
			color: string;

			constructor() {
				this.x = mouse.x;
				this.y = mouse.y;
				// ! Style 0.1 or 1
				this.size = Math.random() * 2 + 0.1;
				this.speedx = Math.random() * 2 - 1;
				this.speedY = Math.random() * 2 - 1;
				this.color = `hsl(${hue}, 100%, 50%)`;
			}

			update() {
				this.x += this.speedx;
				this.y += this.speedY;
				if (this.size > 0.1) this.size -= 0.03;
			}

			draw() {
				ctx.fillStyle = this.color;
				ctx.beginPath();
				ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
				ctx.fill();
			}
		}

		function handleParticle() {
			for (let i = 0; i < spots.length; i++) {
				spots[i].update();
				spots[i].draw();
				for (let j = i; j < spots.length; j++) {
					const dx = spots[i].x - spots[j].x;
					const dy = spots[i].y - spots[j].y;
					const distance = Math.sqrt(dx * dx + dy * dy);
					if (distance < 90) {
						ctx.beginPath();
						ctx.strokeStyle = spots[i].color;
						// ! Style 1 or 100
						ctx.lineWidth = spots[i].size / 10;
						ctx.moveTo(spots[i].x, spots[i].y);
						ctx.lineTo(spots[j].x, spots[j].y);
						ctx.stroke();
					}
				}
				if (spots[i].size <= 0.3) {
					spots.splice(i, 1);
					i--;
				}
			}
		}

		function animate() {
			if (!canvas) return;
			ctx.clearRect(0, 0, canvas.width, canvas.height);
			handleParticle();
			hue++;
			requestAnimationFrame(animate);
		}

		window.addEventListener("resize", function () {
			canvas.width = window.innerWidth;
			canvas.height = window.innerHeight;
			spots = [];
		});

		window.addEventListener("mouseout", function () {
			mouse.x = undefined;
			mouse.y = undefined;
		});
		animate();
	}, [url]);
};
export default useScript_V1;
