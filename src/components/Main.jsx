import React, { Component } from 'react';
import { withTranslation } from 'react-i18next';

/* Main Css */
import './main.css'

/* Image */
import Office from '../image/office.jpg';
import Ball from '../image/ball.jpg';
import Mountains from '../image/mountains.jpg';
import SunRise from '../image/sunrise.jpg';
import Android from '../image/androidmain.jpg';
import Kotlinpage from '../image/kotlinpage.jpg';
import Kotlinpage1 from '../image/kotlinpage1.png';
import Kotlinpage2 from '../image/kotlinpage2.jpg';
import Kotlinpage3 from '../image/kotlinpage3.jpg';
import Kotlinperfect from '../image/kotlinperfect.jpg';




// CLASS
class Main extends Component {

    // display
    static displayName = "Main"

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

    // RENDER
    render() {
        let data = (this.props.t('about'))
        return (
            <React.Fragment >
                {/* start codes Header  */}
                <header id="header">
                    <div className="jumbotron text-white">
                        <div className="container">
                            <div className="social_icons p-4 text-center">
                                <h1 className="text-uppercase display-3 wow bounceIn animated" data-wow-delay=".50s">Welcome  <br /> to MY BLOG PAGE</h1>
                                <h4>Software, Android, React JS, Git, Html5, Css3, Js </h4>

                                {/* LinkedIn */}
                                <a href="https://www.linkedin.com/in/ahmetgur/">
                                    <i className="fa-brands fa-linkedin social-icon shadow"></i>
                                </a>
                                 {/* Medium */}
                                 <a href="https://medium.com/@ahmetgur">
                                <i class="fa-brands fa-medium social-icon shado"></i>
                                </a>
                                {/* Mail */}
                                <a href="mailto:ahhmetgur@gmail.com">
                                    <i class="fa-solid fa-envelope-open social-icon shadow"></i>
                                </a>
                                {/* GitHub */}
                                <a href="https://github.com/ahmetgurr">
                                    <i className="fa-brands fa-github social-icon shadow"></i>
                                </a>
                                {/* GitLab */}
                                <a href="https://gitlab.koddeposu.gov.tr/ahmetgurr">
                                    <i className="fa-brands fa-square-gitlab social-icon shadow"></i>
                                </a>
                               
                                {/* CV-Resume */}
                                <div className='cv-icons'>
                                    <a href="https://salmon-emmalynn-59.tiiny.site/"
                                        class=" cvButton btn btn-outline-primary text-center">Resume →</a>
                                </div>

                            </div>
                        </div>
                    </div>
                </header>
                {/* ends codes Header  */}

                {/* start codes Main  */}
                <main>



                    {/* start project_id */}
                    <section id="project_id">
                        <div className="icon_service">
                            <h2 className='text-center'> Projects</h2>
                            <div className="container">
                                <div className="row">
                                    <div className=" cardProject col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xxl-3 mb-4">
                                        <i class="fa-solid fa-location-dot"></i>
                                        <h4>Travel Reservation</h4>
                                        <h4 className='line-clamp4 fs-5' >With this application, you can easily make reservations before traveling and obtain information about the city you will be visiting. </h4> <br /> <br />
                                        <a href="https://github.com/ahmetgurr/TravelReservation"
                                            class=" gotoButton btn btn-outline-primary text-center">Go To →</a>
                                    </div>

                                    <div className="cardProject col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xxl-3">
                                        <i class="fa-solid fa-utensils text-success"></i>
                                        <h4>Recipes App</h4>
                                        <h4 className='line-clamp4 fs-5'>It allows you to list food recipes, perform search operations among lists, add, remove, and update recipes.</h4>
                                        <a href="https://github.com/ahmetgurr/TravelReservation"
                                            class=" gotoButton btn btn-outline-primary text-center">Go To →</a>
                                    </div>

                                    <div className="cardProject col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xxl-3">
                                        <i class="fa-solid fa-address-book text-secondary"></i>
                                        <h4>Contacts App</h4>
                                        <h4 className='line-clamp4 fs-5'>A contact application where you can save and list individuals' first names, last names, and phone numbers, and perform deletion and update operations among these records.</h4>
                                        <a href="https://github.com/ahmetgurr/TravelReservation"
                                            class=" gotoButton btn btn-outline-primary text-center">Go To →</a>
                                    </div>

                                    <div className="cardProject col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xxl-3">
                                        <i class="fa-solid fa-notes-medical text-warning"></i>
                                        <h4>Notes Application</h4>
                                        <h4 className='line-clamp4 fs-5'>An application where the user can keep notes, perform search operations among these notes, add and update notes with a pop-up message, and perform deletion and update operations through a settings button. </h4>
                                        <a href="https://github.com/ahmetgurr/TravelReservation"
                                            class=" gotoButton btn btn-outline-primary text-center">Go To →</a>
                                    </div>

                                    <div className="cardProject col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xxl-3 mt-5">
                                        <i class="fa-solid fa-plate-wheat text-dark"></i>
                                        <h4>Food Ordering Application</h4>
                                        <h4 className='line-clamp4 fs-5'>After completing user login processes and selecting a food category, the user filters based on meal ingredients and places an order.</h4>
                                        <a href="https://github.com/ahmetgurr/TravelReservation"
                                            class=" gotoButton btn btn-outline-primary text-center">Go To →</a>
                                    </div>


                                    <div className="cardProject col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xxl-3 mt-5">
                                        <i class="fa-solid fa-fingerprint text-info"></i>
                                        <h4>Catch Pic</h4>
                                        <h4 className='line-clamp4 fs-5'>A mobile application where you can have fun while trying to capture the image on the screen.</h4>
                                        <a href="https://github.com/ahmetgurr/TravelReservation"
                                            class=" gotoButton btn btn-outline-primary text-center">Go To →</a>
                                    </div>
                                </div> {/* end row */}
                            </div>{/* end container */}
                        </div>{/* end icon services */}
                    </section>
                    {/* end project */}


 
 

                    {/* start blog page */}
                    <section id="blog_id">
                        <div className="blog_service">
                            <h2 className='text-center'>Blog</h2>
                            <div className="container">
                                <div className="row">

                                    <div className="card-item col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xxl-6">
                                        <div class="card mb-4">
                                            <img class="card-img-top" src={Kotlinperfect} alt="Title" />
                                            <div class="card-body">
                                                <h4 class="card-title">Android Application Development Fundamentals: Project Structure, User Interface Design, and Resource Management</h4>
                                                <p class="card-text line-clamp5" style={{ maxHeight: "100px" }} >When developing applications on Android🤖, we will cover essential topics you need to know: Project Structure, User Interface Design, and Resource Management.  </p>
                                                <a href="https://medium.com/@ahmetgur/android-uygulama-geli%C5%9Ftirme-temelleri-proje-yap%C4%B1s%C4%B1-kullan%C4%B1c%C4%B1-aray%C3%BCz%C3%BC-tasar%C4%B1m%C4%B1-ve-resource-1dc1a7bf26b9"
                                                    className=" readButton btn btn-outline-primary text-center">Read More →</a>

                                            </div>
                                        </div>
                                    </div>

                                    <div className="card-item col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xxl-6">
                                        <div class="card mb-4">
                                            <img class="card-img-top" src={Kotlinperfect} alt="Title" />
                                            <div class="card-body">
                                                <h4 class="card-title">Storing and Processing Data with Arrays in Kotlin</h4>
                                                <p class="card-text line-clamp5" >In Kotlin, storing and processing data with arrays is a concept used to organize data systematically and access it easily.
                                                    Arrays are a frequently used data structure in many programming languages. In Kotlin, arrays are used to group data of
                                                    the same type and perform various operations on the data. In this article, I will discuss how to create arrays in Kotlin
                                                    and how to store data in them. 🤓</p>
                                                <a href="https://medium.com/@ahmetgur/kotlinde-dizilerle-veri-saklama-ve-i%CC%87%C5%9Flemler-8dd9c4424c6"
                                                    className=" readButton btn btn-outline-primary text-center">Read More →</a>

                                            </div>
                                        </div>
                                    </div>


                                    <div className="card-item col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xxl-6">
                                        <div class="card mb-4">
                                            <img class="card-img-top" src={Kotlinperfect} alt="Title" />
                                            <div class="card-body">
                                                <h4 class="card-title">Inheritance and Polymorphism in Kotlin</h4>
                                                <p class="card-text line-clamp5">
                                                    Object-oriented programming is a fundamental paradigm in software development, and Kotlin is a programming language
                                                    that supports this paradigm. Kotlin encompasses the two fundamental concepts of object-oriented programming: inheritance
                                                    and polymorphism. Inheritance refers to passing the properties and abilities of objects from a superclass to a subclass.
                                                    On the other hand, polymorphism involves transferring the properties of a class to a subclass.

                                                    To understand inheritance and polymorphism in Kotlin, let's take a closer look at the basic terms. 🙇👀 </p>
                                                <a href="https://medium.com/@ahmetgur/kotlinde-kal%C4%B1t%C4%B1m-ve-miras-b%C4%B1rakma-c175e87657bb"
                                                    className=" readButton btn btn-outline-primary text-center">Read More →</a>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="card-item col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xxl-6">
                                        <div class="card mb-4">
                                            <img class="card-img-top" src={Kotlinperfect} alt="Title" />
                                            <div class="card-body">
                                                <h4 class="card-title">The Power of Data Presentation in Android Applications: Lists, RecyclerView, and Adapter Design</h4>
                                                <p class="card-text line-clamp5">Today, I'll talk to you about one of the fundamental pillars of Android app development:
                                                    "Lists, RecyclerView, and Adapter Design." These concepts encompass how to organize and display data in your application's
                                                    user interface.
                                                    Let's start discussing these concepts. 🙇</p>
                                                <a href="https://medium.com/@ahmetgur/android-uygulamalarda-veri-g%C3%B6steriminin-g%C3%BCc%C3%BC-listeler-recyclerview-ve-adapter-tasar%C4%B1m%C4%B1-31a7acfc2eaa"
                                                    className=" readButton btn btn-outline-primary text-center">Read More →</a>
                                            </div>
                                        </div>
                                    </div>


                                    <div className="card-item col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xxl-6">
                                        <div class="card mb-4">
                                            <img class="card-img-top" src={Kotlinperfect} alt="Title" />
                                            <div class="card-body">
                                                <h4 class="card-title">Kotlin | Navigation Component</h4>
                                                <p class="card-text line-clamp5" style={{ maxHeight: "100px" }} >As the name suggests, this component enables navigation between pages. If you're a developer,
                                                    activities and fragments can sometimes become confusing.
                                                    Navigation Component comes to our rescue to resolve this confusion. 🏃🏿  </p>
                                                <a href="https://medium.com/@ahmetgur/kotlin-navigation-component-1a7625154434"
                                                    className=" readButton btn btn-outline-primary text-center">Read More →</a>

                                            </div>
                                        </div>
                                    </div>

                                    <div className="card-item col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xxl-6">
                                        <div class="card mb-4">
                                            <img class="card-img-top" src={Kotlinperfect} alt="Title" />
                                            <div class="card-body">
                                                <h4 class="card-title">Performing Data Addition, Deletion, and Update Operations with Firebase Realtime Database</h4>
                                                <p class="card-text line-clamp5" >Before delving into this topic, it's essential to understand what Realtime Database is.

                                                    In my previous article, I discussed "What is Firebase Realtime Database and Firestore?"
                                                    I recommend taking a look at that article first to have a better understanding of the topic. 🔙</p>
                                                <a href="https://medium.com/@ahmetgur/firebase-realtime-database-ve-firestore-nedir-8cb653393525"
                                                    className=" readButton btn btn-outline-primary text-center">Read More →</a>

                                            </div>
                                        </div>
                                    </div>


                                    <div className="card-item col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xxl-6">
                                        <div class="card mb-4">
                                            <img class="card-img-top" src={Kotlinperfect} alt="Title" />
                                            <div class="card-body">
                                                <h4 class="card-title">Model-View-ViewModel (MVVM) Architecture</h4>
                                                <p class="card-text line-clamp5">
                                                    As developers, we constantly seek easier ways to improve both user experience and code quality while
                                                    developing our applications. This is where the Model-View-ViewModel (MVVM) Design Pattern comes into play.

                                                    In this article, I will try to explain what MVVM is, why it is essential,
                                                    and how it differs from other design patterns. 🏃🏾

                                                    To understand inheritance and polymorphism in Kotlin, let's take a closer look at the basic terms. 🙇👀 </p>
                                                <a href="https://medium.com/@ahmetgur/model-view-viewmodel-mvvm-teknolojisi-bd9c887d7730"
                                                    className=" readButton btn btn-outline-primary text-center">Read More →</a>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="card-item col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xxl-6">
                                        <div class="card mb-4">
                                            <img class="card-img-top" src={Kotlinperfect} alt="Title" />
                                            <div class="card-body">
                                                <h4 class="card-title">What is Firebase? What are the Differences Between Realtime Database and Firestore?</h4>
                                                <p class="card-text line-clamp5">As developers, we constantly look for easier ways to enhance both user experience
                                                    and code quality while developing our applications. This is where the Model-View-ViewModel (MVVM) Design Pattern comes
                                                    into play.

                                                    In this article, I will try to explain what MVVM is, why it is so important, and how it differs
                                                    from other design patterns. 🏃🏾</p>
                                                <a href="https://medium.com/@ahmetgur/firebase-realtime-database-ve-firestore-nedir-8cb653393525"
                                                    className=" readButton btn btn-outline-primary text-center">Read More →</a>
                                            </div>
                                        </div>
                                    </div>

                                </div> {/* end row */}
                            </div>{/* end container */}
                        </div>{/* end icon services */}
                    </section>
                    {/* end blog */}


                    {/* start about_id */}
                    <section id="about_id">
                        <div className="about_service">
                            <h2 className='text-center text-white'> About Me</h2>
                            <div className="container">
                                <div className="row">
                                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xxl-12">
                                        <i class="fa-solid fa-blog text-center"></i>
                                        <p className='line-clamp15  text-white'> I specialize in Android Mobile Application Development with Kotlin, where I engage in the dynamic world of creating innovative and user-friendly applications. My passion for this field is a driving force that propels me to consistently enhance my expertise.

                                            In addition to my focus on Android development, I am actively expanding my skill set into the Front-end domain, aiming for a comprehensive understanding of both the mobile and web development landscapes. This dual expertise allows me to contribute to diverse and integrated projects.

                                            My educational background, coupled with hands-on experience on various projects, serves as a solid foundation for my continuous growth in this dynamic industry. Each project I undertake becomes an opportunity to learn and apply new technologies, ensuring that I stay abreast of the latest trends and advancements.

                                            As an individual, I embody a perpetual openness to learning, driven by a curious spirit that pushes boundaries. This quality enables me to adapt to evolving technologies and embrace innovative solutions. My strong communication skills further enrich my ability to collaborate effectively within a team, contributing positively to the collective goals and outcomes.

                                            In my career journey, I am guided by the overarching goal of bringing substantial value to my team. Whether through crafting seamless mobile experiences or designing engaging front-end interfaces, I am committed to delivering impactful contributions that elevate the overall success of the projects I am involved in.</p>
                                        <button className="btn btn-outline-primary text-cente">More ...</button>
                                    </div>
                                </div> {/* end row */}
                            </div>{/* end container */}
                        </div>{/* end about services */}
                    </section>  {/* end about services */}


                    {/* start contact_id */}
                    <section id="contact_id">
                        <div className="contact_service">
                            <h2 className='text-center  mb-4 text-dark text-uppercase'> Contact</h2>
                            <div className="container">
                                <div className="row">
                                    {/* MAP */}
                                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xxl-6">
                                        <div className="mapouter">
                                            <div className="gmap_canvas">
                                                <iframe
                                                    className="gmap_iframe"
                                                    frameBorder={0}
                                                    scrolling="no"
                                                    marginHeight={0}
                                                    marginWidth={0}
                                                    src="https://maps.google.com/maps?width=600&height=400&hl=en&q=malatya&t=&z=14&ie=UTF8&iwloc=B&output=embed"
                                                />
                                                <a href="https://embed-googlemap.com">embed google map</a>
                                            </div>
                                            <style
                                                dangerouslySetInnerHTML={{
                                                    __html:
                                                        ".mapouter{position:relative;text-align:right;width:600px;height:400px;}.gmap_canvas {overflow:hidden;background:none!important;width:600px;height:400px;}.gmap_iframe {width:600px!important;height:400px!important;}"
                                                }}
                                            />
                                        </div>

                                    </div>

                                    {/* FORM */}
                                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-6 col-xxl-6">
                                        <form action="#!" method="post" autoComplete='on'>
                                            {/* Username */}
                                            <div className="form-group mt-4 mb-4">
                                                <label htmlFor="uname">Username</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="uname"
                                                    placeholder="kullanıcı adınız"
                                                    title='kullanıcı adınız'
                                                />
                                            </div>

                                            {/* Email */}
                                            <div className="form-group mb-4">
                                                <label htmlFor="uemail">Email address</label>
                                                <input
                                                    type="email"
                                                    className="form-control"
                                                    id="uemail"
                                                    name="uemail"
                                                    placeholder="Email adresiniz"
                                                    title="Email adresiniz"
                                                />
                                            </div>

                                            {/* Subject */}
                                            <div className="form-group mb-4">
                                                <label htmlFor="usubject">Konu</label>
                                                <input
                                                    type="text"
                                                    className="form-control"
                                                    id="usubject"
                                                    name="usubject"
                                                    placeholder="Konu"
                                                    title="Email Konusu"
                                                />
                                            </div>

                                            {/* Content */}
                                            <div className="form-group mb-4">
                                                <label htmlFor="exampleFormControlTextarea1">İçerik</label>
                                                <textarea
                                                    className="form-control"
                                                    id="exampleFormControlTextarea1"
                                                    rows={3}
                                                    defaultValue={""}
                                                />
                                            </div>

                                            <div className="form-group mt-4 mb-4">
                                                <input type="reset" id="reset" name="reset" value="Temizle" className="btn btn-danger me-3" />
                                                <button type="submit" id="submit" name="submit" className="btn btn-primary">Gönder </button>
                                            </div>

                                        </form>

                                    </div>
                                </div> {/* end row */}
                            </div>{/* end container */}
                        </div>{/* end about services */}
                    </section>  {/* end about services */}

                    {/* start backToTop */}
                    <a href="#header" id="backToTop" className="btn btn-outline-primary">
                        <i class="fa-solid fa-arrow-up"></i>
                    </a>

                </main>
                {/* end codes Main  */}

            </React.Fragment>
        ); //end retur
    } //end render
} //end class

// EXPORT HEADER
export default withTranslation()(Main);