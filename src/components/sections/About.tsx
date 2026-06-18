import { useState } from "react";
import Section from "../common/Section";

const skills = [
  {
    category: "기술 스택",
    items: ["React", "Node.js", "PostgreSQL", "Docker", "Git", "VSCode"],
  },
  { category: "언어", items: ["한국어", "영어"] },
  { category: "교육", items: ["KH 정보교육원 수료"] },
  { category: "자격증", items: ["a", "b", "c", "d"] },
];

const experience = {
  company: "FOWGAMES 파우게임즈",
  period: "2020.10 ~ 2026.05",
  description: "프로젝트 설명 더미 텍스트입니다.",
};

function About() {
  const [flipped, setFlipped] = useState(false);

  return (
    <Section id="about">
      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="rounded-2xl overflow-hidden flex flex-col">
          <div className="card-header px-4 py-2 flex items-center gap-2">
            <span className="text-xs font-semibold text-black card-title">
              💪 능력
            </span>
          </div>
          <div className="bg-white flex-1">
            <table className="w-full text-sm">
              <tbody>
                {skills.map((skill, i) => (
                  <tr
                    key={i}
                    className="border-b border-gray-100 last:border-0"
                  >
                    <td className="px-4 py-3 font-semibold text-gray-700 w-1/3 bg-gray-50">
                      {skill.category}
                    </td>
                    <td className="px-4 py-3 text-gray-600">
                      {skill.items.join(", ")}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        <div className="rounded-2xl overflow-hidden flex flex-col">
          <div className="card-header px-4 py-2 flex items-center gap-2">
            <span className="text-xs font-semibold text-black card-title">
              💼 직무 경험
            </span>
          </div>
          <div className="bg-white flex-1 p-6 flex items-center justify-center relative overflow-hidden">
            <div
              className={`w-full transition-all duration-300 ease-in-out ${
                flipped
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4 pointer-events-none absolute"
              }`}
            >
              <div className="flex justify-between items-center mb-4">
                <h3 className="font-semibold text-gray-900">
                  {experience.company}
                </h3>
                <button
                  onClick={() => setFlipped(false)}
                  className="text-red-400 hover:text-red-600 text-base"
                >
                  ✕
                </button>
              </div>
              <p className="text-xs text-gray-500 mb-2">{experience.period}</p>
              <p className="text-sm text-gray-700 leading-relaxed">
                {experience.description}
              </p>
            </div>

            <div
              className={`flex flex-col items-center gap-2 cursor-pointer hover:opacity-80 transition-all duration-300 ease-in-out ${
                flipped
                  ? "opacity-0 translate-y-4 pointer-events-none absolute"
                  : "opacity-100 translate-y-0"
              }`}
              onClick={() => setFlipped(true)}
            >
              <div className="relative w-24 h-20">
                <div
                  className="absolute top-3 left-0 w-full h-16 rounded-b-lg rounded-tr-lg"
                  style={{ backgroundColor: "#F5C518" }}
                />
                <div
                  className="absolute top-0 left-0 w-10 h-4 rounded-t-lg"
                  style={{ backgroundColor: "#F5C518" }}
                />
              </div>
              <span className="text-xs text-gray-700 font-medium">
                {experience.company}
              </span>
              <span className="text-xs text-gray-400">{experience.period}</span>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

export default About;
