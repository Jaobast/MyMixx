import { useNavigate } from "react-router-dom";
import { useBodyClass } from "../../hooks/BodyClass";
import './StartPage.css'
import Pattern from '../../Components/Pattern/Pattern'
import products from '../../Components/Products.json'

function StartPage() {

  useBodyClass("StartPage-Body");

  const navigate = useNavigate();

  function navigateChoice() {
    setTimeout(() => {
      navigate(`/choice`);
    }, 500);
  }


  return (
    <div className="StartPage">
      <img src="/MyMixx/svg/logo.svg" alt="logo" className="logo" />

      <div className="card-container">
        <img src="/MyMixx/img/card-01.png" alt="card product" className="card01" />
        <img src="/MyMixx/img/card-02.png" alt="card product" className="card02" />
        <img src="/MyMixx/img/card-03.png" alt="card product" className="card03" />
      </div>

      <div className="bottom-container">
        <div className="text-container">
          <h1>Kreiere dein individuelles Müsli</h1>
          <p>Wähle aus über 50 Zutaten und stelle dein perfektes Müsli zusammen</p>
        </div>
        <button onClick={navigateChoice}>MyMixx aufbauen</button>
      </div>

      <Pattern/>

      <div className="load">
        {Object.values(products).flat().map((product) => (
          <img key={product.img} src={product.img} style={{ display: 'none' }} />
        ))}
      </div>
    </div>
  )
}

export default StartPage