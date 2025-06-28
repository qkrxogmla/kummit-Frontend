interface MotionButtonProps {
  motion: string;
}

const MotionButton = ({ motion }: MotionButtonProps) => {
  return (
    <button className="w-[65.75px] h-[32px] my-[6px] mx-[5px] border border-[#D9D9D9] rounded-[10px] text-[13px]">
      {motion}
    </button>
  );
};

export default MotionButton;
