interface GlobeProps {
  className?: string;
  size?: number;
}

export default function Globe({ className = "", size = 44 }: GlobeProps) {
  return (
    <div
      className={`globe-wireframe flex items-center justify-center ${className}`}
      style={{ width: `${size}px`, height: `${size}px` }}
    >
      <div className="globe-circle-vertical"></div>
      <div className="globe-circle-vertical" style={{ animationDelay: "-3s" }}></div>
      <div className="globe-circle-hor"></div>
      <div className="globe-circle-hor-2"></div>
      <div className="globe-circle-hor-3"></div>
    </div>
  );
}
