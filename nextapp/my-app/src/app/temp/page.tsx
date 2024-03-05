'use client';

import { useRouter } from 'next/navigation';

export default function Temp() {
  const router = useRouter();
  return (
    <form
      onSubmit={(e: any) => {
        e.preventDefault();
        const title = e.target.title.value;
        const body = e.target.body.value;
        const options = {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ title, author: body }),
        };
        fetch(process.env.NEXT_PUBLIC_API_URL + `posts`, options)
          .then((res) => {
            return res.json();
          })
          .then((result) => {
            console.log(result);
            const lastid = result.id;
            router.push(`/read/${lastid}`);
            router.refresh();
          });
      }}
    >
      <p>
        <input type="text" name="title" placeholder="title" />
      </p>
      <p>
        <textarea name="body" placeholder="body" />
      </p>
      <p>
        <input type="submit" value="create"></input>
      </p>
    </form>
  );
}
