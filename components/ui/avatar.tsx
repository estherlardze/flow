"use client";

import React from "react";

interface AvatarProps {
  name?: string;
  initials?: string;
  showAsButton?: boolean;
}

export default function Avatar({
  name,
  initials,
  showAsButton = true,
}: Readonly<AvatarProps>) {
  const [showTooltip, setShowTooltip] = React.useState(false);

  const avatarContent = (
    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center text-xs font-semibold text-blue-700 transition-all duration-200 hover:from-blue-200 hover:to-blue-300 hover:scale-105 shadow-sm">
      {initials}
    </div>
  );

  if (!showAsButton) {
    return avatarContent;
  }

  return (
    <div className="relative">
      <button
        className="flex items-center gap-3 text-left hover:bg-transparent border-none p-0 bg-transparent"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        type="button"
        aria-label={`View details for ${name}`}
      >
        {avatarContent}
        <div className="text-sm font-medium text-gray-900 hover:text-blue-600 transition-colors duration-150">
          {name}
        </div>
      </button>

      {showTooltip && name && (
        <div className="absolute bottom-full left-0 mb-2 px-2 py-1 bg-gray-900 text-white text-xs rounded shadow-lg z-10 whitespace-nowrap animate-in fade-in duration-200">
          {name}
          <div className="absolute top-full left-2 w-0 h-0 border-l-2 border-r-2 border-t-2 border-transparent border-t-gray-900"></div>
        </div>
      )}
    </div>
  );
}
