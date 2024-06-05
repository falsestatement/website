export class QuadTree {
  threshold: number;
  minw: number;
  maxw: number;
  minh: number;
  maxh: number;
  points: number[];

  subdivided: boolean;
  ul: QuadTree | undefined;
  ur: QuadTree | undefined;
  bl: QuadTree | undefined;
  br: QuadTree | undefined;

  ctx: any;

  constructor(
    threshold: number,
    minw: number,
    maxw: number,
    minh: number,
    maxh: number,
    points?: number[],
    ctx?: any,
  ) {
    this.threshold = threshold;
    this.minw = minw;
    this.minh = minh;
    this.maxw = maxw;
    this.maxh = maxh;
    this.points = [];
    this.subdivided = false;

    this.ctx = ctx;

    if (points) {
      for (let i = 0; i < points.length / 2; i ++) {
        this.addPoint([points[2*i], points[2*i + 1]]);
      }
    }

    ctx.strokeStyle = "white";
    ctx.lineWidth = 2;
    ctx.strokeRect(minw, minh, maxw - minw, maxh - minh);
  }

  addPoint(point: number[]) {
    if (!this.inBounds(point)) return;

    if (this.points.length >= this.threshold * 2) {
      this.subdivide();
    }

    if(this.subdivided)
  {
      this.ul!.addPoint(point);
      this.ur!.addPoint(point);
      this.bl!.addPoint(point);
      this.br!.addPoint(point);
      return;
    }

    this.points.push(...point);
  }

  inBounds(point: number[]) {
    if (point[0] < this.minw) return false;
    if (point[0] > this.maxw) return false;
    if (point[1] < this.minh) return false;
    if (point[1] > this.maxh) return false;
    return true;
  }

  subdivide() {
    if (this.subdivided) return;

    this.ul = new QuadTree(
      this.threshold,
      this.minw,
      (this.maxw - this.minw) / 2 + this.minw,
      this.minh,
      (this.maxh - this.minh) / 2 + this.minh,
      this.points,
      this.ctx,
    );
    this.ur = new QuadTree(
      this.threshold,
      (this.maxw - this.minw) / 2 + this.minw,
      this.maxw,
      this.minh,
      (this.maxh - this.minh) / 2 + this.minh,
      this.points,
      this.ctx,
    );
    this.bl = new QuadTree(
      this.threshold,
      this.minw,
      (this.maxw - this.minw) / 2 + this.minw,
      (this.maxh - this.minh) / 2 + this.minh,
      this.maxh,
      this.points,
      this.ctx,
    );
    this.br = new QuadTree(
      this.threshold,
      (this.maxw - this.minw) / 2 + this.minw,
      this.maxw,
      (this.maxh - this.minh) / 2 + this.minh,
      this.maxh,
      this.points,
      this.ctx,
    );

    this.points = [];

    this.subdivided = true;
  }

  intersects(minw: number, maxw: number, minh: number, maxh: number) {
    const farLeft = this.maxw < minw;
    const farRight = this.minw > maxw;
    const farUp = this.minh > maxh;
    const farDown = this.maxh < minh;
    return !(farLeft || farRight || farUp || farDown);
  }

  findPoints(minw: number, maxw: number, minh: number, maxh: number) {
    const points = [] as number[];
    if(this.intersects(minw, maxw, minh, maxh))
      points.push(...this.points);

    if(this.subdivided){
      points.push(...this.ul!.findPoints(minw, maxw, minh, maxh));
      points.push(...this.ur!.findPoints(minw, maxw, minh, maxh));
      points.push(...this.bl!.findPoints(minw, maxw, minh, maxh));
      points.push(...this.br!.findPoints(minw, maxw, minh, maxh));
    }

    return points;
  }
}
