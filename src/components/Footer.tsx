
export function Footer() {
  return (
    <footer className="bg-black text-white py-12 border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-center md:text-left">
              <p className="text-[#CCCCCC]">
                © 2025 Technical Space. All rights reserved.
              </p>
            </div>
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
              <a href="#" className="text-[#CCCCCC] hover:text-blue-500 transition-colors duration-300 text-sm">Privacy Policy</a>
              <span className="text-[#555555]">•</span>
              <a href="#" className="text-[#CCCCCC] hover:text-blue-500 transition-colors duration-300 text-sm">Terms of Service</a>
              <span className="text-[#555555]">•</span>
              <a href="#" className="text-[#CCCCCC] hover:text-blue-500 transition-colors duration-300 text-sm">Cookie Policy</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}