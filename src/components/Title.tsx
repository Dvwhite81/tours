interface TitleProps {
  title: string;
}

const Title = ({ title }: TitleProps) => {
  return (
    <>
      <h2 className="title">{title}</h2>
      <div className="title-underline" />
    </>
  );
};

export default Title;
