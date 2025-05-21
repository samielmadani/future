import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import myLogo from '../images/mylogo.png';

export function NavBar() {
    const [spin, setSpin] = useState(false);

    useEffect(() => {
        // Start the spinning animation after the component mounts
        setSpin(true);
        // Stop spinning after 2 seconds (adjust the duration as needed)
        const timer = setTimeout(() => {
            setSpin(false);
        }, 2000);
        return () => clearTimeout(timer); // Cleanup timer on unmount
    }, []);

    return (
        <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%', alignItems: 'center', zIndex: 9999, position: 'relative' }}>
            <Link href="/" className="flex items-center">
                <Image 
                    src={myLogo} // Replace with your logo path
                    alt="Logo"
                    width={48} // Set desired width
                    height={48} // Set desired height
                    className={`rounded-full ${spin ? 'spin' : ''}`} // Add spin class conditionally
                />
            </Link>
            <nav className="hidden md:block">
                <ul className="flex space-x-4 text-black">
                    {['Home', 'Contact', 'About', 'Projects'].map((item) => (
                        <li key={item}>
                            <Link href={item.toLowerCase() === 'home' ? '/' : `/${item.toLowerCase()}`} className="px-3 py-2 rounded hover:bg-stone-300 transition-colors">
                                <span>{item}</span>
                            </Link>
                        </li>
                    ))}
                </ul>
            </nav>
            <style jsx>{`
                @keyframes spin {
                    from {
                        transform: rotate(0deg);
                    }
                    to {
                        transform: rotate(360deg);
                    }
                }
                .spin {
                    animation: spin 2s linear forwards; // Adjust duration here
                }
            `}</style>
        </div>
    );
}
