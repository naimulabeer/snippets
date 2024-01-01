interface SnippetsEditPageProps {
  params: {
    id: string;
  };
}

export default function SnippetEditPage(props: SnippetsEditPageProps) {
  const id = parseInt(props.params.id);
  return <div>Editing snippets for id #{id}</div>;
}
