import React from 'react';
import './leaft.css'
import univelar from '../../img/uniliver.png'
import tesla from '../../img/tesla.png'
import monster from '../../img/monster.png'
import mcdonalds from '../../img/mcdonalds.png'
import visa from '../../img/visa.png';
import mastercard from '../../img/master card.png';





const Investments = () => {
  return (
    <section className="right">
      <div className="investments">
        <div className="header">
          <h2>Investments</h2>
          <a href="#">More <span className="material-icons">chevron_right</span></a>
        </div>
        <div className="investment">
          <img src={univelar} alt="Uniliver" />
          <h4>Uniliver</h4>
          <div className="data-time">
            <p>7 Nov, 2024</p>
            <small className="text-muted">9:14pm</small>
          </div>
          <div className="bond">
            <p>1402</p>
          </div>
          <div className="amount">
            <h4>$20,00</h4>
            <small className="danger">-4.27%</small>
          </div>
        </div>
        <div className="investment">
          <img src={tesla} alt="Tesla" />
          <h4>Tesla</h4>
          <div className="data-time">
            <p>31 Set, 2024</p>
            <small className="text-muted">10:24pm</small>
          </div>
          <div className="bond">
            <p>5377</p>
          </div>
          <div className="amount">
            <h4>$720,110</h4>
            <small className="success">+38.2%</small>
          </div>
        </div>
        <div className="investment">
          <img src={monster} alt="Monster" />
          <h4>Monster</h4>
          <div className="data-time">
            <p>1 Dec, 2024</p>
            <small className="text-muted">9:14pm</small>
          </div>
          <div className="bond">
            <p>700</p>
          </div>
          <div className="amount">
            <h4>$13,110</h4>
            <small className="success">+7.01%</small>
          </div>
        </div>
        <div className="investment">
          <img src={mcdonalds} alt="McDonalds" />
          <h4>McDonalds</h4>
          <div className="data-time">
            <p>3 Dec, 2021</p>
            <small className="text-muted">8:17pm</small>
          </div>
          <div className="bond">
            <p>5200</p>
          </div>
          <div className="amount">
            <h4>$78,030</h4>
            <small className="danger">-1.02%</small>
          </div>
        </div>
      </div>
      {/* END OF INVESTMENTS */}
      <div className="recent-transactions">
        <div className="header">
          <h2>Recent Transactions</h2>
          <a href="#">More <span className="material-icons">chevron_right</span></a>
        </div>

        <div className="transaction">
          <div className="service">
            <div className="icon bg-purple-light">
              <span className="material-icons purple">headphones</span>
            </div>
            <div className="details">
              <h4>Music</h4>
              <p>03.03.2024</p>
            </div>
          </div>
          <div className="card-details">
            <div className="card bg-danger">
              <img src={visa} alt="Visa" />
            </div>
            <div className="details">
              <p>*5720</p>
              <small className="text-muted">Credit Card</small>
            </div>
          </div>
          <h4>-$20</h4>
        </div>

        <div className="transaction">
          <div className="service">
            <div className="icon bg-success-light">
              <span className="material-icons success">restaurant</span>
            </div>
            <div className="details">
              <h4>Foods</h4>
              <p>11.01.2024</p>
            </div>
          </div>
          <div className="card-details">
            <div className="card bg-primary">
              <img src={visa} alt="Visa" />
            </div>
            <div className="details">
              <p>*6745</p>
              <small className="text-muted">Credit Card</small>
            </div>
          </div>
          <h4>-$50</h4>
        </div>

        <div className="transaction">
          <div className="service">
            <div className="icon bg-danger-light">
              <span className="material-icons danger">sports_esports</span>
            </div>
            <div className="details">
              <h4>Games</h4>
              <p>20.02.2024</p>
            </div>
          </div>
          <div className="card-details">
            <div className="card bg-dark">
              <img src={mastercard} alt="MasterCard" />
            </div>
            <div className="details">
              <p>*9250</p>
              <small className="text-muted">Credit Card</small>
            </div>
          </div>
          <h4>-$120</h4>
        </div>

        <div className="transaction">
          <div className="service">
            <div className="icon bg-success-light">
              <span className="material-icons success">fitness_center</span>
            </div>
            <div className="details">
              <h4>Academy</h4>
              <p>23.02.2024</p>
            </div>
          </div>
          <div className="card-details">
            <div className="card bg-dark">
              <img src={mastercard} alt="MasterCard" />
            </div>
            <div className="details">
              <p>*2757</p>
              <small className="text-muted">Credit Card</small>
            </div>
          </div>
          <h4>-$10</h4>
        </div>
        {/* END OF TRANSACTION */}
      </div>
    </section>
  );
};

export default Investments;
