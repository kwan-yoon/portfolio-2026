import { useState } from "react";

const projects = [
  {
    id: 1,
    name: "GMT 게임 관리도구",
    period: "2020.10 ~ 2026.05",
    description: "게임 운영을 위한 백오피스 관리 도구",
    stack: ["React", "Node.js", "PostgreSQL", "Docker"],
    details: "주요 기능 설명 및 화면 예시 더미 텍스트입니다.",
    icon: "🎮",
  },
  {
    id: 2,
    name: "프로젝트2",
    period: "2023.01 ~ 2023.06",
    description: "프로젝트2 짧은 설명",
    stack: ["React", "TypeScript", "Supabase"],
    details: "주요 기능 설명 및 화면 예시 더미 텍스트입니다.",
    icon: "🛠",
  },
  {
    id: 3,
    name: "프로젝트3",
    period: "2024.01 ~ 2024.06",
    description: "프로젝트3 짧은 설명",
    stack: ["Vue", "Express", "MySQL"],
    details: "주요 기능 설명 및 화면 예시 더미 텍스트입니다.",
    icon: "📦",
  },
];

function Projects() {
  const [selected, setSelected] = useState(projects[0]);

  return (
    <section
      id="projects"
      className="pb-10 px-6"
      style={{ backgroundColor: "#FDE0BC" }}
    >
      <div className="max-w-6xl mx-auto flex flex-col gap-6">
        {/* 상단 상세 영역 */}
        <div className="rounded-2xl overflow-hidden">
          <div className="card-header px-4 py-2">
            <span className="card-title text-xs font-bold text-black">
              {selected.icon} {selected.name}
            </span>
          </div>
          <div className="bg-white p-6 grid grid-cols-1 md:grid-cols-3 gap-4 min-h-48">
            {/* 기술 스택 */}
            <div className="rounded-xl border border-gray-200 p-4">
              <p className="text-xs font-bold text-gray-700 mb-3">기술 스택</p>
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
            {/* 주요 기능 */}
            <div className="rounded-xl border border-gray-200 p-4 md:col-span-2">
              <p className="text-xs font-bold text-gray-700 mb-3">
                주요 기능 설명 및 화면 예시
              </p>
              <p className="text-sm text-gray-600 leading-relaxed">
                {selected.details}
              </p>
            </div>
          </div>
        </div>

        {/* 하단 프로젝트 카드 목록 */}
        <div className="md:grid md:grid-cols-3 md:gap-4 hidden md:flex">
          {projects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelected(project)}
              className="relative rounded-2xl bg-white p-4 cursor-pointer hover:opacity-80 transition-opacity"
            >
              {selected.id === project.id && (
                <div className="absolute top-2 right-2">✔️</div>
              )}
              <p className="text-sm font-bold text-gray-900 mb-1">
                {project.icon} {project.name}
              </p>
              <p className="text-xs text-gray-400 mb-2">{project.period}</p>
              <p className="text-xs text-gray-600">{project.description}</p>
            </div>
          ))}
        </div>

        {/* 모바일 슬라이드 */}
        <div className="flex md:hidden overflow-x-auto snap-x snap-mandatory gap-4 pb-2">
          {projects.map((project) => (
            <div
              key={project.id}
              onClick={() => setSelected(project)}
              className="snap-center shrink-0 w-full rounded-2xl bg-white p-4 cursor-pointer"
            >
              {selected.id === project.id && (
                <div className="absolute top-2 right-2">✔️</div>
              )}
              <p className="text-sm font-bold text-gray-900 mb-1">
                {project.icon} {project.name}
              </p>
              <p className="text-xs text-gray-400 mb-2">{project.period}</p>
              <p className="text-xs text-gray-600">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
