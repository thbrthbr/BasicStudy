'use client';
import Link from 'next/link';
import { useParams, useRouter } from 'next/navigation';

export function Control() {
  const params = useParams();
  const router = useRouter();
  console.log(params);
  const id = params.id;
  return (
    <>
      <Link href="/temp">작성</Link>
      {id ? (
        <>
          <br></br>
          <Link href={`/update/${id}`}>업데이트</Link>
          <br></br>
          <input
            type="button"
            value="delete"
            onClick={() => {
              const options = {
                method: 'DELETE',
              };
              fetch(process.env.NEXT_PUBLIC_API_URL + 'posts/' + id, options)
                .then((res) => res.json())
                .then((result) => {
                  router.push('/');
                  router.refresh();
                });
            }}
          />
        </>
      ) : null}
    </>
  );
}
