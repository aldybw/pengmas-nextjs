export default function PorsiMakan() {
  return (
    <>
      <main>
        <div className="container py-4">
          <header className="pb-3 mb-4 border-bottom">
            <a
              href="/"
              className="d-flex align-items-center text-dark text-decoration-none"
            >
              <img
                src="/image/Design 2 Saku Bumil.png"
                width="40"
                height="40"
                className="me-2"
              />
              <span className="fs-4">SakuBumil</span>
            </a>
          </header>
          <h1 className="text-center">Porsi Makan</h1>
        </div>
      </main>

      <main>
        <div className="container video-section">
          <div className="row">
            <div className="col-lg-7 col-md-12 text-center">
              <div className="ratio ratio-16x9 video-wrapper">
                <video poster="/image/pv3.png" controls>
                  <source
                    src="../video/3.%20Porsi%20Makan%20Ibu%20Hamil%20.mp4"
                    allowFullScreen
                    type="video/mp4"
                  />
                </video>
              </div>
            </div>
            <div className="col-lg-5 col-md-12">
              <div className="details-parent">
                <h4 style={{ textAlign: "left" }}>
                  Halaman Porsi Makan dan Minum Ibu Hamil dalam kondisi Normal
                </h4>
                <hr />
                <div className="table-responsive">
                  <table
                    className="table align-middle table-responsive table-bordered"
                    style={{ fontSize: "16px" }}
                  >
                    <thead>
                      <tr>
                        <th rowSpan="2" className="align-middle text-center">
                          Bahan Makanan
                        </th>
                        <th colSpan="2" className="text-center">
                          Trimester
                        </th>
                      </tr>
                      <tr>
                        <td>1</td>
                        <td>2 dan 3</td>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Nasi/makanan pokok</td>
                        <td>5 porsi</td>
                        <td>6 porsi</td>
                      </tr>
                      <tr>
                        <td>Protein hewani</td>
                        <td>4 porsi</td>
                        <td>4 porsi</td>
                      </tr>
                      <tr>
                        <td>Protein nabati</td>
                        <td>4 porsi</td>
                        <td>4 porsi</td>
                      </tr>
                      <tr>
                        <td>Sayur-sayuran</td>
                        <td>4 porsi</td>
                        <td>4 porsi</td>
                      </tr>
                      <tr>
                        <td>Buah-buahan</td>
                        <td>4 porsi</td>
                        <td>4 porsi</td>
                      </tr>
                      <tr>
                        <td>Minyak/ Lemak</td>
                        <td>5 porsi</td>
                        <td>5 porsi</td>
                      </tr>
                      <tr>
                        <td>Gula</td>
                        <td>2 porsi</td>
                        <td>2 porsi</td>
                      </tr>
                      <tr>
                        <td>Minum air putih </td>
                        <td></td>
                        <td></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p align="center">
                  ** Konsultasikan porsi makan dan perhatikan Indeks Massa Tubuh
                  (IMT)
                </p>
              </div>
              <div className="details-parent">
                <h4 style={{ textAlign: "left" }}>Panduan Ukuran</h4>
                <hr />
                <ul style={{ textAlign: "left" }}>
                  <li>1 porsi nasi/makanan pokok = 100 gr atau ¾ gelas</li>
                  <li>
                    1 porsi protein hewani = 50 gr atau 1 potong sedang ikan
                  </li>
                  <li>
                    1 porsi protein hewani = 55 gr atau 1 butir telur ayam
                  </li>
                  <li>1 porsi protein nabati = 50 gr atau 1 potong tempe</li>
                  <li>
                    1 porsi protein nabati = 100 gr atau 2 potong sedang tahu
                  </li>
                  <li>
                    1 porsi sayur-sayuran = 100 gr atau 1 mangkuk sayur matang
                    tanpa kuah
                  </li>
                  <li>
                    1 porsi buah-buahan = 100 gr atau 1 potong sedang pisang
                  </li>
                  <li>
                    1 porsi buah-buahan = 100-190 gr atau 1 potong besar papaya
                  </li>
                  <li>1 porsi minya/lemak = 5 gr atau 1 sendok teh</li>
                  <li>1 porsi gula = 10 gr atau 1 sendok makan</li>
                  <li>Minum air putih : 8 – 12 gelas /hari</li>
                </ul>
              </div>
              <div className="details-parent">
                <h5>
                  Standar kenaikan berat badan ibu hamil dengan perhitungan BMI
                  (Body Mass Index):
                </h5>
                <hr />
                <p>
                  BMI = (BB) / [(TB) x (TB)]
                  <br />
                  Berat badan (dalam kg) dibagi
                  <br />
                  Kuadrat tinggi badan (dalam ukuran meter).
                </p>
                <hr />
                <h5>Referensi</h5>
                <ol>
                  <li>
                    <a
                      href="https://www.orami.co.id/magazine/kenaikan-berat-badan-ibu-hamil/"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      Ini Kenaikan Berat Badan Ibu Hamil yang Normal, Moms Wajib
                      Tahu!
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://id.theasianparent.com/kenaikan-berat-badan-ibu-hamil"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      Kenaikan Berat Badan bagi Ibu Hamil yang Ideal, Seperti
                      Apa?
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.popmama.com/pregnancy/first-trimester/donahandayani/cara-menghitung-kenaikan-berat-badan-ideal-untuk-ibu-hamil/5"
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      Cara Menghitung Kenaikan Berat Badan Ideal untuk Ibu Hamil
                    </a>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
