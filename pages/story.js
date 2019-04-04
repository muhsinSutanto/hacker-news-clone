import Layout from '../components/Layout'
import CommentList from '../components/CommentList'
import fetch from 'isomorphic-fetch'
import Error from 'next/error'
import React, { Component } from 'react';

class Story extends Component {
   
    static async getInitialProps({req, res, query}) {
        let story
        try {
            const id = query.id
            const res = await fetch(`https://node-hnapi.herokuapp.com/item/${id}`)
            story = await res.json()

        } catch (error) {
            console.log(error)
            story = null
        }
        return{story}
    }

    render() {
        const {story} = this.props 
        if(!story) {
            return <Error />
        }
        return ( <Layout title={story.title}>
            <main>
                <h1 className='story-title'><a href={story.url}> {story.title}</a></h1>
                <div className='story-details' key={story.id} >
                    <strong>{story.points} points</strong>
                    <strong>{story.comments_count} comments</strong>
                    <strong>{story.time_ago}</strong>
                </div>
                {story.comments.length > 0 ? (<CommentList  key={story.id} comments={story.comments}/>) : (<div>no comment here</div>)}
                <style jsx>
                    {`
                        main{
                            padding: 1em;
                        }
                        .story-title{
                            font-size: 1.2rem;
                            margin: 0;
                            font-weight: 300;
                            padding-bottom:0.5em;
                        }
                        .story-title a{
                            color: #333;
                            text-decoration: none;
                        }
                        .story-title a:hover{
                            color: #333;
                            text-decoration: underline;
                        }
                        .story-details {
                            font-size: 0.8rem;
                            padding-bottom: 1em;
                            border-bottom: 1px solid rgba(0,0,0,0.1);
                            margin-bottom: 1em;
                        }
                        .story-details strong {
                            margin-right: 1em;
                        }
                        .story-details a{
                            color: #f60;
                        }
                        
                    `}
                </style>
            </main>
        </Layout> );
    }
}
 
export default Story;