export function Logo() {
  return (
    <div className="flex items-center space-x-3 group">
      <div className="relative transform group-hover:scale-110 transition-transform duration-500">
        {/* Enhanced animated glow effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-800 to-blue-700 rounded-xl blur-xl opacity-0 group-hover:opacity-50 transition-all duration-500" />
        
        {/* Technical Space Logo Text */}
        <h1 className="text-2xl font-bold text-white group-hover:text-blue-500 transition-colors duration-300">
          Technical Spaces
        </h1>
      </div>
    </div>
  );
}