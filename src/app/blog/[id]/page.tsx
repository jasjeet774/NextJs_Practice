
interface BlogPageProps {
  params: {
    id: string;
  };
}

export default function BlogPage({ params }: BlogPageProps) {
  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">Blog Post ID: {params.id}</h1>
      <p className="text-gray-600">This is a dynamic page for blog post number {params.id}.</p>
    </div>
  );
}
