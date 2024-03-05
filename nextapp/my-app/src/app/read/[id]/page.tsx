export default async function Read(props: any) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}posts/${props.params.id}`,
    {
      next: { revalidate: 0 },
    },
  );
  const temp = await res.json();
  return (
    <>
      <h2>Read</h2>
      parameters : {temp.title}
    </>
  );
}
