import Link from "next/link";
const url = "https://jsonplaceholder.typicode.com/todos";
// rafce

const fetchTodos = async () => {
  await new Promise((resolve) => setInterval(resolve, 1000));

  const res = await fetch(url);
  const data = await res.json();
  //   console.log(data);
  return data;
};

type Data = {
  id: string;
  completed: string;
  title: string;
  userId: string;
};

const AboutPage = async () => {
  // JS
  const data: Data[] = await fetchTodos();
  console.log(data);
  return (
    <div>
      AboutPage
      {data.map((item, index) => {
        return <li key={index}>{item.title}</li>;
      })}
    </div>
  );
};
export default AboutPage;
