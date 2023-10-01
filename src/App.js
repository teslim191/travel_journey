import React from "react";
import Header from "./components/Header";
import data from "./data";
import Main from "./components/Main";

export default function App() {
  const mainComponent = data.map((item) => {
    return <Main key={item.id} {...item} />;
  });
  return (
    <div>
      <Header />
      {mainComponent}
    </div>
  );
}
