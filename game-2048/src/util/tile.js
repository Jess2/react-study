import { getRandomInteger } from "./number";
import { MAX_POS } from "../constant";

export function getInitialTileList() {
  const tileList = [];
  const tile1 = makeTile(tileList);
  tileList.push(tile1);
  const tile2 = makeTile(tileList);
  tileList.push(tile2);

  return tileList;
}

export function checkCollision(tileList, tile) {
  return tileList.some(item => item.x === tile.x && item.y === tile.y);
}

export function makeTile(tileList) {
  let tile;

  // 기존에 있는 타일과 위치가 충돌되지 않도록 검사
  while(!tile || checkCollision(tileList, tile)) {
    tile = {
      x: getRandomInteger(1, MAX_POS),
      y: getRandomInteger(1, MAX_POS),
      value: 2
    }
  }

  return tile;
}
