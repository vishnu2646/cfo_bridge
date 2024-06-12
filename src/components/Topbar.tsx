import logo from '../assets/logo.png';

const Topbar = ({ children }: any) => {
    return (
        <div className="topbar">
            <img src={logo} alt="logo" className='logo-img'/>
            {children}
        </div>
    );
};

export default Topbar;
