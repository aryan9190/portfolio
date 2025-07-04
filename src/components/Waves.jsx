export default function Waves() {
    return (
        <div className="relative w-full h-32 overflow-hidden">
            <div className="absolute bottom-0 left-0 w-full h-full bg-gradient-to-t from-blue-800 to-transparent animate-wave z-0"></div>
            <div className="absolute bottom-0 left-0 w-full h-1 bg-yellow-400 blur-sm z-10"/>
        </div>
    );
}
