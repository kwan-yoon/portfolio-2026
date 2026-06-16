function Projects() {
  return (
    <section id="projects" className="py-24 px-6 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white rounded-lg p-6 border border-gray-200">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">
              프로젝트명
            </h3>
            <p className="text-gray-600 text-sm mb-4">프로젝트 설명</p>
            <div className="flex gap-2">
              <span className="text-xs px-2 py-1 bg-gray-100 rounded">
                React
              </span>
              <span className="text-xs px-2 py-1 bg-gray-100 rounded">
                TypeScript
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
