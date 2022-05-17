import React from 'react';

const Login = () => {
    return (
        <section className='flex bg-accent px-2 justify-center items-center'>
            <div className="card flex-shrink-0 mt-20 mb-4 w-full max-w-sm shadow-2xl bg-base-100 ">
                <div className="card-body">
                    <h1 className=' text-2xl text-center font-bold text-primary'>LOGIN</h1>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input type="text" placeholder="email" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <input type="text" placeholder="password" className="input input-bordered" />
                        <label className="label">
                            <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                        </label>
                    </div>
                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Login</button>
                    </div>
                    <div className="divider">OR</div>
                    <button className='btn btn-glass hover:btn-accent'>Continue with google</button>
                </div>
            </div>
        </section>
    );
};

export default Login;