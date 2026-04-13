export function Contact() {
  const telefone = "5535998104311";
  const mensagem = "Olá, vim pelo seu website e gostaria de conversar";
  const linkWhatsApp = `https://wa.me/${telefone}?text=${encodeURIComponent(mensagem)}`;

  return (
    <section id="contact" className="py-24 px-6 md:px-8 relative bg-surface">
      <div className="max-w-4xl mx-auto bg-background p-12 rounded-2xl text-center border border-white/5 shadow-2xl shadow-black/50">
        <h2 className="text-4xl md:text-5xl font-headline font-bold mb-6 tracking-tighter text-text-main">
          Pronto para construir <br className="hidden md:block" />
          O Futuro?
        </h2>

        <p className="text-text-muted font-body text-lg mb-10 max-w-2xl mx-auto">
          Disponível para oportunidades freelance e colaborações de alto impacto.
        </p>

        <div className="flex justify-center">
          <a
            href={linkWhatsApp}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary text-text-main px-10 py-4 font-body font-bold rounded-lg hover:bg-secondary hover:shadow-[0_0_40px_rgba(139,92,246,0.4)] transition-all duration-300 transform hover:-translate-y-1"
          >
            Vamos conversar!
          </a>
        </div>
      </div>
    </section>
  );
}
