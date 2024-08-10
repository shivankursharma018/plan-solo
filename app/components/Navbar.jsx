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
            <div className='w-full fixed top-0 backdrop-blur mb-20 flex justify-evenly items-center text-lg'>
                <div className='cursor-pointer text-[#fce7a3]'>plan-solo</div>
                <div className='flex gap-10'>
                    <div className='cursor-pointer hover:underline transition-1000'>
                        <Link href={'./'}>&nbsp;home &nbsp;</Link>
                    </div>
                    <div className='cursor-pointer hover:underline transition-1000'>
                        <Link href={'./profile'}>&nbsp;profile&nbsp;</Link>
                    </div>
                    <div className='cursor-pointer hover:underline transition-1000'>
                            <Link href={'./about'}>&nbsp;about&nbsp;</Link>
                    </div>
                    {/* {!user ? null : (
                        <div className='cursor-pointer'>
                            <Link href={'./profile'}>profile</Link>
                        </div>
                    )} */}
                </div>

                {!user ? (
                    <div className='flex gap-10'>
                        <button onClick={handleSignIn} className='text-[#9D82F8] p-3'>get started -&gt;</button>
                    </div>
                ) : (
                    <div className='flex gap-10'>
                        <div className='text-[#9D82F8] p-3'>welcome {user.displayName}</div>
                        <button className='text-red-600 p-3' onClick={handleLogOut}>log out</button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default navbar;