import Description from "./Description";
import Title from "./Title";
const Content = (props) => {
  return (
    <>
      <Title name={props.name} />
      <Description text={props.text} />
    </>
  );
};
export default Content;
