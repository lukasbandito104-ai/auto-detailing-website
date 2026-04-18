import React from 'react';

const Footer = () => {
    return (
        <footer>
            <div>
                <h3>Contact Us</h3>
                <p>Email: contact@autodetailing.com</p>
                <p>Phone: (123) 456-7890</p>
            </div>
            <div>
                <h3>Follow Us</h3>
                <ul>
                    <li><a href="https://facebook.com">Facebook</a></li>
                    <li><a href="https://twitter.com">Twitter</a></li>
                    <li><a href="https://instagram.com">Instagram</a></li>
                </ul>
            </div>
            <div>
                <h3>Links</h3>
                <ul>
                    <li><a href="/terms">Terms of Service</a></li>
                    <li><a href="/privacy">Privacy Policy</a></li>
                </ul>
            </div>
            <div>
                <p>&copy; {new Date().getFullYear()} Auto Detailing Website</p>
            </div>
        </footer>
    );
};

export default Footer;