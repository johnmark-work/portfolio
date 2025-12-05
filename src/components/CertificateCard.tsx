"use client";

interface CertificateCardProps {
  title: string;
  provider: string;
  image: string;
  onClick: () => void;
}

const CertificateCard = ({ title, provider, image, onClick }: CertificateCardProps) => {
  return (
    <div
      onClick={onClick}
      className="relative w-full h-full bg-transparent shadow-sm border border-zinc-200 rounded-sm overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:scale-105 cursor-pointer group"
    >
      {/* Image */}
      <img
        src={image}
        alt={title}
        className="absolute inset-0 w-full h-full object-cover transition-all duration-300 group-hover:opacity-0 group-hover:bg-zinc-200"
      />

      {/* Hidden text overlay (visible on hover) */}
      <div className="absolute inset-0 bg-black/0 group-hover:bg-zinc-50 flex flex-col justify-center items-center text-center text-black opacity-0 group-hover:opacity-100 transition-all duration-300 rounded-sm">
        <h4 className="text-xs sm:text-sm md:text-xs lg:text-sm font-medium">{title}</h4>
        <p className="text-xs sm:text-sm md:text-xs lg:text-sm text-gray-600">{provider}</p>
      </div>
    </div>
  );
};

export default CertificateCard;