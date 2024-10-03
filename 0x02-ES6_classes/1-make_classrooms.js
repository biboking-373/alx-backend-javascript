import Classroom from './0-classroom';

export default function initializeRooms() {
  const sizes = [19, 20, 34];
  return sizes.map((size) => new Classroom(size));
}

console.log(initializeRooms());
