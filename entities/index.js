import Matter from "matter-js";
import Car from "./Car";
import Floor from "./Floor";
import { Dimensions } from "react-native";
import WallBlock from "./WallBlock";
const windowWidth = Dimensions.get("window").width;
const windowHeight = Dimensions.get("window").height;

export default (restart) => {
  let engine = Matter.Engine.create({ enableSleeping: false });
  let world = engine.world;

  engine.gravity.y = 0;

  return {
    physics: { engine, world },
    Car: Car(
      world,
      "green",
      { x: windowWidth / 2, y: 300 },
      { height: 40, width: 40 }
    ),
    Floor: Floor(
      world,
      "green",
      { x: windowWidth / 2, y: windowHeight - 80 },
      { height: 50, width: windowWidth }
    ),
    Wall1: WallBlock(
      world,
      "blue",
      { x: 0, y: 350 },
      { height: windowHeight, width: 40 }
    ),
    Wall2: WallBlock(
      world,
      "blue",
      { x: windowWidth, y: 350 },
      { height: windowHeight, width: 40 }
    ),
  };
};
