import { useRouter } from "next/router";
import { EqualHeight, EqualHeightElement } from "react-equal-height";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const router = useRouter();

  return (
    <>
      <div className="container mt-2 mb-5">
        <header className="pb-2 mb-2 border-bottom d-flex justify-content-between">
          <div className="sakubumil-logo-wrapper d-flex align-items-center">
            <Link href="/">
              <a className="d-flex align-items-center text-dark text-decoration-none">
                <Image
                  src="/image/Design 2 Saku Bumil.png"
                  className="sakubumil-logo me-2 img-fluid"
                  width={60}
                  height={60}
                  alt=""
                />
                <span className="sakubumil-text">SakuBumil </span>
              </a>
            </Link>
          </div>
          <div className="instansi-logo-wrapper d-flex">
            <Link href="/">
              <a className="d-flex align-items-center text-dark text-decoration-none">
                <Image
                  src="/image/logo-depok.jpeg"
                  className="depok-logo img-fluid"
                  width={30}
                  height={36}
                  alt=""
                />
              </a>
            </Link>

            <Link href="/">
              <a className="d-flex align-items-center text-dark text-decoration-none mx-3">
                <Image
                  src="/image/logo-dinkes.jpg"
                  className="dinkes-logo img-fluid"
                  width={120}
                  height={30}
                  alt=""
                />
              </a>
            </Link>

            <Link href="/">
              <a className="d-flex align-items-center text-dark text-decoration-none">
                <Image
                  src="/image/pnj.png"
                  className="pnj-logo img-fluid"
                  width={36}
                  height={36}
                  alt=""
                />
              </a>
            </Link>
          </div>
        </header>

        <section id="hero" className="d-flex align-items-center">
          <div className="container">
            <div className="row">
              <div className="col-lg-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex flex-column justify-content-center">
                <h3 className="display-5 fw-bold">
                  <span className="panduan"> Panduan </span>
                  <small> Kehamilan dan Persalinan Sehat </small>
                </h3>
                <p className="description">
                  <small>
                    Aplikasi SakuBumil merupakan panduan singkat yang berisi
                    informasi mengenai kehamilan dan persalinan sehat. Terdapat
                    7 kategori menu yang berisi video dan informasi bermanfaat
                    bagi Ibu Hamil.
                  </small>
                </p>
                <div className="d-flex mb-5">
                  <button
                    id="scrollTo"
                    className="btn btn-get-started scrollto text-decoration-none"
                  >
                    Cari Tahu
                  </button>
                </div>
              </div>
              <div className="col-lg-6 order-1 order-lg-2 hero-img">
                <Image
                  src="/image/Pregnant.png"
                  className="img-fluid animated mt-4"
                  width={534}
                  height={534}
                  alt=""
                />
              </div>
            </div>
          </div>
        </section>
        {/* End Hero */}
      </div>

      <main>
        <section id="featured-services" className="featured-services">
          <div className="container" data-aos="fade-up">
            <div className="row d-flex justify-content-center">
              <EqualHeight>
                <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-4">
                  <div
                    className="icon-box"
                    data-aos="fade-up"
                    data-aos-delay="100"
                  >
                    <div className="icon">
                      <i className="fas fa-stethoscope fs-1 d-flex justify-content-center"></i>
                    </div>
                    <EqualHeightElement>
                      <h4 className="title text-center">
                        Pemeriksaan Kehamilan
                      </h4>
                    </EqualHeightElement>
                    <EqualHeightElement name="Description">
                      <p className="description">
                        Pastikan ibu hamil mendapatkan pelayanan pemeriksaan
                        kehamilan
                      </p>
                    </EqualHeightElement>
                    <div className="icon d-flex justify-content-center">
                      <Link href="/pemeriksaan">
                        <a
                          className="btn-get-started text-decoration-none mt-3"
                          // onClick={() => router.push("/pemeriksaan")}
                        >
                          <i
                            className="far fa-play-circle fs-5"
                            style={{ color: "white" }}
                          ></i>
                          Tonton Video
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-4">
                  <div
                    className="icon-box"
                    data-aos="fade-up"
                    data-aos-delay="200"
                  >
                    <div className="icon">
                      <i className="fas fa-code-branch fs-1 d-flex justify-content-center"></i>
                    </div>
                    <EqualHeightElement>
                      <h4 className="title text-center">
                        Perawatan Sehari-hari
                      </h4>
                    </EqualHeightElement>
                    <EqualHeightElement name="Description">
                      <p className="description">
                        Perawatan sehari-hari Ibu Hamil dan Hal yang perlu
                        dihindari
                      </p>
                    </EqualHeightElement>
                    <div className="icon d-flex justify-content-center">
                      <Link href="/perawatan">
                        <a
                          className="btn-get-started text-decoration-none mt-3"
                          // onClick={() => router.push("/perawatan")}
                        >
                          <i
                            className="far fa-play-circle fs-5"
                            style={{ color: "white" }}
                          ></i>
                          Tonton Video
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-4">
                  <div
                    className="icon-box"
                    data-aos="fade-up"
                    data-aos-delay="300"
                  >
                    <div className="icon">
                      <i className="fas fa-utensils fs-1 d-flex justify-content-center"></i>
                    </div>
                    <EqualHeightElement name="Title">
                      <h4 className="title text-center">Porsi Makan</h4>
                    </EqualHeightElement>
                    <EqualHeightElement name="Description">
                      <p className="description">
                        Porsi makan Ibu Hamil perlu memperhatikan Indeks Masa
                        Tubuh (IMT)
                      </p>
                    </EqualHeightElement>
                    <div className="icon d-flex justify-content-center">
                      <Link href="/porsi-makan">
                        <a
                          className="btn-get-started text-decoration-none mt-3"
                          // onClick={() => router.push("/porsi-makan")}
                        >
                          <i
                            className="far fa-play-circle fs-5"
                            style={{ color: "white" }}
                          ></i>
                          Tonton Video
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-4">
                  <div
                    className="icon-box"
                    data-aos="fade-up"
                    data-aos-delay="400"
                  >
                    <div className="icon">
                      <i className="fas fa-walking fs-1 d-flex justify-content-center"></i>
                    </div>
                    <EqualHeightElement name="Title">
                      <h4 className="text-center title">Aktivitas Fisik</h4>
                    </EqualHeightElement>
                    <EqualHeightElement name="Description">
                      <p className="description">
                        Aktivitas Fisik dan Latihan Fisik yang diperbolehkan dan
                        harus dihindari Ibu Hamil
                      </p>
                    </EqualHeightElement>
                    <div className="icon d-flex justify-content-center">
                      <Link href="/aktivitas-fisik">
                        <a
                          className="btn-get-started text-decoration-none mt-3"
                          // onClick={() => router.push("/aktivitas-fisik")}
                        >
                          <i
                            className="far fa-play-circle fs-5"
                            style={{ color: "white" }}
                          ></i>
                          Tonton Video
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-4">
                  <div
                    className="icon-box"
                    data-aos="fade-up"
                    data-aos-delay="100"
                  >
                    <div className="icon">
                      <i className="fas fa-exclamation-circle fs-1 d-flex justify-content-center"></i>
                    </div>
                    <EqualHeightElement name="Title">
                      <h4 className="text-center title">
                        Tanda Bahaya Kehamilan
                      </h4>
                    </EqualHeightElement>
                    <EqualHeightElement name="Description">
                      <p className="description">
                        Segera ke dokter atau puskesmas jika dijumpai gejala dan
                        keluhan berikut
                      </p>
                    </EqualHeightElement>
                    <div className="icon d-flex justify-content-center">
                      <Link href="/tanda-bahaya-kehamilan">
                        <a
                          className="btn-get-started text-decoration-none mt-3"
                          // onClick={() =>
                          //   router.push("/tanda-bahaya-kehamilan")
                          // }
                        >
                          <i
                            className="far fa-play-circle fs-5"
                            style={{ color: "white" }}
                          ></i>
                          Tonton Video
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-4">
                  <div
                    className="icon-box"
                    data-aos="fade-up"
                    data-aos-delay="200"
                  >
                    <div className="icon">
                      <i className="fas fa-baby fs-1 d-flex justify-content-center"></i>
                    </div>
                    <EqualHeightElement name="Title">
                      <h4 className="text-center title">
                        Persiapan Melahirkan
                      </h4>
                    </EqualHeightElement>
                    <EqualHeightElement name="Description">
                      <p className="description">
                        Hal-hal yang perlu dipersiapkan untuk Hari Melahirkan
                        (Bersalin)
                      </p>
                    </EqualHeightElement>
                    <div className="icon d-flex justify-content-center">
                      <Link href="/persiapan-melahirkan">
                        <a
                          className="btn-get-started text-decoration-none mt-3"
                          // onClick={() =>
                          //   router.push("/persiapan-melahirkan")
                          // }
                        >
                          <i
                            className="far fa-play-circle fs-5"
                            style={{ color: "white" }}
                          ></i>
                          Tonton Video
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>

                <div className="col-md-6 col-lg-3 d-flex align-items-stretch mb-5 mb-lg-4">
                  <div
                    className="icon-box"
                    data-aos="fade-up"
                    data-aos-delay="300"
                  >
                    <div className="icon">
                      <i className="fas fa-procedures fs-1 d-flex justify-content-center"></i>
                    </div>
                    <EqualHeightElement name="Title">
                      <h4 className="text-center title">Tanda Persalinan</h4>
                    </EqualHeightElement>
                    <EqualHeightElement name="Description">
                      <p className="description">
                        Segera bawa Ibu Hamil ke dokter atau Puskesmas jika
                        muncul salah satu tanda berikut
                      </p>
                    </EqualHeightElement>
                    <div className="icon d-flex justify-content-center">
                      <Link href="/tanda-persalinan">
                        <a
                          className="btn-get-started text-decoration-none mt-3"
                          // onClick={() => router.push("/tanda-persalinan")}
                        >
                          <i
                            className="far fa-play-circle fs-5"
                            style={{ color: "white" }}
                          ></i>
                          Tonton Video
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              </EqualHeight>
            </div>
          </div>
        </section>
        <footer className="mt-5 text-center text-muted border-top">
          &copy; Jurusan TIK PNJ & Dinkes Depok
        </footer>
      </main>
    </>
  );
}
