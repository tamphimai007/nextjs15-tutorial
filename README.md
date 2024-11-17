## Step 1 Install จ้า (roitai คือชื่อโฟลเดอร์)

```sh
npx create-next-app@latest roitai
```

## ถ้ามีเรื่อง

```sh
npm cache clean --force
```

### Routing

```plaintext
/app
  /about
    /page.tsx          # http://localhost:3000/about
  /info
    /page.tsx          # http://localhost:3000/info
          [id]         # [id] params folder
            /page.tsx  # http://localhost:3000/info/123456
  /_folder             # Private Folder (no public access)
  /(auth)              # Groups Folder
    /login
        /page.tsx      # http://localhost:3000/login
    /[...sign-in]         # params
        /page.tsx      # http://localhost:3000/sign-in
    /register
        /page.tsx      # http://localhost:3000/register
```

## Step 2 Metadata

```tsx
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Roitai",
  description: "Camping in Thailand.",
  keywords: "Camping, Thailand, Roitai",
};
```

### Step 3 Server Components

### Default เป็น Server Component

- SEO ที่ดี (Search Engine Optimization)
- ความปลอดภัย
- Caching

### Client Components

### ถ้าจะใช้ต้องเพิ่ม 'use client'

- Client Components สามารถใช้ state, effects และ event listeners
- สามารถใช้ Browser APIs เช่น geolocation หรือ localStorage

## Step 4 Fetch Data

```tsx
const url = "https://jsonplaceholder.typicode.com/todos";
```

### Loading...

### Error

### params

### Step 5 Image

```tsx
const url =
  "https://fastly.picsum.photos/id/0/5000/3333.jpg?hmac=_j6ghY5fCfSD6tvtcV74zXivkJSPIfR9B8w34XeQmvU";
```

### next.config.ts

```tsx
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "fastly.picsum.photos",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
```

Next.js <Image /> component

- ช่วยให้การจัดการภาพในเว็บไซต์มีประสิทธิภาพมากขึ้นโดยอัตโนมัติ
- ปรับขนาดภาพให้เหมาะสม ลดการเลื่อนเลย์เอาต์ และเพิ่มความเร็วในการโหลดหน้าเว็บ

# Step 6 Server Actions

```tsx
export default const ServerComponent =()=>{
    const myAction = async(formData) =>{
        'use server'
            // จัดการข้อมูลจาก form -> formData.get('name')
            // CRUD ข้อมูล -> mutate data (server)
            // รีเฟรชข้อมูล -> revalidate cache
    }

    return <form action={myAction}>... </form>
}
```

```tsx
'use client'
import { myAction } from './action'
export default const ClientComponent = ()=>{
    return (
        <form action={myAction}>
            <button type='submit'>Add </button>
        </form>
    )
}

```

# actions.tsx

```ts
export const createCamp = async (formData) => {
  // const firstName = formData.get('title')
  // const description = formData.get('description')
  const rawData = Object.fromEntries(formData);
  console.log(rawData);
  // db.camp.create({})
  // revalidatePath('/actions') // refresh Data
  // redirect('/')
};

export const fetchCamp = async () => {
  // db.camp.findMany({})
  const user = [
    { id: 1, title: "Route 3060" },
    { id: 2, title: "Korat" },
  ];

  return user;
};
```

# Step 7 https://react.dev/reference/react/useActionState

```tsx
const [state, formAction, isPending] = useActionState(fn, initialState, permalink?);
```

# https://react.dev/reference/react-dom/hooks/

```tsx
const { pending, data, method, action } = useFormStatus();
```

# Step 8 API
```plaintext
/api
    /camp
        /route.ts
```
```ts
import { fetchCamp } from "@/utils/actions";
import { NextResponse } from "next/server";

export const GET = async (req: NextResponse) => {
  const { searchParams } = new URL(req.url);
  const id = searchParams.get("id");
  console.log(id);

  const camps = await fetchCamp();
  //   return Response.json({ camps });
  return NextResponse.redirect(new URL("/", req.url));
};
```

# Step 9 Middleware
```ts
import { NextResponse } from "next/server";

export function middleware(req: Request) {
  console.log("hello middleware");
  return NextResponse.redirect(new URL("/", req.url));
}

export const config = {
  // matcher : '/counter'
  matcher: ["/about/:path*", "/counter/:path*"],
};
```


# Step 10 Type 
- เมื่อไม่กำหนด type TypeScript จะมองว่า data เป็น any ซึ่งหมายความว่าไม่มีการตรวจสอบชนิดข้อมูลเลย
- โค้ดอ่านง่ายขึ้น เพราะเห็นโครงสร้างข้อมูลชัดเจน
- ลดข้อผิดพลาด เพราะ TypeScript ช่วยตรวจสอบและแนะนำการใช้งาน property
