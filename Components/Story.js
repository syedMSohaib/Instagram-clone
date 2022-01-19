export default function Story({ avatar, username }) {
  return (
    <div className="cursor-pointer">
      <img
        className={
          "h-14 w-14 rounded-full p-[1.5px] border-red-500 border-2 hover:scale-110 transition transform duration-200 ease-out"
        }
        src={avatar}
      />
      <p className="text-xs w-14 truncate text-center">{username}</p>
    </div>
  );
}
