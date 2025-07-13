import { FcIdea } from "react-icons/fc";

export default function Interests() {
  return (
    <section className="mb-16">
      {/* Interests Section */}
      <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-2">
        <FcIdea />
        Intereses
      </h2>
      <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
        <p>
          Me gusta mucho hablar sobre ingeniería y tecnología, también me gusta mucho el tema de la superación personal y el crecimiento personal.
        </p>
        <p>
          Otro tema que se podría decir que me apasiona bastante son las finanzas e inversiones, me gusta mucho la bolsa de valores y la inversión en empresas.
        </p>
      </div>
    </section>
  );
}