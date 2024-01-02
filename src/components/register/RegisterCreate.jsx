// Axios
import axios from 'axios';

// React
import React, { useEffect, useState } from 'react'

// i18n
import { withTranslation } from 'react-i18next'

// Redirect
import { useNavigate } from 'react-router-dom'

// FUNCTION CREATE
function RegisterCreate({ t, i18n, props }) {

  // REDIRECT
  let navigate = useNavigate();

  // STATE 
  // Dikkat: username,surname,email,password mutlaka api attributes aynı olmalıdır.
  // Dikkat: username,surname,email,password mutlaka input içindeki id ve name bu isimlerde olmalıdır.
  const [username, setUsername] = useState(null);
  const [surname, setSurname] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  // Çoklu isteği kapatmak
  const [multipleRequest, setMultipleRequest] = useState(false);

  // spinner
  const [spinner, setSpinner] = useState(false);

  // Is Read
  const [isRead, setIsRead] = useState(false);

  // USE EFFECT 
  // useEffect(() => {
  //   registerCreate()
  // }, []);

  // FUNCTION

  // Persist Mock api Link
  const persistMockApiLink = () => {
    return "https://657ae485394ca9e4af12fa5a.mockapi.io/api/v1/blog/register"
  }


  // registerNameOnChange
  const registerUsernameOnChange = (event) => {
    const { name, value } = event.target;
    setUsername(value)
  }

  // registerSurnameOnChange
  const registerSurnameOnChange = (event) => {
    const { name, value } = event.target;
    setSurname(value)
  }

  // registerEmailOnChange
  const registerEmailOnChange = (event) => {
    const { name, value } = event.target;
    setEmail(value)
  }
  // registerPasswordOnChange
  const registerPasswordOnChange = (event) => {
    const { name, value } = event.target;
    setPassword(value)
  }

  // IS READ
  const registerIsReadOnChange = (event) => {
    //alert(event.target.checked)
    setIsRead((event.target.checked))
  }

  // CLEANER
  const registerCleaner = () => {
    setUsername(null)
    setSurname(null)
    setEmail(null)
    setPassword(null)
  }

  // ON SUBMIT EVENT
  const onSubmitForm = (e) => {
    e.preventDefault();
  }

  // CREATE
  const registerCreate = async (event) => {
    const registerCreateForm = {
      username,
      surname,
      email,
      password
    };

    // Çoklu isteğe izin ver
    setMultipleRequest(true);

    //  Spinner
    setSpinner(true);

    // API
    try {
      const response = await axios.post(persistMockApiLink(), registerCreateForm)
      console.log(response)
      if (response.status == 201) {

        // Çoklu isteğe izin ver
        setMultipleRequest(true);

        //  Spinner
        setSpinner(false);

        // Alert
        alert("Kayıt Eklendi.");

        // Navigate
        navigate("/register/list")
      }
    } catch (err) {
      console.error(err);

      // Çoklu isteğe izin ver
      setMultipleRequest(false);

      //  Spinner
      setSpinner(true);
    }
  }

  // RETURN
  return (
    <React.Fragment>
      <h1 className="text-center text-primary display-5">{t('register_create')}</h1>
      <div className="container">
        <div className='row'>
          <div className="col-xs-12 col-md-2 col-lg-2">
          </div>

          {/* USERNAME */}
          <div className="col-xs-12 col-md-8 col-lg-8">
            <form onSubmit={onSubmitForm}>
              <input
                className="form-control me-2 mb-2"
                type="text"
                id="username"
                name="username"
                title={t('username')}
                placeholder={t('username')}
                onChange={(event) => { setUsername(event.target.value) }}
                //onChange={registerUsernameOnChange}
                required={true}
              />

              {/* SURNAME */}
              <input
                className="form-control me-2 mb-2"
                type="text"
                id="surname"
                name="surname"
                title={t('surname')}
                placeholder={t('surname')}
                // onChange={(event) => { setSurname(event.target.value) }}
                onChange={registerSurnameOnChange}
                required={true}
              />

              {/* EMAİL */}
              <input
                className="form-control me-2 mb-2"
                type="email"
                id="email"
                name="email"
                title={t('email')}
                placeholder={t('email')}
                // onChange={(event) => { setEmail(event.target.value) }}
                onChange={registerEmailOnChange}
                required={true}
              />

              {/* PASSWORD */}
              <input
                className="form-control me-2 mb-2"
                type="password"
                id="password"
                name="password"
                title={t('password')}
                placeholder={t('password')}
                // onChange={(event) => { setPassword(event.target.value) }}
                onChange={registerPasswordOnChange}
                required={true}
              />

              {/* IS READ */}
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  defaultValue=""
                  name="isRead"
                  id="isRead"
                  required={true}
                  onChange={registerIsReadOnChange}
                  defaultChecked=""
                  title="Okunuz mu ?"
                  data-bs-toggle="modal"
                  data-bs-target="#modalId"
                />
                <label
                  className="form-check-label"
                  htmlFor="isRead"
                >
                  {t('is_read')}
                </label>
              </div>

              {/* IS READ MODAL */}
              <div
                class="modal fade"
                id="modalId"
                tabindex="-1"
                data-bs-backdrop="static"
                data-bs-keyboard="false"
                role="dialog"
                aria-labelledby="modalTitleId"
                aria-hidden="true"
              >
                <div
                  class="modal-dialog modal-dialog-scrollable modal-dialog-centered modal-sm"
                  role="document"
                >
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="modalTitleId">
                      {t('is_read')}
                      </h5>
                      <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div class="modal-body">KVKK AYDINLATMA METNİ VE ONAM SÖZLEŞMESİ

Bu Aydınlatma Metni ve Onam Sözleşmesi ("Sözleşme"), Kişisel Verilerin Korunması Kanunu ("KVKK") kapsamında düzenlenmiştir ve işbu Sözleşme, Veri Sorumlusu ile Veri Sahibi arasındaki ilişkiyi düzenler.

1. Taraflar
Veri Sorumlusu: [Şirket Adı, Tescil Numarası, Adres, vb.]
Veri Sahibi: [Adı Soyadı, TC Kimlik Numarası, Adres, vb.]

2. Amaç ve Kapsam
Veri Sorumlusu, Veri Sahibi'nin kişisel verilerini belirli bir amaç doğrultusunda işleyecektir. Bu amaç ve kapsam Veri Sorumlusu tarafından ayrıca belirtilecek ve açıklanacaktır.

3. Kişisel Verilerin İşlenme Şekli
Veri Sorumlusu, Kişisel Verileri yasalara uygun olarak ve belirli bir amaç doğrultusunda işleyecektir. Kişisel Verilerin toplama, saklama, güncelleme, aktarma ve benzeri işlemler yöntemle belirtilecek ve Veri Sahibi'ne açıklanacaktır.

4. Kişisel Veri Kategorileri
Bu Sözleşme kapsamında işlenecek olan Kişisel Veri kategorileri açıkça belirtilecektir. Bu kategoriler, toplanan verilerin türüne ve amaçlarına bağlı olarak değişebilir.

5. Onam
Veri Sahibi, Kişisel Verilerinin yukarıda belirtilen amaçlar doğrultusunda işlenmesine açıkça onam verir. Veri Sorumlusu, bu onamı almadan Kişisel Verileri işlemeyecektir.

6. Bilgi Güvenliği
Veri Sorumlusu, Kişisel Verilerin güvenliğini sağlamak için gerekli önlemleri alacak ve gizliliği koruyacaktır.

7. İlgili Haklar
Veri Sahibi, KVKK kapsamında kendisine tanınan haklara sahiptir. Bu haklar, bilgi alma, düzeltme, silme ve benzeri hakları içerir. Bu hakların kullanımı ile ilgili detaylar, Veri Sorumlusu tarafından açıklanacaktır.

Bu Sözleşme, tarafların KVKK kapsamında hak ve yükümlülüklerini düzenler ve yürürlük tarihinden itibaren geçerlidir.

Veri Sorumlusu:                     Veri Sahibi:
[Şirket Adı, İmza]                 [Adı Soyadı, İmza]
</div>
                    <div class="modal-footer">
                      <button
                        type="button"
                        class="btn btn-secondary"
                        data-bs-dismiss="modal"
                      >
                        {t('close')}
                      </button>
                      <button type="button" class="btn btn-primary"> {t('not_Showing')}</button>
                    </div>
                  </div>
                </div>
              </div>

              {/* RESET-SUBMIT */}
              <button
                type="reset"
                //className="btn btn-outline-danger mt-2 me-2 mb-3"
                className="btn btn-danger mt-2 me-2 mb-3"
                onClick={registerCleaner}
              >
                {t('cleaner')}
              </button>

              <button
                type="submit"
                // className="btn btn-outline-primary mt-2 mb-3"
                className="btn btn-primary mt-2 mb-3"
                onClick={registerCreate}
                disabled={multipleRequest || !isRead}
              >

                {/* {
                  spinner ? <div class="spinner-border text-warning" style={{ fontSize: "0.5rem" }} role="status"> </div> : ''
                } */}
                
                {
                  spinner && <div class="spinner-border text-warning" style={{ fontSize: "0.5rem" }} role="status"> </div>
                }

                {t('added')}
              </button>
            </form>
          </div>
        </div>
      </div>

    </React.Fragment>
  ) //end return
} //end RegisterCreate


// EXPORT
export default withTranslation()(RegisterCreate)

// Alert