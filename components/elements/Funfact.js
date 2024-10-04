import React from 'react';
import CounterUp from '../elements/CounterUp'

const Funfact = () => {

    const data = [
        {
            icon: "business-060-graph",        
            count: "4524",
            title: "Project Complete",
        },
        {
            icon: "business-035-helpline",        
            count: "1500",
            title: "HAPPY CLIENTS",
        },
        {
            icon: "business-020-hierarchy",        
            count: "2500",
            title: "AWWORD WINGING",
        },
        {
            icon: "business-048-coin",        
            count: "1000",
            title: "COMPANY TEAM",
        },
    ];

    return (
        <>

            {data.map((item, i) => (
                <div class="counter-block-four col-lg-3 col-md-6 col-sm-6 wow fadeInUp">
                    <div class="inner">
                        <i className={`icon flaticon-${item.icon}`} />
                        <div className="count-box">
                            <span className="count-text"><CounterUp count={item.count} time={1} /></span>{item.countsymbol}
                        </div>
                        <div className="counter-title">{item.title}</div>
                    </div>
                </div>
            ))}

        </>
    );
};

export default Funfact;