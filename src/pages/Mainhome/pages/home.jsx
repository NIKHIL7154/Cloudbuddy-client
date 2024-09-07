import React, { Fragment } from 'react'

import { Helmet } from 'react-helmet'

import StoreBanner from '../components/store-banner'
import PrimaryButton from '../components/primary-button'
import FeatureCard from '../components/feature-card'
import TestimonialsCard from '../components/testimonials-card'
import StatsCard from '../components/stats-card'
import LinkIconButton from '../components/link-icon-button'
import './home.css'
import './mystyle.css'
import './price.css'
import { Link } from 'react-router-dom'
const NewHome = (props) => {
  return (
    <div className="home-container10">
      
      <div data-role="Header" className="home-header-container">
        <header className="home-header">
          <div className="home-logo1">
            <span className="home-logoname1 fonte">Cloudbuddy</span>
          </div>
          <div className="home-menu1">
            <span className="home-text10 cursor-pointer"><a href="#">Home</a></span>
            <span className="home-text11 cursor-pointer"><a href="#features">Features</a></span>
            <span className="home-text12 cursor-pointer"><a href="#pricing">Pricing</a></span>
            <span className="home-text13 cursor-pointer"><a href="#achieved">Achievements</a></span>
          </div>
          <div className="home-container11">
            <div className="home-container12">
              <StoreBanner></StoreBanner>
            </div>
            <PrimaryButton
              rootclassName="primary-buttonroot-className-name"
              button="Go to Dashboard"
            ></PrimaryButton>
          </div>
          <div data-role="BurgerMenu" className="home-burger-menu">
            <div className="home-menu2">
              <span className="home-text14">About</span>
              <span className="home-text15">Products</span>
              <span className="home-text16">Pricing</span>
              <span className="home-text17">Blog</span>
            </div>
          </div>
        </header>
        <div data-role="MobileMenu" className="home-mobile-menu">
          <div className="home-top">
            <div className="home-logo2">
              <img
                alt="image"
                src="/logotype-dark.svg"
                className="home-image1"
              />
            </div>
            <div data-role="CloseMobileMenu" className="home-close-menu">
              <svg viewBox="0 0 1024 1024" className="home-icon10">
                <path d="M810 274l-238 238 238 238-60 60-238-238-238 238-60-60 238-238-238-238 60-60 238 238 238-238z"></path>
              </svg>
            </div>
          </div>
          <div className="home-mid">
            <span className="home-text18">About</span>
            <span className="home-text19">Products</span>
            <span className="home-text20">Pricing</span>
            <span className="home-text21">Blog</span>
            <span className="home-text22">Jobs</span>
            <span className="home-text23">More</span>
          </div>
          <div className="home-bot">
            <div className="home-container13">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link1"
              >
                <div className="home-container14">
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="home-icon12"
                  >
                    <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                  </svg>
                </div>
              </a>
              <a
                href="https://dribbble.com"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link2"
              >
                <div className="home-container15">
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="home-icon14"
                  >
                    <path d="M585.143 857.143c-5.714-33.143-27.429-147.429-80-284.571-0.571 0-1.714 0.571-2.286 0.571 0 0-222.286 77.714-294.286 234.286-3.429-2.857-8.571-6.286-8.571-6.286 65.143 53.143 148 85.714 238.857 85.714 52 0 101.143-10.857 146.286-29.714zM479.429 510.286c-9.143-21.143-19.429-42.286-30.286-63.429-193.143 57.714-378.286 53.143-384.571 53.143-0.571 4-0.571 8-0.571 12 0 96 36.571 184 96 250.286v0c102.286-182.286 304.571-247.429 304.571-247.429 5.143-1.714 10.286-2.857 14.857-4.571zM418.286 389.143c-65.143-115.429-134.286-209.143-139.429-216-104.571 49.143-182.286 145.714-206.857 261.714 9.714 0 166.286 1.714 346.286-45.714zM809.143 571.429c-8-2.286-112.571-35.429-233.714-16.571 49.143 135.429 69.143 245.714 73.143 268 84-56.571 143.429-146.857 160.571-251.429zM349.143 148c-0.571 0-0.571 0-1.143 0.571 0 0 0.571-0.571 1.143-0.571zM686.286 230.857c-65.714-58.286-152.571-93.714-247.429-93.714-30.286 0-60 4-88.571 10.857 5.714 7.429 76.571 100.571 140.571 218.286 141.143-52.571 194.286-133.714 195.429-135.429zM813.714 508c-1.143-88.571-32.571-170.286-85.143-234.286-1.143 1.143-61.143 88-209.143 148.571 8.571 17.714 17.143 36 25.143 54.286 2.857 6.286 5.143 13.143 8 19.429 129.143-16.571 256.571 11.429 261.143 12zM877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                  </svg>
                </div>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link3"
              >
                <div className="home-container16">
                  <svg
                    viewBox="0 0 950.8571428571428 1024"
                    className="home-icon16"
                  >
                    <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                  </svg>
                </div>
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link4"
              >
                <div className="home-container17">
                  <svg viewBox="0 0 1024 1024" className="home-icon18">
                    <path d="M406.286 644.571l276.571-142.857-276.571-144.571v287.429zM512 152c215.429 0 358.286 10.286 358.286 10.286 20 2.286 64 2.286 102.857 43.429 0 0 31.429 30.857 40.571 101.714 10.857 82.857 10.286 165.714 10.286 165.714v77.714s0.571 82.857-10.286 165.714c-9.143 70.286-40.571 101.714-40.571 101.714-38.857 40.571-82.857 40.571-102.857 42.857 0 0-142.857 10.857-358.286 10.857v0c-266.286-2.286-348-10.286-348-10.286-22.857-4-74.286-2.857-113.143-43.429 0 0-31.429-31.429-40.571-101.714-10.857-82.857-10.286-165.714-10.286-165.714v-77.714s-0.571-82.857 10.286-165.714c9.143-70.857 40.571-101.714 40.571-101.714 38.857-41.143 82.857-41.143 102.857-43.429 0 0 142.857-10.286 358.286-10.286v0z"></path>
                  </svg>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="home-main">
        <div className="home-blur-background"></div>
        <div className="home-hero">
          <div className="home-container18">
            <h1 className="home-text24 Headline1 fonte">
              <span>Make your website</span>
              <br></br>
              <span>Live in one click.</span>
            </h1>
            <PrimaryButton rootClassName="m-auto text-2xl w-[200px]" button="Get Started"></PrimaryButton>
          </div>
          <img
            alt="image"
            src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/156b9b116770475.6068beff48169.gif"
            className="home-image2"
          />
        </div>
        <img
          alt="image"
          src="/turquoise-circle.svg"
          className="home-turquoise-cirble"
        />
        <img
          alt="image"
          src="/purple-circle.svg"
          className="home-purple-circle"
        />
        <img alt="image" src="/left.svg" className="home-left" />
        <img alt="image" src="/right.svg" className="home-right" />
      </div>
      <div id='features' className="home-features1">
        <h2 className="home-text28 font-sans text-5xl font-bold mb-12">Why CloudBuddy?</h2>
        <div className="home-features2">
          <FeatureCard
            cardTitle="Free forever"
            text1={
              <Fragment>
                <span className="home-text29">
                  Unlimited websites with zero cost
                </span>
              </Fragment>
            }
          ></FeatureCard>
          <FeatureCard
            imageSrc="/02.svg"
            cardTitle="Flexibility"
            text1={
              <Fragment>
                <span className="home-text30">
                  Easily manage your websites at one place
                </span>
              </Fragment>
            }
          ></FeatureCard>
          <FeatureCard
            imageSrc="/03.svg"
            cardTitle="User friendly"
            text1={
              <Fragment>
                <span className="home-text31">
                  Just one click and your website is ready to serve your
                  customers
                </span>
              </Fragment>
            }
          ></FeatureCard>
          <FeatureCard
            imageSrc="/04.svg"
            cardTitle="Secure"
            text1={
              <Fragment>
                <span className="home-text32">
                  Our team is constantly adapting best practices to make sure
                  everything secured
                </span>
              </Fragment>
            }
          ></FeatureCard>
          <FeatureCard
            imageSrc="/05.svg"
            cardTitle="100% Uptime"
            text1={
              <Fragment>
                <span className="home-text33">
                  Your website will never go down
                </span>
              </Fragment>
            }
          ></FeatureCard>
          <FeatureCard
            imageSrc="/06.svg"
            cardTitle="Modify"
            text1={
              <Fragment>
                <span className="home-text34">
                  You can easily modify your website &apos;n&apos; number of
                  times
                </span>
              </Fragment>
            }
          ></FeatureCard>
        </div>
      </div>
      <h1 className="home-text35 text-5xl my-8 mt-16 font-bold font-sans">What users say?</h1>
      <div className="home-container19">
        <div className="home-container20">
          <TestimonialsCard
            rootclassName="testimonials-cardroot-className-name"
            text="I was surfing the web for almost 5 hours for a reliable and free web hosting provider and finally landed here. I think i do not need to surf anymore, i found my destination. "
            text1="Floyd Miles"
          ></TestimonialsCard>
        </div>
        <div className="home-container21">
          <TestimonialsCard
            rootclassName="testimonials-cardroot-className-name1"
            text="Hosting a site online was never been so easy. With cloudbuddy i have already hosted more than 20 sites and all are working fine. My customers never complained about the downtime of my website."
          ></TestimonialsCard>
        </div>
      </div>


      
<section id='pricing' className="plans__container">
  <div className="plans">
    <div className="plansHero">
      <h1 className="plansHero__title">Simple, transparent pricing</h1>
      <p className="plansHero__subtitle">No contracts. No suprise fees.</p>
    </div>
    <div className="planItem__container">
      
      <div className="planItem planItem--free">

        <div className="card">
          <div className="card__header">
            <div className="card__icon symbol symbol--rounded"></div>
            <h2>Free</h2>
          </div>
          <div className="card__desc">The plan that covers the most.</div>
        </div>

        <div className="price">$0<span>/ month</span></div>

        <ul className="featureList">
          <li>Unlimited Websites</li>
          <li>100% Uptime</li>
          <li>No Size Limit</li>
          <li>CDN Enabled</li>
          <li className="disabled">Custom Domain</li>
        </ul>

        <Link to="/auth/login"><button className="button">Get Started</button></Link>
      </div>
      
      {/* <div className="planItem planItem--pro">
        <div className="card">
          <div className="card__header">
            <div className="card__icon symbol"></div>
            <h2>Pro</h2>
            <div className="card__label label">Best Value</div>
          </div>
          <div className="card__desc">Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris</div>
        </div>

        <div className="price">$18<span>/ month</span></div>

        <ul className="featureList">
          <li>2 links</li>
          <li>Own analytics platform</li>
          <li>Chat support</li>
          <li className="disabled">Mobile application</li>
          <li className="disabled">Unlimited users</li>
        </ul>

        <button className="button button--pink">Get Started</button>
      </div> */}
      
      {/* <div className="planItem planItem--entp">
        <div className="card">
          <div className="card__header">
            <div className="card__icon"></div>
            <h2>Enterprise</h2>
          </div>
          <div className="card__desc">Nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor</div>
        </div>

        <div className="price">Lets Talk</div>

        <ul className="featureList">
          <li>2 links</li>
          <li>Own analytics platform</li>
          <li>Chat support</li>
          <li>Mobile application</li>
          <li>Unlimited users</li>
          <li>Customize Panel</li>
        </ul>

        <button className="button button--white">Get Started</button>
      </div> */}
      

    </div>
  </div>
</section>


      <div id='achieved' className="home-achievements">
        <div className="home-container22 text-2xl">
          <h2 className="home-text36">Achieved till now</h2>
          <span className="home-text37">
            With our super powers we have reached this
          </span>
        </div>
        <div className="home-container23">
          <div className="home-container24">
            <StatsCard
              number="100+"
              imageSrc="/01.svg"
              description="Users\n"
              text={
                <Fragment>
                  <span className="home-text38">Users</span>
                </Fragment>
              }
            ></StatsCard>
            <StatsCard
              number="1000+"
              imageSrc="/04.svg"
              description="Websites hosted"
              text={
                <Fragment>
                  <span className="home-text39">Websites hosted</span>
                </Fragment>
              }
            ></StatsCard>
          </div>
          <div className="home-container25">
            <StatsCard
              number="5000+"
              description="Visiting our sites"
              text={
                <Fragment>
                  <span className="home-text40">
                    <span>
                      Daily visitors on
                      <span
                        dangerouslySetInnerHTML={{
                          __html: ' ',
                        }}
                      />
                    </span>
                    <br></br>
                    <span>client websites</span>
                  </span>
                </Fragment>
              }
            ></StatsCard>
            <StatsCard
              number="140"
              imageSrc="/07.svg"
              description="Countries"
              text={
                <Fragment>
                  <span className="home-text44">Countries</span>
                </Fragment>
              }
            ></StatsCard>
          </div>
        </div>
      </div>
      <div className="home-feature1">
        <div className="home-container26 rounded-[50px]">
          <img
            alt="image"
            src="https://i.pinimg.com/originals/53/e4/1e/53e41e4bb6bba5a24deebf3617409715.gif"
            
            loading="lazy"
            className="home-image3 rounded-[30px]"
          />
        </div>
        <div className="home-container27">
          <h3 className="Headline3">Upcoming features.</h3>
          <span className="home-text46">
            As of now you can only host static websites at our server but in
            upcoming updates you will be able to host SPA, Web apps, SAAS tools
            etc without worrying about the infrastructure.
          </span>
          <LinkIconButton text="Join now to stay tuned"></LinkIconButton>
        </div>
      </div>
      <div className="home-cta"></div>
      <div className="home-footer">
        <footer className="home-container28">
          <span className="home-logoname2">Cloudbuddy</span>
          <div className="home-divider"></div>
          <div className="home-container29">
            <span className="home-text47 Body2">
              © 2024 Cloudbuddy All rights reserved
            </span>
            <div className="home-container30">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link5"
              >
                <div className="home-container31">
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="home-icon20"
                  >
                    <path d="M585.143 512c0-80.571-65.714-146.286-146.286-146.286s-146.286 65.714-146.286 146.286 65.714 146.286 146.286 146.286 146.286-65.714 146.286-146.286zM664 512c0 124.571-100.571 225.143-225.143 225.143s-225.143-100.571-225.143-225.143 100.571-225.143 225.143-225.143 225.143 100.571 225.143 225.143zM725.714 277.714c0 29.143-23.429 52.571-52.571 52.571s-52.571-23.429-52.571-52.571 23.429-52.571 52.571-52.571 52.571 23.429 52.571 52.571zM438.857 152c-64 0-201.143-5.143-258.857 17.714-20 8-34.857 17.714-50.286 33.143s-25.143 30.286-33.143 50.286c-22.857 57.714-17.714 194.857-17.714 258.857s-5.143 201.143 17.714 258.857c8 20 17.714 34.857 33.143 50.286s30.286 25.143 50.286 33.143c57.714 22.857 194.857 17.714 258.857 17.714s201.143 5.143 258.857-17.714c20-8 34.857-17.714 50.286-33.143s25.143-30.286 33.143-50.286c22.857-57.714 17.714-194.857 17.714-258.857s5.143-201.143-17.714-258.857c-8-20-17.714-34.857-33.143-50.286s-30.286-25.143-50.286-33.143c-57.714-22.857-194.857-17.714-258.857-17.714zM877.714 512c0 60.571 0.571 120.571-2.857 181.143-3.429 70.286-19.429 132.571-70.857 184s-113.714 67.429-184 70.857c-60.571 3.429-120.571 2.857-181.143 2.857s-120.571 0.571-181.143-2.857c-70.286-3.429-132.571-19.429-184-70.857s-67.429-113.714-70.857-184c-3.429-60.571-2.857-120.571-2.857-181.143s-0.571-120.571 2.857-181.143c3.429-70.286 19.429-132.571 70.857-184s113.714-67.429 184-70.857c60.571-3.429 120.571-2.857 181.143-2.857s120.571-0.571 181.143 2.857c70.286 3.429 132.571 19.429 184 70.857s67.429 113.714 70.857 184c3.429 60.571 2.857 120.571 2.857 181.143z"></path>
                  </svg>
                </div>
              </a>
              <a
                href="https://dribbble.com"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link6"
              >
                <div className="home-container32">
                  <svg
                    viewBox="0 0 877.7142857142857 1024"
                    className="home-icon22"
                  >
                    <path d="M585.143 857.143c-5.714-33.143-27.429-147.429-80-284.571-0.571 0-1.714 0.571-2.286 0.571 0 0-222.286 77.714-294.286 234.286-3.429-2.857-8.571-6.286-8.571-6.286 65.143 53.143 148 85.714 238.857 85.714 52 0 101.143-10.857 146.286-29.714zM479.429 510.286c-9.143-21.143-19.429-42.286-30.286-63.429-193.143 57.714-378.286 53.143-384.571 53.143-0.571 4-0.571 8-0.571 12 0 96 36.571 184 96 250.286v0c102.286-182.286 304.571-247.429 304.571-247.429 5.143-1.714 10.286-2.857 14.857-4.571zM418.286 389.143c-65.143-115.429-134.286-209.143-139.429-216-104.571 49.143-182.286 145.714-206.857 261.714 9.714 0 166.286 1.714 346.286-45.714zM809.143 571.429c-8-2.286-112.571-35.429-233.714-16.571 49.143 135.429 69.143 245.714 73.143 268 84-56.571 143.429-146.857 160.571-251.429zM349.143 148c-0.571 0-0.571 0-1.143 0.571 0 0 0.571-0.571 1.143-0.571zM686.286 230.857c-65.714-58.286-152.571-93.714-247.429-93.714-30.286 0-60 4-88.571 10.857 5.714 7.429 76.571 100.571 140.571 218.286 141.143-52.571 194.286-133.714 195.429-135.429zM813.714 508c-1.143-88.571-32.571-170.286-85.143-234.286-1.143 1.143-61.143 88-209.143 148.571 8.571 17.714 17.143 36 25.143 54.286 2.857 6.286 5.143 13.143 8 19.429 129.143-16.571 256.571 11.429 261.143 12zM877.714 512c0 242.286-196.571 438.857-438.857 438.857s-438.857-196.571-438.857-438.857 196.571-438.857 438.857-438.857 438.857 196.571 438.857 438.857z"></path>
                  </svg>
                </div>
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link7"
              >
                <div className="home-container33">
                  <svg
                    viewBox="0 0 950.8571428571428 1024"
                    className="home-icon24"
                  >
                    <path d="M925.714 233.143c-25.143 36.571-56.571 69.143-92.571 95.429 0.571 8 0.571 16 0.571 24 0 244-185.714 525.143-525.143 525.143-104.571 0-201.714-30.286-283.429-82.857 14.857 1.714 29.143 2.286 44.571 2.286 86.286 0 165.714-29.143 229.143-78.857-81.143-1.714-149.143-54.857-172.571-128 11.429 1.714 22.857 2.857 34.857 2.857 16.571 0 33.143-2.286 48.571-6.286-84.571-17.143-148-91.429-148-181.143v-2.286c24.571 13.714 53.143 22.286 83.429 23.429-49.714-33.143-82.286-89.714-82.286-153.714 0-34.286 9.143-65.714 25.143-93.143 90.857 112 227.429 185.143 380.571 193.143-2.857-13.714-4.571-28-4.571-42.286 0-101.714 82.286-184.571 184.571-184.571 53.143 0 101.143 22.286 134.857 58.286 41.714-8 81.714-23.429 117.143-44.571-13.714 42.857-42.857 78.857-81.143 101.714 37.143-4 73.143-14.286 106.286-28.571z"></path>
                  </svg>
                </div>
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer noopener"
                className="home-link8"
              >
                <div className="home-container34">
                  <svg viewBox="0 0 1024 1024" className="home-icon26">
                    <path d="M406.286 644.571l276.571-142.857-276.571-144.571v287.429zM512 152c215.429 0 358.286 10.286 358.286 10.286 20 2.286 64 2.286 102.857 43.429 0 0 31.429 30.857 40.571 101.714 10.857 82.857 10.286 165.714 10.286 165.714v77.714s0.571 82.857-10.286 165.714c-9.143 70.286-40.571 101.714-40.571 101.714-38.857 40.571-82.857 40.571-102.857 42.857 0 0-142.857 10.857-358.286 10.857v0c-266.286-2.286-348-10.286-348-10.286-22.857-4-74.286-2.857-113.143-43.429 0 0-31.429-31.429-40.571-101.714-10.857-82.857-10.286-165.714-10.286-165.714v-77.714s-0.571-82.857 10.286-165.714c9.143-70.857 40.571-101.714 40.571-101.714 38.857-41.143 82.857-41.143 102.857-43.429 0 0 142.857-10.286 358.286-10.286v0z"></path>
                  </svg>
                </div>
              </a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default NewHome
