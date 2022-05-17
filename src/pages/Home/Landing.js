import React from 'react';
import landing from '../../assets/image/bucketgirl.png';
const Landing = () => {
    return (
        <section>
            <div className="hero h-scree lg:h-[60vh] bg-accent mt-16">
                <div className="hero-content flex-col lg:flex-row">
                    <div>
                        <p className='text-xl' data-aos="fade-up-right" data-aos-duration="2000">Best Quality</p>
                        <h1 className="text-5xl font-bold" data-aos="fade-up-right" data-aos-duration="1500" data-aos-delay="200">Professional Cleaning Service</h1>
                        <p className="py-6 max-w-xl" data-aos="fade-up-right" data-aos-duration="1200" data-aos-delay="400">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <button className="btn btn-primary" data-aos="zoom-in" data-aos-duration="1000" data-aos-delay="1500">Get Started</button>
                    </div>
                    <div className='h-[60vh] shrink-0'>
                        <img src={landing} alt='' className="h-full" />
                    </div>
                </div>
            </div>
            <div className='shadow-lg p-10 w-5/6 rounded-2xl relative mx-auto bg-base-200 z-50 mt-[-50px]'>
                <h1 className='text-2xl mb-4 text-primary'>Get Free Estimate</h1>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3'>
                    <input type="text" placeholder="Your Name" className="input input-bordered input-primary w-full" />
                    <input type="text" placeholder="Your phone number" className="input input-bordered input-primary w-full" />
                    <input type="text" placeholder="Type here" className="input input-bordered input-primary w-full" />
                    <input type="text" placeholder="Type here" className="input input-bordered input-primary w-full" />
                    <input type="text" placeholder="Type here" className="input input-bordered input-primary w-full" />
                    <input type="text" placeholder="Type here" className="input input-bordered input-primary w-full" />
                    <input type="text" placeholder="Type here" className="input input-bordered input-primary w-full" />
                    <input type="text" placeholder="Type here" className="input input-bordered input-primary w-full" />
                </div>
                <button className='btn btn-primary btn-sm mt-4' type="submit">Get A Quote</button>
            </div>
        </section>
    );
};

export default Landing;