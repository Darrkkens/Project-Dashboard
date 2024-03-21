import './slidebar.css'


const Sidebar = () => {
    return (
    <main>
        <aside>
            <button id="close-btn">
                <span className="material-icons">close</span>
            </button>
            <div className="sidebar">
                <a href="#" className="active">
                    <span className="material-icons">dashboard</span>
                    <h4>Dashboard</h4>
                </a>
                <a href="#">
                    <span className="material-icons">currency_exchange</span>
                    <h4>Exchange</h4>
                </a>
                <a href="#">
                    <span className="material-icons">account_balance_wallet</span>
                    <h4>Wallet</h4>
                </a>
                <a href="#">
                    <span className="material-icons">credit_card</span>
                    <h4>Transactions</h4>
                </a>
                <a href="#">
                    <span className="material-icons">pie_chart</span>
                    <h4>Analytics</h4>
                </a>
                <a href="#">
                    <span className="material-icons">email</span>
                    <h4>Messagens</h4>
                </a>
                <a href="#">
                    <span className="material-icons">help_center</span>
                    <h4>Help Center</h4>
                </a>
                <a href="#">
                    <span className="material-icons">settings</span>
                    <h4>Settings</h4>
                </a>
            </div>

            <div className="updates">
                <span className="material-icons">update</span>
                <h4>Update Available</h4>
                <p>Security Updates</p>
                <p>General Updates</p>
                <a href="#">Update now</a>
            </div>
            
        </aside>
    </main>
    );
};

export default Sidebar;