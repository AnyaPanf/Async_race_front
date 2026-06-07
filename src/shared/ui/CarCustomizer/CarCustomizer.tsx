type CarCustomizerText = "Create" | "Update";

type CarCustomizerProps = {
  text: CarCustomizerText;
};

export function CarCustomizer({ text }: CarCustomizerProps) {
  return (
    <form className="flex items-center gap-1 text-sm bg-[#1c1c1e] rounded-md px-2 py-1">
      <input
        type="text"
        placeholder="Car Name"
        className="rounded-md text-white focus:outline-none"
      />
      <input type="color" className="w-[25px] h-7 cursor-pointer" />
      <button
        type="submit"
        className="px-2 py-1 bg-[#353638] text-white rounded-md hover:bg-blue-700 focus:outline-none cursor-pointer"
      >
        {text}
      </button>
    </form>
  );
}
