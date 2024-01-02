import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';

// CLASS
class Footer extends Component {

    // display
    static displayName = "Footer"

    // constructor
    constructor(props) {
        super(props);
        // STATE
        this.state = {

        }
        //BIND
    }

    // CDM

    // Function
    firstNewDate = () => {
        return "2020"
    }

    secondNewDate(){
        return ` ${new Date().getFullYear()} ` 
    }

     // RENDER
     render() {
        return (
            <React.Fragment>
                <footer className="bg-dark text-white text-center fixed-bottom44">
                    {/* Grid container */}
                    <div className="container p-4 pb-0">
                        {/* Section: Social media */}
                        <section className="mb-4">

                            {/* Mail */}
                            <a
                                data-mdb-ripple-init=""
                                className="btn text-white btn-floating m-1"
                                style={{ backgroundColor: "#0063b0" }}
                                href="mailto:ahhmetgur@gmail.com"
                                role="button"
                            >
                                <i class="fa-regular fa-envelope"></i>
                            </a>
                                    

                            {/* Instagram */}
                            <a
                                data-mdb-ripple-init=""
                                className="btn text-white btn-floating m-1"
                                style={{ backgroundColor: "#ac2bac" }}
                                href="https://www.instagram.com/ahmet.gurr"
                                role="button"
                            >
                                <i className="fab fa-instagram" />
                            </a>
                            {/* Linkedin */}
                            <a
                                data-mdb-ripple-init=""
                                className="btn text-white btn-floating m-1"
                                style={{ backgroundColor: "#0082ca" }}
                                href="https://www.linkedin.com/in/ahmetgur/"
                                role="button"
                            >
                                <i className="fab fa-linkedin-in" />
                            </a>

                            {/* GitLab */}
                            <a
                                data-mdb-ripple-init=""
                                className="btn text-white btn-floating m-1"
                                style={{ backgroundColor: "#fc6d27" }}
                                href="https://gitlab.koddeposu.gov.tr/ahmetgurr"
                                role="button"
                            >
                                <i class="fa-brands fa-gitlab"></i>
                            </a>



                            {/* Github */}
                            <a
                                data-mdb-ripple-init=""
                                className="btn text-white btn-floating m-1"
                                style={{ backgroundColor: "#333333" }}
                                href="https://github.com/ahmetgurr"
                                role="button"
                            >
                                <i className="fab fa-github" />
                            </a>
                        </section>
                        {/* Section: Social media */}
                    </div>
                    {/* Grid container */}
                    {/* Copyright */}
                    <div
                        className="text-center p-3"
                        style={{ backgroundColor: "rgba(0, 0, 0, 0.05)" }}
                    >
                        © {this.firstNewDate()} - {this.secondNewDate()} Copyright:
                        <a className="text-body" href="https://github.com/ahmetgurr">
                            Btk Akademi
                        </a>
                    </div>
                    {/* Copyright */}
                </footer>

            </React.Fragment>
        ); //end retur
    } //end render
} //end class

// EXPORT HEADER (withTransaction)
export default withTranslation()(Footer);