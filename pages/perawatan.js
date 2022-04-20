import Image from "next/image";
import Link from "next/link";

export default function Perawatan() {
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
          <h1 className="text-center">Perawatan Sehari-hari</h1>
        </div>
      </main>

      <main>
        <div className="container video-section">
          <div className="row">
            <div className="col-lg-7 col-md-12 text-center">
              <div className="ratio ratio-16x9 video-wrapper">
                <video poster="/image/pv2.png" controls>
                  <source
                    src="../video/2.%20Perawatan%20kehamilan%20sehari%20hari.mp4"
                    allowFullScreen
                    type="video/mp4"
                  />
                </video>
              </div>
            </div>
            <div className="col-lg-5 col-md-12">
              <div className="details-parent">
                <h4>Perawatan sehari-hari Ibu Hamil</h4>
                <hr />
                <ul style={{ textAlign: "left" }}>
                  <li>
                    Makan beragam makanan pola gizi seimbang dengan tambahan 1
                    porsi lebih banyak
                  </li>
                  <li>Menjaga kebersihan diri</li>
                  <li>Lakukan stimulasi janin bersama suami</li>
                  <li>
                    Boleh melakukan hubungan suami istri selama kehamilan sehat
                  </li>
                  <li>Istirahat yang cukup</li>
                </ul>
              </div>
              <div className="details-parent">
                <h4 style={{ textAlign: "left" }}>
                  Yang harus dihindari Ibu Hamil
                </h4>
                <hr />
                <ul style={{ textAlign: "left" }}>
                  <li>Kerja berat</li>
                  <li>Merokok atau terpapar asap rokok</li>
                  <li>Minum bersoda, berakohol dan jamu</li>
                  <li>
                    Tidur terlentang &gt; 10 menit pada masa hamil tua (untuk
                    menghindari kekurangan oksigen pada janin)
                  </li>
                  <li>Stress berlebihan</li>
                  <li>Minum obat tanpa resep dokter</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
