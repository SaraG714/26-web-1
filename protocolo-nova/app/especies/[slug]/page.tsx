import Image from "next/image";

export default async function EspecieDetallePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  // Aquí el parámetro 'slug' es parte de la URL, no del ?query

  // 1. Consumir la API con el slug como filtro de especie
  const res = await fetch(`https://rickandmortyapi.com/api/character/?species=${slug}`);
  // 2. Asignar la respuesta
  const data = await res.json();

  return (
    <div className="p-10">
      <h2 className="text-3xl font-black text-emerald-500 uppercase mb-6">
        Análisis de Especie: {slug}
      </h2>
      {/* 3. Mostrar la UI — mapeo igual que en especies/page.tsx */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {data.results?.map((char: { id: number; name: string; image: string; species: string; status: string }) => (
          <div key={char.id} className="border border-slate-800 bg-slate-900/50 p-4 rounded-xl">
            <Image src={char.image} alt={char.name} width={300} height={300} className="w-full grayscale hover:grayscale-0 transition-all mb-4 rounded-lg" />
            <h3 className="text-emerald-400 font-bold">{char.name}</h3>
            <p className="text-[10px] text-slate-500 uppercase">{char.species} - {char.status}</p>
          </div>
        ))}
      </div>
    </div>
  );
}