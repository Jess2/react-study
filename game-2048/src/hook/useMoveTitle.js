import { useEffect } from "react";
import { addKeyObserver, removeKeyObserver } from "../util/keyboard";
import { moveTile, makeTile } from "../util/tile";

export default function useMoveTitle({ tileList, setTileList }) {
  function moveAndAdd({x, y}) {
    const newTileList = moveTile({ tileList, x, y }); // 타일을 움직여서 리스트를 새로 만든다.
    const newTile = makeTile(newTileList);
    newTile.isNew = true;
    newTileList.push(newTile);
    setTileList(newTileList);
  }

  function moveUp() {
    moveAndAdd({ x: 0, y: -1 });
  }

  function moveDown() {
    moveAndAdd({ x: 0, y: 1 });
  }

  function moveLeft() {
    moveAndAdd({ x: -1, y: 0 });
  }

  function moveRight() {
    moveAndAdd({ x: 1, y: 0 });
  }

  useEffect(() => {
    addKeyObserver('up', moveUp);
    addKeyObserver('down', moveDown);
    addKeyObserver('left', moveLeft);
    addKeyObserver('right', moveRight);

    return () => {
      removeKeyObserver('up', moveUp);
      removeKeyObserver('down', moveDown);
      removeKeyObserver('left', moveLeft);
      removeKeyObserver('right', moveRight);
    };
  });
}
