export default function About() {
  return (
    <section className="mb-16">
      {/* About Section */}
      <h2 className="text-3xl font-bold text-gray-900 mb-6">Sobre mí</h2>
      <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
        <p>
          Soy un ingeniero de software, me gusta la tecnología y la ciencia, disfruto de la lectura y el aprendizaje constante.
        </p>
        <p>
          Me gusta compartir mis experiencias y conocimientos. Lograr que las personas se lleven valor agregado de mi parte es lo que me motiva.
        </p>
        <p>
          Tengo Maestría en Administración de Tecnologías de la Información, me gusta la administración de proyectos y la gestión de equipos.
        </p>
        <p>
          Mi formación universitaria fue en Ingeniería Mecatrónica, me gusta la robótica, la electrónica, la automatización de procesos, la mecánica y por supuesto las matemáticas.
        </p>
        <div className="mt-4 w-fit text-blue-700 font-medium text-sm bg-white border border-gray-200 rounded-xl p-2.5 shadow-sm hover:shadow-lg transition-all duration-300 group-hover:border-gray-300 hover:cursor-pointer">
          Ver CV →
        </div>
      </div>
    </section>
  );
}