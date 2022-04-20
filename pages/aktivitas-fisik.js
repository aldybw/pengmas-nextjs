import Image from "next/image";
import Link from "next/link";

export default function AktivitasFisik() {
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
          <h1 className="text-center">Aktivitas dan Latihan Fisik</h1>
        </div>
      </main>

      <main>
        <div className="container video-section">
          <div className="row">
            <div className="col-lg-7 col-md-12 text-center">
              <div className="ratio ratio-16x9 video-wrapper">
                <video poster="/image/pv4.png" controls>
                  <source
                    src="../video/4.%20Aktivitas%20fisik%20Bagi%20Ibu%20Hamil%20fix.mp4"
                    allowFullScreen
                    type="video/mp4"
                  />
                </video>
              </div>
            </div>
            <div className="col-lg-5 col-md-12">
              <div className="details-parent">
                <h4>Latihan yang diperbolehkan</h4>
                <hr />
                <ol style={{ textAlign: "left" }}>
                  <li>
                    Trimester I (0-12 minggu): <br />
                    pemanasan/ +streching, aerobic, kegel exercise, pendinginan/
                    +stretching
                  </li>
                  <li>
                    Trimester II (13-28 minggu): <br />
                    pemanasan/ +streching, aerobic, kegel exercise, senam hamil,
                    pendinginan/ +stretching
                  </li>
                  <li>
                    Trimester III (29-40 minggu): <br />
                    pemanasan/ +streching, kegel exercise, senam hamil,
                    pendinginan/ +stretching
                  </li>
                </ol>
              </div>
              <div className="details-parent">
                <h4 style={{ textAlign: "left" }}>
                  Aktivitas dan Latihan yang dilarang
                </h4>
                <hr />
                <ol style={{ textAlign: "left" }}>
                  <li>Membungkuk tanpa pegangan</li>
                  <li>Melompat</li>
                  <li>Jongkok lebih dari 90 derajat</li>
                  <li>Risiko keseimbangan</li>
                  <li>Mengejan</li>
                  <li>Tengadahkan kepala</li>
                  <li>Menahan napas</li>
                  <li>Adu fisik</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
