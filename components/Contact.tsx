'use client';

const ContactSection = () => (
    <section id="contact" className="py-24 sm:py-32 border-t border-border">
        <div className="container max-w-2xl mx-auto">
            <h2 className="text-3xl sm:text-4xl font-anton mb-6 text-center">
                Contact Me
            </h2>
            <form className="space-y-6 bg-background/60 p-8 rounded-2xl border border-border shadow">
                <div>
                    <label htmlFor="name" className="block mb-2 font-medium">
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        className="w-full rounded-xl border border-border bg-muted/40 px-4 py-3 outline-none focus:border-foreground"
                        placeholder="Your name"
                        autoComplete="name"
                    />
                </div>
                <div>
                    <label htmlFor="email" className="block mb-2 font-medium">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        className="w-full rounded-xl border border-border bg-muted/40 px-4 py-3 outline-none focus:border-foreground"
                        placeholder="you@example.com"
                        autoComplete="email"
                    />
                </div>
                <div>
                    <label htmlFor="message" className="block mb-2 font-medium">
                        Message
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        rows={6}
                        className="w-full rounded-xl border border-border bg-muted/40 px-4 py-3 outline-none focus:border-foreground resize-none"
                        placeholder="Your message"
                    />
                </div>
                <button
                    type="submit"
                    className="w-full rounded-xl bg-foreground px-4 py-3 text-background font-semibold transition hover:bg-foreground/80"
                >
                    Send
                </button>
            </form>
        </div>
    </section>
);

export default ContactSection;
