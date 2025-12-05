"use client";
import { useState } from "react";
import CertificateCard from "@/components/CertificateCard";
import CertificateModal from "@/components/CertificateModal";

const certificates = [
  { title: "Agile & Project Management", provider: "Udemy", image: "/assets/certificates/agile-pm.webp" },
  { title: "Project Management Course", provider: "MST Connect", image: "/assets/certificates/project-management.webp" },
  { title: "Agile Scrum Training", provider: "ICI", image: "/assets/certificates/agile-scrum.webp" },
  { title: "Leadership 101", provider: "MST Connect", image: "/assets/certificates/leadership.webp" },
];

const awards = [
  { title: "Best in Internship", provider: "Cavite State University", image: "/assets/certificates/internship-award.webp" },
  { title: "Excellence Award", provider: "Incub8 Space", image: "/assets/certificates/excellence-award.webp" },
  { title: "Internship", provider: "Incub8 Space", image: "/assets/certificates/completion.webp" },
  { title: "Work Immersion", provider: "GEAM Hospital", image: "/assets/certificates/work-immersion.webp" },
];

const CertificatesSection = () => {
  const [selected, setSelected] = useState<any>(null);

  return (
    <section
      id="certificates"
      className="min-h-screen flex flex-col justify-center py-12 px-6 md:px-12 lg:px-16 bg-zinc-50 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-size-[14px_24px]"
    >
      {/* HEADER */}
      <div className="text-center mt-8 mb-2">
        <h2 className="text-xl sm:text-3xl md:text-3xl lg:text-3xl font-bold">The Learning Journey</h2>
      </div>

      {/* Trainings */}
      <h3 className="text-xl font-medium text-center text-black/80 mb-2">Trainings</h3>
      <div className="flex flex-wrap justify-center gap-4">
        {certificates.map((item, i) => (
          <div
            key={i}
            className="flex items-center justify-center w-full sm:w-[47%] md:w-[22%] lg:w-[22%] h-[30vh] sm:h-[22vh] md:h-[26vh] lg:h-[28vh]"
          >
            <CertificateCard
              title={item.title}
              provider={item.provider}
              image={item.image}
              onClick={() => setSelected(item)}
            />
          </div>
        ))}
      </div>

      {/* Awards */}
      <h3 className="text-xl font-medium text-center text-black/80 mt-2 mb-2">Awards</h3>
      <div className="flex flex-wrap justify-center gap-4">
        {awards.map((item, i) => (
          <div
            key={i}
            className="flex items-center justify-center w-full sm:w-[47%] md:w-[22%] lg:w-[22%] h-[30vh] sm:h-[22vh] md:h-[26vh] lg:h-[28vh]"
          >
            <CertificateCard
              title={item.title}
              provider={item.provider}
              image={item.image}
              onClick={() => setSelected(item)}
            />
          </div>
        ))}
      </div>

      {/* MODAL */}
      {selected && (
        <CertificateModal
          isOpen={!!selected}
          onClose={() => setSelected(null)}
          title={selected.title}
          provider={selected.provider}
          image={selected.image}
        />
      )}
    </section>
  );
};

export default CertificatesSection;