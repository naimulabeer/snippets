import SnippetEditForm from "@/components/snippet-edit-form";
import { db } from "@/db";
import { notFound } from "next/navigation";

interface SnippetsEditPageProps {
  params: {
    id: string;
  };
}

export default async function SnippetEditPage(props: SnippetsEditPageProps) {
  const id = parseInt(props.params.id);

  const snippet = await db.snippet.findFirst({
    where: { id },
  });

  if (!snippet) {
    return notFound();
  }
  return (
    <div className="text-3xl font-bold">
      <SnippetEditForm snippet={snippet} />
    </div>
  );
}
