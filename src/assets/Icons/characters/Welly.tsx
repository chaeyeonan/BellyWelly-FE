import { IconContainer } from "./BellyFaces";
import { IconContainerProps } from "../Icons";

export const Welly = ({ width, height }: IconContainerProps) => {
  return (
    <IconContainer width={width} height={height}>
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 415 416"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <rect
          x="0.0273438"
          y="0.919922"
          width="414.974"
          height="414.974"
          fill="url(#pattern0_956_5155)"
        />
        <defs>
          <pattern
            id="pattern0_956_5155"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <use xlinkHref="#image0_956_5155" transform="scale(0.000974659)" />
          </pattern>
          <image
            id="image0_956_5155"
            width="1026"
            height="1026"
          />
        </defs>
      </svg>
    </IconContainer>
  );
};