import React, { useState } from 'react';

const Accordion = () => {
    const [isActive, setIsActive] = useState({
        status: false,
        key: 1,
    });

    const handleToggle = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false, 
            });
        } else {
            setIsActive({
                status: true,
                key,
            });
        }
    };
    return (
        <>

            <ul className="accordion-box">
                {/* Block */}
                <li className={isActive.key == 1 ? "accordion block active-block" : "accordion block"} onClick={() => handleToggle(1)}>
                    <div className={isActive.key == 1 ? "acc-btn active" : "acc-btn"}>Our mission is to design, innovative <i className="arrow fa fa-arrow-right" /></div>
                    <div className={isActive.key == 1 ? "acc-content current" : "acc-content"}>
                        <div className="content">
                            <div className="text">Lorem ipsum dolor sit amet consectetur adipiscing elit cubilia eget, feugiat felis sociis ad augue senectus ligula.</div>
                        </div>
                    </div>
                </li>
                {/* Block */}
                <li className={isActive.key == 2 ? "accordion block active-block" : "accordion block"} onClick={() => handleToggle(2)}>
                    <div className={isActive.key == 2 ? "acc-btn active" : "acc-btn"}>Carpenter seeks to be a premier <i className="arrow fa fa-arrow-right" /></div>
                    <div className={isActive.key == 2 ? "acc-content current" : "acc-content"}>
                        <div className="content">
                            <div className="text">Lorem ipsum dolor sit amet consectetur adipiscing elit condimentum cubilia eget, feugiat felis sociis ad augue senectus ligula.</div>
                        </div>
                    </div>
                </li>
                {/* Block */}
                <li className={isActive.key == 3 ? "accordion block active-block" : "accordion block"} onClick={() => handleToggle(3)}>
                    <div className={isActive.key == 3 ? "acc-btn active" : "acc-btn"}>We will continue to build and nurture <i className="arrow fa fa-arrow-right" /></div>
                    <div className={isActive.key == 3 ? "acc-content current" : "acc-content"}>
                        <div className="content">
                            <div className="text">Lorem ipsum dolor sit amet consectetur adipiscing elit condimentum cubilia eget, feugiat felis sociis ad augue senectus ligula.</div>
                        </div>
                    </div>
                </li>

            </ul>
        </>
    );
};

export default Accordion;