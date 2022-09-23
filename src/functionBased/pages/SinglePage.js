import React from 'react'
import { useParams } from "react-router-dom";

const SinglePage = () => {
  
  const aboutData = [
    {
      slug: "about-app",
      title: "About the App",
      description: 
      "This app allows you to add, delete, submit, and edit things. Simply double-click an item to edit it. When you're finished, hit the enter key to resubmit. Your data will be saved in the browser's local storage by this app. So, whether you reload, close, or reopen your app, you will still have access to your to-do items.",
    },
    {
      slug: "about-author",
      title: "About the Author",
      description: 
      "This app was developed by Davian Beroni, I've been coding for 8 years, beginning with mobile development but quickly discovering a love for web development.",
    },
  ];

  const { slug } = useParams();
  const aboutContent = aboutData.find(item => item.slug === slug);
  const {title, description} = aboutContent
  
  return (
    <div className="main__content">
      <h1>{title}</h1>
      <p>{description}</p>
    </div>
  )
}
export default SinglePage
