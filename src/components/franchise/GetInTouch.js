import React from 'react';

function GetInTouch({data}) {

  return (
    <section>
        <div className="bs-section">
            <div className="cm-container">
                <div className="wrapper-content">
                    <div className="sec-head">
                        <h2 className="sec-title">GET IN TOUCH WITH US</h2>
                    </div>
                    <div className="sec-cont">
                        <div className="sec-desc">
                            <p>{data.info}</p>
                        </div>
                        {data.getInTouchForm && 
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
                            </div>
                            <div className="form-action">
                                <button type="button" className="btn btn-default"><span>submit</span></button>
                            </div>
                        </form>}
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default GetInTouch