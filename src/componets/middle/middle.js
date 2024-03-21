import React from 'react';
import './middle.css'; 
import BTC from '../../img/BTC.png';
import visa from '../../img/visa.png';
import eth from '../../img/ETH.png';
import mastercard from '../../img/master card.png';
import chip from '../../img/card chip.png';
import EUR from '../../img/EURO.png';

import ChartComponent from '../chart/chart';

const Middle = () => {
    return (
        <section className="middle">
            <div className="header">
                <h1>Overview</h1>
                <input type="date" />
            </div>
            <div className="cards">
                <div className="card">
                    <div className="top">
                        <div className="left">
                            <img src={BTC} alt="BTC" />
                            <h2>BTC</h2>
                        </div>
                        <img src={visa} alt="Visa" className="right" />
                    </div>
                    <div className="middle">
                        <h1>$827,199</h1>
                        <div className="chip">
                            <img src={chip} alt="Card Chip" />
                        </div>
                    </div>
                    <div className="bottom">
                        <div className="left">
                            <small>Card Holder</small>
                            <h5>JOHN DOE</h5>
                        </div>
                        <div className="right">
                            <div className="expiry"> 
                                <small>Expiry</small>
                                <h5>08/23</h5>
                            </div>
                            <div className="cvv">
                                <small>CVV</small>
                                <h5>123</h5>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="top">
                        <div className="left">
                            <img src={eth} alt="ETH" />
                            <h2>ETH</h2>
                        </div>
                        <img src={mastercard} alt="Mastercard" className="right" />
                    </div>
                    <div className="middle">
                        <h1>$95,623</h1>
                        <div className="chip">
                            <img src={chip} alt="Card Chip" />
                        </div>
                    </div>
                    <div className="bottom">
                        <div className="left">
                            <small>Card Holder</small>
                            <h5>JOHN DOE</h5>
                        </div>
                        <div className="right">
                            <div className="expiry"> 
                                <small>Expiry</small>
                                <h5>08/23</h5>
                            </div>
                            <div className="cvv">
                                <small>CVV</small>
                                <h5>123</h5>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="card">
                    <div className="top">
                        <div className="left">
                            <img src={EUR} alt="EUR" />
                            <h2>EUR</h2>
                        </div>
                        <img src={visa} alt="Visa" className="right" />
                    </div>
                    <div className="middle">
                        <h1>$76,759</h1>
                        <div className="chip">
                            <img src={chip} alt="Card Chip" />
                        </div>
                    </div>
                    <div className="bottom">
                        <div className="left">
                            <small>Card Holder</small>
                            <h5>JOHN DOE</h5>
                        </div>
                        <div className="right">
                            <div className="expiry"> 
                                <small>Expiry</small>
                                <h5>08/25</h5>
                            </div>
                            <div className="cvv">
                                <small>CVV</small>
                                <h5>123</h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="monthly-report">
            <div class="report">
                        <h3>Income</h3>
                        <div>
                            <details>
                                <h1>$29,023</h1>
                                <h6 class="success">+3.5%</h6>
                            </details>
                            <p class="text-muted">Compared to 26 last month</p>
                        </div>
                  </div>
                  <div class="report">
                    <h3>Expenses</h3>
                    <div>
                        <details>
                            <h1>$9,005</h1>
                            <h6 class="danger">-0.5%</h6>
                        </details>
                        <p class="text-muted">Compared to 26 last month</p>
                    </div>
              </div>
              <div class="report">
                <h3>Cashback</h3>
                <div>
                    <details>
                        <h1>$4,013</h1>
                        <h6 class="success">+7.1%</h6>
                    </details>
                    <p class="text-muted">Compared to 26 last month</p>
                </div>
          </div>
          <div class="report">
            <h3>Turnover</h3>
            <div>
                <details>
                    <h1>$118,923</h1>
                    <h6 class="danger">-17.8%</h6>
                </details>
                <p class="text-muted">Compared to 26 last month</p>
            </div>
        </div>
            </div>
            <div className="fast-payment">
            <h2>Fast Payment</h2>
        <div class="badges">
            <div class="badge">
                <span class="material-icons">add</span>
            </div>
            <div class="badge">
            <span class="bg-purple"></span>
                <div>
                    <h5>Training</h5>
                      <h4>$50</h4>
                </div>
            </div>
            <div class="badge">
                <span class="bg-success"></span>
                    <div>
                        <h5>Internet</h5>
                          <h4>$40</h4>
                    </div>
                </div>
                <div class="badge">
                    <span class="bg-purple"></span>
                        <div>
                            <h5>Gas</h5>
                              <h4>$190</h4>
                        </div>
                    </div>
                    <div class="badge">
                        <span class="bg-danger"></span>
                            <div>
                                <h5>Movies</h5>
                                  <h4>$35</h4>
                            </div>
                        </div>
                        <div class="badge">
                            <span class="bg-success"></span>
                                <div>
                                    <h5>Education</h5>
                                      <h4>$999</h4>
                                </div>
                            </div>
                            <div class="badge">
                                <span class="bg-danger"></span>
                                    <div>
                                        <h5>Electricity</h5>
                                          <h4>$109</h4>
                                    </div>
                                </div>
                                <div class="badge">
                                    <span class="bg-success"></span>
                                        <div>
                                            <h5>Food</h5>
                                              <h4>$399</h4>
                                        </div>
                                    </div>
                            </div>
            </div>
            <ChartComponent/>
        </section>
    );
};

export default Middle;
