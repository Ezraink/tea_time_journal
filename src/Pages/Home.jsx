import React, { Component } from 'react';
import '../App.css'


class Home extends Component {
  render() {
    return (
      <>
      <section>
      <div className="container-fluid" id='homeSectionOne'>
        <div className="row">
          <div className="col-md-6 d-flex  flex-column justify-content-center text-center">
            <h2><strong>Welcome to the Tea Time Journal!</strong></h2>
            <p>Let’s talk about simple life hacks and self-care ideas to keep you sane, healthy and happy!</p>
            <p>Here you will find variety of topics related to our day to day life and step-by-step guide on how to deal with life issues to make it less complicated and more fulfilling</p>
          </div>
          <div className="col-md-6">
            <img src="https://teatimejournal.com/wp-content/uploads/2022/09/home_1-2048x1365.jpg" alt=''width={625}></img>
          </div>
        </div>
      </div>
      </section>
      <section>
        <div class="container-fluid">
          <div class="row justify-content-center align-items-center g-2 text-center ">
            <h1 className='my-5'>Blog Posts</h1>
            <div class="col-md-4">
              <div class="card border-0">
                <img src="https://teatimejournal.com/wp-content/uploads/elementor/thumbs/1-1-scaled-pup80fcaaqdlwdfz76touxszrgbdw142byh1rqst54.jpg" class="card-img-top" alt="..."></img>
                    <div class="card-body">
                      <p class="card-title h5">How to make your life better and more meaningful?</p>
                    </div>
               </div>
              </div>
           <div class=" col-md-4">
            <div class="card border-0">
                <img src="https://teatimejournal.com/wp-content/uploads/elementor/thumbs/2-scaled-pup85ym2jlye9peivkyljjipp5177v35rcrzielci0.jpg" class="card-img-top" alt="..."></img>
                    <div class="card-body">
                      <p class="card-title h5">66 things to let go off to be truly happy</p>
                    </div>
               </div>
            </div>
            <div class="col-md-4">
            <div class="card border-0">
              <img src="https://teatimejournal.com/wp-content/uploads/elementor/thumbs/3-scaled-pup86vif6t7fk22qjh6jgt7uhmj1p9prjvlzb38kg8.jpg" class="card-img-top" alt="..."></img>
                  <div class="card-body">
                      <p class="card-title h5">The art of letting go</p>
                    </div>
               </div>
            </div>
            <div class="col-md-4">
              <div class="card border-0">
                <img src="https://teatimejournal.com/wp-content/uploads/elementor/thumbs/4-pup89fmlskpj5ucxlkzz95z0pdx0nlvgkjjkc7fzig.jpg" class="card-img-top" alt="..."></img>
                    <div class="card-body">
                      <p class="card-title h5">How to reduce stress in life?</p>
                    </div>
               </div>
              </div>
            <div class="col-md-4">
            <div class="card border-0">
                <img src="https://teatimejournal.com/wp-content/uploads/elementor/thumbs/5-pup8bxv40o524epuyo05wj79qdk96jtowy66erq6x4.jpg" class="card-img-top" alt="..."></img>
                    <div class="card-body">
                      <p class="card-title h5">The act of kindness</p>
                    </div>
               </div>
            </div>
            <div class="col-md-4">
            <div class="card border-0">
                <img src="https://teatimejournal.com/wp-content/uploads/elementor/thumbs/6-scaled-pup8gm4800jdulxgo6qdsuqs2ciygddn82y3baspzc.jpg" class="card-img-top" alt="..."></img>
                    <div class="card-body">
                      <p class="card-title h5">Self love</p>
                    </div>
               </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div class="container-fluid">
          <div class="row justify-content-center align-items-center ">
            <div class="col-md-6">
              <h1 className='text-center'><strong>Subscribe</strong></h1>
              <h3 className='text-center'><strong>to our newsletter</strong></h3>
              <form action="../DB/connection.php" method="post">
                  <input type="text" class="form-control" placeholder="Email" aria-label="Username" aria-describedby="basic-addon1"></input>
                  <button type="submit" class="btn m-3 text-white"><strong>Submit</strong></button>
            </form>
            </div>
            <div class="col-md-6" id='sectionThree'>
              <img src="https://teatimejournal.com/wp-content/uploads/2022/09/3053910-1-1536x1024.jpg" alt=""/>
            </div>
          </div>
        </div>
      </section>
    </>
    );
  }
}
export default Home;