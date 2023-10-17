
import React from 'react'

const BigBox = () => {
  return (
    <div className="big-box">
                
           <div className="box-long">
                    <div className='profile'>
                        <img src="./Images/ashiq.jpeg" alt=''></img>
                    </div>
                    <h2>Mohamed Ashiq</h2>
                    <h4>Fresher 2022</h4>
                    <div style={{ display: "flex" }}>
                        <div className="follow1">
                            <h4>Followers</h4>
                            <p>2000k</p>
                        </div>
                        <div className="follow2">
                            <h4>Followers</h4>
                            <p>2000k</p>
                        </div>
                    </div>
                    <h3>Active</h3>
              
                    <h4>$32,987</h4>
                    <h4>Active This Month</h4>
                </div>
            </div>
  )
}

export default BigBox