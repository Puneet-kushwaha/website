import React, {useState, useEffect} from 'react';
import {Link, useLocation} from 'react-router-dom';

function Header() {
    const location = useLocation();
    const [scrollAmount, setScrollAmount] = useState(0);
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
        document.getElementById("hamburger").classList.remove("open")
        document.getElementById("hamburger-content").classList.remove("show")
        setAnimate(true);
        setScrollAmount(0);
        const animationDuration = 1000;
        const timeoutId = setTimeout(() => {
            setAnimate(false);
        }, animationDuration);
        return () => clearTimeout(timeoutId);
    }, [location.pathname]);

    useEffect(() => {
        const handleScroll = () => {
            const currentScrollPos = window.scrollY;
            if(!document.getElementById("hamburger").classList.contains("open")){
                if(scrollAmount > 100)
                    document.getElementById("header").classList.add("color");
                else
                    document.getElementById("header").classList.remove("color");

                if (currentScrollPos > scrollAmount && scrollAmount > 50) {
                    // Scrolling down
                    document.getElementById("header").classList.add("hide");
                } else if (currentScrollPos < scrollAmount) {
                    // Scrolling up
                    document.getElementById("header").classList.remove("hide");
                }
                setScrollAmount(currentScrollPos);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [scrollAmount]);

    const handleHamburgerClick = async () => {
        document.getElementById("hamburger").classList.toggle("open")
        document.getElementById("hamburger-content").classList.toggle("show");
        document.getElementById("header").classList.add("color");
        if(!document.getElementById("hamburger").classList.contains("open") && window.scrollY < 100)
            document.getElementById("header").classList.remove("color");
        document.getElementById("hamburger-content").style.height = window.innerHeight - document.getElementById("header").clientHeight + 1 + "px";
    };

    useEffect(() => {
        document.getElementById("hamburger-content").style.top = document.getElementById("header").clientHeight - 1 + "px";
    }, []);

    const navLinks = [
        {
            label: "Home",
            sref: "/"
        },
        {
            label: "About",
            sref: "/about"
        },
        {
            label: "Services",
            sref: "/services"
        },
        {
            label: "Contact Us",
            sref: "/contact-us"
        },
    ];

    return (
        <header id={"header"} className={`cw ${animate ? "animate__animated animate__fadeInUp": ""}`}>
            <div className={"d-flex justify-content-between"}>
                <div className={"logo"}>Logo</div>
                <nav className={"d-none d-lg-flex align-items-center"}>
                    <ul className={"d-flex"}>
                        {
                            navLinks.map(link => <li><Link className={"link"} to={link.sref}>{link.label}</Link></li>)
                        }
                    </ul>
                </nav>
                <div className={"d-none d-lg-flex align-items-center"}>
                    <button className={"theme-btn"}>Get In Touch</button>
                </div>
                <button
                    className={"d-block d-lg-none"}
                    id={"hamburger"}
                    onClick={() => handleHamburgerClick()}
                >
                <span>
                    <span className={"bar bar-1"}/>
                    <span className={"bar bar-2"}/>
                    <span className={"bar bar-3"}/>
                </span>
                </button>
            </div>
            <div id={"hamburger-content"} className={"pb-4"}>
                <div className={"d-flex d-lg-none flex-column justify-content-between h-100"}>
                    <ul>
                        {
                            navLinks.map(link => <li><Link className={"link"} to={link.sref}>{link.label}</Link></li>)
                        }
                    </ul>

                    <div className={"d-flex justify-content-center"}>
                        <button className={"theme-btn w-100"}>Get In Touch</button>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
