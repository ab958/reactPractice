import * as React from 'react';

export default function BasicCard() {
    return (
        <>
        <h2 style={{"margin": "30px"}}>Post Data </h2>
            <div>
                <form method="post" action="/" id="form" className="validate">
                    <div className="form-field">
                        <label>name</label>
                        <input type="text" name="full-name" id="full-name" placeholder="Joe Bloggs" required />
                    </div>
                    <div className="form-field">
                        <label>age</label>
                        <input type="email" name="email-input" id="email-input" placeholder="66" required />
                    </div>
                    <div className="form-field">
                        <label>colour</label>
                        <input type="text" name="password-input" id="password-input" placeholder="blue" required />
                    </div>
                    <div className="form-field">
                        <label ></label>
                        <input type="submit" value="Post it" />
                    </div>
                </form>
            </div>
            <h2 style={{"margin": "30px"}}>Data From APi  </h2>
            <div className="card-category-1">
                <div className="basic-card basic-card-dark">
                    <div className="card-content">
                        <span className="card-title">Name is</span>
                        <p className="card-text">
                            Age is 
                        </p>
                        <p className="card-text">
                            Colour is
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}
