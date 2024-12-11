import React from "react";

const Pxr = (): React.ReactElement => {
  return (
    <main className="text-white">
      <h1>20px</h1>
      <p className="text-20">20px text</p>

      <h1>20.5px</h1>
      <p className="text-20.5">20.5px text</p>
      <p className="text-20.5">소수점은 적용되지 않음</p>

      <h1>width</h1>
      <p className="w-120 aspect-square bg-green-500">120px</p>
    </main>
  );
};

export default Pxr;
