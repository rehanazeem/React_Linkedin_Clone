import { Spin } from "antd";

const Loader = () => {
  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center">
        <p className="font-semibold mb-3">Loading..Please Wait..</p>
      <Spin size="large" />
    </div>
  );
};

export default Loader;
