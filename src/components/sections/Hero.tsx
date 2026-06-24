import { useEffect, useState } from "react";
import Section from "../common/Section";
import { supabase } from "../../lib/supabase";

interface Experience {
  id: number;
  company: string;
  role: string;
  period: string;
  description: string | null;
  icon: string | null;
  order_index: number;
}

const CMD_HTML = `
<p class="mb-7">C:\\Users\\Kwan &gt; Who am I?</p>
<p class="mb-7">동료와의 소통을 중요시하며,<br/>꼼꼼함이 강점인<br/>6년차 웹 개발자 <span style="color: #39ff14; font-weight:bold;">윤관</span>입니다.</p>
<p>⚡ 강점 - 준비, 기록, 꼼꼼함<br/>🌿 취미 - 헬스, 풋살<br/>🔍 관심 분야 - AI 통합 개발<br/>💻 개발 분야 - 백 오피스</p>
`;

const CAREER_START_DATE = new Date("2020-07-01");

function getYearsOfExperience(startDate: Date): string {
  const now = new Date();
  const diffMonths =
    (now.getFullYear() - startDate.getFullYear()) * 12 +
    (now.getMonth() - startDate.getMonth());
  const years = Math.floor(diffMonths / 12);
  const months = diffMonths % 12;
  return `${years}년 ${months}개월`;
}

const contacts = [
  {
    icon: "✉️",
    name: "Email",
    href: "mailto:your@email.com",
  },
  {
    icon: "📋",
    name: "Notion",
    href: "https://notion.so",
  },
  {
    icon: "🐱",
    name: "GitHub",
    href: "https://github.com",
  },
];

function Hero() {
  const [index, setIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [experiences, setExperiences] = useState<Experience[]>([]);
  const [projectCount, setProjectCount] = useState<number | null>(null);

  useEffect(() => {
    if (index < CMD_HTML.length) {
      const timer = setTimeout(() => {
        setDisplayed((prev) => prev + CMD_HTML[index]);
        setIndex((prev) => prev + 1);
      }, 30);
      return () => clearTimeout(timer);
    }
  }, [index]);

  useEffect(() => {
    const fetchExperiences = async () => {
      const { data, error } = await supabase
        .from("experience")
        .select("*")
        .order("order_index", { ascending: true });

      if (error) {
        console.error("직무 경험 조회 실패:", error);
        return;
      }
      setExperiences(data ?? []);
    };

    fetchExperiences();
  }, []);

  useEffect(() => {
    const fetchProjectCount = async () => {
      const { count, error } = await supabase
        .from("projects")
        .select("*", { count: "exact", head: true });

      if (error) {
        console.error("프로젝트 수 조회 실패:", error);
        return;
      }
      setProjectCount(count ?? 0);
    };

    fetchProjectCount();
  }, []);

  const stats = [
    {
      value: getYearsOfExperience(CAREER_START_DATE),
      label: "경력",
      icon: "🕶️",
    },
    { value: `${experiences.length}개`, label: "회사", icon: "💼" },
    {
      value: projectCount !== null ? `${projectCount}+` : "-",
      label: "프로젝트",
      icon: "📄",
    },
  ];

  return (
    <Section id="home">
      <div className="max-w-6xl mx-auto w-full flex flex-col md:flex-row gap-6">
        {/* 좌측: CMD + 링크 아이콘 */}
        <div className="md:w-1/3 w-full flex flex-col gap-4">
          <div className="rounded-2xl overflow-hidden border border-gray-600 shadow-lg flex-1 flex flex-col">
            <div className="bg-gray-800 px-3 py-2 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="text-gray-400 text-xs">📋</span>
                <span className="text-white text-xs font-bold card-title">
                  명령 프롬프트
                </span>
              </div>
              <div className="flex items-center gap-1">
                <button className="text-gray-300 hover:bg-gray-600 px-2 py-0.5 text-xs">
                  ─
                </button>
                <button className="text-gray-300 hover:bg-gray-600 px-2 py-0.5 text-xs">
                  □
                </button>
                <button className="text-gray-300 hover:bg-red-500 px-2 py-0.5 text-xs">
                  ✕
                </button>
              </div>
            </div>
            <div
              className="bg-black p-4 flex-1 text-white text-sm whitespace-pre-wrap leading-relaxed"
              style={{ fontFamily: "Consolas, 'Courier New', monospace" }}
              dangerouslySetInnerHTML={{ __html: displayed }}
            />
          </div>

          {/* 링크 아이콘 (CMD 아래) */}
          <div className="grid grid-cols-3 gap-3">
            {contacts.map((contact, i) => (
              <a
                key={i}
                href={contact.href}
                target="_blank"
                rel="noopener noreferrer"
                title={contact.name}
                className="group rounded-xl bg-gray-900 border border-gray-700 p-3 flex items-center justify-center hover:bg-gray-800 hover:shadow-lg transition-all cursor-pointer"
              >
                <span className="text-2xl grayscale group-hover:grayscale-0 transition-all">
                  {contact.icon}
                </span>
              </a>
            ))}
          </div>
        </div>

        {/* 우측: 직무 경험 + 핵심 지표 */}
        <div className="md:w-2/3 w-full flex flex-col gap-4">
          <div className="rounded-2xl overflow-hidden flex-1 flex flex-col">
            <div className="card-header px-4 py-2">
              <span className="text-xs font-bold text-black card-title">
                💼 직무 경험
              </span>
            </div>
            <div className="bg-white p-6 flex-1 flex items-start gap-4 overflow-x-auto">
              {experiences.map((exp) => (
                <div
                  key={exp.id}
                  className="border border-gray-200 rounded-xl bg-white p-5 flex-shrink-0 w-64 flex flex-col gap-2 justify-center self-stretch"
                >
                  {exp.icon && (
                    <img
                      src={exp.icon}
                      alt={exp.company}
                      className="h-8 w-auto max-w-[120px] object-contain flex-shrink-0 self-center"
                    />
                  )}
                  <span className="text-sm font-bold text-gray-800 whitespace-nowrap text-center">
                    {exp.company}
                  </span>
                  <p className="text-xs text-gray-500 text-center whitespace-nowrap">
                    {exp.period}
                  </p>
                  {exp.description && (
                    <p className="text-xs text-gray-600 leading-relaxed text-center">
                      {exp.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* 핵심 지표 */}
          <div className="rounded-2xl border border-gray-200 bg-white py-5 grid grid-cols-3 divide-x divide-gray-200">
            {stats.map((stat, i) => (
              <div key={i} className="flex flex-col items-center">
                <span className="text-xl font-extrabold text-gray-800">
                  {stat.value}
                </span>
                <span className="text-xs font-bold text-gray-500">
                  <span>{stat.icon}</span>
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}

export default Hero;
