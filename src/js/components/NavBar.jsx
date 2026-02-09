function NavBar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
                <div className="container-fluid">
                    <a className="navbar-brand text-white" href="#">Start Bootstrap</a>

                    
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav ms-auto"> 
                            <li className="nav-item">
                                <a className="nav-link fw-bold text-white" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link fw-bold text-white" href="#">About</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link fw-bold text-white" href="#">Services</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link fw-bold text-white" href="#">Contact</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );

}

export default NavBar