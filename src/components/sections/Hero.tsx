import { useEffect, useState } from "react";

const CMD_HTML = `
<p class="mb-7">C:\\Users\\Kwan &gt; Who am I?</p>
<p class="mb-7">동료와의 소통을 중요시하며,<br/>꼼꼼함이 강점인<br/>6년차 웹 개발자 <span style="color: #39ff14; font-weight:bold;">윤관</span>입니다.</p>
<p>⚡ 강점 - 준비, 기록, 꼼꼼함<br/>🌿 취미 - 헬스, 풋살<br/>🔍 관심 분야 - AI 통합 개발<br/>💻 개발 분야 - 백 오피스</p>
`;

function Hero() {
  const [index, setIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");

  useEffect(() => {
    if (index < CMD_HTML.length) {
      const timer = setTimeout(() => {
        setDisplayed((prev) => prev + CMD_HTML[index]);
        setIndex((prev) => prev + 1);
      }, 30);
      return () => clearTimeout(timer);
    }
  }, [index]);

  return (
    <section
      id="home"
      className="flex items-center px-6 pt-4"
      style={{ backgroundColor: "#FDE0BC" }}
    >
      <div className="max-w-6xl mx-auto w-full flex flex-col md:flex-row gap-6">
        {/* 좌측 CMD */}
        <div className="md:w-1/3 w-full">
          <div className="rounded-2xl overflow-hidden border border-gray-600 shadow-lg">
            {/* 윈도우 타이틀바 */}
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
            {/* CMD 본문 */}
            <div
              className="bg-black p-4 min-h-96 text-white text-sm whitespace-pre-wrap leading-relaxed"
              style={{ fontFamily: "Consolas, 'Courier New', monospace" }}
              dangerouslySetInnerHTML={{ __html: displayed }}
            />
          </div>
        </div>

        {/* 우측 프로젝트 */}
        <div className="md:w-2/3 w-full">
          <div className="rounded-2xl overflow-hidden">
            <div className="card-header px-4 py-2">
              <span className="text-xs font-bold text-black card-title">
                📁 프로젝트 수행 이력
              </span>
            </div>
            <div className="bg-white p-6 grid grid-cols-3 gap-6 min-h-96 items-center">
              {["프로젝트1", "프로젝트2", "프로젝트3"].map((name, i) => (
                <div
                  key={i}
                  className="flex flex-col items-center gap-2 cursor-pointer hover:opacity-80"
                >
                  {/* 폴더 모양 CSS */}
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
                    {name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
