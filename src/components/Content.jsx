import Description from "./Description";
import Title from "./Title";
const Content = (props) => {
  // return (
  //   <>
  //     <Title name={props.name} />
  //     <Description text={props.text} />
  //   </>
  // );
  return (
    <section className="content-section">
      <Title name={props.name} />
      <Description text={props.text} />
    </section>
  );
};
export default Content;
