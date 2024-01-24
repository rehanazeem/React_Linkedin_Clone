import { useState } from "react";
import ModalComponent from "../Modal/index";

const PostStatus = () => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="h-screen w-screen bg-gray-200">
      <div className="flex justify-center items-center">
        <div className="w-[80%] h-[120px] bg-gray-100 mt-5 border border-solid border-gray-300 rounded-md flex items-center justify-center">
          <button
            className="w-[80%] h-[50px] text-left text-stone-700 bg-gray-100 hover:bg-gray-200 outline-none border border-solid border-gray-400 rounded-full cursor-pointer p-2 pl-5 font-sans text-md"
            onClick={() => setModalOpen(true)}
          >
            Start a post
          </button>
        </div>
        <ModalComponent modalOpen={modalOpen} setModalOpen={setModalOpen} />
      </div>
    </div>
  );
};

export default PostStatus;
