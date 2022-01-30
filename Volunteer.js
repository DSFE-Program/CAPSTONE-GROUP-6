import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Volunteer = () => {
    return (
        <div className="container">
            <p className="vol-head"><b>Fill in your details to offer assistance and become a part of the good work we do</b>
            </p>
            <div className="row">
                <div className="col-6">
                    <form>
                        <div className="mb-5">
                            <label for="names" class="form-label">Name</label>
                            <input type="names" class="form-control" id="names" aria-describedby="names" placeholder="Jane Doe"></input>
                        </div>
                        <div className="mb-5">
                            <label for="emails" class="form-label">Email Address</label>
                            <input type="emails" class="form-control" id="emails" aria-describedby="emails" placeholder="Janedoe@gmail.com"></input>
                        </div>
                        <div className="mb-5">
                            <label for="locate" class="form-label">Location</label>
                            <input type="locate" class="form-control" id="locate" aria-describedby="locate" placeholder="Ikeja, Lagos"></input>

                        </div>
                        <div className="mb-5">
                            <label for="certs" class="form-label">Qualification/Certification</label>
                            <input type="certs" class="form-control" id="certs" aria-describedby="certs" placeholder="Bachelor,Masters,Doctorate..."></input>
                        </div>
                           <div className="row">
                                <p><b>Upload documents below</b></p>
                               <div className="identity col-6">
                               <p>Upload Valid means of identification </p>
                               <p><i class="fa fa-arrow-up"></i></p>
                            </div>
                            <div className="identity col-6">
                                <p>Upload Professional Certification</p>
                                <p><i class="fa fa-arrow-up"></i></p>
                            </div>
                         </div>
                            <div className="container mt-5">
                               <label for="comment" row="10" class="form-label;"><b>In two paragraphs, tell us why you would like to work with UNBOUND</b></label>
                               <input type="textarea" rows="10" cols="5" class="form-control" id="comment"></input>
                             </div>
                             <button type="Submit" class="but">Submit</button>

                    </form>
                </div>
             </div>
        </div>
        


    )
}


export default Volunteer;