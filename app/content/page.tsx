import React from "react";
import Content from "@/components/content";

const ContentPage = (): React.ReactElement => {
  return (
    <main>
      <Content type={"news-image"}>type: news-image</Content>
      <Content type={"news-text"}>type: news-image</Content>
    </main>
  );
};

export default ContentPage;
