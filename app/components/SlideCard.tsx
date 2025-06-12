"use client";

interface SlideCardProps {
  title?: string;
  icon?: string;
  children: React.ReactNode;
  className?: string;
  gradient?: boolean;
}

export default function SlideCard({
  title,
  icon,
  children,
  className = "",
  gradient = false,
}: SlideCardProps) {
  return (
    <div
      className={`
        bg-white/5 backdrop-blur-sm border border-white/10 
        p-4 sm:p-6 rounded-2xl shadow-lg hover:shadow-xl 
        transition-all duration-300 h-full
        ${gradient ? "hover:bg-white/10" : ""}
        ${className}
      `}
    >
      {(title || icon) && (
        <div className="flex items-center mb-4">
          {icon && (
            <div className="w-8 h-8 sm:w-12 sm:h-12 bg-pink-500/80 rounded-xl flex items-center justify-center mr-3 sm:mr-4">
              <span className="text-white text-sm sm:text-xl">{icon}</span>
            </div>
          )}
          {title && (
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white">
              {title}
            </h3>
          )}
        </div>
      )}
      <div className="text-gray-300 space-y-2 sm:space-y-3 text-sm sm:text-base">
        {children}
      </div>
    </div>
  );
}
