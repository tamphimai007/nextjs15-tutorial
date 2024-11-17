// rafce
import { fetchCamp } from "@/utils/actions";

const CampList = async () => {
  const camps = await fetchCamp();
  console.log(camps);
  return (
    <div>
      {camps.map((item, index) => {
        return <li key={index}>{item.title}</li>;
      })}
    </div>
  );
};
export default CampList;
