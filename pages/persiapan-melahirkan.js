import Image from "next/image";
import Link from "next/link";

export default function PersiapanMelahirkan() {
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
          <h1 className="text-center">Persiapan Melahirkan</h1>
        </div>
      </main>

      <main>
        <div className="container video-section">
          <div className="row">
            <div className="col-lg-7 col-md-12 text-center">
              <div className="ratio ratio-16x9 video-wrapper">
                <video poster="/image/pv6.png" controls>
                  <source
                    src="../video/6-%20persiapan%20melahirkan.mp4"
                    allowFullScreen
                    type="video/mp4"
                  />
                </video>
              </div>
            </div>
            <div className="col-lg-5 col-md-12">
              <div className="details-parent">
                <h4>Persiapan Melahirkan</h4>
                <hr />
                <p>
                  <ol>
                    <li>
                      Tanyakan dan tandai tanggal Hari Perkiraan Lahir (HPL)
                    </li>
                    <li>
                      Usahakan periksa kehamilan didampingi suami/ keluarga
                    </li>
                    <li>
                      Persiapkan dana biaya persalinan, Kartu Jaminan Kesehatan
                      Nasional, KTP, Kartu Kerluarga, dan keperluan lain Ibu dan
                      Bayi
                    </li>
                    <li>
                      Rencanakan melahirkan ditolong oleh dokter atau bidan
                    </li>
                    <li>
                      Siapkan pendonor darah lebih dari 1 orang (jika
                      diperlukan)
                    </li>
                    <li>Siapkan kendaraan (jika diperlukan sewaktu-waktu)</li>
                    <li>Sepakati amanat persalinan dalam stiker P4K </li>
                    <li>Tempelkan stiker P4K di depan rumah ibu hamil</li>
                    <li>Rencanakan ikut KB setelah bersalin</li>
                  </ol>
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
