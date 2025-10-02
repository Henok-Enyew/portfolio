// import { GENERAL_INFO, SOCIAL_LINKS } from '@/lib/data';

// const Footer = () => {
//     return (
//         <footer className="text-center pb-5" id="contact">
//             <div className="container">
//                 <p className="text-lg">Have a project in mind?</p>
//                 <a
//                     href={`mailto:${GENERAL_INFO.email}`}
//                     className="text-3xl sm:text-4xl font-anton inline-block mt-5 mb-10 hover:underline"
//                 >
//                     {GENERAL_INFO.email}
//                 </a>

//                 <div className="space-y-3 text-muted-foreground">
//                     {/* <p>
//                         Design &amp; built by{' '}
//                         <span className="text-foreground">Henok Enyew</span>
//                     </p> */}
//                     <div className="flex flex-wrap justify-center gap-4 text-sm">
//                         {SOCIAL_LINKS.map((link) => (
//                             <a
//                                 key={link.name}
//                                 href={link.url}
//                                 target="_blank"
//                                 rel="noreferrer"
//                                 className="hover:text-foreground hover:underline capitalize"
//                             >
//                                 {link.name}
//                             </a>
//                         ))}
//                     </div>
//                 </div>
//             </div>
//         </footer>
//     );
// };

// export default Footer;
import { GENERAL_INFO, SOCIAL_LINKS } from '@/lib/data';

const icons: Record<string, JSX.Element> = {
    github: (
        <svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 .5C5.73.5.5 5.73.5 12c0 5.08 3.29 9.39 7.86 10.93.58.11.79-.25.79-.56v-2.02c-3.2.7-3.87-1.54-3.87-1.54-.53-1.34-1.3-1.7-1.3-1.7-1.06-.73.08-.72.08-.72 1.17.08 1.79 1.2 1.79 1.2 1.04 1.78 2.73 1.27 3.4.97.11-.75.41-1.27.75-1.56-2.56-.29-5.25-1.28-5.25-5.7 0-1.26.45-2.29 1.19-3.09-.12-.29-.52-1.46.11-3.04 0 0 .97-.31 3.18 1.18a11.1 11.1 0 012.9-.39c.99.01 1.99.13 2.92.39 2.2-1.49 3.17-1.18 3.17-1.18.63 1.58.23 2.75.12 3.04.74.8 1.19 1.83 1.19 3.09 0 4.43-2.7 5.41-5.27 5.69.42.36.8 1.08.8 2.18v3.23c0 .31.21.67.8.56C20.71 21.39 24 17.08 24 12c0-6.27-5.23-11.5-12-11.5z" />
        </svg>
    ),
    linkedin: (
        <svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24">
            <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.25c-.97 0-1.75-.78-1.75-1.75s.78-1.75 1.75-1.75 1.75.78 1.75 1.75-.78 1.75-1.75 1.75zm13.5 11.25h-3v-5.5c0-1.32-.03-3-1.83-3-1.83 0-2.11 1.43-2.11 2.91v5.59h-3v-10h2.88v1.36h.04c.4-.76 1.38-1.56 2.84-1.56 3.04 0 3.6 2 3.6 4.59v5.61z" />
        </svg>
    ),
    upwork: (
        <svg width="28" height="28" fill="currentColor" viewBox="0 0 32 32">
            <path d="M27.6 10.7c-2.1 0-3.9 1.7-3.9 3.9 0 .7.2 1.4.5 2l-2.7 4.7-3.6-6.2v-5.1h-3.2v5.1c0 2.7-2.2 4.9-4.9 4.9s-4.9-2.2-4.9-4.9v-5.1h-3.2v5.1c0 4.5 3.6 8.1 8.1 8.1 2.1 0 4-.8 5.5-2.2l2.1 3.6h3.2l4.1-7c.7.3 1.4.5 2.2.5 2.1 0 3.9-1.7 3.9-3.9s-1.8-3.9-3.9-3.9zm0 5.6c-.9 0-1.7-.7-1.7-1.7s.7-1.7 1.7-1.7 1.7.7 1.7 1.7-.8 1.7-1.7 1.7z" />
        </svg>
    ),
    telegram: (
        <svg width="28" height="28" fill="currentColor" viewBox="0 0 32 32">
            <path d="M16 0c-8.837 0-16 7.163-16 16s7.163 16 16 16 16-7.163 16-16-7.163-16-16-16zm7.219 10.219l-2.969 13.969c-.219.938-.781 1.188-1.594.75l-4.406-3.25-2.125 2.063c-.234.234-.438.438-.906.438l.313-4.438 8.094-7.313c.352-.313-.078-.484-.547-.172l-10.031 6.313-4.313-1.344c-.938-.297-.953-.938.188-1.391l16.844-6.5c.781-.297 1.453.188 1.188 1.172z" />
        </svg>
    ),
    x: (
        <svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24">
            <path d="M17.53 7.47L13 12l4.53 4.53c.39.39.39 1.02 0 1.41-.39.39-1.02.39-1.41 0L12 13l-4.53 4.53c-.39.39-1.02.39-1.41 0-.39-.39-.39-1.02 0-1.41L11 12 6.47 7.47c-.39-.39-.39-1.02 0-1.41.39-.39 1.02-.39 1.41 0L12 11l4.53-4.53c.39-.39 1.02-.39 1.41 0 .39.39.39 1.02 0 1.41z" />
        </svg>
    ),
    leetcode: (
        // <svg width="28" height="28" fill="currentColor" viewBox="0 0 24 24">
        //     <path d="M7.5 17c-.3 0-.6-.1-.8-.3l-4.2-4.2c-.4-.4-.4-1 0-1.4l4.2-4.2c.4-.4 1-.4 1.4 0s.4 1 0 1.4L5.1 12l4.1 4.1c.4.4.4 1 0 1.4-.2.2-.5.3-.7.3zm9 0c-.3 0-.6-.1-.8-.3-.4-.4-.4-1 0-1.4L18.9 12l-4.2-4.2c-.4-.4-.4-1 0-1.4s1-.4 1.4 0l4.2 4.2c.4.4.4 1 0 1.4l-4.2 4.2c-.2.2-.5.3-.7.3z" />
        //     <circle cx="12" cy="12" r="1.5" />
        // </svg>
        <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            role="img"
            viewBox="0 0 24 24"
            height="28"
            width="28"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104 5.35 5.35 0 0 0-.125.513 5.527 5.527 0 0 0 .062 2.362 5.83 5.83 0 0 0 .349 1.017 5.938 5.938 0 0 0 1.271 1.818l4.277 4.193.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523 2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382 1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382 1.38 1.38 0 0 0-1.38-1.382z"></path>
        </svg>
    ),
};

const Footer = () => {
    return (
        <footer className="text-center pb-5" id="footer">
            <div className="container">
                <p className="text-lg">Have a project in mind?</p>
                <a
                    href={`mailto:${GENERAL_INFO.email}`}
                    className="text-3xl sm:text-4xl font-anton inline-block mt-5 mb-10 hover:underline"
                >
                    {GENERAL_INFO.email}
                </a>
                <div className="flex justify-center gap-6 mt-6">
                    {SOCIAL_LINKS.map((link) => (
                        <a
                            key={link.name}
                            href={link.url}
                            target="_blank"
                            rel="noreferrer"
                            className="hover:text-foreground transition"
                            aria-label={link.name}
                        >
                            {icons[link.name.toLowerCase()] ?? null}
                        </a>
                    ))}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
