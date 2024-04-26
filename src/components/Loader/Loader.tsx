import { Hearts } from "react-loader-spinner";

const Loader: React.FC = () => {
  return (
    <div>
      <Hearts
        height="80"
        width="80"
        color="#F4442E"
        ariaLabel="hearts-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </div>
  );
};

export default Loader;
