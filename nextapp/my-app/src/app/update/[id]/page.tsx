'use client';

import { useParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function Update() {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const router = useRouter();
  const params = useParams();
  useEffect(() => {
    fetch(`http://localhost:9999/posts/` + params.id)
      .then((res) => {
        return res.json();
      })
      .then((result) => {
        console.log(result);
        setTitle(result.title);
        setBody(result.author);
      });
  }, []);
  return (
    <form
      onSubmit={(e: any) => {
        e.preventDefault();
        const title = e.target.title.value;
        const body = e.target.body.value;
        const options = {
          method: 'PATCH',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ title, author: body }),
        };
        fetch(`${process.env.NEXT_PUBLIC_API_URL}posts/` + params.id, options)
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
        <input
          type="text"
          name="title"
          placeholder="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </p>
      <p>
        <textarea
          name="body"
          placeholder="body"
          value={body}
          onChange={(e) => setBody(e.target.value)}
        />
      </p>
      <p>
        <input type="submit" value="create"></input>
      </p>
    </form>
  );
}
