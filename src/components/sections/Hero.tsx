function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-gray-900 mb-4">
          안녕하세요. Kwan 입니다.
        </h1>
        <p className="text-xl text-gray-600 mb-8">Web App Developer</p>
        <div className="flex gap-4 justify-center">
          <a
            href="#projects"
            className="px-6 py-3 bg-gray-900 text-white rounded-lg"
          >
            프로젝트 보기
          </a>
          <a href="#projects" className="px-6 py-3 border-gray-900 rounded-lg">
            연락하기
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
