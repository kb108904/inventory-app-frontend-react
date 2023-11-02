import React, { useState, useEffect } from 'react';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from '../firebase'
import "./Body-Section.css";

import Inventory from "./Inventory";

function Body() {


  interface InventoryFormData {
    title:string,
    quantity: number,
    picture: File | undefined
  }

    const [formData, setFormData] = useState<InventoryFormData>({
        title: "",
        quantity: 0,
        picture: undefined,
      });

      const [loginData, setLoginStatus] = useState({
        isLoggedIn: false,
        userUID: "",
      })
    
      const handleInputChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };
    
      const handleFileChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        setFormData({
          ...formData,
          picture: file,
        });
      };
    
      const handleSubmit = (e:React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        // Handle form submission, e.g., sending data to the server
      };

       
    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
              // User is signed in, see docs for a list of available properties
              // https://firebase.google.com/docs/reference/js/firebase.User
              const uid = user.uid;
              // ...
              console.log("uid", uid)
              setLoginStatus({
                ...loginData,
                isLoggedIn: true,
                userUID: uid,
              })
            } else {
              // User is signed out
              // ...
              console.log("user is logged out")
              setLoginStatus({
                ...loginData,
                isLoggedIn: false,
                userUID: '',
              })
            }
          });
         
    }, [])


    if(loginData.isLoggedIn){
        return (
            <section className="body-section">
              <div className="FormInput">
                <form onSubmit={handleSubmit}>
                  <div>
                    <label>Title:</label>
                    <input
                      type="text"
                      name="title"
                      value={formData.title}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
        
                  <div>
                    <label>Quantity:</label>
                    <input
                      type="number"
                      min="0"
                      name="quantity"
                      value={formData.quantity}
                      onChange={handleInputChange}
                      required
                    />
                  </div>
        
                  <div>
                    <label>Picture:</label>
                    <input
                      type="file"
                      name="picture"
                      onChange={handleFileChange}
                      accept="image/*"
                      required
                    />
                  </div>
        
                  <div>
                    <button type="submit">Save</button>
                  </div>
                </form>
              </div>
              <Inventory title={formData.title} quantity={formData.quantity}></Inventory>
            </section>
          );
    } else {
        return (
            <section>
                <h1>Please Login</h1>
            </section>
        )
    }
  
}

export default Body;
