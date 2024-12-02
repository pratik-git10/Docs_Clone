import Link from "next/link";

const Home = () => {
  return (
    <div className="flex min-h-screen justify-center items-center gap-1">
      Click{" "}
      <Link href="/documents/123" className="">
        <span className="text-blue-500">Here</span>
      </Link>{" "}
      to go to id
    </div>
  );
};

export default Home;
