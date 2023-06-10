export default function Home() {
  return (
    <main className="flex h-[100vh] bg-[#280080] justify-around items-center">
      <div className="border-[#160736] rounded-xl border-solid border w-96 h-96"></div>
      <div className="bg-[#160736] rounded-xl w-96 h-96 flex justify-center items-center">
        <button className="w-1/2 h-14 py-2 px-5 bg-white rounded-3xl font-semibold text-lg">
          Generate Color
        </button>
      </div>
    </main>
  );
}
