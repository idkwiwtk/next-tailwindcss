const Grid = () => {
  return (
    <main className="bg-white min-h-screen font-bold">
      <section className="px-200">
        <h1 className="mb-50 text-50 font-bold">Grid Layout</h1>
        <div className="rounded-30 border border-gray-200 p-50 bg-red-100 gap-20 flex  flex-row ">
          <div className="relative rounded-20 border border-gray-300 p-40 aspect-square bg-blue-300 flex-[1]">
            <h2 className="mb-30 text-25">title</h2>
            <span className=" absolute bottom-5 right-8">LOGO ICON</span>
          </div>
          <ul className="grid grid-cols-4 grid-rows-2 gap-10 flex-[2]">
            {[
              "test1",
              "text2",
              "text3",
              "text4",

              "test1",
              "text2",
              "text3",
              "text4",
            ].map((v, i) => (
              <li
                key={i}
                className="rounded-20 bg-green-200 flex justify-center items-center text-center"
              >
                {v}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </main>
  );
};

export default Grid;
