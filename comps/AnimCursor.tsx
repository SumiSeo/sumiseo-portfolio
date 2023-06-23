import AnimatedCursor from "react-animated-cursor";

const AnimCursor = (): JSX.Element => {
  return (
    <AnimatedCursor
      innerSize={20}
      outerSize={8}
      outerAlpha={0.2}
      innerScale={0.7}
      outerScale={5}
      color="193,11,111"
    />
  );
};
export default AnimCursor;
