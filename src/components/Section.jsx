export default function Section({ id, title, children, addClass = "" }) {
    return (
        <section id={id} className={`relative mx-auto px-6 md:px-12 py-16 my-14 ${addClass}`}>
            <div className="absolute inset-0 bg-background-light/60 dark:bg-background-dark/60 backdrop-blur-md border border-white/10 dark:border-white/5 rounded-lg shadow-glass dark:shadow-glass-dark -z-10"></div>
            <h2 className="heading-lg font-light mb-10 relative flex items-center text-primary-light dark:text-primary-dark">
                <span className="inline-block w-8 h-0.5 bg-primary-light/30 dark:bg-primary-dark/30 mr-4"></span>
                {title}
            </h2>
            <div className="animate-fade-in space-y-6">{children}</div>
        </section>
    );
} 