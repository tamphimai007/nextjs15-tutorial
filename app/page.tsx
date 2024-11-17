// rafce
import Link from "next/link";

// rfce
const page = async () => {
  // Javascript
  await new Promise((resolve)=>setInterval(resolve,1000))

  return (
    <>
      <h1>Hello Roitai</h1>
      <p>Description</p>
    </>
  );
};
export default page;
