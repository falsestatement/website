import Delaunator from "delaunator";
import tinygradient from "tinygradient";
import { QuadTree } from "@util/QuadTree";

// Random Point Generation
const randomVectors = (
  numberOfPoints: number,
  xMin: number,
  xMax: number,
  yMin: number,
  yMax: number,
) => {
  const result = [] as { x: number; y: number }[];
  for (let i = 0; i < numberOfPoints; i++) {
    result.push({
      x: Math.random() * (xMax - xMin) + xMin,
      y: Math.random() * (yMax - yMin) + yMin,
    });
  }

  return result;
};

const borderPoints = (
  subdivisions: number,
  minX: number,
  maxX: number,
  minY: number,
  maxY: number,
) => {
  const result = [] as { x: number; y: number }[];
  for (let i = 0; i < subdivisions + 1; i++) {
    result.push({
      x: minX + ((maxX - minX) * i) / (subdivisions + 1),
      y: minY,
    });
    result.push({
      x: maxX,
      y: minY + ((maxY - minY) * i) / (subdivisions + 1),
    });
    result.push({
      x: maxX - ((maxX - minX) * i) / (subdivisions + 1),
      y: maxY,
    });
    result.push({
      x: minX,
      y: maxY - ((maxY - minY) * i) / (subdivisions + 1),
    });
  }

  return result;
};

let mousePos = { x: 0, y: 0 };
const minVelocity = -0.5;
const maxVelocity = 0.5;
const repulsiveForceConstant = -2000;

self.onmessage = (e) => {
  const canvas = e.data.canvas;
  const ctx = canvas?.getContext("2d");
  const windowInnerWidth = e.data.winWidth;
  const windowInnerHeight = e.data.winHeight;

  if (!ctx || !canvas || !windowInnerWidth || !windowInnerHeight) {
    mousePos = {
      x: e.data.mousePos[0],
      y: e.data.mousePos[1],
    };
    return;
  }

  canvas.width = windowInnerWidth;
  canvas.height = windowInnerHeight;

  const drawWidth = canvas.width;
  const drawHeight = canvas.height;
  const numPoints = Math.floor((drawHeight * drawWidth) / 25000);
  const velocities = randomVectors(
    numPoints,
    minVelocity,
    maxVelocity,
    minVelocity,
    maxVelocity,
  );

  const points = randomVectors(numPoints, 0, drawWidth, 0, drawHeight);
  const border = borderPoints(1, 0, drawWidth, 0, drawHeight);
  const delaunay = Delaunator.from(
    [...points, ...border],
    (p) => p.x,
    (p) => p.y,
  );

  const drawTriangle = (pointIndexes: number[]) => {
    const trianglePoints = pointIndexes.map((index) => [
      delaunay.coords[2 * index],
      delaunay.coords[2 * index + 1],
    ]);

    const normYPos = Math.min(
      Math.max(
        (trianglePoints[0][1] + trianglePoints[1][1] + trianglePoints[2][1]) /
          3 /
          drawHeight,
        0,
      ),
      1,
    );

    const triangleGradient = tinygradient(
      "rgba(0, 255, 255, 0.3)",
      "rgba(0, 0, 255, 0)",
    );

    ctx.beginPath();
    ctx.moveTo(trianglePoints[0][0], trianglePoints[0][1]);
    ctx.lineTo(trianglePoints[1][0], trianglePoints[1][1]);
    ctx.lineTo(trianglePoints[2][0], trianglePoints[2][1]);
    ctx.closePath();
    ctx.fillStyle = triangleGradient.hsvAt(normYPos).toRgbString();
    ctx.strokeStyle = triangleGradient.hsvAt(normYPos).toRgbString();
    ctx.lineWidth = 0.5;
    ctx.stroke();
    ctx.fill();

    for (const point of trianglePoints) {
      const distToMouse =
        ((point[0] - mousePos.x) ** 2 + (point[1] - mousePos.y) ** 2) ** 0.5;
      if (distToMouse > 400) {
        // ctx.fillStyle = triangleGradient.hsvAt(normYPos).toHexString();
        // ctx.fillRect(point[0] - 1, point[1] - 1, 2, 2);
      } else {
        const normDist = (1 - distToMouse / 400)**2;
        const brightnessGrad = tinygradient(
          triangleGradient.rgbAt(normYPos).toHexString(),
          "rgba(255, 255, 255, 0.2)",
        );
        ctx.fillStyle = brightnessGrad.rgbAt(normDist).toRgbString();

        ctx.beginPath();
        ctx.arc(point[0], point[1], 10 * normDist, 0, 2 * Math.PI);
        ctx.fill();
        ctx.closePath();
      }
    }
  };

  const movePoints = () => {
    const newPoints = [] as number[];
    const qtree = new QuadTree(
      2,
      0,
      drawWidth,
      0,
      drawHeight,
      delaunay.coords as number[],
      ctx,
    );

    for (let i = 0; i < numPoints; i++) {
      const newX = delaunay.coords[i * 2] + velocities[i].x;
      const newY = delaunay.coords[i * 2 + 1] + velocities[i].y;
      if (newX < 0 || newX > drawWidth) velocities[i].x = -velocities[i].x;
      if (newY < 0 || newY > drawHeight) velocities[i].y = -velocities[i].y;
      newPoints[i * 2] = delaunay.coords[i * 2] + velocities[i].x;
      newPoints[i * 2 + 1] = delaunay.coords[i * 2 + 1] + velocities[i].y;

      const test = {
        minw: delaunay.coords[i * 2] - 150,
        maxw: delaunay.coords[i * 2] + 150,
        minh: delaunay.coords[i * 2 + 1] - 150,
        maxh: delaunay.coords[i * 2 + 1] + 150,
      };

      const importantPoints = qtree.findPoints(
        test.minw,
        test.maxw,
        test.minh,
        test.maxh,
      );

      let totalForce = [0, 0];
      const x = delaunay.coords[i * 2];
      const y = delaunay.coords[i * 2 + 1];
      for (let j = 0; j < importantPoints.length / 2; j++) {
        const targetx = importantPoints[j * 2];
        const targety = importantPoints[j * 2 + 1];

        const euclidianDist = Math.sqrt(
          (targetx - x) ** 2 + (targety - y) ** 2,
        );

        if (!euclidianDist) continue;
        const targetForce = [
          ((targetx - x) * repulsiveForceConstant) / euclidianDist ** 3,
          ((targety - y) * repulsiveForceConstant) / euclidianDist ** 3,
        ];

        totalForce[0] += targetForce[0];
        totalForce[1] += targetForce[1];
      }
      newPoints[i * 2] += totalForce[0];
      newPoints[i * 2 + 1] += totalForce[1];
      newPoints[i * 2] = Math.max(0, Math.min(drawWidth, newPoints[i * 2]));
      newPoints[i * 2 + 1] = Math.max(
        0,
        Math.min(drawHeight, newPoints[i * 2 + 1]),
      );
    }
    delaunay.coords = [...newPoints, ...border.flatMap((p) => [p.x, p.y])];
  };

  const renderPoints = () => {
    ctx.clearRect(0, 0, drawWidth, drawHeight);
    movePoints();
    delaunay.update();

    const triangles = delaunay.triangles.reduce<number[][]>(
      (accum, cur, index) => {
        if (index % 3) accum[accum.length - 1].push(cur);
        else accum.push([cur]);
        return accum;
      },
      [],
    );

    for (let i = 0; i < triangles.length; i++) {
      drawTriangle(triangles[i]);
    }

    requestAnimationFrame(renderPoints);
  };

  requestAnimationFrame(renderPoints);
};

export {};
