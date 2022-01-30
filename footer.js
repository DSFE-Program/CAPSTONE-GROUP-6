import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Homepage = () => {
    return (
<div>
          <h4 className="changed"><b>Impact Numbers</b></h4>
   <div className="container-fluid">
       <div className="work row">
           <div className="impact col-4">
               {/* <div className="impact"> */}
              <p><b>30,000</b></p> 
              {/* </div> */}
           </div>
           <div className="statistics col-2">
               <p>Abuse survivors connected to therapists and counsellors</p>
           </div>
             
            <div className="impact col-4">
                {/* <div className="impact"> */}
                <p><b>6000</b></p> 
                {/* <p>Women and girls accessed quick help to prevent abusive situation</p>   */}
                {/* </div> */}
            </div>
            <div className="statistics col-2">
                <p>Women and girls accessed quick help to prevent abusive situation</p>
            </div>
        </div>
     <footer>      
     <div className="former">
       <div className="row">
           <div className="col-5">
               <div className="head">
                   <h5>Send us a message</h5>
                </div>
                <form>
                    <div className="container mb-3">
                        <label for="firstname" class="form-label">Name:</label>
                        <input type="firstname" class="form-control" id="firstname" aria-describedby="emailHelp" placeholder="Your name"></input>
                    </div>
                    <div className="container mb-3">
                        <label for="Email1" class="form-label">Email Address:</label>
                        <input type="email" class="form-control" id="Email1" aria-describedby="emailHelp" placeholder="abikedabiri@gmail.com"></input>
                    </div>
                    <div className="container mb-3">
                        <label for="comment" row="10" class="form-label;">Write Message:</label>
                        <input type="textarea" rows="10" cols="5" class="form-control" id="comment"></input>
                    </div>
                    <button type="Submit" class="btn">Send</button>
                </form>                        
           </div>
           <div className="col-4">
               <div className="subscribe">
                 <h5 >Subscribe to our Newsletter</h5>  
               </div>
               <div className="mail">
                <input type="text-area" class="form-control" id="tosub" placeholder="abikedabiri@gmail.com"></input>
               </div>
               <div className="about">
                   <h5>Contact us</h5>
                   <p><i class='fas fa-phone-alt'></i>..+2348047297374</p>
                   <p><i class="material-icons"></i>123 John Doe St. Lagos</p>
               </div>
            </div>
           <div className="col-3">
               <div className="joinus">
                   <button type="Submit" class="subs">Subscribe</button>
               </div>
               <div className="sub">
                    <a href="home">Home</a>
                    <a href="home">About us</a>
                    <a href="home">Contact us</a>
                    <a href="home">Blogs</a>
                    <a href="home">FAQs</a>
                    <a href="home">Volunteer</a>
                </div>
                <div className="socials">
                <i class='fab fa-facebook'></i>
                <i class="fa fa-instagram"></i>
                <i class="fa fa-twitter"></i>
                </div>
            
            </div>
       </div>
     </div>
       <div className="last">
           <p>COPYWRIGHT @ UNBOUND.COM</p>
       </div>
     </footer>
   </div> 
</div>   
    )
}

export default Homepage;