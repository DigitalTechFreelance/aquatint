import React from 'react';

function CustomerDetails() {
  return (
    <section>
        <div className="bs-section">
            <div className="sec-head">
                <h2 className="sec-title">CUSTOMER DETAILS</h2>
            </div>
            <div className="sec-cont">
                <form className="bs-form">
                    <div className="form-wrap">
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="name" />
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="email-id" />
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="contact no." />
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="vehicle" />
                        </div>
                        <div className="form-group">
                            <input type="text" className="form-control" placeholder="verify" />
                        </div>
                        <div className="form-group">
                            <input type="text" readOnly className="form-control typ-readonly" value="294040"  />
                        </div>
                        <div className="form-group typ-full">
                            <textarea rows="8" cols="50" className="form-control" placeholder="message"></textarea>
                        </div>
                    </div>
                    <div className="form-action">
                        <button type="button" className="btn btn-default"><span>submit</span></button>
                    </div>
                </form>
            </div>
        </div>
    </section>
  )
}

export default CustomerDetails