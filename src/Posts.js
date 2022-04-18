import React, { useEffect, useState } from "react";
import './Posts.css';
import PostData from "./PostData";

function App(props) {

    const [postDatas, setpostDatas] = useState([])

    useEffect(() => {
        setpostDatas([
            {
                image: "post1.png",
                postType: "✍Article",
                heading: "What if famous brands had regular fonts? Meet RegulaBrands!",
                content: "I've worked in UX for the better part of a decade. From now on, I plan to rei…",
                writerName: "Sarthak Kamra",
                writerImage: "writer1.png",
                views: "1.4"
            }
            ,

            {
                image: "post2.png",
                postType: "🔬Education",
                heading: "Tax Benefits for Investment under National Pension Scheme launched by Government",
                content: "I've worked in UX for the better part of a decade. From now on, I plan to rei…",
                writerName: "Sarah West",
                writerImage: "writer2.png",
                views: "1.4"
            },
            {
                image: "post1.png",
                postType: "✍Article",
                heading: "What if famous brands had regular fonts? Meet RegulaBrands!",
                content: "I've worked in UX for the better part of a decade. From now on, I plan to rei…",
                writerName: "Sarthak Kamra",
                writerImage: "writer1.png",
                views: "1.4"
            },
            {
                image: "post2.png",
                postType: "🔬Education",
                heading: "Tax Benefits for Investment under National Pension Scheme launched by Government",
                content: "I've worked in UX for the better part of a decade. From now on, I plan to rei…",
                writerName: "Sarah West",
                writerImage: "writer2.png",
                views: "1.4"
            }


        ])
    }, [])

    return (
        <div className="post">
            <div className="post_navbar" >
                <div className="post_navbar_left" >
                    <button>All Posts(32)</button>
                    <button className="large" >Article</button>
                    <button className="large" >Event</button>
                    <button className="large" >Education</button>
                    <button className="large" >Job</button>
                </div>
                <div className="post_navbar_right" >
                    <div className="large dropdown">
                        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Write a Post
                        </button>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <a className="dropdown-item" href="/">1</a>
                            <a className="dropdown-item" href="/">2</a>
                            <a className="dropdown-item" href="/">3</a>
                        </div>
                    </div>
                    <button onClick={() => { props.popup() }} type="button" className="large join btn btn-primary"><svg width="22" height="13" viewBox="0 0 22 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7.33333 5.16671H4.58333V2.41671H2.75V5.16671H0V7.00004H2.75V9.75004H4.58333V7.00004H7.33333V5.16671ZM16.5 6.08337C18.0217 6.08337 19.2408 4.85504 19.2408 3.33337C19.2408 1.81171 18.0217 0.583374 16.5 0.583374C16.2067 0.583374 15.9225 0.629207 15.6658 0.711707C16.1883 1.45421 16.4908 2.35254 16.4908 3.33337C16.4908 4.31421 16.1792 5.20337 15.6658 5.95504C15.9225 6.03754 16.2067 6.08337 16.5 6.08337ZM11.9167 6.08337C13.4383 6.08337 14.6575 4.85504 14.6575 3.33337C14.6575 1.81171 13.4383 0.583374 11.9167 0.583374C10.395 0.583374 9.16667 1.81171 9.16667 3.33337C9.16667 4.85504 10.395 6.08337 11.9167 6.08337ZM17.985 8.06337C18.7458 8.73254 19.25 9.58504 19.25 10.6667V12.5H22V10.6667C22 9.25504 19.8275 8.38421 17.985 8.06337ZM11.9167 7.91671C10.0833 7.91671 6.41667 8.83337 6.41667 10.6667V12.5H17.4167V10.6667C17.4167 8.83337 13.75 7.91671 11.9167 7.91671Z" fill="white" />
                    </svg> Join Group</button>

                    <div className="small dropdown">
                        <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Filter out
                        </button>
                        <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                            <a className="dropdown-item" href="/">Article</a>
                            <a className="dropdown-item" href="/">Event</a>
                            <a className="dropdown-item" href="/">Education</a>
                            <a className="dropdown-item" href="/">Job</a>


                        </div>
                    </div>


                </div>


            </div>


            <div className="post_data">
                <div className="post_data_left" >

                    {postDatas.map((data, index) => {
                        return (
                            <PostData key={index} image={data.image}
                                postType={data.postType}
                                heading={data.heading}
                                content={data.content}
                                writerName={data.writerName}
                                writerImage={data.writerImage}
                                views={data.views} />
                        );


                    })
                    }

                </div>
                <div className="post_data_right" >

                </div>
            </div>
        </div>
    );
}

export default App;