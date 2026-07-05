import { getStructuredData } from "@/lib/structured-data";

export default function StructuredData() {
  const graphs = getStructuredData();

  return (
    <>
      {graphs.map((graph) => (
        <script
          key={graph["@type"]}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(graph) }}
        />
      ))}
    </>
  );
}
