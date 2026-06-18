import { useState, useEffect } from "react";
import Section from "../common/Section";
import { supabase } from "../../lib/supabase";

interface Project {
  id: number;
  name: string;
  period: string;
  description: string;
  stack: string[];
  details: string;
  icon: string;
  images: string[];
}

function Projects() {
  const [projects, setProjects] = useState<Project[]>([]);
  const [selected, setSelected] = useState<Project | null>(null);
  const [modalImage, setModalImage] = useState<string | null>(null);

  useEffect(() => {
    const fetchProjects = async () => {
      const { data, error } = await supabase
        .from("projects")
        .select("*")
        .order("id", { ascending: true });

      if (error) console.error(error);
      if (data) {
        setProjects(data);
        if (!selected) setSelected(data[0]);
      }
    };

    fetchProjects();
  }, []);

  if (!selected) return null;

  return (
    <Section id="projects">
      <div className="max-w-6xl mx-auto w-full flex flex-col gap-6">
        <div className="rounded-2xl overflow-hidden">
          <div className="card-header px-4 py-2">
            <span className="card-title text-xs font-bold text-black">
              {selected.icon} {selected.name}
            </span>
          </div>
          <div className="bg-white p-6 flex flex-col gap-4 min-h-48">
            <div className="rounded-xl border border-gray-200 p-4 md:overflow-y-auto md:max-h-32">
              <p className="text-xs font-bold text-gray-700 mb-3">
                주요 기능 설명
              </p>
              <div className="text-sm text-gray-600 leading-relaxed">
                {selected.details
                  .split(".")
                  .filter(Boolean)
                  .map((item, i) => (
                    <div key={i} className="flex gap-2 mb-1">
                      <span>•</span>
                      <span>{item}</span>
                    </div>
                  ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div
                className={`rounded-xl border border-gray-200 p-4 ${!selected.images || selected.images.length === 0 ? "md:col-span-2" : ""}`}
              >
                <p className="text-xs font-bold text-gray-700 mb-3">
                  기술 스택
                </p>
                <div className="flex flex-wrap gap-2">
                  {selected.stack.map((s, i) => (
                    <span
                      key={i}
                      className="text-xs px-2 py-1 bg-gray-100 rounded-lg text-gray-600"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              {selected.images && selected.images.length > 0 && (
                <div className="rounded-xl border border-gray-200 p-4">
                  <p className="text-xs font-bold text-gray-700 mb-3">
                    화면 예시
                  </p>
                  <div className="grid grid-cols-2 gap-2">
                    {selected.images.map((url, i) => (
                      <img
                        key={i}
                        src={url}
                        alt={`${selected.name} 화면 ${i + 1}`}
                        className="rounded-lg aspect-video object-cover cursor-pointer hover:opacity-80 transition-opacity"
                        onClick={() => setModalImage(url)}
                      />
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="hidden md:flex overflow-x-auto gap-4 pb-2">
          {projects.map((project) => (
            <div
              key={project.id}
              onClick={(e) => {
                e.stopPropagation();
                setSelected(project);
              }}
              className="group relative rounded-2xl bg-white p-4 cursor-pointer transition-all shrink-0 w-64"
            >
              <p
                className={`text-sm font-bold mb-1 transition-colors group-hover:text-red-400 ${selected.id === project.id ? "text-red-400" : "text-gray-900"}`}
              >
                {project.icon} {project.name}
              </p>
              <p className="text-xs text-gray-400 mb-2 text-right">
                {project.period}
              </p>
              <hr
                style={{ borderTopWidth: "0.5px", borderColor: "black" }}
                className="mx-2 mb-2 border-0 border-t"
              />
              <p className="text-xs text-gray-600">{project.description}</p>
            </div>
          ))}
        </div>

        <div className="flex md:hidden overflow-x-auto snap-x snap-mandatory gap-4 pb-2">
          {projects.map((project) => (
            <div
              key={project.id}
              onClick={(e) => {
                e.stopPropagation();
                setSelected(project);
              }}
              className="group snap-center shrink-0 w-full rounded-2xl bg-white p-4 cursor-pointer"
            >
              <p
                className={`text-sm font-bold mb-1 transition-colors group-hover:text-red-400 ${selected.id === project.id ? "text-red-400" : "text-gray-900"}`}
              >
                {project.icon} {project.name}
              </p>
              <p className="text-xs text-gray-400 mb-2 text-right">
                {project.period}
              </p>
              <hr
                style={{ borderTopWidth: "0.5px", borderColor: "black" }}
                className="mx-2 mb-2 border-0 border-t"
              />
              <p className="text-xs text-gray-600">{project.description}</p>
            </div>
          ))}
        </div>
      </div>

      {modalImage && (
        <div
          className="fixed inset-0 bg-black/70 flex items-center justify-center z-50"
          onClick={() => setModalImage(null)}
        >
          <img
            src={modalImage}
            alt="화면 예시"
            className="max-w-3xl w-[90%] max-h-[80vh] rounded-xl object-contain"
          />
        </div>
      )}
    </Section>
  );
}

export default Projects;
