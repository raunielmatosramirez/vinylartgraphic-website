const HeaderSection = ({ title, text }) => {
  return (
    <>
      <div className='font-bold text-4xl  z-50  mt-30' style={{ color: "#FFFF00" }}>
        <h1>{title}</h1>
      </div>
      { text ?

        <p className='mt-4 mb-4  z-50  text-white max-w-md text-sm '>{text}</p>
      :null
      }
    </>
  );
};
export default HeaderSection;
