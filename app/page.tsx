"use client";

import { useState } from "react";
import { CONTACT } from "./constants";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <>
      <a href="#main-content" className="skip-link">
        Đi đến nội dung chính
      </a>

      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center justify-between h-16 md:h-20" aria-label="Main navigation">
            <div className="flex items-center">
              <a href="#top" className="text-xl md:text-2xl font-bold text-secondary">
                Great Family Group
              </a>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#dich-vu" className="text-ink hover:text-primary transition-colors">
                Dịch vụ
              </a>
              <a href="#cam-nhan" className="text-ink hover:text-primary transition-colors">
                Cảm nhận
              </a>
              <a href="#lien-he" className="text-ink hover:text-primary transition-colors">
                Liên hệ
              </a>
              <a
                href={`mailto:${CONTACT.email}`}
                className="bg-primary hover:bg-primary-hover text-white px-6 py-2.5 rounded-lg font-medium transition-colors min-h-[44px] inline-flex items-center justify-center"
              >
                Đặt lịch tư vấn
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              type="button"
              className="md:hidden p-2 text-ink min-h-[44px] min-w-[44px]"
              onClick={toggleMobileMenu}
              aria-expanded={mobileMenuOpen}
              aria-label="Menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </nav>

          {/* Mobile Menu */}
          {mobileMenuOpen && (
            <div className="md:hidden py-4 space-y-3 border-t border-sand">
              <a
                href="#dich-vu"
                className="block px-4 py-2 text-ink hover:bg-sand rounded transition-colors"
                onClick={closeMobileMenu}
              >
                Dịch vụ
              </a>
              <a
                href="#cam-nhan"
                className="block px-4 py-2 text-ink hover:bg-sand rounded transition-colors"
                onClick={closeMobileMenu}
              >
                Cảm nhận
              </a>
              <a
                href="#lien-he"
                className="block px-4 py-2 text-ink hover:bg-sand rounded transition-colors"
                onClick={closeMobileMenu}
              >
                Liên hệ
              </a>
              <a
                href={`mailto:${CONTACT.email}`}
                className="block bg-primary hover:bg-primary-hover text-white px-6 py-2.5 rounded-lg font-medium text-center transition-colors mx-4 min-h-[44px] flex items-center justify-center"
                onClick={closeMobileMenu}
              >
                Đặt lịch tư vấn
              </a>
            </div>
          )}
        </div>
      </header>

      <main id="main-content">
        {/* Hero Section */}
        <section id="top" className="py-16 md:py-24 bg-cream">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h1 className="font-bold text-ink mb-6" style={{ fontSize: 'clamp(2.25rem, 5vw, 3.75rem)', lineHeight: '1.2' }}>
                  Kiến tạo những gia đình tuyệt vời
                </h1>
                <p className="text-lg text-muted mb-8">
                  Chúng tôi đồng hành cùng gia đình bạn qua tư vấn chuyên sâu và giải pháp phần mềm,
                  giúp xây dựng mối quan hệ bền vững và hạnh phúc lâu dài.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 mb-12">
                  <a
                    href={`mailto:${CONTACT.email}`}
                    className="bg-primary hover:bg-primary-hover text-white px-8 py-3.5 rounded-lg font-medium text-center transition-colors min-h-[44px] inline-flex items-center justify-center"
                  >
                    Đặt lịch tư vấn miễn phí
                  </a>
                  <a
                    href="#dich-vu"
                    className="bg-white hover:bg-sand text-ink px-8 py-3.5 rounded-lg font-medium text-center transition-colors border border-ink/10 min-h-[44px] inline-flex items-center justify-center"
                  >
                    Khám phá dịch vụ
                  </a>
                </div>

                {/* Trust Points */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-primary flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <p className="font-medium text-ink">Đội ngũ chuyên gia</p>
                      <p className="text-sm text-muted">Nhiều năm kinh nghiệm</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-primary flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <p className="font-medium text-ink">Bảo mật riêng tư</p>
                      <p className="text-sm text-muted">Thông tin được bảo vệ</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <svg className="w-6 h-6 text-primary flex-shrink-0 mt-1" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <div>
                      <p className="font-medium text-ink">Đồng hành lâu dài</p>
                      <p className="text-sm text-muted">Hỗ trợ liên tục</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative Illustration */}
              <div className="hidden md:block">
                <svg viewBox="0 0 400 400" className="w-full max-w-md mx-auto" aria-hidden="true">
                  <circle cx="200" cy="200" r="150" fill="#F4E6D6" opacity="0.5" />
                  <circle cx="200" cy="200" r="100" fill="#1F5F5B" opacity="0.2" />
                  <path d="M150 150 Q200 100 250 150 T350 150" stroke="#C2553A" strokeWidth="3" fill="none" />
                  <circle cx="200" cy="200" r="50" fill="#E9B44C" opacity="0.6" />
                </svg>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="dich-vu" className="py-16 md:py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-ink mb-4">Dịch vụ của chúng tôi</h2>
              <p className="text-lg text-muted max-w-2xl mx-auto">
                Kết hợp tư vấn chuyên nghiệp và công nghệ để mang lại giải pháp toàn diện cho gia đình bạn
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-16">
              {/* Advisory Card */}
              <div className="bg-sand rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-ink mb-4">Tư vấn gia đình</h3>
                <p className="text-muted mb-6">
                  Chúng tôi hỗ trợ gia đình bạn giải quyết những thách thức và xây dựng mối quan hệ bền chặt hơn.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-ink">Hòa giải mâu thuẫn trong gia đình</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-ink">Hướng dẫn nuôi dạy con cái hiệu quả</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-ink">Cải thiện giao tiếp vợ chồng</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-ink">Tư vấn tài chính gia đình</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-ink">Kết nối nhiều thế hệ</span>
                  </li>
                </ul>
              </div>

              {/* Software Card */}
              <div className="bg-sand rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-secondary rounded-lg flex items-center justify-center mb-6">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-ink mb-4">Giải pháp phần mềm</h3>
                <p className="text-muted mb-6">
                  Công cụ công nghệ giúp duy trì và phát triển những thay đổi tích cực trong gia đình bạn.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-ink">Lịch và nhắc việc gia đình</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-ink">Theo dõi mục tiêu chung</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-ink">Nhật ký cảm xúc</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-secondary flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    <span className="text-ink">Quản lý chi tiêu gia đình</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* How We Work */}
            <div className="bg-cream rounded-2xl p-8 md:p-12">
              <h3 className="text-2xl font-bold text-ink text-center mb-12">Cách chúng tôi làm việc</h3>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-white">1</span>
                  </div>
                  <h4 className="text-xl font-semibold text-ink mb-2">Lắng nghe</h4>
                  <p className="text-muted">
                    Chúng tôi bắt đầu bằng việc thấu hiểu hoàn cảnh và nhu cầu của gia đình bạn
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-white">2</span>
                  </div>
                  <h4 className="text-xl font-semibold text-ink mb-2">Đồng hành</h4>
                  <p className="text-muted">
                    Cùng bạn xây dựng kế hoạch và thực hiện những thay đổi tích cực
                  </p>
                </div>
                <div className="text-center">
                  <div className="w-16 h-16 bg-accent rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-2xl font-bold text-white">3</span>
                  </div>
                  <h4 className="text-xl font-semibold text-ink mb-2">Duy trì</h4>
                  <p className="text-muted">
                    Hỗ trợ bằng công nghệ để giữ vững và phát triển những kết quả đã đạt được
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section id="cam-nhan" className="py-16 md:py-24 bg-sand">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-ink mb-4">Cảm nhận từ gia đình</h2>
              <p className="text-lg text-muted max-w-2xl mx-auto">
                {/* PLACEHOLDER TESTIMONIALS - These are illustrative examples only. Replace with real testimonials before launch. */}
                Những chia sẻ chân thật từ các gia đình đã đồng hành cùng chúng tôi
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {/* Testimonial 1 */}
              <figure className="bg-white rounded-2xl p-8 shadow-sm">
                <blockquote className="text-ink mb-6">
                  &ldquo;Sau những buổi tư vấn, vợ chồng tôi đã học được cách lắng nghe và thấu hiểu nhau hơn.
                  Ứng dụng quản lý công việc gia đình cũng giúp chúng tôi phân chia trách nhiệm rõ ràng hơn.&rdquo;
                </blockquote>
                <figcaption className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-semibold">L</span>
                  </div>
                  <div>
                    <div className="font-semibold text-ink">Linh</div>
                    <div className="text-sm text-muted">Mẹ của hai bé, TP.HCM</div>
                  </div>
                </figcaption>
              </figure>

              {/* Testimonial 2 */}
              <figure className="bg-white rounded-2xl p-8 shadow-sm">
                <blockquote className="text-ink mb-6">
                  &ldquo;Đội ngũ tư vấn rất chuyên nghiệp và tận tâm. Họ đã giúp gia đình tôi vượt qua khủng hoảng
                  và tìm lại sự hòa thuận. Công cụ theo dõi cảm xúc cũng giúp cả nhà hiểu nhau hơn.&rdquo;
                </blockquote>
                <figcaption className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-semibold">M</span>
                  </div>
                  <div>
                    <div className="font-semibold text-ink">Minh</div>
                    <div className="text-sm text-muted">Cha của ba con, Hà Nội</div>
                  </div>
                </figcaption>
              </figure>

              {/* Testimonial 3 */}
              <figure className="bg-white rounded-2xl p-8 shadow-sm">
                <blockquote className="text-ink mb-6">
                  &ldquo;Tôi không nghĩ rằng một ứng dụng có thể giúp gia đình gắn kết hơn, nhưng Great Family Group
                  đã chứng minh điều đó. Lịch chung và mục tiêu gia đình giúp cả nhà luôn đồng lòng.&rdquo;
                </blockquote>
                <figcaption className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-semibold">H</span>
                  </div>
                  <div>
                    <div className="font-semibold text-ink">Hoa</div>
                    <div className="text-sm text-muted">Mẹ của một bé, Đà Nẵng</div>
                  </div>
                </figcaption>
              </figure>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section id="lien-he" className="py-16 md:py-24 bg-primary">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Sẵn sàng bắt đầu hành trình cùng gia đình bạn?
            </h2>
            <p className="text-lg text-white/90 mb-8">
              Liên hệ với chúng tôi ngay hôm nay để đặt lịch tư vấn miễn phí và khám phá cách chúng tôi
              có thể hỗ trợ gia đình bạn.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
              <a
                href={`mailto:${CONTACT.email}`}
                className="bg-white hover:bg-cream text-primary px-8 py-3.5 rounded-lg font-medium transition-colors min-h-[44px] inline-flex items-center justify-center"
              >
                Gửi email cho chúng tôi
              </a>
              <a
                href={`tel:${CONTACT.phone}`}
                className="bg-secondary hover:bg-secondary/90 text-white px-8 py-3.5 rounded-lg font-medium transition-colors min-h-[44px] inline-flex items-center justify-center"
              >
                Gọi điện tư vấn
              </a>
            </div>
            <div className="text-white/80">
              <p>Email: <a href={`mailto:${CONTACT.email}`} className="underline hover:text-white">{CONTACT.email}</a></p>
              <p>Điện thoại / Zalo: <a href={`tel:${CONTACT.phone}`} className="underline hover:text-white">{CONTACT.phone}</a></p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-ink text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Great Family Group</h3>
              <p className="text-white/70">
                Kiến tạo những gia đình tuyệt vời thông qua tư vấn chuyên nghiệp và giải pháp công nghệ.
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Liên kết</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#dich-vu" className="text-white/70 hover:text-white transition-colors">
                    Dịch vụ
                  </a>
                </li>
                <li>
                  <a href="#cam-nhan" className="text-white/70 hover:text-white transition-colors">
                    Cảm nhận
                  </a>
                </li>
                <li>
                  <a href="#lien-he" className="text-white/70 hover:text-white transition-colors">
                    Liên hệ
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Liên hệ</h4>
              <ul className="space-y-2 text-white/70">
                <li>{CONTACT.email}</li>
                <li>{CONTACT.phone}</li>
                <li>Zalo: {CONTACT.zalo}</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/10 pt-8 text-center text-white/70">
            <p>&copy; 2026 Great Family Group. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
