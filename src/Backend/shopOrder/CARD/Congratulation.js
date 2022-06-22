import React from 'react';

class Congratulation extends React.Component {


    render() {
        return (
            <p className="mb-0 mb-5 py-5">
                <h3 className="text-center font-weight-bold py-5 mb-3">Thanks for order!</h3>
                <h4 className="text-center font-weight-normal pb-5 mb-5">Our manager will contact you soon!</h4>
            </p>
        )
    }
}

export default Congratulation;