import Layout from "@/components/layout";
import React from "react";

const TestBox = () => <div className="flex-1 aspect-square bg-blue-100"></div>;

const Divider = () => (
  <div className="relative bg-red-100">
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -trnaslate-y-1/2  bg-blue-300 rounded-full w-[30px] h-[30px]"></div>
  </div>
);

const LayoutPage = () => {
  return (
    <main>
      <Layout
        divider={<Divider />}
        className="my-[100px] px-32 flex flex-row gap-6"
      >
        <TestBox />
        <TestBox />
        <TestBox />
        <TestBox />
      </Layout>
    </main>
  );
};

export default LayoutPage;
