interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

export default async function ScanPage({
  params,
}: PageProps) {
  const { id } = await params;

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-100">
      <div className="rounded-2xl bg-white p-10 shadow text-center">

        <h1 className="mb-6 text-4xl font-bold">
          Scan Success 🎉
        </h1>

        <p className="mb-6 text-xl">
          Customer ID: {id}
        </p>

        <a
          href={`/customers/${id}`}
          className="rounded-xl bg-blue-600 px-6 py-3 text-white"
        >
          View Customer
        </a>

      </div>
    </div>
  );
}