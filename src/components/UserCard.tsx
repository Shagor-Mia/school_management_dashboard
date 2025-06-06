import Image from "next/image";

const UserCard = ({ type }: { type: string }) => {
  return (
    <div className="rounded-2xl odd:bg-Purple even:bg-Yellow p-4 flex-1 min-w-[130px] h-fit">
      <div className="flex justify-between items-center">
        <span className="text-[10px] bg-white px-2 py-1 rounded-full text-green-500">
          2024/2025
        </span>
        <Image src={"/more.png"} alt="" width={20} height={20} />
      </div>
      <h1 className="text-2xl font-semibold my-4">1234</h1>
      <h2>{type}</h2>
    </div>
  );
};

export default UserCard;
