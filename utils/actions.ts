"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const createCamps = async (prevState: any, formData: FormData) => {
  await new Promise((resolve) => setInterval(resolve, 1000));

  // const title = formData.get('title')
  // const location = formData.get('location')
  const rawData = Object.fromEntries(formData);
  console.log(rawData);
  // prisma.camp.create()
  // revalidatePath('/camp')
  // redirect('/')
  return "create camp success!!!";
};

export const fetchCamp = async () => {
  // prisma.camp.findMany({})
  const camps = [
    { id: 1, title: "โคราช" },
    { id: 2, title: "สระบุรี" },
    { id: 3, title: "นครนายก" },
  ];
  return camps;
};
