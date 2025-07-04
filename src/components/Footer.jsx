export default function Footer() {
    return (
        <footer className="text-center py-8 bg-black bg-opacity-80 mt-32 text-yellow-300">
            <p className="text-sm">© {new Date().getFullYear()} Aryan, el Nino</p>
            <div className="flex justify-center mt-2 gap-4 text-xl">
                <a href="https://github.com/aryan9190" target="_blank" rel="noreferrer" aria-label="GitHub">🐙</a>
            </div>
        </footer>
    );
}
