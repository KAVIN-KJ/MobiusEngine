import Card from './Card'
import './App.css'
import './index.css'
import VideoCard from './VideoCard'
import Logo from './assets/logoLarge.png'
import ebook from './assets/bookImage.png'
import arrow from './assets/arrow.png'
import book from './assets/bookIcon.png'
import bluelogo from './assets/LogoBlue.png'
import ashwin from './assets/Ashwin.png'
import nicolle from './assets/Nicolle.png'
import WhyChooseUs from './WhyChoseUs'
import PriceCard from './PriceCard'
import AdvancedPlan from './AdvancedPlan'
import ResumePlans from './ResumePlans'
import Footer from './Footer'

function App() {

  return (
    <>
      <section id="home">
        <div className='homeBG'>
          <div className='navbar' >
            <img className='logo-white' src={Logo} alt="" />
            <div className='links'>
              <span>Home</span>
              <span>About Us</span>
              <span>Plans</span>
              <span>Testimonials</span>
              <span>Privacy Policy</span>
              <span>More</span>
            </div>

            <div className='getStarted' >Get Started</div>

          </div>
          <div className='homebody'>

            <div className='homecontent' >
              <div className='descriptioncontainer'>
                <h1 className='description'>Land job interviews
                  <br />
                  <span>10x</span> faster
                </h1>
                <p className='contentpara'>
                  Custom-built resumes that match your goals, keywords, and <br />recruiter expectations.
                </p>
                <div className='getStarted'>
                  Get Started
                </div>
              </div>
              <div className='ebookcontainer'>
                <img width="301.2px" src={ebook} alt="" />
                <span className='ebookdownload'>Download Free E-Book</span>
                <div className='bookicon'>
                  <img src={book} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id='howwework' className='howwework'>
        <div className='titlecontainer'>
          <h2 className='title'>How we work ?</h2>
        </div>
        <div className='cards'>
          <Card num="1" desc="Submit Intake Form" />
          <Card num="2" desc="We do the search and curation for list of jobs" />
          <Card num="3" desc="You approve, we do the tedious part (applying)" />
          <Card num="4" desc="You get the interviews" />
        </div>
      </section>
      <section id='about' className='about' >

        <h2 className='aboutheading'>About Us</h2>

        <div className='peoplecontainer' >
          <div className='people'>
            <img src={ashwin} alt="" />
            <p>
              <b>Ashwin</b> is the founder of mobiusengine.ai. He is an accomplished senior executive with over 20 years of experience in cloud infrastructure and financial services. With over 2 decades of experience at Google and JP Morgan, Ashwin held various product and GTM roles. Ashwin is an MBA holder from Yale University.
              <br />
              <br />
              Ashwin's vision with Mobius is to give job seekers a significant advantage in securing the roles of their dreams.

            </p>
          </div>
          <div className='people'>

            <img src={nicolle} alt="" />
            <p>
              <b>Nicolle</b> s an Executive coach at Mobius specializing in resume builds and career advisory.
              <br /><br />
              With a B.S. in Business Administration from UC Berkeley and 7+ years of experience in AI-driven product strategy, she has seen firsthand how the proper positioning opens doors. She takes a targeted, results-driven approach to help clients confidently stand out and land roles that truly match their skills and potential.
            </p>
          </div>
          <p className='learnmore'>Learn more about our board of Advisors <br />  <br />Follow us on Linkedin page </p>
          <p className='learnmore'></p>
        </div>
      </section>
      <section className='clients' id='clients'>
        <h2 className='clientstitle'>What our clients have to say</h2>
        <div className='videocards' >
          <VideoCard />
          <VideoCard />
          <VideoCard />
        </div>

        <div className="action-buttons">
          <button className="btn-outline">
            More customer testimonials <span className="arrow">↗</span>
          </button>
          <button className="btn-solid">
            Get Started <span className="arrow">→</span>
          </button>
        </div>
      </section>

      <section id="whychooseus" className='whychooseus' >
        <WhyChooseUs />
      </section>

      <section className='jobapplication' >

        <h2 className='jobapplication-heading'>Job Application Service plans</h2>

        <PriceCard />
        <AdvancedPlan />

      </section>
      <section id='resumeBuilding' className='resume-building' >
        <div className='resumebuildingheading'>
          <h2 className='resumebuildingheading'>
            Resume Building & Coaching
          </h2>
          <span>

            Let's talk about where you're headed — and how your resume can get you there. <br /> <b> Schedule a call to get started.</b>
          </span>
        </div>

        <div className='resumeplancontainer' >
          <ResumePlans
            title="Resume Rebuild"
            subtitle="Crafted for senior to VP-level professionals ready for their next big step."
            price="1000"
            frequency="one time"
            buttonText="Get Started"
            features={[
              "3× 30–min coaching",
              "Focused on storytelling, not just formatting",
              "Analyst + full application team on Pacific hours",
              "Tailored to your target industry, company, or role",
              "Direct work with our co–founder (ex–Google, JP Morgan)",
              "Executive coaching from UC Berkeley alum with 10+ yrs experience",
              "Resume Rebuild portfolio available upon request"
            ]}
          />
          <ResumePlans
            title="Interview Prep"
            subtitle="Two sessions to sharpen your story, confidence, and clarity — fast."
            price="500"
            frequency="one time"
            buttonText="Get Started"
            features={[
              "2× 45–min live coaching with our co–founder",
              "Real–time, practical feedback",
              "Build clarity, empathy & executive presence",
              "For senior and leadership roles — technical & non–technical"
            ]}
          />
        </div>
      </section>
      <section className='contactus'>

        <div className='contact-container'>
            <div>STILL HAVE <br/> DOUBTS?</div>
            <h1>Contact Us</h1>
            <img src={arrow} alt="" />
        </div>

      </section>

      <section className='footerpage' >
        <Footer/>
      </section>

    </>
  )
}

export default App
