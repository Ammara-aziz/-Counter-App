import Counter from "./counter.tsx/page";

export default function Home() {
  return (
    <main>
      <h1 className="bg-[#d4dba7] font-semibold text-center p-20 max-w-screen-xl" style={{ fontSize: "30px" }}>COUNTER APP</h1>
      <Counter />
    </main>
  );
}
