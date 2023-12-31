import { notFound } from "next/navigation";
import { db } from "@/db";

interface ShowProps {
  params: {
    id: string;
  };
}

export default async function SnippetShowPage(props: ShowProps) {
  const snippet = await db.snippet.findFirst({
    where: { id: parseInt(props.params.id) },
  });

  if (!snippet) {
    return notFound();
  }

  return <div>Show a snippet!</div>;
}
