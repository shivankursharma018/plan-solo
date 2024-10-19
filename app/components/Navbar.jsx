'use client'
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { UserAuth } from '../context/AuthContext';

const navbar = () => {
    const { user, googleSignIn, logout } = UserAuth();
    const [loading, setLoading] = useState(true);

    const handleSignIn = async () => {
        try {
            await googleSignIn();
        } catch (error) {
            console.log(error);
        }
    };

    const handleLogOut = async () => {
        try {
            await logout();
            setLoading(true);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        const checkAuthentication = async () => {
            await new Promise((resolve) => setTimeout(resolve, 500));
            setLoading(false);
        };
        checkAuthentication();
    }, [user]);

    return (
        <div>
            <div className='w-full fixed top-0 backdrop-blur mb-20 flex justify-evenly items-center text-xl'>
                <div className='cursor-pointer text-yellow-500'>
                    plan-solo
                    <div className='cursor-pointer text-blue-500 font-aurebeshPixel text-xs'>plan-solo</div>
                </div>
                <div className='flex gap-10'>
                    <div className='cursor-pointer'>
                        <Link href={'./'}>
                            &nbsp;home &nbsp;
                        </Link>
                    </div>
                    <div className='cursor-pointer'>
                        <Link href={'./profile'}>
                            &nbsp;profile&nbsp;
                        </Link>
                    </div>
                    <div className='cursor-pointer transition-1000'>

                            <Link href={'./about'}>
                                &nbsp;about&nbsp;
                            </Link>
                    </div>
                    {/* {!user ? null : (
                        <div className='cursor-pointer'>
                            <Link href={'./profile'}>profile</Link>
                        </div>
                    )} */}
                </div>

                {!user ? (
                    <div className='flex gap-10'>
                        <button onClick={handleSignIn} className='text-purple-500 p-3'>
                            get started -&gt;
                            <div className='font-aurebeshPixel text-xs'>getstarted</div>
                        </button>
                    </div>
                ) : (
                    <div className='flex gap-10'>
                        <div className='text-[#9D82F8] p-3'>
                            welcome {user.displayName}
                            <div className='font-aurebeshPixel text-xs'>welcome</div>
                        </div>

                        <button className='text-red-600 p-3' onClick={handleLogOut}>
                            log out
                            <div className='font-aurebeshPixel text-xs'>logout</div>
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default navbar;