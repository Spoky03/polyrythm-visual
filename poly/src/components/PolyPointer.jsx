import { Arrow, Circle, Layer } from 'react-konva';


export const PolyPointer = ({x, y,color}) => {
    return (
      <Layer>
      <Arrow
        x={x}
        y={y}
        fill={color}
        points={[0, 0, 0, 35]}
        pointerLength={30}
        pointerWidth={25}
        strokeWidth={3}
        stroke={'#000000'}
      />
      {/* <Circle
      // postion : 200, 30
        x={x}
        y={y+30}
        stroke={color}
        radius={11}
      /> */}
      </Layer>
    )
  }

