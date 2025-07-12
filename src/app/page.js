// src/app/page.js
import Link from 'next/link';
import { getAllPostsData } from '../../lib/posts';

export default function HomePage() {
  const posts = getAllPostsData();

  return (
    <main className="max-w-4xl mx-auto px-6 py-12">
      {/* Hero Section */}
      <section className="mb-16">
        <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
          Ulises Rodríguez Candela
        </h1>
        <p className="text-xl text-gray-600 mb-4 leading-relaxed">
          Hola! 👋🏻 Soy Ulises, una persona normal con curiosidad constante sobre áreas multidisciplinarias.
        </p>
        <p className="text-lg text-gray-700 leading-relaxed">
          Me gusta aprender y compartir lo que aprendo, por eso creo este blog.
        </p>
      </section>

      {/* About Section */}
      <section className="mb-16">
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

      {/* Interests Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-6">Intereses</h2>
        <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
          <p>
            Me gusta mucho hablar sobre ingeniería y tecnología, también me gusta mucho el tema de la superación personal y el crecimiento personal.
          </p>
          <p>
            Otro tema que se podría decir que me apasiona bastante son las finanzas e inversiones, me gusta mucho la bolsa de valores y la inversión en empresas.
          </p>
        </div>
      </section>

      {/* Latest Posts Section */}
      <section>
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Últimos posts</h2>
        {posts.length > 0 ? (
          <div className="grid gap-6 md:grid-cols-2">
            {posts.map(post => (
              <article key={post.slug} className="group">
                <Link href={`/blog/${post.slug}`} className="block">
                  <div className="bg-white border border-gray-200 rounded-xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 group-hover:border-gray-300">
                    <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                      {post.frontMatter.title}
                    </h3>
                    {post.frontMatter.date && (
                      <time className="text-sm text-gray-500 font-medium">
                        {new Date(post.frontMatter.date).toLocaleDateString('es-ES', {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        })}
                      </time>
                    )}
                    {post.frontMatter.excerpt && (
                      <p className="text-gray-600 mt-4 leading-relaxed">
                        {post.frontMatter.excerpt}
                      </p>
                    )}
                    <div className="mt-4 text-blue-600 font-medium text-sm group-hover:text-blue-700 transition-colors">
                      Leer más →
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No hay posts publicados aún.</p>
          </div>
        )}
      </section>
    </main>
  );
}
