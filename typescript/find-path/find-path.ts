//      [ A ][ B ][ C ][ D ]
// [ E ][ F ][ G ][ H ][ I ][ J ]
//      [ K ][ L ][ M ][ N ]
//           [ O ]

type Room = {
  name: string;
  north?: string;
  east?: string;
  south?: string;
  west?: string;
};

type Path = {
  from: string;
  to: string;
  path?: 'north' | 'east' | 'south' | 'west';
};

const news: (keyof Room)[] = ['north', 'east', 'south', 'west'];

const rooms: Room[] = [
  { name: 'A', east: 'B', south: 'F' },
  { name: 'B', east: 'C', south: 'G', west: 'A' },
  { name: 'C', east: 'D', south: 'H', west: 'D' },
  { name: 'D', south: 'I', west: 'C' },
  { name: 'E', east: 'F' },
  { name: 'F', north: 'A', east: 'G', west: 'K', south: 'E' },
  { name: 'G', north: 'B', east: 'H', west: 'L', south: 'F' },
  { name: 'H', north: 'C', east: 'I', west: 'M', south: 'G' },
  { name: 'I', north: 'D', east: 'J', west: 'N', south: 'H' },
  { name: 'J', south: 'I' },
  { name: 'K', north: 'F', east: 'L' },
  { name: 'L', north: 'G', east: 'M', west: 'O', south: 'K' },
  { name: 'M', north: 'H', east: 'N', south: 'L' },
  { name: 'N', north: 'I', south: 'M' },
  { name: 'O', north: 'L' },
];

function findPaths(from: string): Path[] {
  const room = rooms.find(room => room.name === from);
  return news.map(direction => ({ from, to: room[direction], direction })).filter(path => path.to !== undefined);
}

function findTrails(trails: Path[][], to: string): any {
  return trails
    .reduce((trails: Path[][], trail) => {
      const last = trail[trail.length - 1];

      if (last.to === to) {
        trails.push(trail);
      } else {
        trails.push(
          ...findTrails(
            findPaths(last.to)
              .filter(path => !trail.some(node => path.to === node.from || path.to === node.to))
              .map(path => [...trail, path]),
            to
          )
        );
      }

      return trails;
    }, [])
    .sort((a: Path[], b: Path[]) => a.length - b.length);
}

function findRoom(from: string, to: string) {
  return findTrails(
    findPaths(from).map(path => [path]),
    to
  );
}

console.log(findRoom('A', 'B'));
