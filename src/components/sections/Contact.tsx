function Contact() {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Contact</h2>
        <p className="text-gray-600 mb-6">
          아래 이메일로 연락주시면 빠르게 답변드리겠습니다.
        </p>

        <a
          href="mailto:your@email.com"
          className="px-6 py-3 bg-gray-900 text-white rounded-lg inline-block"
        >
          이메일 보내기
        </a>
      </div>
    </section>
  );
}

export default Contact;
