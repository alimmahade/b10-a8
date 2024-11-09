/* eslint-disable react/prop-types */
const Heading = ({ title, subTitle }) => {
  return (
    <div>
      <h1 className="text-6xl font-extrabold text-center mb-10 mt-10">
        {title}
      </h1>
      <p className="text-2xl font-extrabold text-center mb-10 mt-10">
        {subTitle}
      </p>
    </div>
  );
};

export default Heading;
