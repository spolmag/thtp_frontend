export default function About() {
  return (
    <div className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 space-y-4">
      <h2 className="text-lg font-bold text-gray-800 text-center">
        เกี่ยวกับเรา
      </h2>

      <div className="space-y-3 text-sm text-gray-700">
        <div className="p-3 bg-blue-50/50 rounded-xl border border-blue-100">
          <p className="font-semibold text-blue-900 mb-1">
            คำนวณสิทธิไทยช่วยไทยพลัส 60/40
          </p>
          <p className="text-xs text-gray-600 leading-relaxed">
            แอปพลิเคชันช่วยคำนวณวงเงินสิทธิประโยชน์และการใช้จ่ายตามโครงการไทยช่วยไทยพลัส
            60/40
          </p>
        </div>

        <div className="space-y-1.5 pt-2">
          <h3 className="text-xs font-bold text-gray-500 uppercase tracking-wider">
            ผู้จัดทำ
          </h3>
          <p className="font-semibold text-gray-800 text-base">
            SUTTIPONG POLMAG
          </p>

          <div className="space-y-1 text-xs pt-1">
            <p>
              <span className="font-medium text-gray-500">PHONE:</span>{" "}
              <a
                href="tel:0895181958"
                className="text-blue-600 hover:underline"
              >
                089-5181958
              </a>
            </p>
            <p>
              <span className="font-medium text-gray-500">EMAIL:</span>{" "}
              <a
                href="mailto:spolmag@gmail.com"
                className="text-blue-600 hover:underline"
              >
                spolmag@gmail.com
              </a>
            </p>
            <p>
              <span className="font-medium text-gray-500">LINE:</span>{" "}
              <a
                href="https://line.me/ti/p/eyqs6bLYec"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                line.me/ti/p/eyqs6bLYec
              </a>
            </p>
            <p>
              <span className="font-medium text-gray-500">PORTFOLIO:</span>{" "}
              <a
                href="https://my-portfolio-202609.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                https://my-portfolio-202609.vercel.app/
              </a>
            </p>
            <p>
              <span className="font-medium text-gray-500">LINKEDIN:</span>{" "}
              <a
                href="https://www.linkedin.com/in/suttipong-polmag-7898ba2a4"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                linkedin.com/in/suttipong-polmag-7898ba2a4
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
