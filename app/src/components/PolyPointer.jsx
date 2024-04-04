import { Arrow,Layer } from 'react-konva';


export const PolyPointer = ({x, y}) => {
    return (
      <Layer>
      <Arrow
        x={x}
        y={y}
        fill={'rgb(209 213 219)'}
        stroke={'rgb(3 7 18)'}
        strokeWidth={1}
        points={[0, 0, 0, 35]}
        pointerLength={80}
        pointerWidth={25}
      />
      </Layer>
    )
  }

