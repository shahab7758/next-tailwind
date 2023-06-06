import Image from "next/image";

export default function Home() {
  return (
    <div>
      <h1>Border and color customization</h1>
      <h1 className="border-4 border-green-600">Hello world!</h1>
      <h1 className="text-custom">Hello world!</h1>
      <h1>Text on different screen sizes & Spacing</h1>
      <h1 className="text-sm sm:text-base md:text-lg lg:text-3xl ">
        Large text
      </h1>
      <h1>Spacing customization</h1>
      <h1 className="mb-1">Hello long sentence</h1>
      <h1>another long sentence</h1>
    </div>
  );
}
