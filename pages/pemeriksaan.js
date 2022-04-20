import Image from "next/image";
import Link from "next/link";

export default function Pemeriksaan() {
  return (
    <>
      <main>
        <div className="container py-4">
          <header className="pb-3 mb-4 border-bottom">
            <Link href="/">
              <a className="d-flex align-items-center text-dark text-decoration-none">
                <Image
                  src="/image/Design 2 Saku Bumil.png"
                  width={40}
                  height={40}
                  className="me-2"
                  alt=""
                />
                <span className="fs-4">SakuBumil</span>
              </a>
            </Link>
          </header>
          <h1 className="text-center">Pemeriksaan Kehamilan</h1>
        </div>
      </main>

      <main>
        <div className="container video-section">
          <div className="row">
            <div className="col-lg-7 col-md-12 text-center">
              <div className="ratio ratio-16x9 video-wrapper">
                <video poster="/image/pv1.png" controls>
                  <source
                    src="../video/1.%20pemeriksaan%20kehamilan%20.mp4"
                    allowFullScreen
                    type="video/mp4"
                  />
                </video>
              </div>
            </div>
            <div className="col-lg-5 col-md-12">
              <div className="details-parent">
                <h4>Tips Kehamilan</h4>
                <hr />
                <p>
                  <p>Segera ke dokter atau bidan jika terlambat datang bulan</p>
                  <p>
                    Periksa kehamilan minimal 6 kali selama kehamilan dan
                    minimal 2 x pemeriksaan oleh dokter atau dokter spesialis
                    kebidanan dan kandungan pada trimester 1 dan 3:
                  </p>
                  <ul>
                    <li>
                      1 kali pada trimester pertama (kehamilan hingga 12 minggu)
                    </li>
                    <li>
                      2 kali pada trimester kedua (kehamilan diatas 12 minggu
                      sampai 24 minggu)
                    </li>
                    <li>
                      3 kali pada trimester ketiga (kehamilan diatas 24 minggu
                      sampai 40 minggu)
                    </li>
                  </ul>
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
