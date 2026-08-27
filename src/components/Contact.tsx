import { CONTACT } from "@/data/nav";

export function Contact() {
  const mensagem = "Olá, vim pelo seu website e gostaria de conversar";
  const linkWhatsApp = `https://wa.me/${CONTACT.whatsapp}?text=${encodeURIComponent(mensagem)}`;

  return (
    <section id="contact" className="py-24 bg-surface">
      <div className="mx-auto max-w-7xl px-6 md:px-12 lg:px-20">
        <div className="max-w-4xl mx-auto bg-background p-8 sm:p-12 rounded-2xl text-center border border-white/5 shadow-2xl shadow-black/50">
          <h2 className="text-4xl md:text-5xl font-headline font-bold mb-6 tracking-tighter text-text-main">
            Pronto para construir <br />
            O Futuro?
          </h2>

          <p className="text-text-muted font-body text-lg mb-10 max-w-2xl mx-auto">
            Disponível para vagas 100% remotas, em CLT, PJ ou como contractor.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href={linkWhatsApp}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary text-text-main px-10 py-4 font-body font-bold rounded-lg hover:bg-secondary hover:shadow-[0_0_40px_rgba(139,92,246,0.4)] transition-all duration-300 transform hover:-translate-y-1 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              Vamos conversar!
              <span className="sr-only"> pelo WhatsApp (abre em nova aba)</span>
            </a>

            <a
              href={`mailto:${CONTACT.email}`}
              className="bg-surface text-text-muted px-10 py-4 font-body font-bold rounded-lg border border-white/10 hover:bg-white/5 hover:text-text-main transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              Enviar email
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
