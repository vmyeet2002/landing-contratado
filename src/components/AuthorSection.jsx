export default function AuthorSection() {
  const authorImage = "https://lh3.googleusercontent.com/aida-public/AB6AXuBRkViJ513IPJyKryNxcxOtLxSkFdUOaS91zgboieNX0D35A9m2UO9v00_JM5e8hQSFDNY-r0TdN2MKdU_dzI8D-zF_WkCQcEhV15lfHWs25l0kESzTTYKf9AqeQOVrhfVNMUxJPHwkY5trdzRXXN9EiXz6uPJvBDYRftJs3ZRw7SggEC2ZcQ4-YBxvvfEvWnifFy_TLw59niP6yxB4sMcDV5EZZ3zvULPdMrgtsbXRxeNAswWPWIZzXSzlEV1cPu16YIHeMhXgqYY";

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
        {/* Left - Image */}
        <div className="lg:col-span-5 relative">
          <div className="aspect-square rounded-2xl overflow-hidden relative">
            <img
              alt="Isaac González"
              className="w-full h-full object-cover"
              src={authorImage}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent opacity-60"></div>
          </div>

          <div className="absolute -bottom-6 -right-6 glass-panel p-6 rounded-xl border border-outline-variant/20 shadow-xl max-w-[240px]">
            <p className="text-xs font-label uppercase text-primary tracking-widest mb-2">
              EXPERIENCIA
            </p>
            <p className="text-lg font-headline font-bold">
              25 años en Data Science &amp; Psicología
            </p>
          </div>
        </div>

        {/* Right - Content */}
        <div className="lg:col-span-7 space-y-8">
          <h2 className="text-4xl font-headline font-bold text-on-background">
            Tu mentor: Isaac González
          </h2>

          <div className="space-y-4 text-lg text-on-surface-variant font-light leading-relaxed">
            <p>
              Casi 25 años dedicado en exclusiva a Data Science y Analytics. De junior a Director, entrevistando a cientos de candidatos para mis propios equipos.
            </p>
            <p>
              Psicólogo especializado en selección de personal, lo que me permite conocer exactamente cómo te evalúan.
            </p>
          </div>

          <div className="flex gap-8">
            <div>
              <p className="text-3xl font-headline font-bold text-on-surface">25+</p>
              <p className="text-xs font-label uppercase tracking-widest text-on-surface-variant">
                Años Experiencia
              </p>
            </div>
            <div className="w-px h-12 bg-outline-variant/20"></div>
            <div>
              <p className="text-3xl font-headline font-bold text-on-surface">500+</p>
              <p className="text-xs font-label uppercase tracking-widest text-on-surface-variant">
                Mentoreados
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
