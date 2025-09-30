import { GENERAL_INFO, SOCIAL_LINKS } from '@/lib/data';

const Footer = () => {
    return (
        <footer className="text-center pb-5" id="contact">
            <div className="container">
                <p className="text-lg">Have a project in mind?</p>
                <a
                    href={`mailto:${GENERAL_INFO.email}`}
                    className="text-3xl sm:text-4xl font-anton inline-block mt-5 mb-10 hover:underline"
                >
                    {GENERAL_INFO.email}
                </a>

                <div className="space-y-3 text-muted-foreground">
                    <p>
                        Design &amp; built by{' '}
                        <span className="text-foreground">Henok Enyew</span>
                    </p>
                    <div className="flex flex-wrap justify-center gap-4 text-sm">
                        {SOCIAL_LINKS.map((link) => (
                            <a
                                key={link.name}
                                href={link.url}
                                target="_blank"
                                rel="noreferrer"
                                className="hover:text-foreground hover:underline capitalize"
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
