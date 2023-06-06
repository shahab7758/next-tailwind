import Image from "next/image";

export default function Home() {
  return (
    <div>
      <h1>Title 1</h1>
      <h2>Title 2</h2>
      <h3>Title 3</h3>
      <p className="text-base">A regular paragraph</p>
      <p className="text-sm">A description paragraph</p>
      <p className="note text-xs">A little note</p>
    </div>
  );
}
