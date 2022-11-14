import React from 'react'

function Contact() {
  return (
    <>
     <div className="container-fluid py-3" id='Contact'>
         <h1 className=' my-3 text-center display-5'>Get in Touch</h1>
        <div className="row bg-white px-5">
          <div class="col-6 pt-5">
          <form  action="../DB/connection.php" method="post">
          <div class="mb-3">
              <input type="text" class="form-control" id="exampleInputName1" placeholder='Name'/>
            </div>
            <div class="mb-3">
            <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder='Email Address'/>
          </div>
          <div class="mb-3">
            <textarea class="form-control" aria-label="With textarea" placeholder='Your Message'></textarea>
          </div>
            <button type="submit" class="btn text-white">Submit</button>
            </form>
          </div>
          <div class="col-6 ">
              <img src="https://teatimejournal.com/wp-content/uploads/2022/09/contact-1536x1225.jpg" alt="" />
          </div>
          </div>
        </div>
    </>
  )
}

export default Contact